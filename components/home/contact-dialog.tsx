"use client";

import { useState, useId, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Loader2, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/i18n/language-context";
import { SITE } from "@/lib/site-config";

type ContactDialogProps = {
  trigger?: ReactNode;
};

type FormDataPayload = {
  name: string;
  email: string;
  message: string;
};

export function ContactDialog({ trigger }: ContactDialogProps) {
  const { language, t } = useLanguage();
  const isEn = language === "en";
  const c = t.home.contact;

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [lastPayload, setLastPayload] = useState<FormDataPayload | null>(null);

  const nameInputId = useId();
  const emailInputId = useId();
  const messageInputId = useId();
  const consentInputId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consentGiven || status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      consent: consentGiven,
      company: String(formData.get("company") || ""), // Honeypot
    };

    setLastPayload({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || (isEn ? "Failed to send message via server" : "Nie udało się wysłać wiadomości przez serwer")
        );
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Błąd formularza kontaktowego:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : isEn ? "An unexpected error occurred" : "Wystąpił nieoczekiwany błąd"
      );
    }
  }

  function handleReset() {
    setStatus("idle");
    setErrorMessage("");
    setConsentGiven(false);
    setLastPayload(null);
  }

  const privacyHref = isEn ? "/en/privacy-policy" : "/polityka-prywatnosci";

  const mailtoFallbackHref = lastPayload
    ? `mailto:${SITE.email}?subject=${encodeURIComponent(
        `Wiadomość z formularza: ${lastPayload.name}`
      )}&body=${encodeURIComponent(
        `Imię i nazwisko: ${lastPayload.name}\nE-mail: ${lastPayload.email}\n\nWiadomość:\n${lastPayload.message}`
      )}`
    : `mailto:${SITE.email}`;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open && status === "success") {
          handleReset();
        }
      }}
    >
      <DialogTrigger
        render={
          trigger ? (
            (trigger as React.ReactElement)
          ) : (
            <button
              type="button"
              className="group inline-flex h-14 w-fit items-center gap-3 border-b-2 border-slate-950 text-lg font-medium transition-colors hover:border-indigo-600 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 md:text-xl cursor-pointer"
            >
              <span>{SITE.email}</span>
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          )
        }
      />

      <DialogContent className="border-t-4 border-indigo-600 bg-white p-6 sm:p-8 text-slate-950 sm:max-w-lg">
        <DialogHeader className="gap-1.5 border-b border-slate-100 pb-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-600">
            {c.eyebrow} · Rafał Kamieniarz
          </p>
          <DialogTitle className="text-xl font-bold tracking-tight text-slate-950">
            {c.modalTitle}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {c.modalDescription}
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
            <div className="size-12 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center">
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <h3 className="text-lg font-semibold text-slate-950">
                {c.successTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {c.successMessage}
              </p>
            </div>
            <Button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleReset();
              }}
              className="mt-2 h-9 rounded-none bg-slate-950 px-6 text-xs font-medium text-white hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              {c.closeButton}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            {/* Honeypot — pole ukryte przed użytkownikami, wabiące boty spamujące */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {status === "error" && errorMessage && (
              <div className="flex flex-col gap-2 rounded-none border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                <p>{errorMessage}</p>
                {lastPayload && (
                  <a
                    href={mailtoFallbackHref}
                    className="inline-flex items-center gap-1.5 font-medium text-red-900 underline underline-offset-2 hover:text-indigo-600"
                  >
                    <Mail className="size-3.5" />
                    <span>
                      {isEn
                        ? "Open directly in your email client (mailto)"
                        : "Wyślij treść przez swój program pocztowy"}
                    </span>
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <Label htmlFor={nameInputId} className="text-xs font-medium text-slate-800">
                {c.nameLabel} <span className="text-indigo-600">*</span>
              </Label>
              <Input
                id={nameInputId}
                name="name"
                type="text"
                required
                autoComplete="name"
                defaultValue={lastPayload?.name || ""}
                placeholder={c.namePlaceholder}
                className="h-10 rounded-none border-slate-300 bg-white text-xs focus:border-indigo-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor={emailInputId} className="text-xs font-medium text-slate-800">
                {c.emailLabel} <span className="text-indigo-600">*</span>
              </Label>
              <Input
                id={emailInputId}
                name="email"
                type="email"
                required
                autoComplete="email"
                defaultValue={lastPayload?.email || ""}
                placeholder={c.emailPlaceholder}
                className="h-10 rounded-none border-slate-300 bg-white text-xs focus:border-indigo-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor={messageInputId} className="text-xs font-medium text-slate-800">
                {c.messageLabel} <span className="text-indigo-600">*</span>
              </Label>
              <textarea
                id={messageInputId}
                name="message"
                required
                rows={4}
                defaultValue={lastPayload?.message || ""}
                placeholder={c.messagePlaceholder}
                className="w-full resize-none border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-indigo-600 focus:outline-hidden"
              />
            </div>

            {/* Zgoda RODO */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-start gap-2.5">
                <input
                  id={consentInputId}
                  type="checkbox"
                  required
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mt-0.5 size-4 shrink-0 rounded-none border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                />
                <label
                  htmlFor={consentInputId}
                  className="text-[11px] leading-relaxed text-slate-600 cursor-pointer"
                >
                  {c.consentText}
                  <Link
                    href={privacyHref}
                    target="_blank"
                    className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
                  >
                    {c.privacyPolicyLink}
                  </Link>
                  . <span className="text-indigo-600">*</span>
                </label>
              </div>
              <p className="text-[10px] text-slate-400 pl-6.5">
                {c.adminNote}
              </p>
            </div>

            <Button
              type="submit"
              disabled={!consentGiven || status === "submitting"}
              className="mt-2 h-10 w-full rounded-none bg-slate-950 px-6 text-xs font-medium text-white hover:bg-indigo-600 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-3.5 mr-2 animate-spin" aria-hidden="true" />
                  {c.sendingButton}
                </>
              ) : (
                <>
                  <Send className="size-3.5 mr-2" aria-hidden="true" />
                  {c.submitButton}
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

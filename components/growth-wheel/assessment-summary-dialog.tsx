"use client";

import { useState, useRef, useId, useEffect } from "react";
import {
  Check,
  Copy,
  Download,
  Sparkles,
  TrendingUp,
  Award,
  RotateCcw,
  CheckCircle2,
  Loader2,
  Info,
  Target,
  Compass,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  LEVEL_NAMES,
  type Competency,
  type CompetencyId,
  type Rating,
} from "@/lib/growth-wheel-data";
import { LEVEL_NAMES_EN } from "@/lib/growth-wheel-data-en";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";
import { ACGW_LICENSE_TEXT } from "./wheel-license-info";
import {
  GROWTH_RECOMMENDATIONS_PL,
  GROWTH_RECOMMENDATIONS_EN,
  type DevelopmentGuidance,
} from "@/lib/growth-recommendations";
import {
  loadAuditPriorities,
  saveAuditPriorities,
  loadAuditCommitment,
  saveAuditCommitment,
  loadAuditPlanAccepted,
  saveAuditPlanAccepted,
} from "@/lib/growth-wheel-cookies";

type AssessmentSummaryDialogProps = {
  ratings: Record<CompetencyId, Rating>;
  average: number;
  competencies: Competency[];
};

export function AssessmentSummaryDialog({
  ratings,
  average,
  competencies,
}: AssessmentSummaryDialogProps) {
  const { language, t } = useLanguage();
  const isEn = language === "en";
  const levelNames = isEn ? LEVEL_NAMES_EN : LEVEL_NAMES;
  const m = t.growthWheel.summaryModal;
  const recommendationsMap = isEn
    ? GROWTH_RECOMMENDATIONS_EN
    : GROWTH_RECOMMENDATIONS_PL;

  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [selectedPriorities, setSelectedPriorities] = useState<CompetencyId[]>(
    () => {
      if (typeof window !== "undefined") {
        const savedPriorities = loadAuditPriorities();
        if (savedPriorities && savedPriorities.length > 0) return savedPriorities;
      }
      const sortedAsc = [...competencies].sort(
        (a, b) => ratings[a.id] - ratings[b.id]
      );
      return sortedAsc.slice(0, 2).map((c) => c.id);
    }
  );
  const [commitmentText, setCommitmentText] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCommitment = loadAuditCommitment();
      if (savedCommitment !== null) return savedCommitment;
    }
    return "";
  });
  const [isPlanAccepted, setIsPlanAccepted] = useState(() => {
    if (typeof window !== "undefined") {
      return loadAuditPlanAccepted();
    }
    return false;
  });

  useEffect(() => {
    const savedPriorities = loadAuditPriorities();
    if (savedPriorities && savedPriorities.length > 0) {
      setSelectedPriorities(savedPriorities);
    }
    const savedCommitment = loadAuditCommitment();
    if (savedCommitment !== null) {
      setCommitmentText(savedCommitment);
    }
    const savedAccepted = loadAuditPlanAccepted();
    if (savedAccepted) {
      setIsPlanAccepted(savedAccepted);
    }
  }, []);

  const commitmentInputId = useId();
  const pdfTemplateRef = useRef<HTMLDivElement>(null);

  // Sortowanie kompetencji
  const sortedDesc = [...competencies].sort(
    (a, b) => ratings[b.id] - ratings[a.id]
  );
  const strengths = sortedDesc.slice(0, 3);

  const sortedAsc = [...competencies].sort(
    (a, b) => ratings[a.id] - ratings[b.id]
  );
  const growthAreas = sortedAsc.slice(0, 3);

  function getTierInfo(avg: number) {
    if (avg >= 4.5) {
      return {
        label: m.tierExpert,
        desc: m.tierExpertDesc,
      };
    }
    if (avg >= 3.8) {
      return {
        label: m.tierProficient,
        desc: m.tierProficientDesc,
      };
    }
    if (avg >= 3.0) {
      return {
        label: m.tierPractitioner,
        desc: m.tierPractitionerDesc,
      };
    }
    if (avg >= 2.0) {
      return {
        label: m.tierNovice,
        desc: m.tierNoviceDesc,
      };
    }
    return {
      label: m.tierAwareness,
      desc: m.tierAwarenessDesc,
    };
  }

  const tier = getTierInfo(average);

  function togglePriority(id: CompetencyId) {
    let next: CompetencyId[];
    if (selectedPriorities.includes(id)) {
      next = selectedPriorities.filter((p) => p !== id);
    } else {
      if (selectedPriorities.length >= 3) {
        next = [...selectedPriorities.slice(1), id];
      } else {
        next = [...selectedPriorities, id];
      }
    }
    setSelectedPriorities(next);
    saveAuditPriorities(next);
  }

  function handleCopy() {
    const dateStr = new Date().toLocaleDateString(isEn ? "en-US" : "pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const reportLines = [
      `# ${m.eyebrow} — ${m.title}`,
      `${isEn ? "Date" : "Data"}: ${dateStr}`,
      `${m.overallScore}: ${average.toFixed(1)} / 5.0 (${tier.label})`,
      "",
      `## ${m.strengthsTitle}:`,
      ...strengths.map(
        (c) => `- ${c.name}: ${ratings[c.id]}/5 (${levelNames[ratings[c.id]]})`
      ),
      "",
      `## ${m.growthTitle}:`,
      ...growthAreas.map(
        (c) => `- ${c.name}: ${ratings[c.id]}/5 (${levelNames[ratings[c.id]]})`
      ),
      "",
      `## ${m.acceptanceTitle}:`,
      `${m.selectedPriorities}:`,
      ...selectedPriorities.map((id) => {
        const comp = competencies.find((c) => c.id === id);
        const guid = recommendationsMap[id];
        const currentRating = ratings[id];
        const nextRating = Math.min(currentRating + 1, 5) as Rating;
        return [
          `### 🎯 ${comp?.name ?? id} (${currentRating}/5 → ${m.targetLevelLabel}: ${nextRating}/5 - ${levelNames[nextRating]})`,
          `> ${guid.essence}`,
          `* ${isEn ? "Focus" : "Dźwignia rozwoju"}: ${guid.growthFocus}`,
          `* ${isEn ? "Next milestone" : "Kierunek skoku"}: ${guid.nextLevelMilestone}`,
          `* ${m.keyPracticesTitle}:`,
          ...guid.keyPractices.map((p) => `  - ${p}`),
          "",
        ].join("\n");
      }),
      "",
      commitmentText.trim()
        ? `${m.commitmentLabel}\n> ${commitmentText.trim()}`
        : "",
      "",
      `## ${m.allCompetenciesTitle}:`,
      ...competencies.map(
        (c) => `- ${c.name}: ${ratings[c.id]}/5 — ${levelNames[ratings[c.id]]}`
      ),
      "",
      `---`,
      `Licencja / Attribution:`,
      ACGW_LICENSE_TEXT,
      "",
      isEn
        ? "Generated via Rafał Kamieniarz — Engineering Manager & Agile Leader (https://rafalkamieniarz.com/en/agile-growth-wheel)"
        : "Wygenerowano na stronie: Rafał Kamieniarz — Engineering Manager & Agile Leader (https://rafalkamieniarz.com/metodyki-zwinne/agile-growth-wheel)",
    ].filter(Boolean);

    navigator.clipboard.writeText(reportLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  async function handleDownloadPdf() {
    if (!pdfTemplateRef.current || isGeneratingPdf) return;

    try {
      setIsGeneratingPdf(true);

      const [{ toPng }, { jsPDF }] = await Promise.all([
        import("html-to-image"),
        import("jspdf"),
      ]);

      const element = pdfTemplateRef.current;

      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve, reject) => {
        img.onload = () => resolve(true);
        img.onerror = reject;
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 8;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = (img.height * contentWidth) / img.width;

      if (contentHeight <= pageHeight - margin * 2) {
        pdf.addImage(dataUrl, "PNG", margin, margin, contentWidth, contentHeight);
      } else {
        const ratio = (pageHeight - margin * 2) / contentHeight;
        const scaledWidth = contentWidth * ratio;
        const scaledHeight = contentHeight * ratio;
        const offsetX = (pageWidth - scaledWidth) / 2;
        pdf.addImage(dataUrl, "PNG", offsetX, margin, scaledWidth, scaledHeight);
      }

      const fileName = isEn
        ? "Agile-Coaching-Growth-Wheel-Assessment.pdf"
        : "Agile-Coaching-Growth-Wheel-Samoocena.pdf";

      pdf.save(fileName);
    } catch (error) {
      console.error("Błąd podczas generowania pliku PDF:", error);
    } finally {
      setIsGeneratingPdf(false);
    }
  }

  const currentDateFormatted = new Date().toLocaleDateString(
    isEn ? "en-US" : "pl-PL",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Dialog>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col">
          <p className="text-sm font-semibold text-slate-950">
            {t.growthWheel.summaryCta.title}
          </p>
          <p className="text-xs text-slate-500">
            {t.growthWheel.summaryCta.desc}
          </p>
        </div>
        <DialogTrigger
          render={
            <Button className="h-10 shrink-0 rounded-none bg-slate-950 px-5 text-white hover:bg-indigo-600 transition-colors shadow-xs" />
          }
        >
          <Sparkles className="size-4" aria-hidden="true" />
          {t.growthWheel.summaryCta.button}
        </DialogTrigger>
      </div>

      <DialogContent className="max-h-[88vh] overflow-y-auto border-t-4 border-indigo-600 bg-white p-6 sm:p-8 text-slate-950 sm:max-w-2xl lg:max-w-3xl">
        <DialogHeader className="gap-2 border-b border-slate-100 pb-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
            {m.eyebrow}
          </p>
          <DialogTitle className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
            {m.title}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm leading-relaxed text-slate-600">
            {m.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-8 py-2">
          {/* Karta Średniej, Poziomu Dojrzałości i Miniatury koła */}
          <div className="grid gap-6 rounded-none border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[160px_1fr] sm:items-center">
            {/* Wynik liczbowy */}
            <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {m.overallScore}
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-indigo-600">
                  {average.toFixed(1)}
                </span>
                <span className="text-[11px] font-mono text-slate-400">/ 5.0</span>
              </div>
              <div className="mt-2 h-1.5 w-24 bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${(average / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Opis profilu */}
            <div className="flex flex-col justify-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  {m.maturityProfile}:
                </span>
                <span className="inline-flex items-center rounded-none bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800">
                  {tier.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tier.desc}
              </p>
            </div>
          </div>

          {/* Mocne strony & Obszary do rozwoju */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Mocne strony */}
            <div className="flex flex-col gap-3 rounded-none border border-emerald-200/80 bg-emerald-50/30 p-4">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-emerald-600" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-emerald-950">
                  {m.strengthsTitle}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {m.strengthsDesc}
              </p>
              <ul className="mt-1 flex flex-col gap-2">
                {strengths.map((comp) => {
                  const rating = ratings[comp.id];
                  return (
                    <li
                      key={comp.id}
                      className="flex items-center justify-between border-b border-emerald-100 pb-1.5 text-xs"
                    >
                      <span className="font-medium text-slate-800">
                        {comp.name}
                      </span>
                      <span className="font-mono font-semibold text-emerald-700">
                        {rating}/5 ({levelNames[rating]})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Obszary o największym potencjale */}
            <div className="flex flex-col gap-3 rounded-none border border-indigo-200/80 bg-indigo-50/30 p-4">
              <div className="flex items-center gap-2">
                <TrendingUp
                  className="size-4 text-indigo-600"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold text-indigo-950">
                  {m.growthTitle}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {m.growthDesc}
              </p>
              <ul className="mt-1 flex flex-col gap-2">
                {growthAreas.map((comp) => {
                  const rating = ratings[comp.id];
                  return (
                    <li
                      key={comp.id}
                      className="flex items-center justify-between border-b border-indigo-100 pb-1.5 text-xs"
                    >
                      <span className="font-medium text-slate-800">
                        {comp.name}
                      </span>
                      <span className="font-mono font-semibold text-indigo-700">
                        {rating}/5 ({levelNames[rating]})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Graficzny profil 9 kompetencji — czytelne słupki poziomów */}
          <div className="flex flex-col gap-3.5 border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <BarChart3 className="size-4 text-indigo-600" aria-hidden="true" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {m.allCompetenciesTitle} (9)
                </h3>
              </div>
              <span className="font-mono text-[11px] text-slate-500">
                {isEn ? "Scale 1–5" : "Skala 1–5"}
              </span>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {competencies.map((comp) => {
                const rating = ratings[comp.id] || 1;
                const isSelected = selectedPriorities.includes(comp.id);
                return (
                  <div
                    key={comp.id}
                    className={cn(
                      "flex flex-col gap-1.5 border p-2.5 text-xs transition-colors",
                      isSelected
                        ? "border-indigo-300 bg-indigo-50/50"
                        : "border-slate-200 bg-slate-50/60"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-slate-900 truncate">
                        {comp.name}
                      </span>
                      <span className="font-mono font-bold text-indigo-700 shrink-0">
                        {rating} / 5
                      </span>
                    </div>

                    {/* Segmentowy pasek 5 poziomów */}
                    <div className="grid grid-cols-5 gap-1 h-1.5 w-full" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <span
                          key={lvl}
                          className={cn(
                            "h-full",
                            lvl <= rating ? "bg-indigo-600" : "bg-slate-200"
                          )}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>{levelNames[rating]}</span>
                      {isSelected && (
                        <span className="font-semibold text-indigo-600 uppercase tracking-wider">
                          ✓ {isEn ? "Priority" : "Priorytet"}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PRZESTRZEŃ DO AKCEPTACJI I ZOBOWIĄZANIE ROZWOJOWE */}
          <section
            aria-labelledby="acceptance-heading"
            className="flex flex-col gap-5 border-l-4 border-indigo-600 bg-slate-50 p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-700 font-medium">
                  {m.acceptanceTitle}
                </span>
                <p
                  id="acceptance-heading"
                  className="text-xs sm:text-sm text-slate-700 leading-relaxed text-pretty"
                >
                  {m.acceptanceDesc}
                </p>
              </div>
              {isPlanAccepted && (
                <span className="inline-flex shrink-0 items-center gap-1.5 bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  {m.acceptedBadge}
                </span>
              )}
            </div>

            {/* Wybór priorytetów (przyciski) */}
            {!isPlanAccepted ? (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-slate-900">
                    {m.priorityHint}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {competencies.map((comp) => {
                      const isSelected = selectedPriorities.includes(comp.id);
                      return (
                        <button
                          key={comp.id}
                          type="button"
                          onClick={() => togglePriority(comp.id)}
                          className={cn(
                            "cursor-pointer px-3 py-1.5 text-xs font-medium transition-all",
                            isSelected
                              ? "bg-indigo-600 text-white shadow-xs"
                              : "border border-slate-300 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
                          )}
                        >
                          {isSelected && "✓ "}
                          {comp.name} ({ratings[comp.id]}/5)
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* OPISY WYBRANYCH ELEMENTÓW ROZWOJOWYCH W MODALU */}
                {selectedPriorities.length > 0 && (
                  <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-600 font-semibold">
                      {m.priorityDetailsTitle}:
                    </span>
                    <div className="flex flex-col gap-3">
                      {selectedPriorities.map((id) => {
                        const comp = competencies.find((c) => c.id === id);
                        const guid = recommendationsMap[id];
                        const currentRating = ratings[id];
                        const nextRating = Math.min(currentRating + 1, 5) as Rating;

                        return (
                          <div
                            key={`detail-${id}`}
                            className="flex flex-col gap-2 rounded-none border border-indigo-200 bg-white p-3.5 text-xs shadow-xs"
                          >
                            <div className="flex items-center justify-between border-b border-indigo-100 pb-1.5">
                              <span className="font-semibold text-indigo-950 flex items-center gap-1.5">
                                <Target className="size-3.5 text-indigo-600" />
                                {comp?.name}
                              </span>
                              <span className="font-mono text-[11px] text-slate-600">
                                {currentRating}/5 →{" "}
                                <strong className="text-indigo-700">
                                  {m.targetLevelLabel}: {nextRating}/5 ({levelNames[nextRating]})
                                </strong>
                              </span>
                            </div>

                            <p className="text-slate-700 leading-relaxed">
                              {guid.essence}
                            </p>

                            <div className="flex items-start gap-1.5 text-slate-600 bg-indigo-50/50 p-2 border-l-2 border-indigo-500 text-[11px]">
                              <Compass className="size-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-slate-900">
                                  {isEn ? "Growth focus" : "Dźwignia rozwoju"}:
                                </strong>{" "}
                                {guid.growthFocus}
                              </span>
                            </div>

                            <div className="mt-1 flex flex-col gap-1">
                              <span className="font-mono text-[10px] uppercase tracking-wide text-slate-500 font-semibold">
                                {m.keyPracticesTitle}:
                              </span>
                              <ul className="list-disc pl-4 text-[11px] text-slate-600 space-y-0.5">
                                {guid.keyPractices.map((practice, pIdx) => (
                                  <li key={pIdx}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={commitmentInputId}
                    className="text-xs font-medium text-slate-900"
                  >
                    {m.commitmentLabel}
                  </label>
                  <textarea
                    id={commitmentInputId}
                    rows={2}
                    value={commitmentText}
                    onChange={(e) => {
                      setCommitmentText(e.target.value);
                      saveAuditCommitment(e.target.value);
                    }}
                    placeholder={m.commitmentPlaceholder}
                    className="w-full resize-none border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-indigo-600 focus:outline-hidden"
                  />
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setIsPlanAccepted(true);
                    saveAuditPlanAccepted(true);
                  }}
                  disabled={selectedPriorities.length === 0}
                  className="h-10 w-full sm:w-auto self-start rounded-none bg-slate-950 px-6 text-white hover:bg-indigo-600 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Check className="size-4 mr-1.5" aria-hidden="true" />
                  {m.acceptButton}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 rounded-none border border-emerald-200 bg-emerald-50/50 p-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="size-5 shrink-0 text-emerald-600 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1.5 text-xs text-slate-800">
                    <p className="font-semibold text-emerald-950">
                      {m.acceptedMessage}
                    </p>
                    {commitmentText.trim() && (
                      <p className="mt-1 italic text-slate-700 bg-white/80 p-2.5 border-l-2 border-emerald-400">
                        &ldquo;{commitmentText.trim()}&rdquo;
                      </p>
                    )}
                  </div>
                </div>

                {/* Wyświetlenie opisów w stanie zaakceptowanym */}
                <div className="flex flex-col gap-2.5 pt-2">
                  {selectedPriorities.map((id) => {
                    const comp = competencies.find((c) => c.id === id);
                    const guid = recommendationsMap[id];
                    const currentRating = ratings[id];
                    const nextRating = Math.min(currentRating + 1, 5) as Rating;

                    return (
                      <div
                        key={`accepted-${id}`}
                        className="bg-white border border-emerald-200 p-3 text-xs flex flex-col gap-1.5 shadow-xs"
                      >
                        <div className="flex justify-between items-center font-medium border-b border-emerald-100 pb-1 text-emerald-950">
                          <span className="flex items-center gap-1.5">
                            🎯 {comp?.name}
                          </span>
                          <span className="font-mono text-[11px] text-emerald-800">
                            {currentRating}/5 → Cel: {nextRating}/5 ({levelNames[nextRating]})
                          </span>
                        </div>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {guid.essence}
                        </p>
                        <div className="bg-emerald-50/50 p-1.5 text-[11px] text-emerald-900 border-l-2 border-emerald-400">
                          <strong>Kierunek:</strong> {guid.nextLevelMilestone}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsPlanAccepted(false);
                    saveAuditPlanAccepted(false);
                  }}
                  className="self-start text-[11px] font-medium text-indigo-700 hover:underline cursor-pointer flex items-center gap-1 mt-1"
                >
                  <RotateCcw className="size-3" aria-hidden="true" />
                  {m.editPlan}
                </button>
              </div>
            )}
          </section>

          {/* LICENCJA CREATIVE COMMONS */}
          <div className="flex items-start gap-2.5 border-t border-slate-100 pt-4 text-slate-500">
            <Info className="size-4 shrink-0 text-slate-400 mt-0.5" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                {m.licenseTitle}
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                {ACGW_LICENSE_TEXT}
              </p>
            </div>
          </div>

          {/* PRZYCISKI AKCJI (POBIERANIE PDF & KOPIOWANIE) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="h-9 rounded-none bg-indigo-600 px-4 text-xs font-medium text-white hover:bg-indigo-700 transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="size-3.5 mr-1.5 animate-spin" aria-hidden="true" />
                    {m.downloadingPdf}
                  </>
                ) : (
                  <>
                    <Download className="size-3.5 mr-1.5" aria-hidden="true" />
                    {m.downloadPdfButton}
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleCopy}
                className="h-9 rounded-none border-slate-300 bg-white px-4 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 mr-1.5" aria-hidden="true" />
                    {m.copiedButton}
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 mr-1.5" aria-hidden="true" />
                    {m.copyButton}
                  </>
                )}
              </Button>
            </div>

            <p className="font-mono text-[11px] text-slate-400 text-center sm:text-right">
              rafalkamieniarz.com
            </p>
          </div>
        </div>

        {/* 
          UKRYTY SZABLON RAPORTU PDF PRZYGOTOWANY DO EKSPORTU (A4 840px)
          Zawiera duże koło audytu, szczegółowe opisy wybranych elementów rozwoju,
          rekomendacje praktyk i pełną notę licencyjną CC BY-SA 4.0
        */}
        <div className="fixed -left-[9999px] top-0 pointer-events-none z-[-100]" aria-hidden="true">
          <div
            ref={pdfTemplateRef}
            style={{ width: "840px" }}
            className="flex flex-col justify-between bg-white p-10 text-slate-900 font-sans"
          >
            <div className="flex flex-col gap-6">
              {/* Header PDF */}
              <div className="flex items-start justify-between border-b-2 border-indigo-600 pb-5">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-indigo-700 font-semibold">
                    Rafał Kamieniarz · Agile Leader & Engineering Manager
                  </p>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-950 mt-1">
                    Agile Coaching Growth Wheel
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isEn
                      ? "Competency Self-Assessment & Action Plan"
                      : "Samoocena kompetencji i Plan Rozwoju"}
                  </p>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <span className="inline-block bg-slate-900 px-3 py-1 font-mono text-xs text-white">
                    {currentDateFormatted}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    rafalkamieniarz.com
                  </span>
                </div>
              </div>

              {/* Sekcja: Wynik ogólny & Profil Dojrzałości */}
              <div className="grid grid-cols-[160px_1fr] gap-6 items-center border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col items-center justify-center border-r border-slate-200 pr-5 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {m.overallScore}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-mono text-4xl font-bold text-indigo-600">
                      {average.toFixed(1)}
                    </span>
                    <span className="text-slate-400 font-mono text-sm">/ 5.0</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      {m.maturityProfile}:
                    </span>
                    <span className="inline-flex items-center bg-indigo-100 text-indigo-900 px-2.5 py-0.5 text-xs font-bold">
                      {tier.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>

              {/* WYKRES MATRYCY PROFILU KOMPETENCJI NA PDF (9 OBSZARÓW) */}
              <div className="border border-slate-200 bg-white p-5 shadow-xs flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
                    <BarChart3 className="size-4 text-indigo-600" />
                    {isEn ? "Competency Profile Matrix (9 Areas)" : "Matryca dojrzałości profilu (9 kompetencji)"}
                  </h2>
                  <span className="font-mono text-[11px] text-indigo-600 font-medium">
                    Skala 1–5 · Self-Mastery Core
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {competencies.map((comp) => {
                    const rating = ratings[comp.id] || 1;
                    const isSelected = selectedPriorities.includes(comp.id);
                    return (
                      <div
                        key={`pdf-mat-${comp.id}`}
                        className={`flex flex-col gap-1.5 border p-2.5 text-xs ${
                          isSelected
                            ? "border-indigo-300 bg-indigo-50/40"
                            : "border-slate-200 bg-slate-50/60"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-slate-900 truncate">
                            {comp.name}
                          </span>
                          <span className="font-mono font-bold text-indigo-700 shrink-0">
                            {rating} / 5
                          </span>
                        </div>

                        {/* Segmentowy pasek 5 poziomów */}
                        <div className="grid grid-cols-5 gap-1 h-2 w-full" aria-hidden="true">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <span
                              key={lvl}
                              className={`h-full ${
                                lvl <= rating ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>{levelNames[rating]}</span>
                          {isSelected && (
                            <span className="font-semibold text-indigo-700 uppercase tracking-wider">
                              ✓ {isEn ? "Priority" : "Priorytet"}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sekcja: Mocne strony i Obszary rozwoju */}
              <div className="grid grid-cols-2 gap-5">
                <div className="border border-emerald-200 bg-emerald-50/40 p-4">
                  <h2 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="size-4 text-emerald-600" />
                    {m.strengthsTitle}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {strengths.map((comp) => (
                      <li
                        key={`pdf-s-${comp.id}`}
                        className="flex items-center justify-between border-b border-emerald-100 pb-1 text-xs"
                      >
                        <span className="font-medium text-slate-800">{comp.name}</span>
                        <span className="font-mono font-semibold text-emerald-700">
                          {ratings[comp.id]}/5 ({levelNames[ratings[comp.id]]})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-indigo-200 bg-indigo-50/40 p-4">
                  <h2 className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp className="size-4 text-indigo-600" />
                    {m.growthTitle}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {growthAreas.map((comp) => (
                      <li
                        key={`pdf-g-${comp.id}`}
                        className="flex items-center justify-between border-b border-indigo-100 pb-1 text-xs"
                      >
                        <span className="font-medium text-slate-800">{comp.name}</span>
                        <span className="font-mono font-semibold text-indigo-700">
                          {ratings[comp.id]}/5 ({levelNames[ratings[comp.id]]})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 
                SEKCJA: ZAAKCEPTOWANY PLAN ROZWOJU Z PEŁNYMI OPISAMI WYBRANYCH ELEMENTÓW
              */}
              <div className="border-l-4 border-indigo-600 bg-slate-50 p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      {m.acceptanceTitle}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {m.priorityDetailsTitle}
                    </p>
                  </div>
                  <span className="bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-1">
                    {isPlanAccepted ? m.acceptedBadge : isEn ? "Target Focus" : "Priorytety rozwoju"}
                  </span>
                </div>

                {/* Karty opisowe wybranych priorytetów na PDF */}
                <div className="flex flex-col gap-3.5">
                  {selectedPriorities.map((id) => {
                    const comp = competencies.find((c) => c.id === id);
                    const guid = recommendationsMap[id];
                    const currentRating = ratings[id];
                    const nextRating = Math.min(currentRating + 1, 5) as Rating;

                    return (
                      <div
                        key={`pdf-detail-${id}`}
                        className="border border-slate-200 bg-white p-4 text-xs flex flex-col gap-2 shadow-xs"
                      >
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <span className="font-bold text-slate-950 text-sm flex items-center gap-1.5">
                            🎯 {comp?.name}
                          </span>
                          <span className="font-mono font-semibold text-indigo-700 text-xs">
                            {currentRating}/5 → {m.targetLevelLabel}: {nextRating}/5 ({levelNames[nextRating]})
                          </span>
                        </div>

                        <p className="text-slate-700 leading-relaxed font-normal">
                          {guid.essence}
                        </p>

                        <div className="bg-indigo-50/60 p-2.5 border-l-2 border-indigo-500 text-slate-800 text-[11px] leading-relaxed">
                          <p>
                            <strong className="text-indigo-950">
                              {isEn ? "Growth Leverage" : "Dźwignia rozwoju"}:
                            </strong>{" "}
                            {guid.growthFocus}
                          </p>
                          <p className="mt-1">
                            <strong className="text-indigo-950">
                              {isEn ? "Next Milestone" : "Kolejny krok"}:
                            </strong>{" "}
                            {guid.nextLevelMilestone}
                          </p>
                        </div>

                        <div className="mt-1">
                          <p className="font-mono text-[10px] uppercase tracking-wide text-slate-500 font-semibold mb-1">
                            {m.keyPracticesTitle}:
                          </p>
                          <ul className="list-disc pl-4 text-[11px] text-slate-700 space-y-0.5">
                            {guid.keyPractices.map((practice, pIdx) => (
                              <li key={pIdx}>{practice}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Notatka zobowiązania */}
                {commitmentText.trim() && (
                  <div className="border-t border-slate-200 pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      {m.commitmentLabel}
                    </span>
                    <p className="mt-1 text-xs italic text-slate-800 bg-white p-3 border-l-2 border-indigo-400">
                      &ldquo;{commitmentText.trim()}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Tabela wszystkich 9 kompetencji */}
              <div className="border border-slate-200">
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                  <span>{m.allCompetenciesTitle}</span>
                  <span>{isEn ? "Level & Rating" : "Poziom i Ocena"}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-100 text-xs">
                  <div className="divide-y divide-slate-100">
                    {competencies.slice(0, 5).map((comp) => (
                      <div
                        key={`pdf-all-${comp.id}`}
                        className="flex justify-between items-center px-4 py-1.5"
                      >
                        <span className="text-slate-800">{comp.name}</span>
                        <span className="font-mono font-medium text-slate-900">
                          {ratings[comp.id]}/5 ({levelNames[ratings[comp.id]]})
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-slate-100">
                    {competencies.slice(5).map((comp) => (
                      <div
                        key={`pdf-all-${comp.id}`}
                        className="flex justify-between items-center px-4 py-1.5"
                      >
                        <span className="text-slate-800">{comp.name}</span>
                        <span className="font-mono font-medium text-slate-900">
                          {ratings[comp.id]}/5 ({levelNames[ratings[comp.id]]})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer PDF z licencją i linkiem */}
            <div className="border-t border-slate-200 pt-4 mt-6 text-[10px] text-slate-500 leading-relaxed">
              <p className="font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {m.licenseTitle}
              </p>
              <p className="text-slate-500">
                {ACGW_LICENSE_TEXT}
              </p>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-100 text-slate-400 font-mono text-[9px]">
                <span>Rafał Kamieniarz · https://rafalkamieniarz.com</span>
                <span>Creative Commons Attribution-ShareAlike 4.0 International</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

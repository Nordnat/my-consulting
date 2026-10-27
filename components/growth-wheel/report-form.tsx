'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { COMPETENCIES, type CompetencyId, type Rating } from '@/lib/growth-wheel-data'

export type ReportPayload = {
  email: string
  generatedAt: string
  averageScore: number
  ratings: { id: CompetencyId; name: string; score: Rating }[]
  consent: { newsletter: boolean; acceptedAt: string | null }
}

export function buildReportPayload(
  email: string,
  ratings: Record<CompetencyId, Rating>,
  newsletterConsent = false,
): ReportPayload {
  const generatedAt = new Date().toISOString()
  const entries = COMPETENCIES.map((competency) => ({
    id: competency.id,
    name: competency.name,
    score: ratings[competency.id],
  }))
  const average = entries.reduce((sum, entry) => sum + entry.score, 0) / entries.length
  return {
    email,
    generatedAt,
    averageScore: Math.round(average * 100) / 100,
    ratings: entries,
    consent: { newsletter: newsletterConsent, acceptedAt: newsletterConsent ? generatedAt : null },
  }
}

type ReportFormProps = {
  ratings: Record<CompetencyId, Rating>
  onSubmitReport?: (payload: ReportPayload) => Promise<void> | void
}

export function ReportForm({ ratings, onSubmitReport }: ReportFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [consentGiven, setConsentGiven] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!consentGiven) return
    const email = String(new FormData(event.currentTarget).get('email') ?? '').trim()
    setStatus('sending')
    await onSubmitReport?.(buildReportPayload(email, ratings, consentGiven))
    setStatus('sent')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="report-email" className="text-xs font-medium text-slate-700">
          Adres e-mail
        </Label>
        <Input
          id="report-email"
          type="email"
          name="email"
          required
          autoFocus
          autoComplete="email"
          placeholder="imie.nazwisko@firma.pl"
          onChange={() => status === 'sent' && setStatus('idle')}
          className="h-10 rounded-none border-slate-300"
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="report-consent"
          type="checkbox"
          name="newsletterConsent"
          checked={consentGiven}
          onChange={(event) => setConsentGiven(event.target.checked)}
          aria-describedby="report-legal-note"
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-indigo-600"
        />
        <label htmlFor="report-consent" className="min-w-0 text-pretty text-xs leading-relaxed text-slate-500">
          Wyrażam zgodę na przesyłanie informacji handlowych i materiałów edukacyjnych (newsletter). Szczegóły w{' '}
          <Link
            href="/polityka-prywatnosci"
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Polityce Prywatności
          </Link>
          .
        </label>
      </div>
      <p id="report-legal-note" className="text-pretty text-[10px] leading-relaxed text-slate-400">
        Administratorem Twoich danych jest Rafał Kamieniarz. Kliknięcie przycisku oznacza akceptację{' '}
        <Link href="/regulamin-audytu" className="underline underline-offset-2 hover:text-slate-600">
          Regulaminu audytu
        </Link>
        .
      </p>
      <Button
          type="submit"
          disabled={!consentGiven || status === 'sending'}
          className="h-10 w-full rounded-none bg-slate-950 px-5 text-white hover:bg-indigo-600 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:opacity-100 disabled:hover:bg-slate-300"
        >
          {status === 'sent' ? (
            <>
              Wysłano
              <Check className="size-4" aria-hidden="true" />
            </>
          ) : (
            <>
              {status === 'sending' ? 'Generowanie…' : 'Wygeneruj raport'}
              <ArrowRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      <p className="sr-only" aria-live="polite">
        {status === 'sent' ? 'Raport został zlecony do wygenerowania.' : ''}
      </p>
    </form>
  )
}

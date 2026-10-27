'use client'

import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { COMPETENCIES, type CompetencyId, type Rating } from '@/lib/growth-wheel-data'
import { ReportForm, type ReportPayload } from './report-form'

type ReportCtaProps = {
  ratings: Record<CompetencyId, Rating>
  average: number
  onSubmitReport?: (payload: ReportPayload) => Promise<void> | void
}

export function ReportCta({ ratings, average, onSubmitReport }: ReportCtaProps) {
  return (
    <Dialog>
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <p className="text-sm font-semibold text-slate-950">Pełny raport z audytu</p>
          <p className="truncate text-xs text-slate-500">
            {COMPETENCIES.length} obszarów, rekomendacje rozwojowe, wysyłka e-mail
          </p>
        </div>
        <DialogTrigger
          render={
            <Button className="h-10 shrink-0 rounded-none bg-slate-950 px-5 text-white hover:bg-indigo-600" />
          }
        >
          <FileText className="size-4" aria-hidden="true" />
          Wygeneruj raport
        </DialogTrigger>
      </div>

      <DialogContent className="gap-6 border-t-4 border-indigo-600 bg-white p-6 text-slate-950 sm:max-w-md">
        <DialogHeader className="gap-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
            Średnia z audytu: <span className="font-semibold text-indigo-600">{average.toFixed(1)}</span>
          </p>
          <DialogTitle className="text-lg font-semibold tracking-tight text-slate-950">
            Wygeneruj pełny raport
          </DialogTitle>
          <DialogDescription className="text-pretty text-sm leading-relaxed text-slate-500">
            Podsumowanie {COMPETENCIES.length} obszarów z rekomendacjami rozwojowymi trafi na Twoją skrzynkę.
          </DialogDescription>
        </DialogHeader>
        <ReportForm ratings={ratings} onSubmitReport={onSubmitReport} />
      </DialogContent>
    </Dialog>
  )
}

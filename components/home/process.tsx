'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

export function Process() {
  const { language, t } = useLanguage()
  const stageLabel = language === 'en' ? 'Stage' : 'Etap'

  return (
    <section id="wspolpraca" aria-labelledby="process-heading" className="scroll-mt-14 border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:py-24">
        <SectionHeading
          id="process-heading"
          eyebrow={t.home.process.eyebrow}
          title={t.home.process.title}
        />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.home.process.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t-2 border-slate-950 pt-5">
              <span className="font-mono text-xs text-indigo-600">
                {stageLabel} {index + 1}
              </span>
              <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 text-pretty">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

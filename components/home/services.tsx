'use client'

import { GitBranch, MessagesSquare, Sparkles, Workflow } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

const ICONS = [Workflow, GitBranch, MessagesSquare, Sparkles]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="ekspertyza" aria-labelledby="services-heading" className="scroll-mt-14 border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:py-24">
        <SectionHeading
          id="services-heading"
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
        />
        <ul className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.services.items.map(({ title, description, note }, idx) => {
            const Icon = ICONS[idx % ICONS.length]
            return (
              <li key={title} className="flex flex-col gap-4 bg-white p-6 md:p-8">
                <Icon className="size-5 text-indigo-600" aria-hidden="true" />
                <h3 className="text-base font-semibold tracking-tight text-balance">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 text-pretty">{description}</p>
                {note ? (
                  <p className="mt-auto w-fit border border-indigo-200 bg-indigo-50 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-indigo-700">
                    {note}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

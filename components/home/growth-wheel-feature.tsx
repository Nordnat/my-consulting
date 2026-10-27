'use client'

import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

export function GrowthWheelFeature() {
  const { language, t } = useLanguage()
  const auditHref = language === 'en' ? '/en/agile-growth-wheel' : '/metodyki-zwinne/agile-growth-wheel'

  return (
    <section id="narzedzia" aria-labelledby="tool-heading" className="scroll-mt-14 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-end lg:py-24">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="tool-heading"
            eyebrow={t.home.tool.eyebrow}
            title={t.home.tool.title}
            inverted
          />
          <p className="max-w-xl text-base leading-relaxed text-slate-300 text-pretty">
            {t.home.tool.description}
          </p>
          <Link
            href={auditHref}
            className="group inline-flex h-12 w-fit items-center gap-2 bg-indigo-600 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            {t.home.tool.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <ul className="flex flex-col border-t border-white/15">
          {t.home.tool.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 border-b border-white/15 py-4 text-sm leading-relaxed">
              <Check className="mt-0.5 size-4 shrink-0 text-indigo-300" aria-hidden="true" />
              <span className="text-pretty">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

'use client'

import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/site-config'
import { useLanguage } from '@/lib/i18n/language-context'
import { ContactDialog } from './contact-dialog'

export function Contact() {
  const { language, t } = useLanguage()

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="scroll-mt-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-600">
            {t.home.contact.eyebrow}
          </p>
          <h2 id="contact-heading" className="text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
            {t.home.contact.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 text-pretty">
            {t.home.contact.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ContactDialog />
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">{language === 'en' ? '(opens in a new tab)' : '(otwiera się w nowej karcie)'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/language-context'
import { HeroWheel } from './hero-wheel'

export function Hero() {
  const { language, t } = useLanguage()
  const auditHref = language === 'en' ? '/en/agile-growth-wheel' : '/metodyki-zwinne/agile-growth-wheel'

  return (
    <section aria-labelledby="hero-heading" className="border-b border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-24">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-600">
            {t.home.hero.badge}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl text-slate-950"
          >
            {t.home.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 text-pretty md:text-lg">
            {t.home.hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={auditHref}
              className="group inline-flex h-12 items-center justify-center gap-2 bg-slate-950 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t.home.hero.ctaAudit}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center border border-slate-300 px-6 text-sm font-medium text-slate-950 transition-colors hover:border-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t.home.hero.ctaContact}
            </a>
          </div>
        </div>

        <figure className="flex flex-col gap-4">
          <div className="mx-auto aspect-square w-full max-w-[560px]">
            <HeroWheel />
          </div>
          <figcaption className="flex items-center justify-between gap-4 border-t border-slate-200 pt-3 font-mono text-[11px] uppercase tracking-widest text-slate-500">
            <span>{t.home.hero.wheelCaptionTitle}</span>
            <span className="text-pretty text-right">{t.home.hero.wheelCaptionSubtitle}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

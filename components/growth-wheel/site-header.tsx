'use client';

import Link from 'next/link'
import { SITE } from '@/lib/site-config'
import { useLanguage } from '@/lib/i18n/language-context'
import type { Language } from '@/lib/i18n/translations'
import { SiteNav } from './site-nav'

const LANGUAGES = [
  { code: 'pl' as Language, label: 'PL', name: 'Polski' },
  { code: 'en' as Language, label: 'EN', name: 'English' },
] as const

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()
  const homeHref = language === 'en' ? '/en' : '/'

  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 md:px-10">
      <Link href={homeHref} className="flex items-center gap-3 text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600">
        <span aria-hidden="true" className="grid size-6 place-items-center bg-indigo-600">
          <span className="size-2 bg-white" />
        </span>
        <span className="hidden flex-col leading-none md:flex">
          <span className="text-sm font-semibold tracking-tight">{SITE.brand}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{t.nav.tagline}</span>
        </span>
        <span className="sr-only md:hidden">{SITE.brand}, {t.nav.start}</span>
      </Link>

      <div className="mr-auto ml-4 border-l border-slate-200 pl-3 md:ml-8 md:pl-6">
        <SiteNav />
      </div>

      <div role="group" aria-label={language === 'en' ? 'Language selection' : 'Wybór języka'} className="flex items-center border border-slate-200">
        {LANGUAGES.map((option) => {
          const isActive = option.code === language
          return (
            <button
              key={option.code}
              type="button"
              lang={option.code}
              aria-pressed={isActive}
              aria-label={option.name}
              onClick={() => setLanguage(option.code)}
              className={`px-2.5 py-1 font-mono text-[11px] font-medium tracking-widest transition-colors focus-visible:relative focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer ${
                isActive ? 'bg-slate-950 text-white' : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </header>
  )
}

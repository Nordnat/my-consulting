'use client'

import Link from 'next/link'
import { SITE } from '@/lib/site-config'
import { useLanguage } from '@/lib/i18n/language-context'

export function SiteFooter() {
  const { language, t } = useLanguage()
  const isEn = language === 'en'
  const auditHref = isEn ? '/en/agile-growth-wheel' : '/metodyki-zwinne/agile-growth-wheel'

  const links = [
    { label: isEn ? 'Growth Wheel Assessment' : 'Audyt Growth Wheel', href: auditHref },
    { label: t.home.footer.privacy, href: isEn ? '/en/privacy-policy' : '/polityka-prywatnosci' },
    { label: t.home.footer.terms, href: isEn ? '/en/terms' : '/regulamin' },
  ]

  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {SITE.brand} · {SITE.tagline}. {t.home.footer.rights}
        </p>
        <nav aria-label={isEn ? 'Footer Navigation' : 'Stopka'}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-slate-950">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, House } from 'lucide-react'
import { GROWTH_WHEEL_HREF } from '@/lib/site-config'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/lib/i18n/language-context'
import {
  CORE_COMPETENCY,
  DOMAIN_KNOWLEDGE,
  WHEEL_COMPETENCIES,
  type Competency,
} from '@/lib/growth-wheel-data'
import {
  CORE_COMPETENCY_EN,
  DOMAIN_KNOWLEDGE_EN,
  WHEEL_COMPETENCIES_EN,
} from '@/lib/growth-wheel-data-en'

const itemClass = 'min-h-8 px-2.5 text-[13px] text-slate-700 focus:bg-slate-100 focus:text-slate-950 cursor-pointer'
const panelClass = 'min-w-56 border border-slate-200 bg-white p-1 shadow-lg ring-0'
const topLinkClass =
  'flex h-8 items-center gap-2 px-2.5 text-[13px] font-medium transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-indigo-600'

function MenuLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <DropdownMenuItem
      className={itemClass}
      render={<Link href={href} />}
    >
      {children}
    </DropdownMenuItem>
  )
}

function CompetencySubmenu({ competency, overviewLabel }: { competency: Competency; overviewLabel: string }) {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className={itemClass}>{competency.name}</DropdownMenuSubTrigger>
      <DropdownMenuSubContent className={panelClass}>
        <MenuLink href={competency.href}>
          <span className="font-medium text-slate-950">{overviewLabel}: {competency.name}</span>
        </MenuLink>
        <DropdownMenuSeparator className="mx-0 bg-slate-200" />
        {competency.subCompetencies.map((sub) => (
          <MenuLink key={sub.href} href={sub.href}>
            {sub.name}
          </MenuLink>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const { language, t } = useLanguage()
  const isEn = language === 'en'

  const homeHref = isEn ? '/en' : '/'
  const isHome = pathname === homeHref || pathname === `${homeHref}/`
  const isMethodsSection =
    pathname.startsWith('/metodyki-zwinne') ||
    pathname.startsWith('/kompetencja') ||
    pathname.startsWith('/en/competency') ||
    pathname.startsWith('/en/agile-growth-wheel')

  const wheelHref = isEn ? '/en/agile-growth-wheel' : '/metodyki-zwinne/agile-growth-wheel'
  const wheelList = isEn ? WHEEL_COMPETENCIES_EN : WHEEL_COMPETENCIES
  const coreItem = isEn ? CORE_COMPETENCY_EN : CORE_COMPETENCY
  const domainItem = isEn ? DOMAIN_KNOWLEDGE_EN : DOMAIN_KNOWLEDGE

  const sectionLinks = [
    { label: t.nav.services, href: `${homeHref}#ekspertyza` },
    { label: t.nav.about, href: `${homeHref}#o-mnie` },
    { label: t.nav.contact, href: `${homeHref}#kontakt` },
  ]

  return (
    <nav aria-label={isEn ? 'Primary Navigation' : 'Główna nawigacja'} className="flex items-center gap-1">
      <Link
        href={homeHref}
        aria-current={isHome ? 'page' : undefined}
        className={`${topLinkClass} ${isHome ? 'text-slate-950' : 'text-slate-600'}`}
      >
        <House className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">{t.nav.start}</span>
        <span className="sr-only sm:hidden">{t.nav.start}</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className={`flex h-8 items-center gap-1.5 px-2.5 text-[13px] font-medium ${isMethodsSection ? 'text-slate-950' : 'text-slate-600'} transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-indigo-600 data-popup-open:bg-slate-100 data-popup-open:text-slate-950`}>
          {t.nav.methods}
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className={`${panelClass} w-auto`}>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-2.5 font-mono text-[10px] uppercase tracking-widest text-slate-400">
              {t.nav.models}
            </DropdownMenuLabel>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className={itemClass}>{t.nav.growthWheel}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className={panelClass}>
                <MenuLink href={wheelHref}>
                  <span className="font-medium text-slate-950">{t.nav.audit}</span>
                </MenuLink>
                <DropdownMenuSeparator className="mx-0 bg-slate-200" />
                {wheelList.map((competency) => (
                  <CompetencySubmenu key={competency.id} competency={competency} overviewLabel={t.nav.overview} />
                ))}
                <DropdownMenuSeparator className="mx-0 bg-slate-200" />
                <CompetencySubmenu competency={coreItem} overviewLabel={t.nav.overview} />
                <MenuLink href={domainItem.href}>{domainItem.name}</MenuLink>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {sectionLinks.map((link) => (
        <a key={link.href} href={link.href} className={`${topLinkClass} hidden text-slate-600 lg:flex`}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

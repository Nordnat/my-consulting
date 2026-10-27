import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  HelpCircle,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { SiteHeader } from '@/components/growth-wheel/site-header'
import { AcgwLicenseFooter } from '@/components/growth-wheel/acgw-license-footer'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  COMPETENCIES,
  getSubCompetency,
  getCompetencyById,
} from '@/lib/growth-wheel-data'
import { SUBCOMPETENCY_DETAILS } from '@/lib/subcompetency-details'

type Props = {
  params: Promise<{ slug: string; subslug: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; subslug: string }[] = []
  for (const c of COMPETENCIES) {
    for (const sub of c.subCompetencies) {
      const parts = sub.href.split('/')
      const subslug = parts[parts.length - 1]
      params.push({ slug: c.id, subslug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params
  const data = getSubCompetency(slug, subslug)
  if (!data) {
    return { title: 'Podkompetencja nie znaleziona' }
  }

  return {
    title: `${data.subCompetency.name} (${data.competency.name}) — Agile Coaching Growth Wheel`,
    description: data.subCompetency.description,
  }
}

export default async function SubCompetencyPage({ params }: Props) {
  const { slug, subslug } = await params
  const data = getSubCompetency(slug, subslug)

  if (!data) {
    notFound()
  }

  const { competency, subCompetency } = data
  const detail = SUBCOMPETENCY_DETAILS[slug]?.[subslug]
  const otherSubCompetencies = competency.subCompetencies.filter(
    (s) => !s.href.endsWith(`/${subslug}`)
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Ścieżka nawigacji" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">Start</Link>
          <span>/</span>
          <Link href="/metodyki-zwinne/agile-growth-wheel" className="hover:text-slate-900 transition-colors">
            Agile Growth Wheel
          </Link>
          <span>/</span>
          <Link href={competency.href} className="hover:text-slate-900 transition-colors">
            {competency.name}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{subCompetency.name}</span>
        </nav>

        {/* Hero Banner */}
        <header className="mb-12 border border-slate-200 bg-white p-8 md:p-12 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              href={competency.href}
              className="font-mono text-xs uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              ← Obszar nadrzędny: {competency.name}
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {subCompetency.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-slate-700">
            {detail?.tagline || subCompetency.description}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {detail?.overview || subCompetency.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/metodyki-zwinne/agile-growth-wheel?focus=${competency.id}`}
              className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
            >
              <Compass className="mr-2 size-4" />
              Oceń w kole audytu
            </Link>
            <Link
              href={competency.href}
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Przegląd kompetencji {competency.name}
            </Link>
          </div>
        </header>

        {/* Sekcja: Pożądane zachowania i Antywzorce */}
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {/* Pożądane zachowania */}
          <section className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base mb-4">
                <CheckCircle2 className="size-5" />
                Kluczowe zachowania i standardy
              </div>
              <ul className="space-y-3">
                {(detail?.keyBehaviors || [
                  'Świadome stosowanie praktyk dopasowanych do dynamiki zespołu.',
                  'Transparentne komunikowanie celów i konsekwencji działań.',
                  'Dbałość o psychologiczne bezpieczeństwo i autonomię zespołu.',
                ]).map((behavior, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="mt-1 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>{behavior}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Antywzorce */}
          <section className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-semibold text-base mb-4">
                <AlertTriangle className="size-5" />
                Typowe antywzorce i pułapki
              </div>
              <ul className="space-y-3">
                {(detail?.antiPatterns || [
                  'Mechaniczne stosowanie reguł bez zrozumienia kontekstu biznesowego.',
                  'Brak ewaluacji wpływu interwencji na realne rezultaty zespołu.',
                  'Uzależnianie zespołu od stałej obecności i decyzji coacha.',
                ]).map((antiPattern, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="mt-1 size-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>{antiPattern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Wskaźniki dojrzałości 1, 3, 5 */}
        {detail?.maturityIndicators && (
          <section className="mb-14 border border-slate-200 bg-white p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
                <TrendingUp className="size-4 text-indigo-600" />
                Ścieżka dojrzałości
              </div>
              <p className="text-2xl font-semibold tracking-tight text-slate-950">
                Jak wygląda ewolucja w tej podkompetencji?
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border-l-2 border-slate-300 bg-slate-50 p-4">
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase">
                  Poziom 1: Świadomość
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level1}
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 bg-indigo-50/50 p-4">
                <span className="font-mono text-xs font-semibold text-indigo-700 uppercase">
                  Poziom 3: Praktyk (Niezależny)
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level3}
                </p>
              </div>

              <div className="border-l-2 border-purple-600 bg-purple-50/50 p-4">
                <span className="font-mono text-xs font-semibold text-purple-700 uppercase">
                  Poziom 5: Ekspert (Kształtujący)
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level5}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Pytania diagnostyczne do audytu */}
        <section className="mb-14 border border-slate-200 bg-white p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
              <HelpCircle className="size-4 text-indigo-600" />
              Narzędziownik Lidera
            </div>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Pytania do wywiadu audytowego i rozmowy 1:1
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Zadaj te pytania podczas oceny kompetencji lub audytu efektywności zespołu.
            </p>
          </div>

          <div className="space-y-3">
            {(detail?.auditQuestions || [
              'Jak weryfikujesz, czy stosowane praktyki przynoszą zamierzony rezultat biznesowy?',
              'W jaki sposób radzisz sobie z oporem zespołu lub liderów przed zmianą nawyków?',
              'Czego potrzebujesz, by wejść na kolejny poziom samodzielności w tym obszarze?',
            ]).map((question, i) => (
              <div key={i} className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-4">
                <span className="font-mono font-bold text-xs text-indigo-600 mt-0.5">
                  Q{i + 1}
                </span>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pozostałe podkompetencje w tym obszarze */}
        {otherSubCompetencies.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              Pozostałe podkompetencje w obszarze {competency.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherSubCompetencies.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="flex items-center justify-between border border-slate-200 bg-white p-4 shadow-xs hover:border-indigo-400 hover:shadow-sm transition-all"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{sub.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{sub.description}</p>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 ml-3 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Dolna nawigacja */}
        <nav aria-label="Nawigacja powrotu" className="flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href={competency.href}
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Wróć do: {competency.name}
          </Link>

          <Link
            href={`/metodyki-zwinne/agile-growth-wheel?focus=${competency.id}`}
            className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
          >
            Otwórz koło audytu →
          </Link>
        </nav>

        <AcgwLicenseFooter lang="pl" />
      </main>
    </div>
  )
}

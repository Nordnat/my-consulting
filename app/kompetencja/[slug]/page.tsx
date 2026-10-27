import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronRight, Compass, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/growth-wheel/site-header'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  COMPETENCIES,
  LEVEL_NAMES,
  getCompetencyById,
  getNextPrevCompetency,
  type CompetencyId,
  type Rating,
} from '@/lib/growth-wheel-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return COMPETENCIES.map((c) => ({
    slug: c.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const competency = getCompetencyById(slug)
  if (!competency) {
    return { title: 'Kompetencja nie znaleziona' }
  }

  return {
    title: `${competency.name} — Agile Coaching Growth Wheel`,
    description: competency.description,
  }
}

export default async function CompetencyDetailPage({ params }: Props) {
  const { slug } = await params
  const competency = getCompetencyById(slug)

  if (!competency) {
    notFound()
  }

  const { prev, next } = getNextPrevCompetency(competency.id as CompetencyId)
  const isCore = competency.id === 'self-mastery'
  const index = COMPETENCIES.findIndex((c) => c.id === competency.id)

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
          <span className="text-indigo-600 font-semibold">{competency.name}</span>
        </nav>

        {/* Hero Banner */}
        <header className="mb-12 border border-slate-200 bg-white p-8 md:p-12 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Obszar {String(index + 1).padStart(2, '0')} / {String(COMPETENCIES.length).padStart(2, '0')}
            </span>
            {isCore ? (
              <Badge variant="outline" className="border-indigo-300 bg-indigo-50 text-indigo-700 text-xs">
                Rdzeń koła (Core Competency)
              </Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">
                Ramię operacyjne
              </Badge>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {competency.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {competency.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
            >
              <Compass className="mr-2 size-4" />
              Oceń tę kompetencję w kole
            </Link>
            <a
              href="#poziomy-dojrzalosci"
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Zobacz 5 poziomów dojrzałości
            </a>
          </div>
        </header>

        {/* Podkompetencje */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">
              Dekompozycja umiejętności
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Podkompetencje w obszarze {competency.name}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {competency.subCompetencies.map((sub) => (
              <div
                key={sub.href}
                className="flex flex-col justify-between border border-slate-200 bg-white p-6 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {sub.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={sub.href}
                    className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Szczegółowy przewodnik i pytania
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 poziomów dojrzałości */}
        <section id="poziomy-dojrzalosci" className="mb-14 border border-slate-200 bg-white p-8">
          <div className="mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">
              Kryteria ewaluacji
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Skala dojrzałości (Poziomy 1 – 5)
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Użyj poniższych kryteriów, aby rzetelnie ocenić poziom w audycie 360° lub podczas rozmowy rozwojowej.
            </p>
          </div>

          <div className="space-y-4">
            {competency.levels.map((levelDesc, idx) => {
              const rating = (idx + 1) as Rating
              return (
                <div
                  key={rating}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-indigo-50/40 hover:border-indigo-200"
                >
                  <div className="shrink-0 flex items-center sm:flex-col sm:items-start gap-2 sm:gap-1 sm:w-40">
                    <span className="font-mono text-xs font-bold text-indigo-600">
                      Poziom {rating}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {LEVEL_NAMES[rating]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed text-slate-700">
                      {levelDesc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Rekomendowane materiały */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">
              Materiały rozwojowe
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Rekomendowane publikacje i narzędzia
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {competency.resources.map((resource) => (
              <div
                key={resource.title}
                className="flex items-start gap-4 border border-slate-200 bg-white p-5 shadow-xs"
              >
                <div className="size-9 grid place-items-center bg-indigo-50 text-indigo-700 shrink-0">
                  <BookOpen className="size-4" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 text-[10px] font-mono border-slate-300">
                    {resource.type}
                  </Badge>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {resource.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Dedykowane narzędzie do podnoszenia dojrzałości w tym obszarze.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nawigacja poprzednia / następna kompetencja */}
        <nav aria-label="Nawigacja między kompetencjami" className="flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href={prev.href}
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Poprzednia:</span> {prev.name}
          </Link>

          <Link
            href="/"
            className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
          >
            Koło audytu
          </Link>

          <Link
            href={next.href}
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors text-right"
          >
            <span className="hidden sm:inline">Następna:</span> {next.name}
            <ArrowRight className="size-4" />
          </Link>
        </nav>
      </main>
    </div>
  )
}

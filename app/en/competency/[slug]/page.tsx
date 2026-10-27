import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronRight, Compass, Sparkles } from 'lucide-react';
import { SiteHeader } from '@/components/growth-wheel/site-header';
import { AcgwLicenseFooter } from '@/components/growth-wheel/acgw-license-footer';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  COMPETENCIES_EN,
  LEVEL_NAMES_EN,
  getCompetencyByIdEn,
  getNextPrevCompetencyEn,
  type CompetencyId,
  type Rating,
} from '@/lib/growth-wheel-data-en';

const ACCENT_COLOR = '#4f46e5'

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COMPETENCIES_EN.map((c) => ({
    slug: c.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competency = getCompetencyByIdEn(slug);
  if (!competency) {
    return { title: 'Competency not found | Agile Coaching Growth Wheel' };
  }

  return {
    title: `${competency.name} — Agile Coaching Growth Wheel Competency`,
    description: `${competency.description} Explore subcompetencies, maturity levels, and development guide.`,
    alternates: {
      canonical: `https://rafalkamieniarz.com/en/competency/${slug}`,
      languages: {
        'pl-PL': `https://rafalkamieniarz.com/kompetencja/${slug}`,
        'en-US': `https://rafalkamieniarz.com/en/competency/${slug}`,
      },
    },
    openGraph: {
      title: `${competency.name} | Agile Coaching Growth Wheel`,
      description: competency.description,
      url: `https://rafalkamieniarz.com/en/competency/${slug}`,
      locale: 'en_US',
    },
  };
}

export default async function EnglishCompetencyDetailPage({ params }: Props) {
  const { slug } = await params;
  const competency = getCompetencyByIdEn(slug);

  if (!competency) {
    notFound();
  }

  const { prev, next } = getNextPrevCompetencyEn(competency.id as CompetencyId);
  const isCore = competency.id === 'self-mastery';
  const index = COMPETENCIES_EN.findIndex((c) => c.id === competency.id);

  // Structured JSON-LD schema for TechArticle / DefinedTerm
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${competency.name} - Agile Coaching Growth Wheel`,
    description: competency.description,
    author: {
      '@type': 'Person',
      name: 'Rafał Kamieniarz',
      jobTitle: 'Agile Delivery Consultant & Coach',
      url: 'https://rafalkamieniarz.com/en',
    },
    about: {
      '@type': 'DefinedTerm',
      name: competency.name,
      description: competency.description,
      inDefinedTermSet: 'https://rafalkamieniarz.com/en/agile-growth-wheel',
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb navigation" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/en" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/en/agile-growth-wheel" className="hover:text-slate-900 transition-colors">Agile Growth Wheel</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{competency.name}</span>
        </nav>

        {/* Header Card */}
        <header className="relative mb-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ backgroundColor: ACCENT_COLOR }}
          />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="font-mono text-xs border-slate-300">
                {isCore ? 'CORE COMPETENCY' : `COMPETENCY ${index} OF 8`}
              </Badge>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium text-white shadow-xs"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {competency.subCompetencies.length} subcompetencies
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {competency.name}
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
              {competency.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <Link
                href={`/en/agile-growth-wheel?focus=${competency.id}`}
                className={buttonVariants({ variant: 'default', size: 'sm', className: 'gap-2' })}
              >
                <Compass className="h-4 w-4" />
                Rate this Competency on Wheel
              </Link>
              <Link
                href="#subcompetencies"
                className={buttonVariants({ variant: 'outline', size: 'sm', className: 'gap-2' })}
              >
                <BookOpen className="h-4 w-4" />
                Browse Subcompetencies
              </Link>
            </div>
          </div>
        </header>

        {/* Subcompetencies Grid */}
        <section id="subcompetencies" className="mb-14 scroll-mt-20">
          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Subcompetencies in {competency.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Detailed areas of practice, behaviors, and evaluation rubrics
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Total: {competency.subCompetencies.length}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {competency.subCompetencies.map((sub, sIdx) => (
              <article
                key={sub.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      #{sIdx + 1}
                    </span>
                    <span
                      className="h-2 w-8 rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {sub.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    5 maturity levels (1–5)
                  </span>
                  <Link
                    href={sub.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                  >
                    Details <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Maturity Levels Reference */}
        <section className="mb-14 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-slate-900 p-2.5 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Evaluation Scale & Maturity Levels
              </h2>
              <p className="text-xs text-slate-500">
                Applied across all {competency.name} subcompetencies
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            {([1, 2, 3, 4, 5] as Rating[]).map((level) => (
              <div
                key={level}
                className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors hover:bg-slate-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      LEVEL {level}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {LEVEL_NAMES_EN[level]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <footer className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/en/competency/${prev.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>
                <span className="block text-xs text-slate-400">Previous competency</span>
                {prev.name}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/en/competency/${next.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors sm:text-right"
            >
              <span>
                <span className="block text-xs text-slate-400">Next competency</span>
                {next.name}
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <div />}
        </footer>

        <AcgwLicenseFooter lang="en" />
      </main>
    </div>
  );
}

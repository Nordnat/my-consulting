import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
} from 'lucide-react';
import { SiteHeader } from '@/components/growth-wheel/site-header';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  COMPETENCIES_EN,
  getSubCompetencyEn,
  getCompetencyByIdEn,
} from '@/lib/growth-wheel-data-en';
import { SUBCOMPETENCY_DETAILS_EN } from '@/lib/subcompetency-details-en';

type Props = {
  params: Promise<{ slug: string; subslug: string }>;
};

export async function generateStaticParams() {
  const params: { slug: string; subslug: string }[] = [];
  for (const c of COMPETENCIES_EN) {
    for (const sub of c.subCompetencies) {
      const parts = sub.href.split('/');
      const subslug = parts[parts.length - 1];
      params.push({ slug: c.id, subslug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subslug } = await params;
  const data = getSubCompetencyEn(slug, subslug);
  if (!data) {
    return { title: 'Subcompetency not found | Agile Coaching Growth Wheel' };
  }

  const detail = SUBCOMPETENCY_DETAILS_EN[slug]?.[subslug];

  return {
    title: `${data.subCompetency.name} (${data.competency.name}) — Agile Coaching Growth Wheel`,
    description: detail?.overview || data.subCompetency.description,
    alternates: {
      canonical: `https://rafalkamieniarz.pl/en/competency/${slug}/${subslug}`,
      languages: {
        'pl-PL': `https://rafalkamieniarz.pl/kompetencja/${slug}/${subslug}`,
        'en-US': `https://rafalkamieniarz.pl/en/competency/${slug}/${subslug}`,
      },
    },
    openGraph: {
      title: `${data.subCompetency.name} | ${data.competency.name}`,
      description: detail?.overview || data.subCompetency.description,
      url: `https://rafalkamieniarz.pl/en/competency/${slug}/${subslug}`,
      locale: 'en_US',
    },
  };
}

export default async function EnglishSubCompetencyPage({ params }: Props) {
  const { slug, subslug } = await params;
  const data = getSubCompetencyEn(slug, subslug);

  if (!data) {
    notFound();
  }

  const { competency, subCompetency } = data;
  const detail = SUBCOMPETENCY_DETAILS_EN[slug]?.[subslug];
  const otherSubCompetencies = competency.subCompetencies.filter(
    (s) => !s.href.endsWith(`/${subslug}`)
  );

  // Structured data for LLMs & Search engines (TechArticle + DefinedTerm)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${subCompetency.name} - ${competency.name}`,
    description: detail?.overview || subCompetency.description,
    author: {
      '@type': 'Person',
      name: 'Rafał Kamieniarz',
      jobTitle: 'Agile Delivery Consultant & Coach',
      url: 'https://rafalkamieniarz.pl/en',
    },
    about: {
      '@type': 'DefinedTerm',
      name: subCompetency.name,
      description: detail?.overview || subCompetency.description,
      inDefinedTermSet: `https://rafalkamieniarz.pl/en/competency/${competency.id}`,
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
          <Link href="/en/agile-growth-wheel" className="hover:text-slate-900 transition-colors">
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
              ← Parent competency: {competency.name}
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
              href="/en/agile-growth-wheel"
              className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
            >
              <Compass className="mr-2 size-4" />
              Assess in Growth Wheel
            </Link>
            <Link
              href={competency.href}
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              {competency.name} Overview
            </Link>
          </div>
        </header>

        {/* Key behaviors & Anti-patterns */}
        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {/* Key behaviors */}
          <section className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base mb-4">
                <CheckCircle2 className="size-5" />
                Key Behaviors & Standards
              </div>
              <ul className="space-y-3">
                {(detail?.keyBehaviors || [
                  'Conscious application of practices matched to team dynamics.',
                  'Transparent communication of goals and consequences.',
                  'Cultivating psychological safety and team autonomy.',
                ]).map((behavior, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="mt-1 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>{behavior}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Anti-patterns */}
          <section className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-semibold text-base mb-4">
                <AlertTriangle className="size-5" />
                Common Anti-Patterns & Traps
              </div>
              <ul className="space-y-3">
                {(detail?.antiPatterns || [
                  'Mechanical adherence to rules without understanding business context.',
                  'Lack of evaluating intervention impact on real business outcomes.',
                  'Creating team dependency on coach presence and decisions.',
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

        {/* Maturity Indicators (Levels 1, 3, 5) */}
        {detail?.maturityIndicators && (
          <section className="mb-14 border border-slate-200 bg-white p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
                <TrendingUp className="size-4 text-indigo-600" />
                Maturity Path
              </div>
              <p className="text-2xl font-semibold tracking-tight text-slate-950">
                Evolution in this Subcompetency
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border-l-2 border-slate-300 bg-slate-50 p-4">
                <span className="font-mono text-xs font-semibold text-slate-500 uppercase">
                  Level 1: Beginner (Awareness)
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level1}
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 bg-indigo-50/50 p-4">
                <span className="font-mono text-xs font-semibold text-indigo-700 uppercase">
                  Level 3: Practitioner (Independent)
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level3}
                </p>
              </div>

              <div className="border-l-2 border-purple-600 bg-purple-50/50 p-4">
                <span className="font-mono text-xs font-semibold text-purple-700 uppercase">
                  Level 5: Master (Expert / Shaper)
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {detail.maturityIndicators.level5}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Diagnostic Audit Questions */}
        <section className="mb-14 border border-slate-200 bg-white p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">
              <HelpCircle className="size-4 text-indigo-600" />
              Leader's Diagnostic Toolkit
            </div>
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              Diagnostic & 1:1 Interview Questions
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Use these questions during maturity evaluations, team audits, or developmental 1:1 conversations.
            </p>
          </div>

          <div className="space-y-3">
            {(detail?.auditQuestions || [
              'How do you verify whether current practices deliver intended business value?',
              'How do you address team resistance when shifting habits and operating models?',
              'What support is needed to reach the next stage of autonomy in this area?',
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

        {/* Other subcompetencies in this competency */}
        {otherSubCompetencies.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
              Other subcompetencies in {competency.name}
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

        {/* Back navigation */}
        <nav aria-label="Return navigation" className="flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href={competency.href}
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to: {competency.name}
          </Link>

          <Link
            href="/en/agile-growth-wheel"
            className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
          >
            Open Growth Wheel Assessment →
          </Link>
        </nav>
      </main>
    </div>
  );
}

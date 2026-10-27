import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Database, Globe } from 'lucide-react';
import { SiteHeader } from '@/components/growth-wheel/site-header';
import { AcgwLicenseFooter } from '@/components/growth-wheel/acgw-license-footer';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DOMAIN_KNOWLEDGE_EN } from '@/lib/growth-wheel-data-en';

export const metadata: Metadata = {
  title: 'Domain Knowledge — Outer Ring of Agile Coaching Growth Wheel',
  description:
    'The critical role of business, technical, product, and industry domain knowledge in Agile Coaching, Delivery Management, and Scrum leadership.',
  keywords: [
    'Domain Knowledge',
    'Agile Coaching Growth Wheel Outer Ring',
    'Product Discovery',
    'Software Architecture for Coaches',
    'Business Domain Expertise',
    'FinTech Agile',
    'MedTech Agile',
  ],
  alternates: {
    canonical: 'https://rafalkamieniarz.com/en/competency/domain-knowledge',
    languages: {
      'pl-PL': 'https://rafalkamieniarz.com/kompetencja/domain-knowledge',
      'en-US': 'https://rafalkamieniarz.com/en/competency/domain-knowledge',
    },
  },
  openGraph: {
    title: 'Domain Knowledge | Agile Coaching Growth Wheel',
    description:
      'Understanding the outer ring: Business domains, engineering architecture, and product discovery.',
    url: 'https://rafalkamieniarz.com/en/competency/domain-knowledge',
    locale: 'en_US',
  },
};

export default function EnglishDomainKnowledgePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Domain Knowledge - Agile Coaching Growth Wheel',
    description: DOMAIN_KNOWLEDGE_EN.description,
    author: {
      '@type': 'Person',
      name: 'Rafał Kamieniarz',
      jobTitle: 'Agile Delivery Consultant & Coach',
      url: 'https://rafalkamieniarz.com/en',
    },
    about: {
      '@type': 'DefinedTerm',
      name: DOMAIN_KNOWLEDGE_EN.name,
      description: DOMAIN_KNOWLEDGE_EN.description,
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
        <nav aria-label="Breadcrumb navigation" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/en" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/en/agile-growth-wheel" className="hover:text-slate-900 transition-colors">
            Agile Growth Wheel
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{DOMAIN_KNOWLEDGE_EN.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border border-slate-200 bg-white p-8 md:p-12 shadow-xs">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">
            <Badge variant="outline" className="border-indigo-200 bg-indigo-50 text-indigo-700">
              Systemic Context
            </Badge>
            <span>Outer Ring</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {DOMAIN_KNOWLEDGE_EN.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {DOMAIN_KNOWLEDGE_EN.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/agile-growth-wheel"
              className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Growth Wheel
            </Link>
            <Link
              href="/en"
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Consulting Services
            </Link>
          </div>
        </header>

        {/* 3 Pillars of Domain Knowledge */}
        <section className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Three Pillars of Domain Knowledge
          </h2>
          <p className="text-2xl font-semibold tracking-tight text-slate-950 mb-8">
            What Constitutes Domain Knowledge in Agile Coaching?
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <Globe className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Business &amp; Market Domains
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Deep grasp of industry specificities (FinTech, MedTech, e-Commerce, Automotive),
                  regulatory compliance (GDPR, DORA, SOX, HIPAA), monetization mechanics, and market pressure.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Business models and P&amp;L drivers</li>
                <li>• Regulatory compliance &amp; governance</li>
                <li>• Market dynamics &amp; customer behavior</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <Database className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Architecture &amp; Engineering
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Fundamental understanding of modern technology stacks, architectural paradigms (monolith vs microservices, event-driven),
                  CI/CD automation, technical debt, and SDLC maturity.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Modern engineering practices (XP, DevOps)</li>
                <li>• Production resilience &amp; telemetry</li>
                <li>• Technical debt payoff strategies</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <BookOpen className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Product Discovery &amp; Strategy
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Mastery of user research methods, rapid prototyping, Lean Startup experimentation,
                  behavioral product analytics, and hypothesis validation prior to costly engineering.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Customer Journey Mapping (CJM)</li>
                <li>• Product health metrics (NPS, Churn, ARR, CAC)</li>
                <li>• Value-driven outcome backlog management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Audit questions */}
        <section className="mb-14 border border-slate-200 bg-white p-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Assessment &amp; Diagnostic Focus
          </h2>
          <p className="text-xl font-semibold tracking-tight text-slate-950 mb-6">
            Evaluating a Coach&apos;s Domain Acumen
          </p>

          <div className="space-y-4">
            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                1. Does the coach speak the ubiquitous domain language?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When collaborating with Product Owners and tech leads, does the coach use substantive domain terminology, or merely generic Agile jargon?
              </p>
            </div>

            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                2. Do recommendations respect compliance and architectural realities?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Does the coach recognize why certain practices (e.g., continuous deployment to production) require specific compliance gates or audits in regulated environments?
              </p>
            </div>

            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                3. How fast does the coach internalize market dynamics?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Does the coach actively engage with end-users, attend product demo feedback sessions, and study company financial metrics?
              </p>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link
            href="/en/agile-growth-wheel"
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            ← Explore Agile Growth Wheel
          </Link>
          <Link
            href="/en/agile-growth-wheel"
            className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
          >
            Open Growth Wheel Assessment →
          </Link>
        </div>

        <AcgwLicenseFooter lang="en" />
      </main>
    </div>
  );
}

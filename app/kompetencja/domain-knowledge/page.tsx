import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Database, Globe, Layers, ShieldCheck } from 'lucide-react'
import { SiteHeader } from '@/components/growth-wheel/site-header'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DOMAIN_KNOWLEDGE } from '@/lib/growth-wheel-data'

export const metadata: Metadata = {
  title: 'Domain Knowledge — Zewnętrzny pierścień Agile Coaching Growth Wheel',
  description:
    'Rola wiedzy dziedzinowej w pracy Agile Coacha i Scrum Mastera: biznes, produkt, inżynieria i kontekst rynkowy.',
}

export default function DomainKnowledgePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Ścieżka nawigacji" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">Start</Link>
          <span>/</span>
          <Link href="/metodyki-zwinne/agile-growth-wheel" className="hover:text-slate-900 transition-colors">
            Agile Growth Wheel
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{DOMAIN_KNOWLEDGE.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border border-slate-200 bg-white p-8 md:p-12 shadow-xs">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">
            <Badge variant="outline" className="border-indigo-200 bg-indigo-50 text-indigo-700">
              Kontekst systemowy
            </Badge>
            <span>Pierścień zewnętrzny</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {DOMAIN_KNOWLEDGE.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {DOMAIN_KNOWLEDGE.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
            >
              <ArrowLeft className="mr-2 size-4" />
              Wróć do koła audytu
            </Link>
            <Link
              href="/metodyki-zwinne/agile-growth-wheel"
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Przegląd całego modelu
            </Link>
          </div>
        </header>

        {/* 3 filary wiedzy domenowej */}
        <section className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Trzy filary wiedzy dziedzinowej
          </h2>
          <p className="text-2xl font-semibold tracking-tight text-slate-950 mb-8">
            Co składa się na Domain Knowledge w Agile Coachingu?
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <Globe className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Domeny biznesowe i rynkowe
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Zrozumienie specyfiki branży (np. FinTech, MedTech, e-Commerce, Automotive),
                  regulacji prawnych (GDPR, DORA, KNF), modelu monetyzacji oraz presji konkurencyjnej, pod jaką działa klient.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Modele biznesowe i wskaźniki P&amp;L</li>
                <li>• Wymogi zgodności (Compliance)</li>
                <li>• Rynek i zachowania konsumentów</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <Database className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Architektura i inżynieria
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Podstawowe zrozumienie stosu technologicznego, architektury (monolit vs mikroserwisy),
                  praktyk CI/CD, długu technicznego oraz cyklu życia oprogramowania w danej organizacji.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Praktyki inżynieryjne (XP, DevOps)</li>
                <li>• Bezpieczeństwo i stabilność produkcji</li>
                <li>• Dług technologiczny i refaktoring</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="size-10 grid place-items-center bg-indigo-50 text-indigo-700 mb-4">
                  <BookOpen className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">
                  Odkrywanie produktu (Product Discovery)
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Znajomość metod badania potrzeb użytkowników, eksperymentowania, Lean Startup,
                  metryk behawioralnych oraz technik walidacji hipotez przed rozpoczęciem kosztownego wytwarzania.
                </p>
              </div>
              <ul className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <li>• Mapowanie podróży użytkownika (CJM)</li>
                <li>• Metryki produktowe (NPS, Churn, ARR)</li>
                <li>• Zwinne zarządzanie backlogiem</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wskazówki audytowe */}
        <section className="mb-14 border border-slate-200 bg-white p-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
            Diagnoza w audycie
          </h2>
          <p className="text-xl font-semibold tracking-tight text-slate-950 mb-6">
            Pytania weryfikujące wiedzę domenową coacha
          </p>

          <div className="space-y-4">
            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                1. Czy coach posługuje się językiem domeny biznesowej (Ubiquitous Language)?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Czy w rozmowach z Product Ownerem i inżynierami coach operuje pojęciami produktowymi i technicznymi, czy używa jedynie generycznych pojęć agile'owych?
              </p>
            </div>

            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                2. Czy rekomendacje uwzględniają ograniczenia prawne i architektoniczne?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Czy coach zdaje sobie sprawę, dlaczego pewne praktyki (np. natychmiastowe wdrożenia ciągłe na produkcję) wymagają spełnienia rygorystycznych procedur bezpieczeństwa lub audytów w danej branży?
              </p>
            </div>

            <div className="border-l-2 border-indigo-600 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                3. Jak szybko coach przyswaja specyfikę nowego produktu i rynku?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Czy coach wykazuje proaktywność w poznawaniu klientów, uczestniczy w sesjach demo z użytkownikami i czyta raporty rynkowe firmy?
              </p>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-6">
          <Link
            href="/metodyki-zwinne/agile-growth-wheel"
            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
          >
            ← Przegląd Agile Growth Wheel
          </Link>
          <Link
            href="/"
            className={buttonVariants({ size: 'sm', className: 'bg-indigo-600 hover:bg-indigo-700 text-white' })}
          >
            Oceń kompetencje w audycie →
          </Link>
        </div>
      </main>
    </div>
  )
}

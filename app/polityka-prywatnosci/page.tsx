import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE } from '@/lib/site-config'
import { SiteHeader } from '@/components/growth-wheel/site-header'
import { SiteFooter } from '@/components/home/site-footer'

export const metadata: Metadata = {
  title: 'Polityka prywatności i plików cookies | Rafał Kamieniarz',
  description:
    'Zasady przetwarzania danych osobowych oraz wykorzystania plików cookies w serwisie rafalkamieniarz.com.',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-950">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 md:px-10 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="size-3.5" />
          <span>Wróć do strony głównej</span>
        </Link>

        <article className="prose prose-slate max-w-none">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 mb-2">Informacje prawne</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Polityka prywatności i plików cookies
            </h1>
            <p className="text-sm text-slate-500 mt-2">Ostatnia aktualizacja: październik 2026</p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Administrator danych osobowych</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Administratorem danych osobowych serwisu dostępnego pod adresem{' '}
              <a href={SITE.url} className="text-indigo-600 hover:underline">
                {SITE.domain}
              </a>{' '}
              jest {SITE.brand}, kontakt e-mail:{' '}
              <a href={`mailto:${SITE.email}`} className="text-indigo-600 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Zakres i cel przetwarzania danych</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-700 space-y-2">
              <li>
                <strong>Formularz kontaktowy:</strong> Dane przekazane w formularzu kontaktowym (imię i nazwisko, adres
                e-mail, treść wiadomości) przetwarzane są wyłącznie w celu udzielenia odpowiedzi na przesłaną
                wiadomość i prowadzenia dalszej korespondencji (art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes
                administratora).
              </li>
              <li>
                <strong>Poufność:</strong> Dane nie są sprzedawane, udostępniane podmiotom trzecim w celach marketingowych
                ani wykorzystywane do profilowania.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Pliki cookies i pamięć przeglądarki</h2>
            <p className="text-sm leading-relaxed text-slate-700 mb-3">
              Serwis wykorzystuje pliki cookies (ciasteczka) w następujących celach:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-700 space-y-2">
              <li>
                <strong>Cookies niezbędne i funkcjonalne:</strong> Służą do zapamiętania Twojego wyboru dotyczącego
                zgody na cookies (<code>gw_cookie_consent</code>), wybranego języka (<code>NEXT_LOCALE</code>) oraz ocen i
                wyborów w kole samooceny kompetencji Agile Coaching Growth Wheel (<code>agw_ratings</code>,{' '}
                <code>agw_active_id</code>, <code>agw_priorities</code>, <code>agw_commitment</code>,{' '}
                <code>agw_accepted</code>). Dzięki temu przy powrocie z podstron lub kolejnych odwiedzinach Twoje oceny i
                postępy w audycie pozostają zachowane na Twoim urządzeniu.
              </li>
              <li>
                <strong>Cookies analityczne (opcjonalne):</strong> Za Twoją wyraźną zgodą serwis może korzystać z anonimowej
                analityki (Vercel Analytics) w celu monitorowania zagregowanego ruchu i poprawy jakości serwisu bez
                identyfikowania konkretnych użytkowników.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Twoje prawa</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Masz prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
              wniesienia sprzeciwu wobec przetwarzania, a także prawo do usunięcia plików cookies w dowolnym momencie z
              poziomu ustawień swojej przeglądarki internetowej lub za pomocą przycisku „Zresetuj oceny” na stronie
              audytu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Kontakt</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              W razie jakichkolwiek pytań dotyczących polityki prywatności prosimy o kontakt pod adresem:{' '}
              <a href={`mailto:${SITE.email}`} className="text-indigo-600 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

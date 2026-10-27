import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE } from '@/lib/site-config'
import { SiteHeader } from '@/components/growth-wheel/site-header'
import { SiteFooter } from '@/components/home/site-footer'

export const metadata: Metadata = {
  title: 'Privacy and Cookies Policy | Rafał Kamieniarz',
  description:
    'Rules regarding the processing of personal data and cookies usage on rafalkamieniarz.com.',
}

export default function PrivacyPolicyPageEn() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-950">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 md:px-10 lg:py-16">
        <Link
          href="/en"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Homepage</span>
        </Link>

        <article className="prose prose-slate max-w-none">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 mb-2">Legal Information</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Privacy & Cookie Policy
            </h1>
            <p className="text-sm text-slate-500 mt-2">Last updated: October 2026</p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Data Controller</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              The controller of personal data on{' '}
              <a href={SITE.url} className="text-indigo-600 hover:underline">
                {SITE.domain}
              </a>{' '}
              is {SITE.brand}, contact email:{' '}
              <a href={`mailto:${SITE.email}`} className="text-indigo-600 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Scope & Purpose of Data Processing</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-700 space-y-2">
              <li>
                <strong>Contact Dialog:</strong> Data provided in the contact form (name, email address, message
                content) is processed solely for answering inquiries and correspondence (GDPR Art. 6(1)(f) — legitimate
                interest).
              </li>
              <li>
                <strong>Confidentiality:</strong> Data is never sold, shared with third parties for marketing, or used
                for automated profiling.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Cookies & Browser Storage</h2>
            <p className="text-sm leading-relaxed text-slate-700 mb-3">
              This website uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-700 space-y-2">
              <li>
                <strong>Necessary & Functional Cookies:</strong> Used to remember your cookie consent choice (
                <code>gw_cookie_consent</code>), language preference (<code>NEXT_LOCALE</code>), and self-assessment
                ratings and selections in the Agile Coaching Growth Wheel (<code>agw_ratings</code>,{' '}
                <code>agw_active_id</code>, <code>agw_priorities</code>, <code>agw_commitment</code>,{' '}
                <code>agw_accepted</code>). This ensures your audit inputs are preserved when navigating between subpages
                or returning to the site.
              </li>
              <li>
                <strong>Analytics Cookies (Optional):</strong> With your consent, anonymous traffic statistics (Vercel
                Analytics) help monitor aggregated usage to improve site performance.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Your Rights</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              You have the right to access, rectify, delete, or limit the processing of your personal data, as well as
              the right to clear cookies at any time via your browser settings or using the &ldquo;Reset scores&rdquo;
              button on the self-assessment audit page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Contact</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              For any privacy-related questions, please reach out to:{' '}
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

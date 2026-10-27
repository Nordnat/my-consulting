'use client'

import { useId, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONSENT_COOKIE, CONSENT_MAX_AGE, type ConsentValue } from '@/lib/cookie-consent'

function persistConsent(value: ConsentValue) {
  const sameSite = window.location.protocol === 'https:' ? 'SameSite=None; Secure' : 'SameSite=Lax'
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; ${sameSite}`
}

export function CookieConsent({ initialConsent }: { initialConsent: ConsentValue | null }) {
  const [consent, setConsent] = useState<ConsentValue | null>(initialConsent)
  const [open, setOpen] = useState(initialConsent === null)
  const [showDetails, setShowDetails] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(initialConsent !== 'necessary')
  const titleId = useId()
  const descId = useId()
  const analyticsId = useId()

  const decide = (value: ConsentValue) => {
    persistConsent(value)
    setConsent(value)
    setAnalyticsChecked(value === 'all')
    setOpen(false)
    setShowDetails(false)
  }

  return (
    <>
      {consent === 'all' && process.env.NODE_ENV === 'production' && <Analytics />}

      {open ? (
        <section
          aria-labelledby={titleId}
          aria-describedby={descId}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card text-card-foreground shadow-lg sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-md sm:border"
        >
          <div className="flex flex-col gap-4 p-5">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex flex-col gap-1.5">
                <h2 id={titleId} className="text-sm font-semibold">
                  Pliki cookies
                </h2>
                <p id={descId} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  Używamy niezbędnych plików cookies, aby strona działała poprawnie. Za Twoją zgodą korzystamy też
                  z anonimowej analityki, która pomaga nam ulepszać stronę.
                </p>
              </div>
            </div>

            {showDetails && (
              <fieldset className="flex flex-col gap-3 border border-border p-3">
                <legend className="sr-only">Kategorie plików cookies</legend>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    id={`${analyticsId}-necessary`}
                    className="mt-0.5 size-4 accent-primary"
                  />
                  <label htmlFor={`${analyticsId}-necessary`} className="flex flex-col gap-0.5 text-sm">
                    <span className="font-medium">Niezbędne</span>
                    <span className="leading-relaxed text-muted-foreground">
                      Zapamiętują Twoją decyzję dotyczącą cookies. Zawsze aktywne.
                    </span>
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={analyticsId}
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="mt-0.5 size-4 accent-primary"
                  />
                  <label htmlFor={analyticsId} className="flex flex-col gap-0.5 text-sm">
                    <span className="font-medium">Analityczne</span>
                    <span className="leading-relaxed text-muted-foreground">
                      Anonimowe statystyki odwiedzin (Vercel Analytics).
                    </span>
                  </label>
                </div>
              </fieldset>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm" onClick={() => decide('all')}>
                Akceptuj wszystkie
              </Button>
              {showDetails ? (
                <Button size="sm" variant="outline" onClick={() => decide(analyticsChecked ? 'all' : 'necessary')}>
                  Zapisz wybór
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={() => decide('necessary')}>
                  Tylko niezbędne
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                aria-expanded={showDetails}
                onClick={() => setShowDetails((v) => !v)}
              >
                {showDetails ? 'Ukryj ustawienia' : 'Ustawienia'}
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Zmień ustawienia plików cookies"
          className="fixed bottom-4 left-4 z-40 flex size-9 items-center justify-center border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Cookie className="size-4" aria-hidden="true" />
        </button>
      )}
    </>
  )
}

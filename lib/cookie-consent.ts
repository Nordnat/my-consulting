export const CONSENT_COOKIE = 'gw_cookie_consent'
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365

export type ConsentValue = 'all' | 'necessary'

export function parseConsent(value: string | undefined): ConsentValue | null {
  return value === 'all' || value === 'necessary' ? value : null
}

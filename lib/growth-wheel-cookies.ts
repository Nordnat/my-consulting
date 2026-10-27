import {
  type CompetencyId,
  type Rating,
  DEFAULT_RATINGS,
} from './growth-wheel-data'

export const AGW_RATINGS_COOKIE = 'agw_ratings'
export const AGW_ACTIVE_COOKIE = 'agw_active_id'
export const AGW_PRIORITIES_COOKIE = 'agw_priorities'
export const AGW_COMMITMENT_COOKIE = 'agw_commitment'
export const AGW_ACCEPTED_COOKIE = 'agw_accepted'

export const AGW_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 rok

export const VALID_COMPETENCY_IDS: readonly CompetencyId[] = [
  'agile-lean-practitioner',
  'serving',
  'coaching',
  'facilitating',
  'guiding-learning',
  'advising',
  'leading',
  'transforming',
  'self-mastery',
]

export function isValidCompetencyId(val: unknown): val is CompetencyId {
  return typeof val === 'string' && VALID_COMPETENCY_IDS.includes(val as CompetencyId)
}

export function isValidRating(val: unknown): val is Rating {
  return typeof val === 'number' && Number.isInteger(val) && val >= 1 && val <= 5
}

/**
 * Parsuje surową wartość cookie z ocenami. Bezpiecznie sprawdza strukturę
 * i uzupełnia brakujące kompetencje wartościami domyślnymi.
 */
export function parseRatingsCookie(raw?: string | null): Record<CompetencyId, Rating> | null {
  if (!raw) return null
  try {
    const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw
    const parsed = JSON.parse(decoded)
    if (!parsed || typeof parsed !== 'object') return null

    let hasAnyValid = false
    const result: Record<CompetencyId, Rating> = { ...DEFAULT_RATINGS }

    for (const id of VALID_COMPETENCY_IDS) {
      const rawVal = parsed[id]
      const numVal = typeof rawVal === 'string' ? parseInt(rawVal, 10) : rawVal
      if (isValidRating(numVal)) {
        result[id] = numVal
        hasAnyValid = true
      }
    }

    return hasAnyValid ? result : null
  } catch {
    return null
  }
}

/**
 * Parsuje cookie z ostatnio aktywną kompetencją.
 */
export function parseActiveCompetencyCookie(raw?: string | null): CompetencyId | null {
  if (!raw) return null
  const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw
  const trimmed = decoded.trim()
  return isValidCompetencyId(trimmed) ? trimmed : null
}

/**
 * Parsuje cookie z wybranymi priorytetami rozwoju.
 */
export function parsePrioritiesCookie(raw?: string | null): CompetencyId[] | null {
  if (!raw) return null
  try {
    const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw
    const parsed = JSON.parse(decoded)
    if (!Array.isArray(parsed)) return null
    const valid = parsed.filter(isValidCompetencyId)
    return valid.length > 0 ? valid : null
  } catch {
    return null
  }
}

// -------------------------------------------------------------
// Funkcje pomocnicze po stronie przeglądarki (Client-side)
// -------------------------------------------------------------

export function getClientCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const cookies = document.cookie.split(';')
  for (const c of cookies) {
    const trimmed = c.trim()
    if (trimmed.startsWith(`${name}=`)) {
      const val = trimmed.slice(name.length + 1)
      try {
        return decodeURIComponent(val)
      } catch {
        return val
      }
    }
  }
  return null
}

export function setClientCookie(name: string, value: string, maxAge = AGW_COOKIE_MAX_AGE): void {
  if (typeof document === 'undefined') return
  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:'
  const secure = isHttps ? '; Secure' : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`
}

export function deleteClientCookie(name: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
}

export function loadAuditRatings(): Record<CompetencyId, Rating> | null {
  return parseRatingsCookie(getClientCookie(AGW_RATINGS_COOKIE))
}

export function saveAuditRatings(ratings: Record<CompetencyId, Rating>): void {
  setClientCookie(AGW_RATINGS_COOKIE, JSON.stringify(ratings))
}

export function loadActiveCompetency(): CompetencyId | null {
  return parseActiveCompetencyCookie(getClientCookie(AGW_ACTIVE_COOKIE))
}

export function saveActiveCompetency(id: CompetencyId): void {
  setClientCookie(AGW_ACTIVE_COOKIE, id)
}

export function loadAuditPriorities(): CompetencyId[] | null {
  return parsePrioritiesCookie(getClientCookie(AGW_PRIORITIES_COOKIE))
}

export function saveAuditPriorities(priorities: CompetencyId[]): void {
  setClientCookie(AGW_PRIORITIES_COOKIE, JSON.stringify(priorities))
}

export function loadAuditCommitment(): string | null {
  const val = getClientCookie(AGW_COMMITMENT_COOKIE)
  return val ? val.slice(0, 1000) : null
}

export function saveAuditCommitment(text: string): void {
  setClientCookie(AGW_COMMITMENT_COOKIE, text.slice(0, 1000))
}

export function loadAuditPlanAccepted(): boolean {
  const val = getClientCookie(AGW_ACCEPTED_COOKIE)
  return val === 'true' || val === '1'
}

export function saveAuditPlanAccepted(accepted: boolean): void {
  setClientCookie(AGW_ACCEPTED_COOKIE, accepted ? 'true' : 'false')
}

export function clearAllAuditCookies(): void {
  deleteClientCookie(AGW_RATINGS_COOKIE)
  deleteClientCookie(AGW_ACTIVE_COOKIE)
  deleteClientCookie(AGW_PRIORITIES_COOKIE)
  deleteClientCookie(AGW_COMMITMENT_COOKIE)
  deleteClientCookie(AGW_ACCEPTED_COOKIE)
}

export const SITE = {
  brand: 'Rafał Kamieniarz',
  tagline: 'Agile Delivery · Engineering Manager',
  domain: 'rafalkamieniarz.com',
  url: 'https://rafalkamieniarz.com',
  email: 'rafal@rafalkamieniarz.com',
  linkedin: 'https://www.linkedin.com/in/rafal-kamieniarz-warsaw',
  location: 'Warszawa',
} as const

export const GROWTH_WHEEL_HREF = '/metodyki-zwinne/agile-growth-wheel'

/**
 * Przełączniki funkcji niegotowych na start strony.
 * Kod pozostaje w repozytorium: wystarczy zmienić wartość na `true`.
 */
export const FEATURES = {
  /** Pełny raport PDF wysyłany na e-mail po samoocenie (formularz + zgody). */
  emailReport: false,
  /** Sekcja „Rekomendowane materiały” przy kompetencjach (treści jeszcze nie opublikowane). */
  resources: false,
} as const

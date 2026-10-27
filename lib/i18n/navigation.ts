import type { Language } from './translations'

export function getLanguageFromPathname(pathname: string): Language {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en'
  }
  return 'pl'
}

export function getAlternateLanguagePath(pathname: string, targetLang: Language): string {
  const currentLang = getLanguageFromPathname(pathname)
  if (currentLang === targetLang) {
    return pathname
  }

  if (targetLang === 'en') {
    // Switching from PL to EN
    if (pathname === '/' || pathname === '') {
      return '/en'
    }
    if (pathname.startsWith('/metodyki-zwinne/agile-growth-wheel')) {
      return '/en/agile-growth-wheel'
    }
    if (pathname.startsWith('/kompetencja/domain-knowledge')) {
      return '/en/competency/domain-knowledge'
    }
    if (pathname.startsWith('/kompetencja/')) {
      return pathname.replace('/kompetencja/', '/en/competency/')
    }
    return `/en${pathname}`
  } else {
    // Switching from EN to PL
    if (pathname === '/en' || pathname === '/en/') {
      return '/'
    }
    if (pathname.startsWith('/en/agile-growth-wheel')) {
      return '/metodyki-zwinne/agile-growth-wheel'
    }
    if (pathname.startsWith('/en/competency/domain-knowledge')) {
      return '/kompetencja/domain-knowledge'
    }
    if (pathname.startsWith('/en/competency/')) {
      return pathname.replace('/en/competency/', '/kompetencja/')
    }
    if (pathname.startsWith('/en/')) {
      return pathname.replace('/en/', '/')
    }
    return '/'
  }
}

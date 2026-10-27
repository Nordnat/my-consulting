'use client'

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { TRANSLATIONS, type Language, type Translations } from './translations'
import { getAlternateLanguagePath, getLanguageFromPathname } from './navigation'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  children,
  initialLanguage = 'pl',
}: {
  children: React.ReactNode
  initialLanguage?: Language
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Derive language from pathname, falling back to initialLanguage
  const activeLanguage = useMemo(() => {
    return getLanguageFromPathname(pathname || '/')
  }, [pathname])

  const [language, setLanguageState] = useState<Language>(activeLanguage || initialLanguage)

  useEffect(() => {
    setLanguageState(activeLanguage)
    document.documentElement.lang = activeLanguage
  }, [activeLanguage])

  const handleSetLanguage = (newLang: Language) => {
    if (newLang === language) return
    setLanguageState(newLang)
    document.documentElement.lang = newLang
    document.cookie = `NEXT_LOCALE=${newLang}; max-age=31536000; path=/; SameSite=Lax`

    const nextPath = getAlternateLanguagePath(pathname || '/', newLang)
    router.push(nextPath)
  }

  const t = useMemo(() => TRANSLATIONS[language], [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    // Graceful fallback if rendered outside provider
    return {
      language: 'pl' as Language,
      setLanguage: () => {},
      t: TRANSLATIONS.pl,
    }
  }
  return ctx
}

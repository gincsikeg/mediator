import { createContext, useContext, useEffect } from 'react'

// Az oldal nyelvei. A magyar a gyökérben van (/rolam), a többi előtaggal (/en/rolam, /it/rolam).
export const LANGS = ['hu', 'en', 'it']

const titles = {
  hu: 'Kis Georgina – pénzügyi mediátor | Budapest',
  en: 'Georgina Kis – financial mediator | Budapest',
  it: 'Georgina Kis – mediatrice finanziaria | Budapest',
}

const LangContext = createContext('hu')

export function LangProvider({ lang, children }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = titles[lang]
  }, [lang])
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

// Egy magyar útvonalból az adott nyelvű útvonal: path('/rolam', 'en') -> '/en/rolam'
export const localePath = (path, lang) => (lang === 'hu' ? path : `/${lang}${path === '/' ? '' : path}`)

export const useLocalePath = () => {
  const lang = useLang()
  return (path) => localePath(path, lang)
}

// Az aktuális útvonal nyelv nélküli (magyar) változata: '/en/rolam' -> '/rolam'
export const stripLang = (pathname) => {
  const m = pathname.match(/^\/(en|it)(\/.*)?$/)
  return m ? m[2] || '/' : pathname
}

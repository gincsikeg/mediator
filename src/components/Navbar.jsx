import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { LANGS, useLang, localePath, stripLang } from '../lib/i18n.jsx'

const text = {
  hu: { about: 'Rólam', services: 'Szolgáltatások', blog: 'Blog', contact: 'Kapcsolat', cta: 'Időpontfoglalás', tag: 'pénzügyi mediátor', menu: 'Menü' },
  en: { about: 'About me', services: 'Services', blog: 'Blog (HU)', contact: 'Contact', cta: 'Book a session', tag: 'financial mediator', menu: 'Menu' },
  it: { about: 'Chi sono', services: 'Servizi', blog: 'Blog (HU)', contact: 'Contatti', cta: 'Prenota', tag: 'mediatrice finanziaria', menu: 'Menu' },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const lang = useLang()
  const t = text[lang]
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  const links = [
    { to: localePath('/rolam', lang), label: t.about },
    { to: localePath('/szolgaltatasok', lang), label: t.services },
    // a blog csak magyarul van
    { to: '/blog', label: t.blog },
    { to: localePath('/kapcsolat', lang), label: t.contact },
  ]

  // Nyelvváltáskor ugyanarra az oldalra visz; a blogról az idegen nyelvű kezdőlapra.
  const current = stripLang(pathname)
  const switchTo = (l) => (l !== 'hu' && current.startsWith('/blog') ? localePath('/', l) : localePath(current, l))

  return (
    <header className="nav">
      <nav className="nav-inner">
        <Link to={localePath('/', lang)} className="brand" onClick={close}>
          <span className="brand-name">Kis Georgina</span>
          <span className="brand-tag">{t.tag}</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={t.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to={localePath('/kapcsolat', lang)} className="btn btn-gold nav-cta" onClick={close}>
            {t.cta}
          </Link>
          <div className="lang-switch">
            {LANGS.map((l) => (
              <Link key={l} to={switchTo(l)} className={l === lang ? 'active' : ''} hrefLang={l} onClick={close}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

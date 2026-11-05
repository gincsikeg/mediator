import { Link } from 'react-router-dom'
import { useLang, localePath } from '../lib/i18n.jsx'

const text = {
  hu: {
    title: 'Ez az oldal nincs meg',
    body: 'Lehet, hogy elírás történt, vagy a tartalom átkerült máshová. Térjünk vissza a biztos pontra.',
    back: 'Vissza a kezdőlapra',
  },
  en: {
    title: 'This page doesn’t exist',
    body: 'There may be a typo, or the content has moved elsewhere. Let’s go back to solid ground.',
    back: 'Back to the home page',
  },
  it: {
    title: 'Questa pagina non esiste',
    body: 'Forse c’è un errore di battitura, oppure il contenuto è stato spostato. Torniamo su un terreno sicuro.',
    back: 'Torna alla home page',
  },
}

export default function NotFound() {
  const lang = useLang()
  const t = text[lang]
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap center">
        <div className="pillar-mark">✦</div>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', marginBottom: 14 }}>{t.title}</h1>
        <p style={{ color: 'var(--muted-2)', maxWidth: 460, margin: '0 auto 28px' }}>{t.body}</p>
        <Link to={localePath('/', lang)} className="btn btn-gold">{t.back}</Link>
      </div>
    </section>
  )
}

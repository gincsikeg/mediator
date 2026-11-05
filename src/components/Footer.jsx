import { Link } from 'react-router-dom'
import { getServices } from '../data/services.js'
import { useLang, localePath } from '../lib/i18n.jsx'

const text = {
  hu: {
    tag: 'pénzügyi mediátor',
    about: 'Gazdasági és magánéleti pénzügyi mediáció, válási és válás utókövetés mediáció Budapesten. Konfliktus helyett közös megoldás – diszkréten, gyorsan, méltósággal.',
    services: 'Szolgáltatások',
    contact: 'Kapcsolat',
    hours: 'Hétfő–Péntek, 8:00–18:00',
    booking: 'Időpontfoglalás',
    rights: 'Minden jog fenntartva.',
    motto: 'Jobb ma egy mediáció, mint holnap egy per.',
  },
  en: {
    tag: 'financial mediator',
    about: 'Commercial and personal financial mediation, divorce and post-divorce follow-up mediation in Budapest. A shared solution instead of conflict – discreetly, quickly, with dignity.',
    services: 'Services',
    contact: 'Contact',
    hours: 'Monday–Friday, 8:00–18:00',
    booking: 'Book a session',
    rights: 'All rights reserved.',
    motto: 'Better a mediation today than a lawsuit tomorrow.',
  },
  it: {
    tag: 'mediatrice finanziaria',
    about: 'Mediazione finanziaria commerciale e privata, mediazione per il divorzio e post-divorzio a Budapest. Una soluzione comune invece del conflitto – con discrezione, rapidità e dignità.',
    services: 'Servizi',
    contact: 'Contatti',
    hours: 'Lunedì–Venerdì, 8:00–18:00',
    booking: 'Prenota',
    rights: 'Tutti i diritti riservati.',
    motto: 'Meglio una mediazione oggi che una causa domani.',
  },
}

export default function Footer() {
  const lang = useLang()
  const t = text[lang]
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-name">Kis Georgina</span>
              <span className="brand-tag">{t.tag}</span>
            </div>
            <p style={{ maxWidth: 320 }}>{t.about}</p>
          </div>

          <div>
            <h5>{t.services}</h5>
            <div className="footer-links">
              {getServices(lang).map((s) => (
                <Link key={s.slug} to={localePath(`/szolgaltatasok/${s.slug}`, lang)}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5>{t.contact}</h5>
            <div className="footer-links">
              <a href="tel:+36706389702">+36 70 638 9702</a>
              <span style={{ color: 'var(--muted)' }}>Budapest</span>
              <span style={{ color: 'var(--muted)' }}>{t.hours}</span>
              <Link to={localePath('/kapcsolat', lang)}>{t.booking}</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kis Georgina · {t.rights}</span>
          <span>{t.motto}</span>
        </div>
      </div>
    </footer>
  )
}

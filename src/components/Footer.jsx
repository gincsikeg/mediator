import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-name">Kis Georgina</span>
              <span className="brand-tag">pénzügyi mediátor</span>
            </div>
            <p style={{ maxWidth: 320 }}>
              Gazdasági és magánéleti pénzügyi mediáció, párkapcsolati és válási
              mediáció Budapesten. Konfliktus helyett közös megoldás – diszkréten,
              gyorsan, méltósággal.
            </p>
          </div>

          <div>
            <h5>Szolgáltatások</h5>
            <div className="footer-links">
              {services.map((s) => (
                <Link key={s.slug} to={`/szolgaltatasok/${s.slug}`}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5>Kapcsolat</h5>
            <div className="footer-links">
              <a href="tel:+36706389702">+36 70 638 9702</a>
              <span style={{ color: 'var(--muted)' }}>Budapest</span>
              <span style={{ color: 'var(--muted)' }}>Hétfő–Péntek, 8:00–18:00</span>
              <Link to="/kapcsolat">Időpontfoglalás</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kis Georgina · Minden jog fenntartva.</span>
          <span>Jobb ma egy mediáció, mint holnap egy per.</span>
        </div>
      </div>
    </footer>
  )
}

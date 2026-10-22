import { Link } from 'react-router-dom'
import { img } from '../lib/asset.js'
import { services } from '../data/services.js'

const pillars = [
  ['₣', 'Drasztikus megtakarítás', 'Fix, előre tervezhető díj. Az esetek többsége napok vagy hetek alatt lezárul.'],
  ['✦', 'A legféltettebb kincs', '100% diszkréció. A hírnév védve marad – semmi nem jut el a versenytársakhoz.'],
  ['∞', 'Win-win, nem win-lose', 'A megállapodást a felek dolgozzák ki. Megmaradnak a jövőbeli együttműködések.'],
]

export default function Home() {
  return (
    <>
      {/* HERO – 1b */}
      <section className="hero">
        <img className="hero-img" src={img('gina-portrait.png')} alt="Kis Georgina pénzügyi mediátor" />
        <div className="hero-veil" />
        <div className="wrap">
          <div className="hero-content">
            <span className="eyebrow eyebrow-line">Pénzügyi · gazdasági · válási · párkapcsolati mediátor</span>
            <h1>
              Jobb ma egy<br />mediáció, mint<br />
              <em>holnap egy per!</em>
            </h1>
            <p className="hero-sub">
              A legsikeresebb vállalatok és a legerősebb párok már nem győzni akarnak –
              megoldani a problémát. Diszkréten, méltósággal, a bírósági kapuk előtt.
            </p>
            <div className="hero-actions">
              <Link to="/kapcsolat" className="btn btn-gold">Kérek egy beszélgetést</Link>
              <a href="tel:+36706389702" className="btn btn-outline">+36 70 638 9702</a>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Miért mediáció a XXI. század üzleti fegyvere?</span>
          </div>
          <div className="pillars">
            {pillars.map(([mark, title, text]) => (
              <div className="pillar" key={title}>
                <div className="pillar-mark">{mark}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Mediációs szolgáltatásaink</span>
            <h2>Egy módszer minden helyzetre</h2>
            <p>Akár üzleti vita, akár egy párkapcsolati csomó vagy egy szervezeti elakadás – ugyanaz a nyugodt, közvetítő hozzáállás.</p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <Link className="svc-card" to={`/szolgaltatasok/${s.slug}`} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <span className="eyebrow">{s.tagline}</span>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">Tovább →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>Telefonos konzultáció, bejelentkezés.</h3>
          </div>
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>
    </>
  )
}

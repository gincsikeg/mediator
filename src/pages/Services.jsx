import { Link } from 'react-router-dom'
import { services, pricing } from '../data/services.js'
import { img } from '../lib/asset.js'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">Szolgáltatások</span>
          <p>
            A pénzügyi és gazdasági mediációtól a párkapcsolati és válási helyzeteken
            át a szervezeti átvilágításig és a faültető csapatépítésig – mindegyikben a
            tiszta kép és a méltányos megegyezés a tét.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <Link className="svc-card" to={`/szolgaltatasok/${s.slug}`} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <span className="eyebrow">{s.tagline}</span>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">Részletek →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* detailed sections stacked */}
      {services.map((s, i) => (
        <section className={`section${i % 2 === 0 ? ' section-dark' : ''}`} key={s.slug} id={s.slug}>
          <div className="wrap">
            <div className={s.image ? 'split' : ''}>
              {i % 2 === 1 && s.image && (
                <div className="split-img">
                  <img src={img(s.image)} alt={s.label} />
                </div>
              )}
              <div>
                <span className="eyebrow">{s.tagline}</span>
                <h2>{s.label}</h2>
                {[].concat(s.intro).map((t, j) => (
                  <p className="lead" key={j}>{t}</p>
                ))}
                <Link to={`/szolgaltatasok/${s.slug}`} className="btn btn-dark" style={{ marginTop: 10 }}>
                  Bővebben erről →
                </Link>
              </div>
              {i % 2 === 0 && s.image && (
                <div className="split-img">
                  <img src={img(s.image)} alt={s.label} />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Árak</span>
            <h2>Átlátható, előre tervezhető díjak</h2>
          </div>
          <div className="pricing">
            {pricing.map(([name, price]) => (
              <div className="price-row" key={name}>
                <span className="price-name">{name}</span>
                <span className="price-dots" aria-hidden="true" />
                <span className="price-value">{price}</span>
              </div>
            ))}
          </div>
          <p className="center" style={{ color: 'var(--muted)', fontSize: 14.5, marginTop: 24 }}>
            Az első konzultáció ingyenes és semmire nem kötelez.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>Nem biztos, melyik illik a helyzetedhez?</h3>
            <p>Írj vagy hívj – egy rövid beszélgetésen kiderül.</p>
          </div>
          <Link to="/kapcsolat" className="btn btn-gold">Egyeztetek</Link>
        </div>
      </section>
    </>
  )
}

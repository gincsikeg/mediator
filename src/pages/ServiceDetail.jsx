import { useParams, Link } from 'react-router-dom'
import { getService, services } from '../data/services.js'
import { img } from '../lib/asset.js'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">{service.tagline}</span>
          <h1>{service.label}</h1>
          <p>{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={service.image ? 'split' : ''}>
            <div>
              <span className="eyebrow">Miről szól?</span>
              {[].concat(service.intro).map((t, j) => (
                <p className="lead" style={{ marginTop: 12 }} key={j}>{t}</p>
              ))}
            </div>
            {service.image && (
              <div className="split-img">
                <img src={img(service.image)} alt={service.label} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Kinek szól?</span>
              <h2 style={{ margin: '12px 0 20px' }}>Ez a szolgáltatás neked való, ha…</h2>
              <ul className="check-list">
                {service.forWhom.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">A folyamat</span>
              <div className="steps" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 20 }}>
                {service.steps.map(([title, text], i) => (
                  <div className="step" key={title}>
                    <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>Foglalj időpontot telefonon.</h3>
          </div>
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">További szolgáltatások</span>
          </div>
          <div className="svc-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {others.map((s) => (
              <Link className="svc-card" to={`/szolgaltatasok/${s.slug}`} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">Tovább →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

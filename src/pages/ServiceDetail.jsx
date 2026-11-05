import { useParams, Link } from 'react-router-dom'
import { getService, getServices } from '../data/services.js'
import { img } from '../lib/asset.js'
import { useLang, localePath } from '../lib/i18n.jsx'
import NotFound from './NotFound.jsx'

const text = {
  hu: {
    about: 'Miről szól?',
    forWhom: 'Kinek szól?',
    forWhomTitle: 'Ez a szolgáltatás neked való, ha…',
    process: 'A folyamat',
    band: 'Foglalj időpontot telefonon.',
    others: 'További szolgáltatások',
    more: 'Tovább →',
  },
  en: {
    about: 'What is it about?',
    forWhom: 'Who is it for?',
    forWhomTitle: 'This service is for you if…',
    process: 'The process',
    band: 'Book an appointment by phone.',
    others: 'Other services',
    more: 'More →',
  },
  it: {
    about: 'Di cosa si tratta?',
    forWhom: 'A chi si rivolge?',
    forWhomTitle: 'Questo servizio fa per Lei se…',
    process: 'Il percorso',
    band: 'Prenoti un appuntamento per telefono.',
    others: 'Altri servizi',
    more: 'Scopri →',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const lang = useLang()
  const t = text[lang]
  const service = getService(slug, lang)
  if (!service) return <NotFound />

  const others = getServices(lang).filter((s) => s.slug !== slug)

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
              <span className="eyebrow">{t.about}</span>
              {[].concat(service.intro).map((p, j) => (
                <p className="lead" style={{ marginTop: 12 }} key={j}>{p}</p>
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
              <span className="eyebrow">{t.forWhom}</span>
              <h2 style={{ margin: '12px 0 20px' }}>{t.forWhomTitle}</h2>
              <ul className="check-list">
                {service.forWhom.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">{t.process}</span>
              <div className="steps" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 20 }}>
                {service.steps.map(([title, body], i) => (
                  <div className="step" key={title}>
                    <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                    <h4>{title}</h4>
                    <p>{body}</p>
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
            <h3>{t.band}</h3>
          </div>
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">{t.others}</span>
          </div>
          <div className="svc-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {others.map((s) => (
              <Link className="svc-card" to={localePath(`/szolgaltatasok/${s.slug}`, lang)} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">{t.more}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { getServices, getPricing } from '../data/services.js'
import { img } from '../lib/asset.js'
import { useLang, localePath } from '../lib/i18n.jsx'

const text = {
  hu: {
    eyebrow: 'Szolgáltatások',
    intro: 'A pénzügyi és gazdasági mediációtól a válási és válás utáni helyzeteken át a szervezeti átvilágításig és a faültető csapatépítésig – mindegyikben a tiszta kép és a méltányos megegyezés a tét.',
    details: 'Részletek →',
    more: 'Bővebben erről →',
    pricesHead: 'Árak',
    pricesTitle: 'Átlátható, előre tervezhető díjak',
    bandTitle: 'Nem biztos, melyik illik a helyzetedhez?',
    bandText: 'Írj vagy hívj – egy rövid beszélgetésen kiderül.',
    bandCta: 'Egyeztetek',
  },
  en: {
    eyebrow: 'Services',
    intro: 'From financial and commercial mediation, through divorce and post-divorce situations, to organisational reviews and tree-planting team building – in every case, what matters is a clear picture and a fair agreement.',
    details: 'Details →',
    more: 'Read more →',
    pricesHead: 'Fees',
    pricesTitle: 'Transparent, predictable fees',
    bandTitle: 'Not sure which one fits your situation?',
    bandText: 'Write or call – a short conversation will tell.',
    bandCta: 'Get in touch',
  },
  it: {
    eyebrow: 'Servizi',
    intro: 'Dalla mediazione finanziaria e commerciale, passando per le situazioni di divorzio e post-divorzio, fino alla revisione organizzativa e al team building con piantumazione di alberi – in ogni caso ciò che conta è un quadro chiaro e un accordo equo.',
    details: 'Dettagli →',
    more: 'Scopri di più →',
    pricesHead: 'Tariffe',
    pricesTitle: 'Tariffe trasparenti e prevedibili',
    bandTitle: 'Non sa quale servizio fa al caso Suo?',
    bandText: 'Scriva o chiami: basta una breve conversazione per capirlo.',
    bandCta: 'Contattami',
  },
}

export default function Services() {
  const lang = useLang()
  const t = text[lang]
  const services = getServices(lang)
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">{t.eyebrow}</span>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s) => (
              <Link className="svc-card" to={localePath(`/szolgaltatasok/${s.slug}`, lang)} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <span className="eyebrow">{s.tagline}</span>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">{t.details}</span>
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
                {[].concat(s.intro).map((p, j) => (
                  <p className="lead" key={j}>{p}</p>
                ))}
                <Link to={localePath(`/szolgaltatasok/${s.slug}`, lang)} className="btn btn-dark" style={{ marginTop: 10 }}>
                  {t.more}
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
            <span className="eyebrow">{t.pricesHead}</span>
            <h2>{t.pricesTitle}</h2>
          </div>
          <div className="pricing">
            {getPricing(lang).map(([name, price]) => (
              <div className="price-row" key={name}>
                <span className="price-name">{name}</span>
                <span className="price-dots" aria-hidden="true" />
                <span className="price-value">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>{t.bandTitle}</h3>
            <p>{t.bandText}</p>
          </div>
          <Link to={localePath('/kapcsolat', lang)} className="btn btn-gold">{t.bandCta}</Link>
        </div>
      </section>
    </>
  )
}

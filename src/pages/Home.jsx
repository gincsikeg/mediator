import { Link } from 'react-router-dom'
import { img } from '../lib/asset.js'
import { getServices } from '../data/services.js'
import { useLang, localePath } from '../lib/i18n.jsx'

const text = {
  hu: {
    alt: 'Kis Georgina pénzügyi mediátor',
    eyebrow: 'Pénzügyi · gazdasági · válási mediátor',
    title: <>Jobb ma egy<br />mediáció, mint<br /><em>holnap egy per!</em></>,
    sub: 'A legsikeresebb vállalatok és a legerősebb párok már nem győzni akarnak – megoldani a problémát. Diszkréten, méltósággal, a bírósági kapuk előtt.',
    cta: 'Kérek egy beszélgetést',
    pillarsHead: 'Miért mediáció a XXI. század üzleti fegyvere?',
    pillars: [
      ['₣', 'Drasztikus megtakarítás', 'Fix, előre tervezhető díj. Az esetek többsége napok vagy hetek alatt lezárul.'],
      ['✦', 'A legféltettebb kincs', '100% diszkréció. A hírnév védve marad – semmi nem jut el a versenytársakhoz.'],
      ['∞', 'Win-win, nem win-lose', 'A megállapodást a felek dolgozzák ki. Megmaradnak a jövőbeli együttműködések.'],
    ],
    servicesHead: 'Mediációs szolgáltatásaink',
    servicesTitle: 'Egy módszer minden helyzetre',
    servicesText: 'Akár üzleti vita, akár egy válás utáni csomó vagy egy szervezeti elakadás – ugyanaz a nyugodt, közvetítő hozzáállás.',
    more: 'Tovább →',
    band: 'Telefonos konzultáció, bejelentkezés.',
  },
  en: {
    alt: 'Georgina Kis, financial mediator',
    eyebrow: 'Financial · commercial · divorce mediator',
    title: <>Better a<br />mediation today<br /><em>than a lawsuit tomorrow!</em></>,
    sub: 'The most successful companies and the strongest couples no longer want to win – they want to solve the problem. Discreetly, with dignity, before it reaches the courtroom.',
    cta: 'Request a conversation',
    pillarsHead: 'Why is mediation the business tool of the 21st century?',
    pillars: [
      ['₣', 'Significant savings', 'A fixed, predictable fee. Most cases are closed within days or weeks.'],
      ['✦', 'Your most precious asset', '100% discretion. Your reputation stays protected – nothing reaches your competitors.'],
      ['∞', 'Win-win, not win-lose', 'The agreement is worked out by the parties themselves, so future cooperation is preserved.'],
    ],
    servicesHead: 'Our mediation services',
    servicesTitle: 'One approach for every situation',
    servicesText: 'Whether it’s a business dispute, a knot left after divorce or a blockage within an organisation – the same calm, mediating approach.',
    more: 'More →',
    band: 'Phone consultation and appointments.',
  },
  it: {
    alt: 'Georgina Kis, mediatrice finanziaria',
    eyebrow: 'Mediatrice finanziaria · commerciale · per il divorzio',
    title: <>Meglio una<br />mediazione oggi<br /><em>che una causa domani!</em></>,
    sub: 'Le aziende di maggior successo e le coppie più solide non vogliono più vincere, ma risolvere il problema. Con discrezione e dignità, prima di arrivare in tribunale.',
    cta: 'Chiedo un colloquio',
    pillarsHead: 'Perché la mediazione è lo strumento d’impresa del XXI secolo?',
    pillars: [
      ['₣', 'Un risparmio notevole', 'Una tariffa fissa e prevedibile. La maggior parte dei casi si chiude in giorni o settimane.'],
      ['✦', 'Il bene più prezioso', 'Discrezione al 100%. La reputazione resta protetta – nulla arriva ai concorrenti.'],
      ['∞', 'Win-win, non win-lose', 'L’accordo è elaborato dalle parti stesse, così le collaborazioni future restano possibili.'],
    ],
    servicesHead: 'I nostri servizi di mediazione',
    servicesTitle: 'Un unico metodo per ogni situazione',
    servicesText: 'Che si tratti di una controversia d’affari, di un nodo rimasto dopo il divorzio o di un blocco in un’organizzazione – lo stesso approccio calmo e di mediazione.',
    more: 'Scopri →',
    band: 'Consulenza telefonica e appuntamenti.',
  },
}

export default function Home() {
  const lang = useLang()
  const t = text[lang]
  return (
    <>
      {/* HERO – 1b */}
      <section className="hero">
        <img className="hero-img" src={img('gina-portrait.png')} alt={t.alt} />
        <div className="hero-veil" />
        <div className="wrap">
          <div className="hero-content">
            <span className="eyebrow eyebrow-line">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="hero-actions">
              <Link to={localePath('/kapcsolat', lang)} className="btn btn-gold">{t.cta}</Link>
              <a href="tel:+36706389702" className="btn btn-outline">+36 70 638 9702</a>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.pillarsHead}</span>
          </div>
          <div className="pillars">
            {t.pillars.map(([mark, title, body]) => (
              <div className="pillar" key={title}>
                <div className="pillar-mark">{mark}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.servicesHead}</span>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>
          <div className="svc-grid">
            {getServices(lang).map((s) => (
              <Link className="svc-card" to={localePath(`/szolgaltatasok/${s.slug}`, lang)} key={s.slug}>
                <div className="svc-mark">{s.symbol}</div>
                <span className="eyebrow">{s.tagline}</span>
                <h3>{s.label}</h3>
                <p>{s.short}</p>
                <span className="svc-more">{t.more}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>{t.band}</h3>
          </div>
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>
    </>
  )
}

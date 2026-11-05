import { Link } from 'react-router-dom'
import { img } from '../lib/asset.js'
import { useLang, localePath } from '../lib/i18n.jsx'

const text = {
  hu: {
    intro: [
      'A mediáció egy önkéntes, bíróságon kívüli konfliktuskezelési módszer, amelynek során a vitában álló felek egy semleges, pártatlan harmadik személy – a mediátor – támogatásával megegyezésre jutnak.',
      'Az élet tele van konfliktussal, de a mi kezünkben van az ecset. Ha most lefestené a bánatát, milyen színre festené? Nálam van a paletta hozzá. Jöjjön el mediációra, vagy tanácsadásra.',
    ],
    eyebrow: 'Kis Georgina pénzügyi, válási mediátor',
    lead: 'Vízióm a tisztánlátás, őszinteség, hiszem, hogy a kezeletlen konfliktus profit- és kapcsolatgyilkos.',
    bio: [
      'Mediátor gyakorlati képzésemet mentoromnál, Komán Csilla mediátornál szereztem. Az Umathum mediátor akadémia alap- és haladó képzését követően különösen foglalkoztatott a mediáció pénzügyi vetülete. Válási mediátorként különösen fontos a gyermekek érdekei mellett a pénzügyi szempontokat is figyelemmel kísérni és kezelni.',
      '2024 óta az Igazságügyi Minisztérium közvetítői jegyzékében bejegyzett mediátorként szerepelek. Angolul és olaszul is mediálok.',
      'Évtizedes pénzintézeti auditor és projektmenedzsment tapasztalatot szereztem, valamint a KKV szektor pénzügyi átvilágításával is foglalkozom.',
      'Pénzügyi mesterdiplomámat és fenntarthatósági végzettségemet a Corvinus Egyetemen szereztem.',
      'Szívügyem a faültetés, melyet önkéntesként végzek.',
    ],
    question: 'Van egy helyzet, ami megérett arra, hogy külső támogatást kérj?',
    booking: 'Időpontegyeztetés:',
    cta: 'Ismerjük meg egymást',
    valuesHead: 'Amiben hiszek',
    valuesTitle: 'Három érték, ami minden ügyet átsző',
    values: [
      ['◈', 'Pártatlanság', 'Nem az egyik fél oldalán állok, hanem a megoldásén. Mindkét szempont egyformán számít.'],
      ['✦', 'Hatékonyság', 'A felek közötti megállapodásról igény szerint dokumentumot készítek, melyet a bíróság már csak jóváhagy, így csökkenthető a tárgyalások száma.'],
      ['♡', 'Emberség', 'A számok mögött mindig emberek állnak. Higgadt, ítélkezésmentes légkört teremtek.'],
    ],
    bandTitle: 'Van egy helyzet, amiben elakadtatok?',
    bandText: 'Telefonos konzultáció, időpontegyeztetés.',
  },
  en: {
    intro: [
      'Mediation is a voluntary, out-of-court method of resolving conflict, in which the parties to a dispute reach an agreement with the support of a neutral, impartial third person – the mediator.',
      'Life is full of conflict, but the brush is in our hands. If you were to paint your sorrow right now, what colour would it be? I have the palette for it. Come for mediation or for a consultation.',
    ],
    eyebrow: 'Georgina Kis, financial and divorce mediator',
    lead: 'My vision is clarity and honesty. I believe that unresolved conflict kills both profit and relationships.',
    bio: [
      'I completed my practical mediator training with my mentor, mediator Csilla Komán. After the basic and advanced courses of the Umathum Mediator Academy, I became especially interested in the financial side of mediation. As a divorce mediator, I consider it particularly important to keep track of and manage the financial aspects alongside the interests of the children.',
      'Since 2024 I have been a registered mediator in the register of mediators of the Hungarian Ministry of Justice. I also mediate in English and Italian.',
      'I have a decade of experience as an auditor and project manager at financial institutions, and I also carry out financial reviews of small and medium-sized enterprises.',
      'I earned my master’s degree in finance and my qualification in sustainability at Corvinus University of Budapest.',
      'Tree planting is close to my heart – I do it as a volunteer.',
    ],
    question: 'Is there a situation that is ready for some outside support?',
    booking: 'Appointments:',
    cta: 'Let’s get to know each other',
    valuesHead: 'What I believe in',
    valuesTitle: 'Three values woven into every case',
    values: [
      ['◈', 'Impartiality', 'I don’t stand on either party’s side, but on the side of the solution. Both perspectives matter equally.'],
      ['✦', 'Efficiency', 'On request, I prepare a document of the parties’ agreement which the court only needs to approve – reducing the number of hearings.'],
      ['♡', 'Humanity', 'There are always people behind the numbers. I create a calm, non-judgemental atmosphere.'],
    ],
    bandTitle: 'Stuck in a situation?',
    bandText: 'Phone consultation and appointments.',
  },
  it: {
    intro: [
      'La mediazione è un metodo volontario e stragiudiziale di gestione dei conflitti, in cui le parti in disputa raggiungono un accordo con il supporto di una terza persona neutrale e imparziale: il mediatore.',
      'La vita è piena di conflitti, ma il pennello è nelle nostre mani. Se dovesse dipingere ora il Suo dolore, di che colore lo dipingerebbe? Io ho la tavolozza giusta. Venga per una mediazione o per una consulenza.',
    ],
    eyebrow: 'Georgina Kis, mediatrice finanziaria e per il divorzio',
    lead: 'La mia visione è la chiarezza e la sincerità: credo che un conflitto non gestito uccida sia il profitto sia le relazioni.',
    bio: [
      'Ho svolto la mia formazione pratica di mediatrice con la mia mentore, la mediatrice Csilla Komán. Dopo i corsi base e avanzato dell’Accademia di Mediazione Umathum, mi sono interessata in particolare agli aspetti finanziari della mediazione. Come mediatrice per il divorzio, ritengo particolarmente importante seguire e gestire, oltre agli interessi dei figli, anche gli aspetti economici.',
      'Dal 2024 sono iscritta come mediatrice nel registro dei mediatori del Ministero della Giustizia ungherese. Svolgo mediazioni anche in inglese e in italiano.',
      'Ho maturato dieci anni di esperienza come revisore e project manager presso istituti finanziari e mi occupo anche della revisione finanziaria di piccole e medie imprese.',
      'Ho conseguito la laurea magistrale in finanza e la formazione in sostenibilità presso l’Università Corvinus di Budapest.',
      'La piantumazione di alberi mi sta a cuore: la svolgo come volontaria.',
    ],
    question: 'C’è una situazione che è pronta per un supporto esterno?',
    booking: 'Appuntamenti:',
    cta: 'Conosciamoci',
    valuesHead: 'In cosa credo',
    valuesTitle: 'Tre valori che attraversano ogni caso',
    values: [
      ['◈', 'Imparzialità', 'Non sto dalla parte di nessuno, ma dalla parte della soluzione. Entrambi i punti di vista contano allo stesso modo.'],
      ['✦', 'Efficienza', 'Su richiesta preparo un documento dell’accordo tra le parti che il tribunale deve solo approvare, riducendo così il numero delle udienze.'],
      ['♡', 'Umanità', 'Dietro i numeri ci sono sempre delle persone. Creo un clima sereno e privo di giudizio.'],
    ],
    bandTitle: 'Siete bloccati in una situazione?',
    bandText: 'Consulenza telefonica e appuntamenti.',
  },
}

export default function About() {
  const lang = useLang()
  const t = text[lang]
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          {t.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">{t.eyebrow}</span>
              <p className="lead">{t.lead}</p>
              {t.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                {t.question}
                <br />
                {t.booking} <a href="tel:+36706389702">+36706389702</a>
              </p>
              <Link to={localePath('/kapcsolat', lang)} className="btn btn-gold" style={{ marginTop: 12 }}>
                {t.cta}
              </Link>
            </div>
            <div className="split-img">
              <img src={img('gina-about.jpg')} alt="Kis Georgina" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.valuesHead}</span>
            <h2>{t.valuesTitle}</h2>
          </div>
          <div className="values">
            {t.values.map(([mark, title, body]) => (
              <div className="value" key={title}>
                <div className="value-mark">{mark}</div>
                <h4>{title}</h4>
                <p>{body}</p>
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
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>
    </>
  )
}

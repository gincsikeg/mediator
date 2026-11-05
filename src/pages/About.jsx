import { Link } from 'react-router-dom'
import { img } from '../lib/asset.js'

const values = [
  ['◈', 'Pártatlanság', 'Nem az egyik fél oldalán állok, hanem a megoldásén. Mindkét szempont egyformán számít.'],
  ['✦', 'Hatékonyság', 'A felek közötti megállapodásról igény szerint dokumentumot készítek, melyet a bíróság már csak jóváhagy, így csökkenthető a tárgyalások száma.'],
  ['♡', 'Emberség', 'A számok mögött mindig emberek állnak. Higgadt, ítélkezésmentes légkört teremtek.'],
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p>
            A mediáció egy önkéntes, bíróságon kívüli konfliktuskezelési módszer,
            amelynek során a vitában álló felek egy semleges, pártatlan harmadik
            személy – a mediátor – támogatásával megegyezésre jutnak.
          </p>
          <p>
            Az élet tele van konfliktussal, de a mi kezünkben van az ecset. Ha most
            lefestené a bánatát, milyen színre festené? Nálam van a paletta hozzá.
            Jöjjön el mediációra, vagy tanácsadásra.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Kis Georgina pénzügyi, válási mediátor</span>
              <p className="lead">
                Vízióm a tisztánlátás, őszinteség, hiszem, hogy a kezeletlen konfliktus
                profit- és kapcsolatgyilkos.
              </p>
              <p>
                Mediátor gyakorlati képzésemet mentoromnál, Komán Csilla mediátornál
                szereztem. Az Umathum mediátor alap- és haladó képzését követően
                különösen foglalkoztatott a mediáció pénzügyi vetülete. 2024 óta az
                Igazságügyi Minisztérium közvetítői jegyzékében bejegyzett mediátorként
                szerepelek. Angolul és olaszul is mediálok.
              </p>
              <p>
                Évtizedes pénzintézeti auditor és projektmenedzsment tapasztalatot
                szereztem, jelenleg a KKV szektor pénzügyi átvilágításával foglalkozom.
              </p>
              <p>
                Válási mediátorként különösen fontos a gyermekek érdekei mellett a
                pénzügyi szempontokat is figyelemmel kísérni és kezelni.
              </p>
              <p>
                Pénzügyi mesterdiplomámat és fenntarthatósági végzettségemet a Corvinus
                Egyetemen szereztem. Faültető önkéntes vagyok.
              </p>
              <p>
                Van egy helyzet, ami megérett arra, hogy külső támogatást kérj?
                Időpontegyeztetés: <a href="tel:+36706389702">+36706389702</a>
              </p>
              <Link to="/kapcsolat" className="btn btn-gold" style={{ marginTop: 12 }}>
                Ismerjük meg egymást
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
            <span className="eyebrow">Amiben hiszek</span>
            <h2>Három érték, ami minden ügyet átsző</h2>
          </div>
          <div className="values">
            {values.map(([mark, title, text]) => (
              <div className="value" key={title}>
                <div className="value-mark">{mark}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>Van egy helyzet, amiben elakadtatok?</h3>
            <p>Telefonos konzultáció, időpontegyeztetés.</p>
          </div>
          <a href="tel:+36706389702" className="btn btn-gold">+36 70 638 9702</a>
        </div>
      </section>
    </>
  )
}

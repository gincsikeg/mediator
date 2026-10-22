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
          <span className="eyebrow eyebrow-line">Rólam</span>
          <h1>A közvetítő, aki a<br />megoldásban hisz.</h1>
          <p>
            „Az Önök élete és kapcsolatai egy olyan vászon, amelyet a konfliktusok
            elszürkíthetnek ugyan, de a paletta és az ecsetek továbbra is az Önök
            kezében vannak. Mediátorként nem én mondom meg, milyen legyen a kép, és
            nem hozok szabályokat. Az én feladatom az, hogy tiszta lapot biztosítsak,
            és lehetőséget teremtsek újra felfedezni a végtelen lehetőségeket. Együtt
            képesek vagyunk feloldani a korlátokat, hogy Önök olyan megoldást
            fessenek meg, amelyben újra otthonosan és békében érezhetik magukat.”
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">A hátterem</span>
              <p className="lead">
                Mediátorként hajtóerőm, hogy minden szituációban tisztán lássák a felek
                önmagukat. A kapcsolatok, folyamatok, hatáskörök és pénzügyek
                tisztázatlansága, valamint a kezeletlen konfliktus profit- és
                kapcsolatgyilkos.
              </p>
              <p>
                Évtizedes pénzintézeti auditori és projektmenedzsment háttérrel
                rendelkezem, KKV-k pénzügyi átvilágítása során szereztem tapasztalatomat.
              </p>
              <p>
                Mesterdiplomámat pénzügyből szereztem, kereskedelmi és fenntarthatósági
                tanulmányokat folytattam. Mediátori végzettségemet az Umathum Mediátor
                Akadémián szereztem. Komán Csillánál mediációs és üzleti gyakorlati
                képzésben mélyedtem el, aki jelenleg is a mentorom. 2024 óta működöm az
                Igazságügyi Minisztérium névjegyzékében bejegyzett mediátorként.
              </p>
              <p>
                Budapesten dolgozom, hétköznap 8:00 és 18:00 között, személyesen és
                online egyaránt. Mediálok angolul és olaszul is, és faültető önkéntes
                vagyok.
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

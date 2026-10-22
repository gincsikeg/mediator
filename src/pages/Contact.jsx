import { useState } from 'react'
import { services } from '../data/services.js'

// 📧 Ide írd be Georgina e-mail címét, ha szeretnéd, hogy az űrlap
// levélként is megnyíljon a küldés gombra. Ha üresen hagyod, csak a
// köszönő üzenet jelenik meg. (Statikus oldal – valódi beküldéshez
// pl. a Formspree.io ingyenes szolgáltatása használható, lásd README.)
const EMAIL = ''

const info = [
  ['✆', 'Telefon', '+36 70 638 9702', 'tel:+36706389702'],
  ['⌖', 'Helyszín', 'Budapest · személyesen és online', null],
  ['◷', 'Elérhetőség', 'Hétfő–Péntek, 8:00–18:00', null],
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: services[0].label, message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (EMAIL) {
      const subject = encodeURIComponent(`Időpontkérés – ${form.topic}`)
      const body = encodeURIComponent(
        `Név: ${form.name}\nE-mail: ${form.email}\nTelefon: ${form.phone}\nTéma: ${form.topic}\n\n${form.message}`
      )
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">Kapcsolat</span>
          <h1>Időpontfoglalás.</h1>
          <p>
            Írj az űrlapon, vagy hívj közvetlenül – hétköznap 8:00 és 18:00 között
            elérsz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              {info.map(([mark, label, val, href]) => (
                <div className="info-row" key={label}>
                  <span className="info-mark">{mark}</span>
                  <div>
                    <div className="info-label">{label}</div>
                    {href ? (
                      <a className="info-val" href={href}>{val}</a>
                    ) : (
                      <div className="info-val">{val}</div>
                    )}
                  </div>
                </div>
              ))}
              <p style={{ color: 'var(--muted)', fontSize: 14.5, marginTop: 22 }}>
                Minden beszélgetés bizalmas. A titoktartás a mediációban törvényi
                kötelezettség – amit megosztasz, az köztünk marad.
              </p>
            </div>

            <div>
              {sent ? (
                <div className="form">
                  <div className="form-success">
                    <div className="value-mark">✦</div>
                    <h3>Köszönöm a megkeresést!</h3>
                    <p>
                      {EMAIL
                        ? 'Megnyílt a leveleződ az előre kitöltött üzenettel – küldd el, és hamarosan válaszolok.'
                        : 'Hamarosan felveszem veled a kapcsolatot. Ha sürgős, hívj a +36 70 638 9702 számon.'}
                    </p>
                    <button className="btn btn-outline" style={{ marginTop: 10 }} onClick={() => setSent(false)}>
                      Új üzenet
                    </button>
                  </div>
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Név</label>
                    <input id="name" required value={form.name} onChange={update('name')} placeholder="Teljes név" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="pelda@email.hu" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} placeholder="+36 ..." />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">Milyen ügyben keresel?</label>
                    <select id="topic" value={form.topic} onChange={update('topic')}>
                      {services.map((s) => (
                        <option key={s.slug} value={s.label}>{s.label}</option>
                      ))}
                      <option value="Egyéb / még nem tudom">Egyéb / még nem tudom</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Üzenet</label>
                    <textarea id="message" required value={form.message} onChange={update('message')} placeholder="Írj pár mondatot a helyzetedről…" />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    Üzenet küldése
                  </button>
                  <p className="form-note">A küldés gombbal elfogadod, hogy felveszem veled a kapcsolatot.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

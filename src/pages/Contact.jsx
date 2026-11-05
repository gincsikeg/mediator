import { useState } from 'react'
import { getServices } from '../data/services.js'
import { useLang } from '../lib/i18n.jsx'

// 📧 Ide írd be Georgina e-mail címét, ha szeretnéd, hogy az űrlap
// levélként is megnyíljon a küldés gombra. Ha üresen hagyod, csak a
// köszönő üzenet jelenik meg. (Statikus oldal – valódi beküldéshez
// pl. a Formspree.io ingyenes szolgáltatása használható, lásd README.)
const EMAIL = ''

const text = {
  hu: {
    eyebrow: 'Kapcsolat',
    title: 'Időpontfoglalás.',
    intro: 'Írj az űrlapon, vagy hívj közvetlenül – hétköznap 8:00 és 18:00 között elérsz.',
    info: [
      ['✆', 'Telefon', '+36 70 638 9702', 'tel:+36706389702'],
      ['⌖', 'Helyszín', 'Budapest · személyesen és online', null],
      ['◷', 'Elérhetőség', 'Hétfő–Péntek, 8:00–18:00', null],
    ],
    confidential: 'Minden beszélgetés bizalmas. A titoktartás a mediációban törvényi kötelezettség – amit megosztasz, az köztünk marad.',
    thanks: 'Köszönöm a megkeresést!',
    sentMail: 'Megnyílt a leveleződ az előre kitöltött üzenettel – küldd el, és hamarosan válaszolok.',
    sentNoMail: 'Hamarosan felveszem veled a kapcsolatot. Ha sürgős, hívj a +36 70 638 9702 számon.',
    newMessage: 'Új üzenet',
    name: 'Név',
    namePh: 'Teljes név',
    email: 'E-mail',
    emailPh: 'pelda@email.hu',
    phone: 'Telefon',
    topic: 'Milyen ügyben keresel?',
    other: 'Egyéb / még nem tudom',
    message: 'Üzenet',
    messagePh: 'Írj pár mondatot a helyzetedről…',
    send: 'Üzenet küldése',
    note: 'A küldés gombbal elfogadod, hogy felveszem veled a kapcsolatot.',
    subject: 'Időpontkérés',
    mail: ['Név', 'E-mail', 'Telefon', 'Téma'],
  },
  en: {
    eyebrow: 'Contact',
    title: 'Book a session.',
    intro: 'Use the form or call me directly – you can reach me on weekdays between 8:00 and 18:00 (CET).',
    info: [
      ['✆', 'Phone', '+36 70 638 9702', 'tel:+36706389702'],
      ['⌖', 'Location', 'Budapest · in person and online', null],
      ['◷', 'Availability', 'Monday–Friday, 8:00–18:00', null],
    ],
    confidential: 'Every conversation is confidential. Confidentiality is a legal obligation in mediation – what you share stays between us.',
    thanks: 'Thank you for getting in touch!',
    sentMail: 'Your email app has opened with a pre-filled message – send it and I will reply soon.',
    sentNoMail: 'I will get back to you soon. If it’s urgent, please call +36 70 638 9702.',
    newMessage: 'New message',
    name: 'Name',
    namePh: 'Full name',
    email: 'Email',
    emailPh: 'name@example.com',
    phone: 'Phone',
    topic: 'What is it about?',
    other: 'Other / not sure yet',
    message: 'Message',
    messagePh: 'Write a few sentences about your situation…',
    send: 'Send message',
    note: 'By sending, you agree that I may contact you.',
    subject: 'Appointment request',
    mail: ['Name', 'Email', 'Phone', 'Topic'],
  },
  it: {
    eyebrow: 'Contatti',
    title: 'Prenota un appuntamento.',
    intro: 'Scriva tramite il modulo o mi chiami direttamente – sono raggiungibile nei giorni feriali dalle 8:00 alle 18:00.',
    info: [
      ['✆', 'Telefono', '+36 70 638 9702', 'tel:+36706389702'],
      ['⌖', 'Sede', 'Budapest · di persona e online', null],
      ['◷', 'Orari', 'Lunedì–Venerdì, 8:00–18:00', null],
    ],
    confidential: 'Ogni colloquio è riservato. Nella mediazione la riservatezza è un obbligo di legge: ciò che condivide resta tra noi.',
    thanks: 'Grazie per avermi contattata!',
    sentMail: 'Si è aperto il Suo programma di posta con il messaggio già compilato – lo invii e Le risponderò presto.',
    sentNoMail: 'La ricontatterò al più presto. Se è urgente, mi chiami al +36 70 638 9702.',
    newMessage: 'Nuovo messaggio',
    name: 'Nome',
    namePh: 'Nome e cognome',
    email: 'E-mail',
    emailPh: 'nome@esempio.it',
    phone: 'Telefono',
    topic: 'Per quale questione mi contatta?',
    other: 'Altro / non lo so ancora',
    message: 'Messaggio',
    messagePh: 'Scriva qualche riga sulla Sua situazione…',
    send: 'Invia messaggio',
    note: 'Inviando il messaggio accetta di essere ricontattato/a.',
    subject: 'Richiesta di appuntamento',
    mail: ['Nome', 'E-mail', 'Telefono', 'Tema'],
  },
}

export default function Contact() {
  const lang = useLang()
  const t = text[lang]
  const services = getServices(lang)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: services[0].label, message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (EMAIL) {
      const [lName, lEmail, lPhone, lTopic] = t.mail
      const subject = encodeURIComponent(`${t.subject} – ${form.topic}`)
      const body = encodeURIComponent(
        `${lName}: ${form.name}\n${lEmail}: ${form.email}\n${lPhone}: ${form.phone}\n${lTopic}: ${form.topic}\n\n${form.message}`
      )
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              {t.info.map(([mark, label, val, href]) => (
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
              <p style={{ color: 'var(--muted)', fontSize: 14.5, marginTop: 22 }}>{t.confidential}</p>
            </div>

            <div>
              {sent ? (
                <div className="form">
                  <div className="form-success">
                    <div className="value-mark">✦</div>
                    <h3>{t.thanks}</h3>
                    <p>{EMAIL ? t.sentMail : t.sentNoMail}</p>
                    <button className="btn btn-outline" style={{ marginTop: 10 }} onClick={() => setSent(false)}>
                      {t.newMessage}
                    </button>
                  </div>
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">{t.name}</label>
                    <input id="name" required value={form.name} onChange={update('name')} placeholder={t.namePh} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{t.email}</label>
                    <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder={t.emailPh} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t.phone}</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} placeholder="+36 ..." />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">{t.topic}</label>
                    <select id="topic" value={form.topic} onChange={update('topic')}>
                      {services.map((s) => (
                        <option key={s.slug} value={s.label}>{s.label}</option>
                      ))}
                      <option value={t.other}>{t.other}</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">{t.message}</label>
                    <textarea id="message" required value={form.message} onChange={update('message')} placeholder={t.messagePh} />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    {t.send}
                  </button>
                  <p className="form-note">{t.note}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

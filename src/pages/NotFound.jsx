import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap center">
        <div className="pillar-mark">✦</div>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', marginBottom: 14 }}>Ez az oldal nincs meg</h1>
        <p style={{ color: 'var(--muted-2)', maxWidth: 460, margin: '0 auto 28px' }}>
          Lehet, hogy elírás történt, vagy a tartalom átkerült máshová. Térjünk vissza a biztos pontra.
        </p>
        <Link to="/" className="btn btn-gold">Vissza a kezdőlapra</Link>
      </div>
    </section>
  )
}

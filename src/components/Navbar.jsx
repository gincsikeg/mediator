import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/rolam', label: 'Rólam' },
  { to: '/szolgaltatasok', label: 'Szolgáltatások' },
  { to: '/blog', label: 'Blog' },
  { to: '/kapcsolat', label: 'Kapcsolat' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <nav className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">Kis Georgina</span>
          <span className="brand-tag">pénzügyi mediátor</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/kapcsolat" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
            Időpontfoglalás
          </Link>
        </div>
      </nav>
    </header>
  )
}

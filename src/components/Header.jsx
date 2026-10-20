import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE, PROJECTS } from '../config.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  useEffect(() => { const f = () => setStuck(window.scrollY > 10); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  const close = () => setOpen(false)
  return (
    <header className={'hdr' + (stuck ? ' stuck' : '')}>
      <div className="wrap hdr-in">
        <Link to="/" className="brand" onClick={close} aria-label="Rihanta Estates home">
          <img src="/images/logo.png" alt="" height="46" />
          <span><b>RIHANTA <i>ESTATES</i></b><small>{SITE.tagline}</small></span>
        </Link>
        <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span className="sr">Menu</span><span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          {PROJECTS.length > 0 && <Link to="/#projects" onClick={close}>Projects</Link>}
          <Link to="/#about" onClick={close}>About Us</Link>
          <NavLink to="/directors" onClick={close}>Directors</NavLink>
          <Link to="/#contact" onClick={close}>Contact</Link>
          <NavLink to="/privacy-policy" onClick={close}>Privacy Policy</NavLink>
          <Link to="/#contact" className="btn btn-primary sm" onClick={close}>Enquire Now</Link>
        </nav>
      </div>
    </header>
  )
}

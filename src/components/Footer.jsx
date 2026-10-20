import { Link } from 'react-router-dom'
import { SITE, DISCLAIMER, PROJECTS } from '../config.js'
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div>
          <div className="brand"><img src="/images/logo.png" alt="" height="46" /><span><b>RIHANTA <i>ESTATES</i></b><small>{SITE.tagline}</small></span></div>
          <p>We deal in {SITE.deals} in Jaipur, Rajasthan, with clear information and customer support.</p>
        </div>
        <div className="flinks" role="navigation" aria-label="Footer"><h2>Explore</h2>
          <Link to="/">Home</Link>{PROJECTS.length > 0 && <Link to="/#projects">Projects</Link>}<Link to="/#about">About Us</Link><Link to="/directors">Directors</Link><Link to="/#contact">Contact</Link><Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div><h2>Contact</h2><a href={SITE.phoneHref}>{SITE.phone}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a><p>{SITE.address}</p></div>
      </div>
      <div className="wrap ftr-note"><p>{DISCLAIMER}</p><p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></div>
    </footer>
  )
}

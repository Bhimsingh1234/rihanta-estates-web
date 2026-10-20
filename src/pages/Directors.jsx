import { Link } from 'react-router-dom'
import useSEO from '../useSEO.js'
import { DIRECTOR, SITE } from '../config.js'

const values = [['💬', 'Clear Communication', 'We share project details and updates in a simple, transparent way.'], ['🏢', 'Project Guidance', 'We help you explore plot options based on your requirements.'], ['👥', 'Customer Relationships', 'We focus on respectful, continuing support.']]

export default function Directors() {
  useSEO('Our Leadership | Rihanta Estates', 'Meet the leadership of Rihanta Estates, focused on clear communication and responsible property guidance in Jaipur.', '/directors')
  return (<>
    <section className="page-hero"><div className="wrap"><p className="gold">Our leadership</p><h1>Meet Our <span>Leadership</span></h1><p className="lead">Guidance, transparency and a customer-first approach.</p></div></section>

    <section className="wrap pad dir">
      <figure className="dphoto">
        <img src={DIRECTOR.photo} alt={DIRECTOR.name ? `${DIRECTOR.name}, ${DIRECTOR.role}` : DIRECTOR.role} onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/director-placeholder.svg' }} />
        <figcaption>{DIRECTOR.name && <><b>{DIRECTOR.name}</b><br /></>}{DIRECTOR.role}</figcaption>
      </figure>
      <div>
        <h2 className="h-line">Committed to Your Property Goals</h2>
        <p>We focus on helping customers explore property options with clear information and personal guidance.</p>
        <p>At Rihanta Estates, our focus is on understanding customer needs, sharing project information, and helping you make informed and responsible property decisions. We believe in relationships built on trust, transparency and professional support.</p>
        <h3>Our Approach</h3>
        <div className="vals">{values.map(([i, t, d]) => <div key={t} className="val"><span className="ico" aria-hidden="true">{i}</span><h4>{t}</h4><p>{d}</p></div>)}</div>
      </div>
    </section>

    <section className="wrap pad"><div className="office">
      <img className="photo" src="/images/office.jpg" alt="Rihanta Estates office in Jaipur" loading="lazy" />
      <div><h2 className="h-line">Visit Our Office</h2><p>Our team is available at our Jaipur office to help with project details, location information and site visit planning.</p>
        <a className="btn btn-primary" href={SITE.mapsUrl} target="_blank" rel="noreferrer">Get Directions</a></div>
    </div></section>

    <section className="dark pad"><div className="wrap center"><h2 className="light">Have a question about a property?</h2><Link to="/#contact" className="btn btn-gold">Enquire Now</Link></div></section>
  </>)
}

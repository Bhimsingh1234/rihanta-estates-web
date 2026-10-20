import { Link } from 'react-router-dom'
import useSEO from '../useSEO.js'
import { SITE, PROJECTS } from '../config.js'
import ProjectCard from '../components/ProjectCard.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'

const services = [
  ['📄', 'Project Information', 'Get project details directly from our team.'],
  ['📍', 'Location Guidance', 'Understand the area and how to reach it.'],
  ['📅', 'Site Visit Assistance', 'Plan a convenient site visit with our team.'],
  ['🤝', 'Buyer Support', 'Help with your questions during your enquiry.'],
]
const steps = ['Submit an enquiry.', 'Discuss your requirements with the team.', 'Receive relevant project information.', 'Arrange a site visit, if suitable.']

export default function Home() {
  useSEO('Rihanta Estates | Residential & Investment Plots in Jaipur', 'Explore residential and investment plot options in Jaipur and connect with Rihanta Estates for project information, pricing and site visits.')
  return (<>
    <section className="hero">
      <div className="wrap hero-in">
        <p className="pill">Residential & investment plots</p>
        <h1>Find the Right Property for <span>Your Future</span></h1>
        <p className="sub">Residential &amp; Investment Property | Jaipur</p>
        <p className="lead">Explore residential and investment plot options and connect with our team for project information, pricing, and site visits.</p>
        <div className="row"><a href={SITE.phoneHref} className="btn btn-primary">Call Now</a><Link to="/#contact" className="btn btn-ghost">Enquire Now</Link></div>
      </div>
    </section>

    <section className="wrap services" aria-label="Buyer support">
      {services.map(([i, t, d]) => <div key={t} className="svc"><span className="ico" aria-hidden="true">{i}</span><h2>{t}</h2><p>{d}</p></div>)}
    </section>


    <section id="about" className="wrap pad about">
      <div>
        <h2 className="h-line">About Rihanta Estates</h2>
        <p>Rihanta Estates deals in {SITE.deals} in Jaipur, Rajasthan. We focus on answering property enquiries, communicating clearly, and helping you understand the options available to you.</p>
        <Link to="/directors" className="btn btn-primary">Know More About Us</Link>
      </div>
      <img className="photo" src="/images/office.jpg" alt="Rihanta Estates office building in Jaipur" loading="lazy" />
    </section>

    {PROJECTS.length > 0 && (
      <section id="projects" className="dark pad">
        <div className="wrap">
          <h2 className="center light">Our Projects</h2>
          <div className="grid">{PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}</div>
        </div>
      </section>
    )}


    <section id="contact" className="wrap pad contact">
      <div>
        <h2 className="h-line">Contact Us</h2>
        <p>Share your details and our team will get back to you about your enquiry.</p>
        <ul className="clist">
          <li><b>Phone</b> <a href={SITE.phoneHref}>{SITE.phone}</a></li>
          <li><b>Email</b> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li><b>Office</b> {SITE.address}</li>
        </ul>
        <div className="row">
          {SITE.mapsUrl && <a className="btn btn-outline" href={SITE.mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>}
          {SITE.whatsapp && <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
        </div>
      </div>
      <EnquiryForm />
    </section>
  </>)
}

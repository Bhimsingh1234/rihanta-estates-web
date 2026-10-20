import { Link } from 'react-router-dom'
export default function ProjectCard({ p }) {
  return (
    <article className="card pcard">
      <img src={p.image} alt={`${p.name} project`} loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/office.jpg' }} />
      <div className="pbody">
        <h3>{p.name}</h3><p className="loc">{p.location}</p><p>{p.desc}</p>
        <div className="row"><Link className="btn btn-outline sm" to="/#contact">View Details</Link><Link className="btn btn-primary sm" to="/#contact">Enquire Now</Link></div>
      </div>
    </article>
  )
}

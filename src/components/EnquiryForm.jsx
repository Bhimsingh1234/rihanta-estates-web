import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE, INTERESTS } from '../config.js'

const MOBILE = /^(?:\+91|91|0)?[6-9]\d{9}$/
const validate = v => {
  const e = {}
  if (!/^[\p{L}][\p{L} .'-]{1,59}$/u.test(v.name.trim())) e.name = 'Enter your full name (letters only, 2–60 characters).'
  if (!MOBILE.test(v.mobile.replace(/[\s-]/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number.'
  if (!v.consent) e.consent = 'Please agree to continue.'
  return e
}
const init = { name: '', mobile: '', project: '', budget: '', visit: '', consent: false }

function Field({ id, label, error, children }) {
  return <div className="field"><label htmlFor={id}>{label}</label>{children}{error && <p className="err" id={id + '-e'} role="alert">{error}</p>}</div>
}

export default function EnquiryForm() {
  const [v, setV] = useState(init)
  const [err, setErr] = useState({})
  const [state, setState] = useState({ s: 'idle', msg: '' })
  const on = k => e => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  async function submit(ev) {
    ev.preventDefault()
    if (state.s === 'loading') return
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) { document.getElementById(Object.keys(e)[0])?.focus(); return }
    if (!SITE.leadApi) { setState({ s: 'error', msg: 'The enquiry service is not connected yet, so your details were NOT sent. Please call or WhatsApp us directly.' }); return }
    setState({ s: 'loading', msg: '' })
    try {
      const r = await fetch(SITE.leadApi, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...v, name: v.name.trim(), mobile: v.mobile.replace(/[\s-]/g, ''), source: 'website' }) })
      if (!r.ok) throw new Error('bad status')
      setState({ s: 'success', msg: 'Thank you. Our team will contact you about your enquiry.' }); setV(init)
    } catch { setState({ s: 'error', msg: 'We could not send your enquiry. Please try again or contact us directly.' }) }
  }

  return (
    <form className="card form" onSubmit={submit} noValidate aria-labelledby="form-h">
      <h3 id="form-h">Get project details or book a site visit</h3>
      <Field id="name" label="Full name *" error={err.name}><input id="name" value={v.name} onChange={on('name')} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? 'name-e' : undefined} /></Field>
      <Field id="mobile" label="Mobile number *" error={err.mobile}><input id="mobile" type="tel" inputMode="tel" value={v.mobile} onChange={on('mobile')} autoComplete="tel" placeholder="98XXXXXXXX" aria-invalid={!!err.mobile} aria-describedby={err.mobile ? 'mobile-e' : undefined} /></Field>
      <Field id="project" label="Property you are looking for"><select id="project" value={v.project} onChange={on('project')}><option value="">Select an option</option>{INTERESTS.map(i => <option key={i}>{i}</option>)}</select></Field>
      <Field id="budget" label="Approximate budget (optional)"><input id="budget" value={v.budget} onChange={on('budget')} placeholder="e.g. ₹20–30 lakh" /></Field>
      <Field id="visit" label="Site-visit preference (optional)"><input id="visit" value={v.visit} onChange={on('visit')} placeholder="e.g. Weekend morning" /></Field>
      <div className="field check">
        <input id="consent" type="checkbox" checked={v.consent} onChange={on('consent')} aria-invalid={!!err.consent} />
        <label htmlFor="consent">I agree that Rihanta Estates may use the information I submit to respond to my property enquiry and coordinate a requested site visit, in accordance with the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>.</label>
      </div>
      {err.consent && <p className="err" role="alert">{err.consent}</p>}
      <button className="btn btn-primary" disabled={state.s === 'loading'}>{state.s === 'loading' ? 'Sending…' : 'Send Enquiry'}</button>
      <div aria-live="polite">{state.msg && <p className={state.s === 'success' ? 'ok' : 'err box'} role={state.s === 'error' ? 'alert' : 'status'}>{state.msg}</p>}</div>
    </form>
  )
}

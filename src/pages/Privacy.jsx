import useSEO from '../useSEO.js'
import { SITE } from '../config.js'

export default function Privacy() {
  useSEO('Privacy Policy | Rihanta Estates', 'How Rihanta Estates collects, uses and protects information submitted through its website, Meta Lead Ads and other enquiry channels.', '/privacy-policy')
  const S = [
    ['Business and contact information', <>
      <p>This policy applies to <b>Rihanta Estates</b> ("we", "us"), a property dealer of {SITE.deals} in Jaipur, Rajasthan.</p>
      <ul><li>Address: {SITE.address}</li><li>Phone / WhatsApp: {SITE.phone}</li><li>Email: {SITE.email}</li></ul>
      <p>Last updated: {SITE.policyUpdated}.</p></>],
    ['Information we collect', <>
      <p>Depending on how you enquire, we may collect:</p>
      <ul><li>Full name and mobile number</li><li>Email address, only if you choose to give it or a particular enquiry method requires it</li><li>Type of property or project you are interested in</li><li>Approximate budget and purchase timeline</li><li>Site-visit preferences</li><li>Communication and enquiry history</li></ul>
      <p>This website does not currently use analytics, advertising trackers or non-essential cookies, and does not collect precise location.</p></>],
    ['Sources of information', <>
      <p>Information may be submitted:</p>
      <ul><li>Through our website enquiry or site-visit form</li><li>Through Facebook or Instagram Instant Forms (Meta Lead Ads)</li><li>Through phone calls, WhatsApp, or other channels we actually use to communicate with you</li></ul></>],
    ['How we use information', <>
      <p>We use enquiry data to:</p>
      <ul><li>Respond to requests for project details and pricing</li><li>Contact you about the interests you stated</li><li>Coordinate requested site visits and answer follow-up questions</li><li>Maintain enquiry records</li><li>Prevent spam, misuse or fraudulent submissions</li><li>Meet applicable legal obligations</li></ul>
      <p>We do not treat your enquiry as consent to unrelated marketing or ongoing promotional messages.</p></>],
    ['Meta and third-party platforms', <>
      <p>When you submit a Facebook or Instagram Lead Ad form, your information is collected through Meta's platform and may be shared with Rihanta Estates according to the form, applicable settings, and Meta's terms and privacy practices. Read Meta's policy at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">facebook.com/privacy/policy</a>.</p>
      <p>Other third-party services we use may process information under their own policies. Rihanta Estates is not affiliated with or endorsed by Meta.</p></>],
    ['Sharing and disclosure', <p>We do not sell personal information as a business practice. We may share it with authorised employees, service providers, and communication platforms where reasonably necessary for the purposes above, or where required by law. We cannot promise that no third party will ever receive your data.</p>],
    ['Retention and security', <p>We keep information only as long as reasonably necessary for your enquiry, business recordkeeping, and legal requirements. We use reasonable safeguards to protect it, but no system can be guaranteed completely secure.</p>],
    ['Your choices and rights', <>
      <p>Where applicable, you may:</p>
      <ul><li>Request access to or correction of your information</li><li>Request deletion, subject to legal or recordkeeping requirements</li><li>Withdraw consent</li><li>Opt out of non-essential promotional communication</li><li>Make a privacy-related complaint</li></ul>
      <p>Write to {SITE.privacyEmail}.</p></>],
    ['Cookies and analytics', <p>This website does not currently use analytics or advertising cookies. If we add such tools, we will update this policy and provide any required notice or consent mechanism first.</p>],
    ['Children', <p>Our website and property enquiry services are not directed at children. Children should not submit personal information on their own.</p>],
    ['Policy updates and grievance contact', <p>Changes will be published on this page with an updated date. Privacy and grievance contact: Rihanta Estates, {SITE.email}, {SITE.phone}.</p>],
  ]
  return (<>
    <section className="page-hero"><div className="wrap"><h1>Privacy <span>Policy</span></h1><p className="lead">How Rihanta Estates handles information you share with us.</p></div></section>
    <article className="wrap pad policy">
      {S.map(([t, c], i) => <section key={t}><h2>{i + 1}. {t}</h2>{c}</section>)}
    </article>
  </>)
}

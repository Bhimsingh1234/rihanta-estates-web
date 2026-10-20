// Business details taken from the official Facebook page. Edit here to change them site-wide.
const ADDRESS = 'Plot No. 50, 51, Monika Vihar, above Apollo Pharmacy, Mangyawas, Jaipur, Rajasthan, India'
export const SITE = {
  name: 'Rihanta Estates',
  tagline: 'A Vision for Your Life',
  url: import.meta.env.VITE_SITE_URL || 'https://www.example.com', // set VITE_SITE_URL to your real domain
  phone: '+91 97720 77781',
  phoneHref: 'tel:+919772077781',
  email: 'pawanjainjain45@gmail.com',
  privacyEmail: 'pawanjainjain45@gmail.com',
  address: ADDRESS,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS),
  whatsapp: 'https://wa.me/919772077781',
  leadApi: import.meta.env.VITE_LEAD_API_URL || '',
  policyUpdated: '20 October 2026',
  deals: 'plots, villas, farm houses and flats',
}
// Leave name empty until confirmed; the page then shows only the designation.
export const DIRECTOR = { name: 'Pawan Jain', role: 'Director, Rihanta Estates', photo: '/images/director.jpg' }
// Projects are hidden for now. Add real entries here to show the Projects section again:
// { id, name, location, desc, image }
export const PROJECTS = []
export const INTERESTS = ['Plot', 'Villa', 'Farm house', 'Flat', 'Other']
export const DISCLAIMER = 'Property details, prices, availability and amenities must be confirmed with Rihanta Estates. This website is informational and does not replace legal due diligence. Buyers should independently verify title documents, approvals, registrations and transaction terms. No investment return is guaranteed.'

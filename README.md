# Rihanta Estates – React + Vite website

## Run
npm install
npm run dev        # development
npm run build      # production build -> dist/

## Add your real images (public/images/)
- logo.png -> replace with your original high-resolution logo (transparent PNG), used in Header/Footer
- director.jpg         -> director photo
- hero.jpg             -> hero background (optional)
- project-1.jpg        -> Shyam Vatika photo
- office.jpg           -> already included (cropped from your screenshot; replace with the original high-res photo)

## Configure
1. Edit src/config.js for phone, email, address, WhatsApp, director name (leave empty until confirmed) and the Projects list (empty = Projects section hidden).
2. Copy .env.example to .env: set VITE_SITE_URL (production domain) and VITE_LEAD_API_URL.
3. Update the domain in public/sitemap.xml and public/robots.txt.

## Enquiry form -> backend
The form POSTs JSON {name, mobile, project, budget, visit, consent, source} to VITE_LEAD_API_URL.
Without it, the form honestly says the enquiry was NOT sent (no fake success, no localStorage).
Connect a secure backend (Node/Express, Google Sheets via server, CRM webhook). Keep API keys on the server only.

## Meta Lead Ads
Use https://YOUR-DOMAIN/privacy-policy as the Privacy Policy URL in your Lead Ad form.
Website form submissions do not sync to Meta automatically.

## Hosting
SPA: configure your host to serve index.html for all routes (Netlify: public/_redirects "/* /index.html 200").

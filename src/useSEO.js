import { useEffect } from 'react'
import { SITE } from './config.js'
function upsert(tag, attr, key, val) {
  const sel = `${tag}[${attr}="${key}"]`
  let el = document.head.querySelector(sel)
  if (!el) { el = document.createElement(tag); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute(tag === 'link' ? 'href' : 'content', val)
}
export default function useSEO(title, description, path = '/') {
  useEffect(() => {
    document.title = title
    const url = SITE.url + path
    upsert('meta', 'name', 'description', description)
    upsert('link', 'rel', 'canonical', url)
    upsert('meta', 'property', 'og:title', title)
    upsert('meta', 'property', 'og:description', description)
    upsert('meta', 'property', 'og:url', url)
    upsert('meta', 'property', 'og:type', 'website')
    upsert('meta', 'property', 'og:image', SITE.url + '/images/office.jpg')
  }, [title, description, path])
}

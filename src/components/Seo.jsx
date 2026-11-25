import { useEffect } from 'react'

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title
    const set = (sel, attr, val) => {
      let el = document.head.querySelector(sel)
      if (!el) {
        el = document.createElement(sel.startsWith('link') ? 'link' : 'meta')
        const m = sel.match(/\[(.+?)="(.+?)"\]/)
        el.setAttribute(m[1], m[2])
        document.head.appendChild(el)
      }
      el.setAttribute(attr, val)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    // Canonical URL: enable once the production domain is known.
    const domain = import.meta.env.VITE_SITE_URL
    if (domain) set('link[rel="canonical"]', 'href', domain.replace(/\/$/, '') + path)
  }, [title, description, path])
  return null
}

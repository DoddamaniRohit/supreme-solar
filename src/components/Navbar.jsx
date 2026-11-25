import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import Logo from './Logo.jsx'
import { SITE, waLink } from '../data/site.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products-services', label: 'Products & Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const cls = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-semibold transition after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-sun-500 after:transition ${isActive ? 'text-brand-800 after:opacity-100' : 'text-slate-600 after:opacity-0 hover:text-brand-700'}`

  return (
    <>
      <div className="hidden bg-brand-900 text-xs text-brand-100 sm:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-1.5"><Clock size={13} /> {SITE.hours}</span>
          <span className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-white"><Mail size={13} /> {SITE.email}</a>
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-white"><Phone size={13} /> {SITE.phone}</a>
          </span>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition ${scrolled ? 'border-slate-200 shadow-md' : 'border-transparent'}`}>
        <div className="container-x flex h-[68px] items-center justify-between">
          <Link to="/" aria-label="SUPREME SOLAR home"><Logo /></Link>
          <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
            {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={cls}>{l.label}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] p-2.5 text-white transition hover:bg-[#1ebe5a]" aria-label="Chat on WhatsApp"><MessageCircle size={20} /></a>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
          <button type="button" className="rounded-lg p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="container-x flex flex-col py-3" aria-label="Mobile">
              {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `rounded-lg px-3 py-3 text-base font-semibold ${isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-700'}`}>{l.label}</NavLink>)}
              <div className="mt-3 flex gap-2">
                <Link to="/contact" className="btn btn-primary flex-1">Contact Us</Link>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp flex-1"><MessageCircle size={18} />WhatsApp</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

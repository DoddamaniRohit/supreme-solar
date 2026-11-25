import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle, Clock, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { SITE, waLink } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="h-1 bg-gradient-to-r from-sun-400 via-brand-500 to-brand-700" />
      <div className="container-x grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-200">{SITE.description}</p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.phoneHref} className="btn btn-gold !py-2.5"><Phone size={16} />Call Now</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !py-2.5"><MessageCircle size={16} />WhatsApp</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wider !text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/products-services">Products &amp; Services</Link></li>
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <h3 className="text-sm font-bold uppercase tracking-wider !text-white">Visit &amp; Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-sun-400" /><span>{SITE.addressLines}</span></li>
            <li className="flex gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-sun-400" /><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></li>
            <li className="flex gap-3"><MessageCircle size={17} className="mt-0.5 shrink-0 text-sun-400" /><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">Chat on WhatsApp</a></li>
            <li className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-sun-400" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a></li>
            <li className="flex gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-sun-400" /><span>{SITE.hours}</span></li>
            <li><a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-sun-400 hover:underline">Get Directions →</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-200">
        © {new Date().getFullYear()} {SITE.name}, {SITE.location}. All rights reserved.
      </div>
    </footer>
  )
}

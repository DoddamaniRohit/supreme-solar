import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Navigation, ChevronDown, Mail } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Section from '../components/Section.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { SITE, waLink } from '../data/site.js'
import { products } from '../data/products.js'
import { services } from '../data/services.js'
import { faqs } from '../data/faqs.js'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(v.mobile.replace(/[\s-]/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number.'
  if (!v.interest) e.interest = 'Please choose a product or service.'
  if (v.message.trim().length < 5) e.message = 'Please add a short message.'
  return e
}

export default function Contact() {
  const [v, setV] = useState({ name: '', mobile: '', interest: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) { setSent(false); return }
    const text = `Hello SUPREME SOLAR,\nName: ${v.name.trim()}\nMobile: ${v.mobile.trim()}\nInterested in: ${v.interest}\nMessage: ${v.message.trim()}`
    window.open(waLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field = 'mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200'
  const Err = ({ k }) => errors[k] ? <p className="mt-1 text-xs text-red-600" role="alert">{errors[k]}</p> : null

  return (
    <>
      <Seo
        path="/contact"
        title="Contact SUPREME SOLAR | Gokul Road, Hubballi | +91 91132 21435"
        description="Call, WhatsApp, email or visit SUPREME SOLAR, Shop No-102, Kottilingnagar, near Heregoudr Hospital, Gokul Road, Hubballi. Open Monday–Sunday 9:00 AM – 8:30 PM."
      />
      <PageHero eyebrow="Contact" title="Contact SUPREME SOLAR" intro="Visit our shop, call us, email, or send an enquiry on WhatsApp." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card group space-y-4 p-6 text-sm">
              <h2 className="text-lg font-bold">SUPREME SOLAR</h2>
              <p className="flex gap-3"><Phone className="shrink-0 text-brand-700" size={20} /><a href={SITE.phoneHref} className="font-semibold hover:text-brand-700">{SITE.phone}</a></p>
              <p className="flex gap-3"><Mail className="shrink-0 text-brand-700" size={20} /><a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-700">{SITE.email}</a></p>
              <p className="flex gap-3"><MapPin className="shrink-0 text-brand-700" size={20} />{SITE.addressLines}</p>
              <p className="flex gap-3"><Clock className="shrink-0 text-brand-700" size={20} />{SITE.hours}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href={SITE.phoneHref} className="btn btn-primary"><Phone size={16} />Call Now</a>
                <WhatsAppButton message="Hello SUPREME SOLAR, I would like to enquire about your products and services." />
                <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Navigation size={16} />Directions</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe title="SUPREME SOLAR location on Google Maps" src={SITE.mapEmbedUrl} className="h-72 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>

          <form onSubmit={submit} noValidate className="card group space-y-4 p-6" aria-label="Enquiry form">
            <h2 className="text-lg font-bold">Send an Enquiry</h2>
            <p className="text-sm text-slate-600">Your enquiry opens in WhatsApp with these details filled in, ready to send.</p>
            <div><label className="text-sm font-medium" htmlFor="name">Your name</label>
              <input id="name" className={field} value={v.name} onChange={set('name')} autoComplete="name" /><Err k="name" /></div>
            <div><label className="text-sm font-medium" htmlFor="mobile">Mobile number</label>
              <input id="mobile" inputMode="tel" className={field} value={v.mobile} onChange={set('mobile')} autoComplete="tel" placeholder="10-digit mobile number" /><Err k="mobile" /></div>
            <div><label className="text-sm font-medium" htmlFor="interest">Product or service</label>
              <select id="interest" className={field} value={v.interest} onChange={set('interest')}>
                <option value="">Select…</option>
                <optgroup label="Products">{products.map((p) => <option key={p.id}>{p.name}</option>)}</optgroup>
                <optgroup label="Services">{services.map((s) => <option key={s.id}>{s.name}</option>)}</optgroup>
                <option>Other</option>
              </select><Err k="interest" /></div>
            <div><label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea id="message" rows={4} className={field} value={v.message} onChange={set('message')} /><Err k="message" /></div>
            <button type="submit" className="btn btn-whatsapp w-full"><MessageCircle size={18} />Send via WhatsApp</button>
            {sent && <p className="text-xs text-slate-500" role="status">WhatsApp opened in a new tab. Press Send there to deliver your enquiry. If nothing opened, allow pop-ups and try again.</p>}
          </form>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions" tint>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {f.q}<ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  )
}

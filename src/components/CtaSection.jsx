import { Phone } from 'lucide-react'
import ContactButton from './ContactButton.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'
import { SITE } from '../data/site.js'

export default function CtaSection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="hero-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-16 text-center text-white shadow-2xl sm:px-12">
            <p className="eyebrow !text-sun-400">Get in touch</p>
            <h2 className="mt-3 text-3xl font-extrabold !text-white sm:text-5xl">Your Next Step Starts Here</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">Tell us what you need: a solar water heater, heat pump, panels or service. We will get back to you with details and pricing.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ContactButton className="!bg-white !text-brand-800 hover:!bg-brand-50" />
              <WhatsAppButton message="Hello SUPREME SOLAR, I would like to enquire about your solar products and services." />
              <a href={SITE.phoneHref} className="btn btn-ghost-light"><Phone size={16} />{SITE.phone}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

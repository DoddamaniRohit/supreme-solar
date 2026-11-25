import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Mail, Star, Wrench, MessageCircle, Store, Layers, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactButton from '../components/ContactButton.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Gallery from '../components/Gallery.jsx'
import VideoShowcase from '../components/VideoShowcase.jsx'
import ReviewsSection from '../components/ReviewsSection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import { SITE } from '../data/site.js'
import { services } from '../data/services.js'
import { products } from '../data/products.js'
import { gallery } from '../data/gallery.js'

const why = [
  { icon: Layers, title: 'Wide Range', text: 'Glass-lined, stainless steel and pressurized solar water heaters, plus heat pumps.' },
  { icon: Wrench, title: 'Installation & Service', text: 'Installation, servicing and maintenance for solar water heaters and panels.' },
  { icon: MessageCircle, title: 'Easy Enquiry', text: 'Message us on WhatsApp for details and pricing. No forms to wait on.' },
  { icon: Store, title: 'Local Shop', text: 'Visit us on Gokul Road, Hubballi, open every day of the week.' },
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Solar Water Heater in Hubballi | SUPREME SOLAR, Gokul Road"
        description="SUPREME SOLAR, Gokul Road, Hubballi: solar water heaters, heat pump water heaters, solar panels, solar lighting, service and maintenance. Call +91 91132 21435."
      />

      {/* A. Hero */}
      <section className="hero-glow relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-x grid items-center gap-12 pb-28 pt-14 sm:pt-20 lg:grid-cols-12 lg:pb-36">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sun-400">
              <MapPin size={14} aria-hidden="true" /> {SITE.location}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] !text-white sm:text-6xl">
              SUPREME <span className="text-sun-400">SOLAR</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-brand-100 sm:text-2xl">{SITE.tagline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
              Solar water heaters, heat pump water heaters, solar panels and solar lighting, with installation and maintenance from our shop on Gokul Road, Hubballi.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="!bg-sun-400 !text-brand-900 hover:!bg-sun-500" />
              <WhatsAppButton message="Hello SUPREME SOLAR, I would like to know more about your solar water heaters." />
              <a href={SITE.phoneHref} className="btn btn-ghost-light"><Phone size={16} />{SITE.phone}</a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sun-400/40 to-brand-500/20 blur-2xl" aria-hidden="true" />
            <img src="/images/photo-32.jpg" alt="Supreme Solar water heater installed on a rooftop in Hubballi" fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] border-4 border-white/20 object-cover object-[50%_70%] shadow-2xl" />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl sm:left-[-1.5rem]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Clock size={20} /></span>
              <span className="text-sm leading-tight"><strong className="block text-slate-900">Open 7 days</strong>9:00 AM – 8:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="container-x relative z-10 -mt-14 lg:-mt-20">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl lg:grid-cols-4">
            {[
              [products.length, 'Products'],
              [services.length, 'Services'],
              ['7 Days', 'Open every week'],
              ['Install + Service', 'Maintenance support'],
            ].map(([n, l]) => (
              <div key={l} className="bg-white px-5 py-6 text-center">
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-extrabold text-brand-800 sm:text-3xl">{n}</dd>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{l}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* B. Overview */}
      <Section eyebrow="About the Business" title="Clean Hot Water, Powered by the Sun">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-slate-600">{SITE.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SITE.categories.map((c) => <li key={c} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-800">{c}</li>)}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 hover:gap-3 transition-all">Learn more about us <ArrowRight size={18} /></Link>
          </div>
          <ul className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7 text-sm shadow-lg">
            {[
              [MapPin, SITE.addressLines],
              [Clock, SITE.hours],
              [Phone, <a key="p" href={SITE.phoneHref} className="font-bold text-slate-900 hover:text-brand-700">{SITE.phone}</a>],
              [Mail, <a key="m" href={`mailto:${SITE.email}`} className="break-all hover:text-brand-700">{SITE.email}</a>],
              ...(SITE.rating.verified ? [[Star, `${SITE.rating.value}/5 · ${SITE.rating.count} Google reviews`]] : []),
            ].map(([Icon, content], i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon size={20} /></span>
                <span className="pt-2">{content}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* C. Services */}
      <Section eyebrow="Services" title="What We Offer" intro="Supply, installation, service and maintenance for solar and heat pump systems." tint>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </Section>

      {/* Why us */}
      <Section eyebrow="Why Supreme Solar" title="Hot Water You Can Rely On">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-sun-400 shadow-md"><Icon size={26} /></span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* D. Products */}
      <Section eyebrow="Products" title="Our Products" intro="Tap Enquire on any product and we will share details and pricing on WhatsApp." tint>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-10 text-center"><Link to="/products-services" className="btn btn-outline">Browse &amp; Search All</Link></div>
      </Section>

      {/* E. Gallery */}
      <Section eyebrow="Gallery" title="Our Installations"><Gallery items={gallery} /></Section>

      <VideoShowcase tint />
      <ReviewsSection tint={false} />
      <CtaSection />
    </>
  )
}

import { Clock, ShieldCheck, Sun, Wrench } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Section from '../components/Section.jsx'
import Gallery from '../components/Gallery.jsx'
import ProductCard from '../components/ProductCard.jsx'
import VideoShowcase from '../components/VideoShowcase.jsx'
import ReviewsSection from '../components/ReviewsSection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import { SITE } from '../data/site.js'
import { products } from '../data/products.js'
import { gallery } from '../data/gallery.js'

const solutions = [
  { icon: Sun, title: 'Solar Water Heaters', text: 'Glass-lined, stainless steel and pressurized models.' },
  { icon: ShieldCheck, title: 'Heat Pump Water Heaters', text: 'Including Racold heat pump water heaters.' },
  { icon: Sun, title: 'Solar Panels & Lighting', text: 'Panels and solar lighting for homes and premises.' },
  { icon: Wrench, title: 'Service & Maintenance', text: 'Servicing for solar water heaters and solar panels.' },
]

export default function About() {
  return (
    <>
      <Seo
        path="/about"
        title="About SUPREME SOLAR | Solar Water Heater Supplier, Hubballi"
        description="SUPREME SOLAR is a solar hot water system supplier on Gokul Road, Hubballi offering solar water heaters, heat pumps, solar panels, installation and maintenance."
      />
      <PageHero eyebrow="About Us" title="About SUPREME SOLAR" intro="Solar hot water systems, supplied, installed and serviced from our shop in Hubballi." />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Your local solar water heater supplier</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{SITE.description}</p>
            <p className="mt-4 leading-relaxed text-slate-600">Visit us at Shop No-102, Kottilingnagar, near Heregoudr Hospital on Gokul Road, Hubballi. We help homes and businesses move to clean, sun-powered hot water.</p>
            <p className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-4 font-semibold text-brand-800"><Clock size={20} aria-hidden="true" /> {SITE.hours}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sun-400/30 to-brand-500/20 blur-2xl" aria-hidden="true" />
            <img src="/images/photo-46.jpg" alt="SUPREME SOLAR shop in Hubballi" className="relative aspect-[4/3] w-full rounded-[1.75rem] border-4 border-white object-cover shadow-2xl" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Solar Energy Solutions" title="What We Do" tint>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card group p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon size={22} aria-hidden="true" /></span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Highlights" title="Product Highlights">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Photo Gallery" tint><Gallery items={gallery} /></Section>
      <VideoShowcase />
      <ReviewsSection tint={false} />
      <CtaSection />
    </>
  )
}

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Section from '../components/Section.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CtaSection from '../components/CtaSection.jsx'
import { products } from '../data/products.js'
import { services } from '../data/services.js'

const PAGE = 9

export default function ProductsServices() {
  const [tab, setTab] = useState('products')
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(PAGE)

  const list = tab === 'products' ? products : services
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? list.filter((i) => i.name.toLowerCase().includes(q)) : list
  }, [list, query])

  const switchTab = (t) => { setTab(t); setCount(PAGE); setQuery('') }

  return (
    <>
      <Seo
        path="/products-services"
        title="Solar Products & Services in Hubballi | SUPREME SOLAR"
        description="Browse solar water heaters, heat pump water heaters, solar panels, glass tubes, tank stands and solar services in Hubballi."
      />
      <PageHero eyebrow="Products & Services" title="Solar Products & Services" intro="Solar water heaters, heat pump water heaters, solar panels, lighting and accessories, plus installation and maintenance in Hubballi." />

      <Section>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Products or services" className="inline-flex rounded-full border border-slate-200 bg-white p-1">
            {[['products', `Products (${products.length})`], ['services', `Services (${services.length})`]].map(([k, label]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => switchTab(k)}
                className={`min-h-[40px] rounded-full px-5 text-sm font-semibold transition ${tab === k ? 'bg-brand-700 text-white' : 'text-slate-600 hover:text-brand-700'}`}>
                {label}
              </button>
            ))}
          </div>
          <label className="relative block sm:w-72">
            <span className="sr-only">Search {tab}</span>
            <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input type="search" value={query} onChange={(e) => { setQuery(e.target.value); setCount(PAGE) }}
              placeholder={`Search ${tab}…`}
              className="w-full rounded-full border border-slate-300 py-2.5 pl-10 pr-4 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200" />
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-slate-500">No {tab} match “{query}”. Try a different word.</p>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, count).map((i) =>
                tab === 'products' ? <ProductCard key={i.id} product={i} /> : <ServiceCard key={i.id} service={i} showEnquire />
              )}
            </div>
            {count < filtered.length && (
              <div className="mt-8 text-center"><button className="btn btn-outline" onClick={() => setCount((c) => c + PAGE)}>Load More</button></div>
            )}
          </>
        )}
      </Section>
      <CtaSection />
    </>
  )
}

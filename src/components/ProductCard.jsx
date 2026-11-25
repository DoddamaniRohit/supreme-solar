import { MessageCircle } from 'lucide-react'
import Media from './Media.jsx'
import { waLink, productMessage } from '../data/site.js'

export default function ProductCard({ product }) {
  return (
    <article className="card group flex flex-col">
      <div className="relative">
        <Media item={product} className="aspect-[4/3]" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-800 shadow">Supreme Solar</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.description}</p>
        <a href={waLink(productMessage(product.name))} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 w-full" aria-label={`Enquire about ${product.name} on WhatsApp`}>
          <MessageCircle size={16} aria-hidden="true" /> Enquire
        </a>
      </div>
    </article>
  )
}

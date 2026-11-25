import { MessageCircle } from 'lucide-react'
import Media from './Media.jsx'
import { waLink, productMessage } from '../data/site.js'

export default function ServiceCard({ service, showEnquire = false }) {
  return (
    <article className="card group flex flex-col">
      <Media item={service} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{service.description}</p>
        {showEnquire && (
          <a href={waLink(productMessage(service.name))} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4 w-full" aria-label={`Enquire about ${service.name} on WhatsApp`}>
            <MessageCircle size={16} aria-hidden="true" /> Enquire
          </a>
        )}
      </div>
    </article>
  )
}

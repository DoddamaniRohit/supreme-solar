import { MessageCircle, Phone } from 'lucide-react'
import { SITE, waLink } from '../data/site.js'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a href={SITE.phoneHref} aria-label="Call SUPREME SOLAR" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition hover:scale-110 md:hidden"><Phone size={22} /></a>
      <a href={waLink('Hello SUPREME SOLAR, I would like to enquire about your solar products.')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"><MessageCircle size={28} /></a>
    </div>
  )
}

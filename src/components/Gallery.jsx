import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Media from './Media.jsx'

export default function Gallery({ items, initialCount = 6 }) {
  const [showAll, setShowAll] = useState(false)
  const [open, setOpen] = useState(null)
  const visible = showAll ? items : items.slice(0, initialCount)

  const next = useCallback(() => setOpen((i) => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setOpen((i) => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, next, prev])

  const current = open !== null ? items[open] : null

  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {visible.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setOpen(items.findIndex((x) => x.id === item.id))}
              className="group block w-full overflow-hidden rounded-2xl border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              aria-label={`Open photo: ${item.alt}`}
            >
              <Media item={item} className="aspect-[4/3] transition duration-300 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      {items.length > initialCount && (
        <div className="mt-8 text-center">
          <button type="button" className="btn btn-outline" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Show Fewer Photos' : 'View All Photos'}
          </button>
        </div>
      )}

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <button type="button" className="absolute right-3 top-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={() => setOpen(null)} aria-label="Close">
            <X />
          </button>
          <button type="button" className="absolute left-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous photo">
            <ChevronLeft />
          </button>
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Media item={current} contain className="h-[75vh] w-full rounded-xl bg-transparent" />
            <p className="mt-3 text-center text-sm text-white/80">{current.alt} · {open + 1}/{items.length}</p>
          </div>
          <button type="button" className="absolute right-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next photo">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

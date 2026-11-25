import { Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return (
    <figure className="card group p-6">
      <div className="flex gap-0.5 text-sun-500" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <blockquote className="mt-3 text-sm text-slate-600">“{review.text}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">
        {review.name}
        {review.date && <span className="ml-2 font-normal text-slate-500">{review.date}</span>}
      </figcaption>
    </figure>
  )
}

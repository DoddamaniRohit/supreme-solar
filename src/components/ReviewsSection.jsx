import { Star, ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import ReviewCard from './ReviewCard.jsx'
import { reviews } from '../data/reviews.js'
import { SITE } from '../data/site.js'

export default function ReviewsSection({ tint = true }) {
  const { rating } = SITE
  return (
    <Section eyebrow="Google Reviews" title="What Our Customers Say" tint={tint}>
      {rating.verified && (
        <p className="mb-8 flex items-center justify-center gap-2 text-lg font-semibold text-slate-900">
          <Star className="text-sun-500" fill="currentColor" size={22} aria-hidden="true" />
          {rating.value}/5 <span className="font-normal text-slate-600">· {rating.count} Google reviews</span>
        </p>
      )}
      {reviews.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-3">{reviews.map((r) => <ReviewCard key={r.id} review={r} />)}</div>
      ) : (
        <p className="mx-auto max-w-xl text-center text-slate-600">Read genuine customer reviews of SUPREME SOLAR directly on Google.</p>
      )}
      <div className="mt-8 text-center">
        <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          View All Reviews <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}

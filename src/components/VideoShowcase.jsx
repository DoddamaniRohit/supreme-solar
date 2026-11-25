import Section from './Section.jsx'

const videos = [
  { src: '/images/videos/install-1.mp4', poster: '/images/videos/install-1.jpg', label: 'Supreme Solar water heater installation' },
  { src: '/images/videos/install-3.mp4', poster: '/images/videos/install-3.jpg', label: 'Rooftop solar panel installation' },
  { src: '/images/videos/install-2.mp4', poster: '/images/videos/install-2.jpg', label: 'Supreme Solar water heater close-up' },
]

export default function VideoShowcase({ tint = false }) {
  return (
    <Section eyebrow="Videos" title="See Our Work" intro="Short clips from our installations." tint={tint}>
      <div className="mx-auto grid max-w-3xl grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {videos.map((v) => (
          <video key={v.src} controls playsInline preload="none" poster={v.poster} aria-label={v.label}
            className="aspect-[9/16] w-full rounded-2xl border border-slate-200 bg-black object-cover shadow-md">
            <source src={v.src} type="video/mp4" />
          </video>
        ))}
      </div>
    </Section>
  )
}

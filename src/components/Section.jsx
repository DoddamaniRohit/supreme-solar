import Reveal from './Reveal.jsx'

export default function Section({ eyebrow, title, intro, children, className = '', tint = false, id }) {
  return (
    <section id={id} className={`section ${tint ? 'bg-gradient-to-b from-brand-50/80 to-white' : ''} ${className}`}>
      <div className="container-x">
        <Reveal>
          {(title || eyebrow) && (
            <div className="mx-auto mb-12 max-w-2xl text-center">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>}
              {intro && <p className="mt-4 text-lg text-slate-600">{intro}</p>}
            </div>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

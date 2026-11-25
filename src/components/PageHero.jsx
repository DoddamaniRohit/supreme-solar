export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="hero-glow relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-16 text-center text-white sm:py-24">
      <div className="container-x relative">
        <p className="eyebrow !text-sun-400">{eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold !text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

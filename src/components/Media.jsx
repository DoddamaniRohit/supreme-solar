import ProductArt from './ProductArt.jsx'

// Shows a real photo when `image`/`src` is set, otherwise the placeholder illustration.
export default function Media({ item, className = '', contain = false }) {
  const src = item.image || item.src
  const label = item.alt || item.name
  return (
    <div className={`overflow-hidden bg-brand-50 ${className}`}>
      {src ? (
        <img src={src} alt={label} loading="lazy" style={item.position ? { objectPosition: item.position } : undefined} className={`h-full w-full ${contain ? 'object-contain' : 'object-cover object-[50%_60%] transition duration-500 group-hover:scale-105'}`} />
      ) : (
        <ProductArt kind={item.kind} label={label} />
      )}
    </div>
  )
}

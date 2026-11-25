import { Sun } from 'lucide-react'

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-sun-400 shadow-md"><Sun size={24} aria-hidden="true" /></span>
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>SUPREME <span className={light ? 'text-sun-400' : 'text-brand-700'}>SOLAR</span></span>
        <span className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] ${light ? 'text-brand-200' : 'text-slate-500'}`}>Hot Water Systems</span>
      </span>
    </span>
  )
}

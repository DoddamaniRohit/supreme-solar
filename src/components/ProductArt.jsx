// Studio-style product renders used where no photograph has been supplied yet.
// Replace any of them by adding `image: '/images/your-photo.jpg'` in the data files.
const Frame = ({ children, label }) => (
  <svg viewBox="0 0 400 300" role="img" aria-label={label} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="pa-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a4d82" /><stop offset="1" stopColor="#0a1c3a" /></linearGradient>
      <radialGradient id="pa-spot" cx=".5" cy=".42" r=".6"><stop offset="0" stopColor="#fff" stopOpacity=".34" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
      <linearGradient id="pa-floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#12294f" /><stop offset="1" stopColor="#081730" /></linearGradient>
      <linearGradient id="pa-metalV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7e8ea4" /><stop offset=".22" stopColor="#f6f9fd" /><stop offset=".5" stopColor="#c9d4e2" /><stop offset=".82" stopColor="#8393a8" /><stop offset="1" stopColor="#566579" /></linearGradient>
      <linearGradient id="pa-metalH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8fbff" /><stop offset=".35" stopColor="#d3dce8" /><stop offset=".75" stopColor="#8796ab" /><stop offset="1" stopColor="#5a6a80" /></linearGradient>
      <linearGradient id="pa-glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#06193a" /><stop offset=".35" stopColor="#2a68b3" /><stop offset=".55" stopColor="#0e3a78" /><stop offset="1" stopColor="#051430" /></linearGradient>
      <linearGradient id="pa-cell" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b4f9a" /><stop offset="1" stopColor="#081d44" /></linearGradient>
      <linearGradient id="pa-frame" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1d4ed8" /><stop offset="1" stopColor="#1e3a8a" /></linearGradient>
      <linearGradient id="pa-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffd166" /><stop offset="1" stopColor="#e8960c" /></linearGradient>
      <filter id="pa-blur"><feGaussianBlur stdDeviation="6" /></filter>
    </defs>
    <rect width="400" height="300" fill="url(#pa-bg)" />
    <rect width="400" height="300" fill="url(#pa-spot)" />
    <rect y="238" width="400" height="62" fill="url(#pa-floor)" />
    <path d="M0 238H400" stroke="#fff" strokeOpacity=".12" />
    {children}
  </svg>
)
const Shadow = ({ w = 150 }) => <ellipse cx="200" cy="250" rx={w} ry="11" fill="#000" opacity=".55" filter="url(#pa-blur)" />

const Tank = () => (
  <g>
    <Shadow w={155} />
    <path d="M122 236L146 168M278 236L254 168" stroke="url(#pa-frame)" strokeWidth="9" strokeLinecap="round" />
    <rect x="108" y="64" width="184" height="52" rx="26" fill="url(#pa-metalH)" />
    <ellipse cx="116" cy="90" rx="9" ry="26" fill="#1d4ed8" /><ellipse cx="284" cy="90" rx="9" ry="26" fill="#1e3a8a" />
    <rect x="148" y="84" width="104" height="9" rx="4" fill="#0a1c3a" opacity=".75" />
    <path d="M118 112H282L300 214H100Z" fill="#0a1c3a" opacity=".55" />
    {Array.from({ length: 12 }).map((_, i) => (
      <g key={i}><rect x={116 + i * 14.4 - (i - 5.5) * 0.9} y="116" width="10" height="100" rx="5" fill="url(#pa-glass)" /><rect x={118 + i * 14.4 - (i - 5.5) * 0.9} y="120" width="2.4" height="90" rx="1.2" fill="#fff" opacity=".4" /></g>
    ))}
    <rect x="96" y="212" width="208" height="12" rx="3" fill="url(#pa-frame)" />
    <circle cx="300" cy="70" r="5" fill="url(#pa-gold)" />
  </g>
)
const Pressurized = () => (
  <g>
    <Shadow w={140} />
    <rect x="96" y="40" width="96" height="190" rx="32" fill="url(#pa-metalV)" />
    <rect x="96" y="96" width="96" height="8" fill="#0a1c3a" opacity=".25" />
    <circle cx="144" cy="70" r="9" fill="url(#pa-gold)" />
    <rect x="132" y="228" width="24" height="10" fill="#566579" />
    <g transform="skewY(-8)">
      <rect x="222" y="120" width="102" height="104" rx="6" fill="url(#pa-frame)" />
      <rect x="228" y="126" width="90" height="92" rx="3" fill="url(#pa-cell)" />
      {[1, 2, 3, 4, 5].map((i) => <path key={i} d={`M228 ${126 + i * 15.3}H318`} stroke="#8fb4ea" strokeOpacity=".45" />)}
      <path d="M236 126L226 218" stroke="#fff" strokeOpacity=".25" strokeWidth="8" />
    </g>
  </g>
)
const Tubes = () => Tank()
const Panel = () => (
  <g>
    <Shadow w={150} />
    <path d="M150 232L172 190M250 232L228 190" stroke="#566579" strokeWidth="8" strokeLinecap="round" />
    <path d="M96 176L128 70H312L284 176Z" fill="#cbd5e1" />
    <path d="M103 172L133 76H306L279 172Z" fill="url(#pa-cell)" />
    {[1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${133 + i * 24.8 - i * 4.3} 76L${103 + i * 29.4 - i * 4.3} 172`} stroke="#8fb4ea" strokeOpacity=".5" />)}
    {[1, 2, 3].map((i) => <path key={i} d={`M${133 - i * 7.5} ${76 + i * 24}H${306 - i * 6.8}`} stroke="#8fb4ea" strokeOpacity=".5" />)}
    <path d="M140 80L112 168" stroke="#fff" strokeOpacity=".22" strokeWidth="12" />
  </g>
)
const HeatPump = () => (
  <g>
    <Shadow w={120} />
    <rect x="102" y="72" width="196" height="160" rx="12" fill="url(#pa-metalH)" />
    <rect x="112" y="82" width="176" height="140" rx="8" fill="#0a1c3a" opacity=".12" />
    <circle cx="200" cy="152" r="56" fill="#0a1c3a" opacity=".8" />
    <circle cx="200" cy="152" r="50" fill="none" stroke="#9fb1c8" strokeWidth="2" />
    {[0, 1, 2, 3, 4, 5, 6].map((a) => <ellipse key={a} cx="200" cy="152" rx="9" ry="38" fill="url(#pa-metalV)" transform={`rotate(${a * 51.4} 200 152)`} />)}
    <circle cx="200" cy="152" r="9" fill="url(#pa-gold)" />
    {[0, 1, 2, 3].map((i) => <path key={i} d={`M262 ${96 + i * 9}H286`} stroke="#566579" strokeWidth="2" />)}
  </g>
)
const Light = () => (
  <g>
    <Shadow w={70} />
    <rect x="195" y="84" width="10" height="152" fill="url(#pa-metalV)" />
    <path d="M110 70L270 50L282 78L122 98Z" fill="url(#pa-frame)" />
    <path d="M118 72L266 54L274 74L126 92Z" fill="url(#pa-cell)" />
    <rect x="190" y="96" width="20" height="14" rx="4" fill="url(#pa-metalH)" />
    <path d="M200 112L150 232H250Z" fill="#ffe29a" opacity=".22" />
    <circle cx="200" cy="114" r="6" fill="url(#pa-gold)" />
  </g>
)
const Stand = () => (
  <g>
    <Shadow w={110} />
    <ellipse cx="200" cy="70" rx="72" ry="16" fill="#e6edf6" />
    <path d="M128 70V120C128 130 272 130 272 120V70" fill="url(#pa-metalV)" />
    <ellipse cx="200" cy="70" rx="72" ry="16" fill="#cfd9e6" />
    <ellipse cx="200" cy="70" rx="58" ry="11" fill="#1d3f73" />
    <path d="M142 134L120 236M258 134L280 236M142 134L262 236M258 134L138 236M128 190H272" stroke="url(#pa-frame)" strokeWidth="6" fill="none" strokeLinecap="round" />
  </g>
)
const Coil = () => (
  <g>
    <Shadow w={100} />
    <rect x="124" y="40" width="152" height="196" rx="34" fill="url(#pa-metalV)" />
    <rect x="140" y="88" width="120" height="110" rx="14" fill="#0a1c3a" opacity=".55" />
    <path d="M154 108H246c14 0 14 18 0 18H154c-14 0-14 18 0 18H246c14 0 14 18 0 18H154" fill="none" stroke="#ffb347" strokeWidth="7" strokeLinecap="round" />
    <path d="M154 108H246c14 0 14 18 0 18H154c-14 0-14 18 0 18H246c14 0 14 18 0 18H154" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="200" cy="64" r="8" fill="url(#pa-gold)" />
  </g>
)
const Assistant = () => (
  <g>
    <Shadow w={110} />
    <rect x="112" y="108" width="176" height="124" rx="38" fill="url(#pa-metalH)" />
    <rect x="186" y="84" width="28" height="26" rx="4" fill="url(#pa-metalV)" />
    <rect x="288" y="150" width="30" height="12" rx="6" fill="url(#pa-metalH)" />
    <rect x="82" y="150" width="30" height="12" rx="6" fill="url(#pa-metalH)" />
    <rect x="150" y="150" width="100" height="8" rx="4" fill="#0a1c3a" opacity=".5" />
  </g>
)
const Service = () => (
  <g>
    <circle cx="200" cy="140" r="72" fill="#0a1c3a" opacity=".5" />
    <path d="M160 190L214 134" stroke="url(#pa-gold)" strokeWidth="16" strokeLinecap="round" />
    <circle cx="228" cy="112" r="28" fill="none" stroke="url(#pa-metalH)" strokeWidth="14" />
    <path d="M236 92L246 80" stroke="#0a1c3a" strokeWidth="14" />
  </g>
)
const Guarantee = () => (
  <g>
    <circle cx="200" cy="140" r="86" fill="url(#pa-gold)" />
    <circle cx="200" cy="140" r="74" fill="#0a1c3a" />
    <circle cx="200" cy="140" r="66" fill="none" stroke="#f7b733" strokeDasharray="3 5" strokeWidth="2" />
    <text x="200" y="152" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="66" fill="#fff">20</text>
    <text x="200" y="182" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="4" fill="#f7b733">YEARS</text>
  </g>
)

const ART = { tank: Tank, pressurized: Pressurized, tubes: Tubes, panel: Panel, heatpump: HeatPump, light: Light, stand: Stand, coil: Coil, assistant: Assistant, service: Service, guarantee: Guarantee }

export default function ProductArt({ kind = 'tank', label }) {
  const Art = ART[kind] || Tank
  return <Frame label={label}><Art /></Frame>
}

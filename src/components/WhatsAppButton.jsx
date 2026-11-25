import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site.js'

export default function WhatsAppButton({ message, children = 'WhatsApp Us', className = '', ...rest }) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${className}`} {...rest}>
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  )
}

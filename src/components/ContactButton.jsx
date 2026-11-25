import { Link } from 'react-router-dom'

export default function ContactButton({ children = 'Contact Us', variant = 'primary', className = '' }) {
  return (
    <Link to="/contact" className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  )
}

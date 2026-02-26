import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#inicio"
          className="text-lg font-bold text-sky-400 hover:text-sky-300 transition-all duration-300 hover:scale-105 active:scale-100"
        >
          AFE
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 transition-all duration-200 active:scale-95"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800/50">
          <ul className="max-w-[1100px] mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-3 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

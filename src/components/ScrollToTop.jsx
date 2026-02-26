import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-110 active:scale-100 transition-all duration-300 animate-scale-in focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#0a0f1a]"
      aria-label="Volver arriba"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  )
}

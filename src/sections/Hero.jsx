import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { personalInfo } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 })

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 relative"
    >
      {/* Orbes decorativos de fondo */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-sky-500/10 blur-[100px] animate-float pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/8 blur-[120px] animate-float pointer-events-none"
        style={{ animationDelay: '-2s' }}
        aria-hidden
      />

      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p
          className="text-sky-400 font-medium text-sm uppercase tracking-[0.25em] mb-4 transition-transform duration-300 hover:tracking-[0.3em]"
          style={{ transitionProperty: 'letter-spacing' }}
        >
          {personalInfo.career}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-2">{personalInfo.university}</p>
        <p className="text-slate-500 flex items-center justify-center gap-2 flex-wrap mb-10">
          <span className="inline-flex items-center gap-1.5 text-sm">
            <MapPin size={16} className="text-sky-500/70" />
            {personalInfo.location}
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:border-sky-500/50 hover:text-sky-400 hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            Email
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:border-sky-500/50 hover:text-sky-400 hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone size={18} className="group-hover:scale-110 transition-transform" />
            Teléfono
          </a>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}hoja-de-vida-felipe-echeverri.pdf`}
          download="Hoja-de-Vida-Felipe-Echeverri.pdf"
          className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all duration-300 active:scale-[0.98]"
        >
          <Download size={20} className="shrink-0" />
          Descargar CV (PDF)
        </a>
      </div>
    </section>
  )
}

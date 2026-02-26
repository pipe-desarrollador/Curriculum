import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/60 border-t border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-sky-400 transition-all duration-200 hover:scale-[1.02]"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-sky-400 transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone size={18} />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {personalInfo.location}
            </span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/pipe-desarrollador"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
          © {currentYear} {personalInfo.name}. Hecho con React + Vite + Tailwind.
        </p>
      </div>
    </footer>
  )
}

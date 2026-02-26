import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { profileText } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function Profile() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 })

  return (
    <section id="perfil" className="py-24 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`section-reveal transition-all duration-500 ${isVisible ? 'visible' : ''}`}
        >
          <SectionHeader label="01" title="Perfil Profesional" />
          <div className="reveal-item card-glow bg-slate-800/50 rounded-2xl p-6 sm:p-10 border border-slate-700/50 shadow-xl">
            <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
              {profileText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

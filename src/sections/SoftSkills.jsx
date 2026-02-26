import { Heart } from 'lucide-react'
import { softSkills } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

export default function SoftSkills() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
        >
          <SectionHeader label="04" title="Habilidades Blandas" />
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <span
                key={skill}
                className={`reveal-item inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 hover:shadow-[0_0_20px_-8px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][i] ?? ''}`}
              >
                <Heart size={16} className="text-sky-500/80 shrink-0" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

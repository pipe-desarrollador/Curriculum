import { Code, Database, Layout, Server, Wrench } from 'lucide-react'
import { skills } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

const categories = [
  { key: 'languages', label: 'Lenguajes', icon: Code },
  { key: 'frontend', label: 'Frontend', icon: Layout },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'databases', label: 'Bases de Datos', icon: Database },
  { key: 'tools', label: 'Herramientas', icon: Wrench },
]

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.08 })

  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
        >
          <SectionHeader label="02" title="Habilidades Técnicas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(({ key, label, icon: Icon }, i) => (
              <div
                key={key}
                className={`reveal-item card-glow bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group ${['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'][i]}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 group-hover:bg-sky-500/30 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_-8px_rgba(56,189,248,0.3)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-lg">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-700/80 text-slate-300 text-sm border border-slate-600/50 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

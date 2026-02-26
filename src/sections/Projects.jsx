import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { projects } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.06 })

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
        >
          <SectionHeader label="03" title="Proyectos Destacados" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`reveal-item card-glow group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 relative overflow-hidden ${['stagger-1', 'stagger-2', 'stagger-3'][index]}`}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 group-hover:bg-sky-500/30 group-hover:shadow-[0_0_20px_-6px_rgba(56,189,248,0.4)] transition-all duration-300">
                    <FolderGit2 size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-sky-400/80">
                      Proyecto {index + 1}
                    </span>
                    <h3 className="font-semibold text-slate-100 text-lg group-hover:text-sky-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-700/80 text-sky-300/90 text-xs border border-slate-600/50 hover:border-sky-500/40 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Encabezado de sección con jerarquía visual clara.
 * Label pequeño + título con barra de acento.
 */
export default function SectionHeader({ label, title }) {
  return (
    <header className="mb-10 md:mb-12">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/90 mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-50 tracking-tight flex items-center gap-3">
        <span
          className="w-1 h-10 sm:h-12 rounded-full bg-gradient-to-b from-sky-400 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
          aria-hidden
        />
        {title}
      </h2>
    </header>
  )
}

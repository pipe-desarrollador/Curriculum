import { useState } from 'react'
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'
import { personalInfo } from '../data/content'

const formspreeFormId = import.meta.env.VITE_FORMSPREE_ID || ''

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error' | 'mailto'
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    if (formspreeFormId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Contacto desde portfolio: ${form.name}`,
          }),
        })
        if (res.ok) {
          setStatus('success')
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus('error')
          setErrorMessage('No se pudo enviar. Intenta de nuevo o usa el enlace de email.')
        }
      } catch {
        setStatus('error')
        setErrorMessage('Error de conexión. Intenta de nuevo o usa el enlace de email.')
      }
    } else {
      // Fallback: abrir cliente de correo con mailto
      const subject = encodeURIComponent('Contacto desde portfolio')
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
      )
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      setForm({ name: '', email: '', message: '' })
    }
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isDone = status === 'success' || status === 'mailto'

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className={`section-reveal ${isVisible ? 'visible' : ''}`}
        >
          <SectionHeader label="05" title="Contacto" />
          <div className="max-w-xl">
            <p className="reveal-item text-slate-400 mb-6">
              ¿Interesado en trabajar juntos? Envíame un mensaje.
            </p>

            {status === 'success' && (
              <div className="reveal-item p-6 rounded-2xl bg-sky-500/15 border border-sky-500/40 text-sky-300 shadow-[0_0_30px_-10px_rgba(56,189,248,0.2)]">
                <p>Gracias por tu mensaje. Te responderé pronto.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-sky-400 hover:text-sky-300 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {status === 'mailto' && (
              <div className="reveal-item p-6 rounded-2xl bg-sky-500/15 border border-sky-500/40 text-sky-300 shadow-[0_0_30px_-10px_rgba(56,189,248,0.2)]">
                <p>Se abrió tu cliente de correo. Envía el mensaje desde allí.</p>
                <p className="mt-2 text-sm text-slate-400">
                  Para recibir los mensajes directamente en tu bandeja, configura Formspree (ver README).
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-sky-400 hover:text-sky-300 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {status === 'error' && (
              <div className="reveal-item p-6 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-300 mb-6">
                {errorMessage}
              </div>
            )}

            {(status === 'idle' || status === 'error' || isDone) && !isDone && (
              <form
                onSubmit={handleSubmit}
                className="reveal-item card-glow bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Nombre
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="input-glow w-full pl-11 pr-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/60 transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input-glow w-full pl-11 pr-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/60 transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-3.5 top-4 text-slate-500"
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-glow w-full pl-11 pr-4 py-3 rounded-xl bg-slate-700/60 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/60 transition-all duration-200 resize-none"
                      placeholder="Escribe tu mensaje..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}

            {status === 'sending' && (
              <div className="reveal-item p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3 text-slate-400">
                <Loader2 size={24} className="animate-spin shrink-0" />
                Enviando tu mensaje...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

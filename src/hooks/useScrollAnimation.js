import { useEffect, useRef, useState } from 'react'

/**
 * Hook para animar elementos con fade-in al hacer scroll.
 * Usa Intersection Observer para detectar cuando el elemento entra en viewport.
 * @param {Object} options - { threshold: número 0-1, rootMargin: string }
 * @returns [ref, isVisible]
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}

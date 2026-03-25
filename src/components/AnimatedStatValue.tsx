import { useEffect, useState } from 'react'

export function AnimatedStatValue({ value, start }: { value: string; start: boolean }) {
  const [displayValue, setDisplayValue] = useState(start ? 0 : Number(value.replace(/\D/g, '')) || 0)

  useEffect(() => {
    if (!start) return

    const numeric = Number(value.replace(/\D/g, '')) || 0
    const duration = 1400
    const startTime = performance.now()

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplayValue(Math.round(numeric * eased))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  const suffix = value.replace(/[0-9]/g, '')
  return (
    <>
      {displayValue}
      {suffix}
    </>
  )
}

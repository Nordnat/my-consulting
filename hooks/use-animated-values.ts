'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 320

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useAnimatedValues(targets: number[]) {
  const [values, setValues] = useState(targets)
  const valuesRef = useRef(targets)
  const key = targets.join(',')

  useEffect(() => {
    const from = valuesRef.current
    const to = key.split(',').map(Number)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      valuesRef.current = to
      setValues(to)
      return
    }

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1)
      const eased = easeOutCubic(progress)
      const next = to.map((target, index) => from[index] + (target - from[index]) * eased)
      valuesRef.current = next
      setValues(next)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [key])

  return values
}

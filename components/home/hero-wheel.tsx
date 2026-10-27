'use client'

import { useState } from 'react'
import { COMPETENCIES, DEFAULT_RATINGS, type CompetencyId } from '@/lib/growth-wheel-data'
import { CompetencyWheel } from '@/components/growth-wheel/competency-wheel'

export function HeroWheel() {
  const [activeId, setActiveId] = useState<CompetencyId>(COMPETENCIES[0].id)

  return <CompetencyWheel ratings={DEFAULT_RATINGS} activeId={activeId} onSelect={setActiveId} />
}

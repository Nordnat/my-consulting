import type { Metadata } from 'next'
import { GrowthWheel } from '@/components/growth-wheel/growth-wheel'

export const metadata: Metadata = {
  title: 'Agile Coaching Growth Wheel — Audyt kompetencji',
  description:
    'Oceń dojrzałość 9 kompetencji Agile Coachingu, zobacz wynik na kole i wygeneruj pełny raport.',
}

export default function Page() {
  return <GrowthWheel />
}

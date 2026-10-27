import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { GrowthWheel } from '@/components/growth-wheel/growth-wheel'
import {
  AGW_RATINGS_COOKIE,
  AGW_ACTIVE_COOKIE,
  parseRatingsCookie,
  parseActiveCompetencyCookie,
} from '@/lib/growth-wheel-cookies'

export const metadata: Metadata = {
  title: 'Agile Coaching Growth Wheel — samoocena kompetencji',
  description:
    'Oceń swoje kompetencje w 9 obszarach Agile Coachingu, zobacz profil na kole i poznaj opisy poziomów oraz pytania do refleksji.',
}

export default async function Page() {
  const cookieStore = await cookies()
  const initialRatings = parseRatingsCookie(cookieStore.get(AGW_RATINGS_COOKIE)?.value)
  const initialActiveId = parseActiveCompetencyCookie(cookieStore.get(AGW_ACTIVE_COOKIE)?.value)

  return <GrowthWheel initialRatings={initialRatings} initialActiveId={initialActiveId} />
}

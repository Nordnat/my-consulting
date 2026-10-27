import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { GrowthWheel } from '@/components/growth-wheel/growth-wheel';
import {
  AGW_RATINGS_COOKIE,
  AGW_ACTIVE_COOKIE,
  parseRatingsCookie,
  parseActiveCompetencyCookie,
} from '@/lib/growth-wheel-cookies';

export const metadata: Metadata = {
  title: 'Agile Coaching Growth Wheel | Interactive Competency Framework & Self-Assessment',
  description:
    'Explore the Agile Coaching Growth Wheel model. 9 core competencies, 22 subcompetencies, interactive radar visualization, maturity levels, and development paths for Agile Leaders, Coaches, and Scrum Masters.',
  keywords: [
    'Agile Coaching Growth Wheel',
    'Agile Competency Model',
    'Scrum Master Development',
    'Agile Coach Maturity Assessment',
    'Agile Leadership Framework',
    'Facilitating',
    'Mentoring',
    'Professional Coaching',
    'Guiding Learning',
  ],
  alternates: {
    canonical: 'https://rafalkamieniarz.com/en/agile-growth-wheel',
    languages: {
      'pl-PL': 'https://rafalkamieniarz.com/metodyki-zwinne/agile-growth-wheel',
      'en-US': 'https://rafalkamieniarz.com/en/agile-growth-wheel',
    },
  },
  openGraph: {
    title: 'Agile Coaching Growth Wheel | Interactive Framework & Assessment',
    description:
      'Interactive radar wheel visualization for the 9 competencies of the Agile Coaching Growth Wheel.',
    url: 'https://rafalkamieniarz.com/en/agile-growth-wheel',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function EnglishAgileGrowthWheelPage() {
  const cookieStore = await cookies();
  const initialRatings = parseRatingsCookie(cookieStore.get(AGW_RATINGS_COOKIE)?.value);
  const initialActiveId = parseActiveCompetencyCookie(cookieStore.get(AGW_ACTIVE_COOKIE)?.value);

  return <GrowthWheel initialRatings={initialRatings} initialActiveId={initialActiveId} />;
}

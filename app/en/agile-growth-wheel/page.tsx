import type { Metadata } from 'next';
import { SiteHeader } from '@/components/growth-wheel/site-header';
import { GrowthWheel } from '@/components/growth-wheel/growth-wheel';

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
    canonical: 'https://rafalkamieniarz.pl/en/agile-growth-wheel',
    languages: {
      'pl-PL': 'https://rafalkamieniarz.pl/metodyki-zwinne/agile-growth-wheel',
      'en-US': 'https://rafalkamieniarz.pl/en/agile-growth-wheel',
    },
  },
  openGraph: {
    title: 'Agile Coaching Growth Wheel | Interactive Framework & Assessment',
    description:
      'Interactive radar wheel visualization for the 9 competencies of the Agile Coaching Growth Wheel.',
    url: 'https://rafalkamieniarz.pl/en/agile-growth-wheel',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishAgileGrowthWheelPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <SiteHeader />
      <main className="flex-1">
        <GrowthWheel />
      </main>
    </div>
  );
}

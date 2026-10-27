import type { Metadata } from 'next';
import { SiteHeader } from '@/components/growth-wheel/site-header';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { GrowthWheelFeature } from '@/components/home/growth-wheel-feature';
import { Process } from '@/components/home/process';
import { About } from '@/components/home/about';
import { Contact } from '@/components/home/contact';
import { SiteFooter } from '@/components/home/site-footer';

export const metadata: Metadata = {
  title: 'Rafał Kamieniarz | Agile Delivery & Coaching Consulting',
  description:
    'Strategic technology consulting, Agile delivery management, engineering leadership, and organizational transformation based on the Agile Coaching Growth Wheel framework.',
  keywords: [
    'Agile Consultant',
    'Agile Delivery Manager',
    'Agile Coaching Growth Wheel',
    'Engineering Leadership',
    'Scrum Master',
    'Agile Transformation',
    'Fractional Agile Lead',
    'Software Delivery Optimization',
  ],
  alternates: {
    canonical: 'https://rafalkamieniarz.pl/en',
    languages: {
      'pl-PL': 'https://rafalkamieniarz.pl/',
      'en-US': 'https://rafalkamieniarz.pl/en',
    },
  },
  openGraph: {
    title: 'Rafał Kamieniarz | Agile Delivery & Coaching Consulting',
    description:
      'Strategic technology consulting, Agile delivery management, and organizational transformation.',
    url: 'https://rafalkamieniarz.pl/en',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <GrowthWheelFeature />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

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
  title: 'Rafał Kamieniarz | Agile Leader & Engineering Manager',
  description:
    'Agile Leader and Engineering Manager with 8+ years at Samsung Electronics. Delivery and flow metrics (DORA), Ways of Working, coaching and leadership development, plus an interactive Agile Coaching Growth Wheel.',
  keywords: [
    'Engineering Manager',
    'Agile Leader',
    'Agile Delivery',
    'Flow Metrics',
    'DORA Metrics',
    'Ways of Working',
    'Agile Coaching Growth Wheel',
    'Scrum Master',
    'AI in SDLC',
    'Rafał Kamieniarz',
  ],
  alternates: {
    canonical: 'https://rafalkamieniarz.com/en',
    languages: {
      'pl-PL': 'https://rafalkamieniarz.com/',
      'en-US': 'https://rafalkamieniarz.com/en',
    },
  },
  openGraph: {
    title: 'Rafał Kamieniarz | Agile Leader & Engineering Manager',
    description:
      'Agile Leader and Engineering Manager with 8+ years at Samsung Electronics. Delivery, flow metrics, Ways of Working, and developing leaders.',
    url: 'https://rafalkamieniarz.com/en',
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

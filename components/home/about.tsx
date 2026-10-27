'use client'

import { SITE } from '@/lib/site-config'
import { useLanguage } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

const FOCUS_AREAS_PL = [
  'Zarządzanie zespołami inżynierskimi',
  'Agile delivery',
  'Metryki przepływu',
  'DORA',
  'Ways of Working',
  'Coaching',
  'Facylitacja',
  'Change management',
  'AI w SDLC',
] as const

const FOCUS_AREAS_EN = [
  'Engineering Team Management',
  'Agile Delivery',
  'Flow Metrics',
  'DORA Metrics',
  'Ways of Working',
  'Professional Coaching',
  'Facilitation',
  'Change Management',
  'AI in SDLC',
] as const

const EXPERIENCE_PL = [
  {
    period: '2024 – 2026',
    role: 'Engineering Manager & Head of Part',
    company: 'Samsung Electronics Polska · Samsung Ads',
    points: [
      'Prowadzenie 2 zespołów Scrum (15 inżynierów) we współpracy z zespołami w Mountain View.',
      'Współprowadzenie wdrożenia nowego produktu AdTech od zera do premiery.',
      'Transformacja Ways of Working: przekazanie zespołom pełnej odpowiedzialności technicznej.',
      'Strategia rozwoju technicznego dla społeczności 70+ inżynierów i 3 międzynarodowe warsztaty Tech Huddle.',
    ],
  },
  {
    period: '2022 – 2024',
    role: 'Senior Software Engineer & Scrum Master',
    company: 'Samsung Electronics Polska',
    points: [
      'Połączenie pracy architektonicznej z rolą Scrum Mastera.',
      'Usuwanie zależności między zespołami i poprawa przewidywalności sprintów.',
    ],
  },
  {
    period: '2018 – 2022',
    role: 'Software Engineer',
    company: 'Samsung Electronics Polska',
    points: ['Rozwój aplikacji webowych w React, Angular i TypeScript, testy jednostkowe i code review.'],
  },
] as const

const EXPERIENCE_EN = [
  {
    period: '2024 – 2026',
    role: 'Engineering Manager & Head of Part',
    company: 'Samsung Electronics Poland · Samsung Ads',
    points: [
      'Led 2 cross-functional Scrum teams (15 engineers) in active partnership with Silicon Valley (Mountain View).',
      'Co-led zero-to-launch rollout of a major AdTech platform product.',
      'Transformed Ways of Working: empowered engineering squads with full technical end-to-end ownership.',
      'Authored tech career roadmap for 70+ engineer community and orchestrated 3 international Tech Huddle summits.',
    ],
  },
  {
    period: '2022 – 2024',
    role: 'Senior Software Engineer & Scrum Master',
    company: 'Samsung Electronics Poland',
    points: [
      'Synthesized software systems architecture with Scrum Master servant leadership.',
      'Dismantled cross-team blocker dependencies and stabilized sprint forecasting accuracy.',
    ],
  },
  {
    period: '2018 – 2022',
    role: 'Software Engineer',
    company: 'Samsung Electronics Poland',
    points: ['Architected frontend and full-stack web platforms using React, Angular, and TypeScript.'],
  },
] as const

const CERTIFICATIONS = [
  'Professional Scrum Master II (PSM II)',
  'CoachWise Coaching Essentials™',
  'CoachWise Facilitation Essentials™',
  'Change Management Foundation V3',
  'AI_managers 2 – AI Management',
  'AWS Certified Cloud Practitioner',
] as const

export function About() {
  const { language, t } = useLanguage()
  const isEn = language === 'en'
  const focusAreas = isEn ? FOCUS_AREAS_EN : FOCUS_AREAS_PL
  const experience = isEn ? EXPERIENCE_EN : EXPERIENCE_PL

  return (
    <section id="o-mnie" aria-labelledby="about-heading" className="scroll-mt-14 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:py-24">
        <div className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="about-heading" eyebrow={t.home.about.eyebrow} title={SITE.brand} />
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-slate-950 text-pretty">
              {t.home.about.lead}
            </p>
            <p className="text-base leading-relaxed text-slate-600 text-pretty">
              {t.home.about.bio}
            </p>
          </div>
          <ul aria-label={t.home.about.areasTitle} className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li key={area} className="border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{t.home.about.experienceTitle}</h3>
            <ol className="flex flex-col">
              {experience.map((item) => (
                <li
                  key={item.role}
                  className="grid gap-2 border-t border-slate-200 py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
                >
                  <p className="font-mono text-xs text-indigo-600">{item.period}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-semibold tracking-tight text-slate-950">{item.role}</p>
                      <p className="text-sm text-slate-500">{item.company}</p>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600 text-pretty">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-slate-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{t.home.about.certsTitle}</h3>
            <ul className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="bg-white px-4 py-3 text-sm text-slate-700">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

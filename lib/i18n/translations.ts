export type Language = 'pl' | 'en'

export const TRANSLATIONS = {
  pl: {
    nav: {
      brand: 'Rafał Kamieniarz',
      tagline: 'Agile Delivery & Coaching',
      start: 'Start',
      methods: 'Metodyki zwinne',
      models: 'Modele kompetencji',
      growthWheel: 'Agile Growth Wheel',
      audit: 'Audyt kompetencji',
      domainKnowledge: 'Domain Knowledge',
      services: 'Usługi',
      about: 'O mnie',
      contact: 'Kontakt',
      overview: 'Przegląd',
    },
    home: {
      hero: {
        badge: 'Agile delivery · Metryki przepływu · Coaching',
        title: 'Zwinność, którą widać w wynikach, a nie na slajdach.',
        description:
          'Pomagam zespołom technologicznym i ich liderom dostarczać przewidywalnie. Zaczynam od danych: metryk przepływu i DORA. Potem porządkujemy procesy, a coaching sprawia, że zmiana zostaje w zespole.',
        ctaAudit: 'Zrób bezpłatny audyt kompetencji',
        ctaContact: 'Umów rozmowę',
        wheelCaptionTitle: 'Agile Coaching Growth Wheel',
        wheelCaptionSubtitle: '9 obszarów · 1 audyt',
      },
      services: {
        eyebrow: 'W czym pomagam',
        title: 'Od zatorów w dostarczaniu do zespołów, które same poprawiają swój przepływ',
        items: [
          {
            title: 'Problemy z delivery',
            description:
              'Diagnoza, dlaczego praca utyka: zależności między zespołami, za duże partie pracy, kolejki i przełączanie kontekstu.',
            note: null,
          },
          {
            title: 'Metryki przepływu i DORA',
            description:
              'Cycle time, throughput, WIP, flow efficiency oraz cztery metryki DORA. Mierzymy to, co pomaga podejmować decyzje.',
            note: null,
          },
          {
            title: 'Procesy Agile i Ways of Working',
            description:
              'Scrum, Kanban i ich hybrydy dopasowane do zespołu. Mniej ceremonii dla ceremonii, więcej autonomii i odpowiedzialności.',
            note: null,
          },
          {
            title: 'Coaching profesjonalny',
            description:
              'Indywidualna praca z Engineering Managerami, Tech Leadami i Scrum Masterami nad decyzjami, rolą i rozwojem.',
            note: 'Executive coaching wkrótce',
          },
        ],
      },
      tool: {
        eyebrow: 'Bezpłatne narzędzie',
        title: 'Sprawdź, gdzie dziś jest Twój Agile Coach albo Scrum Master',
        description:
          'Audyt oparty na modelu Agile Coaching Growth Wheel zajmuje kilka minut. Dostajesz obraz mocnych stron i luk kompetencyjnych, który możemy potem przełożyć na konkretny plan rozwoju.',
        cta: 'Rozpocznij audyt',
        benefits: [
          'Ocena 9 kompetencji Agile Coachingu w skali 1–5',
          'Natychmiastowa wizualizacja profilu na kole',
          'Rekomendowane materiały dla każdego obszaru',
          'Pełny raport PDF na Twój adres e-mail',
        ],
      },
      process: {
        eyebrow: 'Jak pracujemy',
        title: 'Cztery etapy współpracy',
        steps: [
          {
            title: 'Diagnoza',
            description:
              'Rozmowy, obserwacja pracy zespołów i dane z narzędzi: cycle time, WIP, metryki DORA. Ustalamy punkt wyjścia na faktach.',
          },
          {
            title: 'Plan zmiany',
            description: 'Wspólnie wybieramy 2–3 obszary o największym wpływie i definiujemy, po czym poznamy postęp.',
          },
          {
            title: 'Wdrożenie',
            description: 'Coaching, warsztaty i praca ramię w ramię z liderami, w rytmie dopasowanym do Twojej organizacji.',
          },
          {
            title: 'Pomiar i usamodzielnienie',
            description: 'Te same metryki pokazują efekt. Celem jest zespół, który dalej rozwija się bez zewnętrznego wsparcia.',
          },
        ],
      },
      about: {
        eyebrow: 'O mnie',
        lead: 'Engineering Manager i Agile Leader. Ponad 8 lat w Samsung Electronics: od programisty, przez Scrum Mastera, po prowadzenie zespołów inżynierskich w Samsung Ads.',
        bio: 'Znam delivery z obu stron: pisałem kod, prowadziłem ceremonie i odpowiadałem za roadmapę zespołów pracujących między Warszawą a Doliną Krzemową. Dziś pomagam organizacjom zobaczyć, gdzie naprawdę gubią czas, i zbudować zespoły, które same to poprawiają.',
        areasTitle: 'Obszary specjalizacji',
        experienceTitle: 'Doświadczenie',
        certsTitle: 'Certyfikaty',
      },
      contact: {
        eyebrow: 'Kontakt',
        title: 'Porozmawiajmy o tym, co chcesz zmienić w swojej organizacji.',
        description: 'Pierwsza 30-minutowa rozmowa jest bezpłatna i do niczego nie zobowiązuje.',
      },
      footer: {
        rights: 'Wszelkie prawa zastrzeżone.',
        privacy: 'Polityka prywatności',
        terms: 'Regulamin',
      },
    },
    growthWheel: {
      mapHeading: 'Mapa kompetencji',
      mapSubheading: 'Najedź na obszar, aby poznać szczegóły',
      auditHeading: 'Audyt kompetencji',
      average: 'Średnia',
      areas: 'Obszary',
      dragHint: 'Przeciągnij punkt wzdłuż osi lub tarczę wokół Self-Mastery, aby ustawić poziom. Działa też klawiatura (strzałki).',
      areaNumber: 'Obszar',
      fullGuideLink: 'Pełny przewodnik i kryteria →',
      ratingLevel: 'Ocena poziomu',
      level: 'Poziom',
      recommendedMaterials: 'Rekomendowane materiały',
      reportCtaTitle: 'Wygeneruj raport audytu',
      reportCtaDesc: 'Pobierz pełną analizę z rekomendacjami rozwojowymi dla Twojego zespołu.',
      reportCtaButton: 'Pobierz raport PDF',
      sourceInfoTitle: 'O modelu ACGW',
      sourceInfoText: 'Agile Coaching Growth Wheel został opracowany w 2022 roku przez międzynarodową społeczność pod egidą Scrum Alliance.',
    },
  },
  en: {
    nav: {
      brand: 'Rafał Kamieniarz',
      tagline: 'Agile Delivery & Coaching',
      start: 'Home',
      methods: 'Agile Methodologies',
      models: 'Competency Models',
      growthWheel: 'Agile Growth Wheel',
      audit: 'Competency Assessment',
      domainKnowledge: 'Domain Knowledge',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      overview: 'Overview',
    },
    home: {
      hero: {
        badge: 'Agile delivery · Flow Metrics · Executive & Team Coaching',
        title: 'Agility proven in tangible outcomes, not slide decks.',
        description:
          'I help engineering leaders and tech organizations build predictable delivery systems. We start with objective data: Flow Metrics and DORA metrics. Then we streamline processes, while professional coaching ensures lasting culture transformation.',
        ctaAudit: 'Take Free Competency Assessment',
        ctaContact: 'Schedule a Call',
        wheelCaptionTitle: 'Agile Coaching Growth Wheel',
        wheelCaptionSubtitle: '9 skill areas · 1 diagnostic audit',
      },
      services: {
        eyebrow: 'What I Solve',
        title: 'From delivery bottlenecks to self-optimizing engineering teams',
        items: [
          {
            title: 'Delivery Bottlenecks',
            description:
              'Root-cause diagnosis of stuck work: cross-team dependencies, large batch sizes, queuing delays, and multitasking cognitive overload.',
            note: null,
          },
          {
            title: 'Flow & DORA Metrics',
            description:
              'Cycle time, throughput, WIP limits, flow efficiency, and the four key DORA metrics. Measure what drives actionable executive decisions.',
            note: null,
          },
          {
            title: 'Agile Processes & Ways of Working',
            description:
              'Context-tailored Scrum, Kanban, and hybrid frameworks. Eliminating cargo-cult ceremonies in favor of engineering autonomy and ownership.',
            note: null,
          },
          {
            title: 'Professional Coaching',
            description:
              '1-on-1 coaching for Engineering Managers, Tech Leads, and Scrum Masters on strategic decisions, leadership presence, and career growth.',
            note: 'Executive coaching coming soon',
          },
        ],
      },
      tool: {
        eyebrow: 'Free Diagnostic Tool',
        title: 'Benchmark your Agile Coach or Scrum Master maturity',
        description:
          'A diagnostic audit based on the Agile Coaching Growth Wheel takes under 5 minutes. You gain a clear radar chart of strengths and competency gaps, ready to translate into an executive development plan.',
        cta: 'Launch Assessment',
        benefits: [
          'Evaluates 9 Agile Coaching competencies on a 1–5 scale',
          'Instant interactive radar chart & growth wheel profile',
          'Curated development resources for every skill area',
          'Comprehensive audit summary sent directly to your email',
        ],
      },
      process: {
        eyebrow: 'How We Work',
        title: 'Four stages of engagement',
        steps: [
          {
            title: 'Diagnosis',
            description:
              'Interviews, shadow observation, and pipeline analytics: cycle time, WIP, DORA metrics. Establishing a factual baseline.',
          },
          {
            title: 'Change Strategy',
            description: 'Selecting 2–3 highest-leverage focus areas and defining measurable progress criteria.',
          },
          {
            title: 'Implementation',
            description: 'Hands-on coaching, targeted workshops, and shoulder-to-shoulder leadership mentoring.',
          },
          {
            title: 'Measurement & Autonomy',
            description: 'Tracking metric improvements with the goal of creating self-sustaining teams requiring no external support.',
          },
        ],
      },
      about: {
        eyebrow: 'About Me',
        lead: 'Engineering Manager & Agile Leader. Over 8 years at Samsung Electronics: from software engineer, to Scrum Master, to leading engineering teams in Samsung Ads.',
        bio: 'I understand delivery from both sides of the table: writing production code, facilitating ceremonies, and owning roadmaps across distributed teams spanning Warsaw and Silicon Valley. Today, I guide tech enterprises in eliminating waste and establishing autonomous engineering excellence.',
        areasTitle: 'Core Specializations',
        experienceTitle: 'Track Record',
        certsTitle: 'Credentials & Certifications',
      },
      contact: {
        eyebrow: 'Contact',
        title: "Let's discuss what you want to transform in your engineering organization.",
        description: 'Initial 30-minute consultation is complimentary with zero obligation.',
      },
      footer: {
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
    growthWheel: {
      mapHeading: 'Competency Map',
      mapSubheading: 'Hover or tap an area to inspect details',
      auditHeading: 'Competency Assessment',
      average: 'Average',
      areas: 'Areas',
      dragHint: 'Drag a point along the axis or the dial around Self-Mastery to calibrate. Keyboard arrow keys supported.',
      areaNumber: 'Skill Area',
      fullGuideLink: 'Full Guide & Assessment Criteria →',
      ratingLevel: 'Proficiency Level',
      level: 'Level',
      recommendedMaterials: 'Recommended Resources',
      reportCtaTitle: 'Generate Audit Report',
      reportCtaDesc: 'Download complete competency analysis with developmental recommendations for your team.',
      reportCtaButton: 'Download PDF Report',
      sourceInfoTitle: 'About the ACGW Framework',
      sourceInfoText: 'The Agile Coaching Growth Wheel was developed in 2022 by a global community of practitioners convened under Scrum Alliance.',
    },
  },
} as const

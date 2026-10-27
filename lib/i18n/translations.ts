export type Language = 'pl' | 'en'

export const TRANSLATIONS = {
  pl: {
    nav: {
      brand: 'Rafał Kamieniarz',
      tagline: 'Agile Leader · Engineering Manager',
      start: 'Start',
      methods: 'Metodyki zwinne',
      models: 'Modele kompetencji',
      growthWheel: 'Agile Growth Wheel',
      audit: 'Samoocena kompetencji',
      domainKnowledge: 'Domain Knowledge',
      services: 'Czym się zajmuję',
      about: 'O mnie',
      contact: 'Kontakt',
      overview: 'Przegląd',
    },
    home: {
      hero: {
        badge: 'Agile Leader · Engineering Manager',
        title: 'Zwinność, którą widać w wynikach, a nie na slajdach.',
        description:
          'Ponad 8 lat w Samsungu, od kodu po zarządzanie zespołami, nauczyło mnie jednego: przewidywalne delivery nie zależy od wybranego frameworka, tylko od danych, praktyk inżynierskich i zaufania w zespole.',
        ctaAudit: 'Poznaj Agile Coaching Growth Wheel',
        ctaContact: 'Napisz do mnie',
        wheelCaptionTitle: 'Agile Coaching Growth Wheel',
        wheelCaptionSubtitle: '9 obszarów kompetencji',
      },
      services: {
        eyebrow: 'Czym się zajmuję',
        title: 'Obszary, w których pracuję i które stale zgłębiam',
        items: [
          {
            title: 'Delivery i metryki przepływu',
            description:
              'Dlaczego praca utyka: zależności między zespołami, za duże partie pracy, kolejki i przełączanie kontekstu. Patrzę na dane: cycle time, throughput, WIP, flow efficiency i cztery metryki DORA.',
            note: null,
          },
          {
            title: 'Agile i Ways of Working',
            description:
              'Scrum, Kanban i ich hybrydy dobierane do zespołu, a nie odwrotnie. Mniej ceremonii dla ceremonii, więcej autonomii i odpowiedzialności.',
            note: null,
          },
          {
            title: 'Ludzie: coaching, facylitacja, mentoring',
            description:
              'Rozwój Scrum Masterów, Tech Leadów i Engineering Managerów: rozmowy coachingowe, facylitacja warsztatów i praca nad rolą, decyzjami i kompetencjami.',
            note: null,
          },
          {
            title: 'AI w SDLC i zmiana w organizacji',
            description:
              'Jak AI zmienia wytwarzanie oprogramowania i co to oznacza dla zespołów i liderów. Do tego change management: jak wprowadzać nowe nawyki tak, żeby zostały.',
            note: null,
          },
        ],
      },
      tool: {
        eyebrow: 'Narzędzie, z którego korzystam',
        title: 'Agile Coaching Growth Wheel: mapa kompetencji dla Agile Coachów i Scrum Masterów',
        description:
          'To model opracowany przez międzynarodową społeczność praktyków (licencja CC BY-SA 4.0), który wykorzystuję jako mapę rozmów o rozwoju. Przygotowałem jego interaktywną wersję: oceń się w 9 obszarach, zobacz swój profil na kole i przeczytaj, jak wygląda każdy poziom.',
        cta: 'Otwórz narzędzie',
        benefits: [
          'Samoocena 9 kompetencji w skali 1–5',
          'Natychmiastowa wizualizacja profilu na kole',
          'Opis każdego poziomu: od Świadomości do Eksperta',
          'Zachowania, antywzorce i pytania do refleksji dla każdej podkompetencji',
        ],
      },
      process: {
        eyebrow: 'Jak pracuję',
        title: 'Cztery zasady, którymi kieruję się w pracy z zespołami',
        steps: [
          {
            title: 'Zaczynam od faktów',
            description:
              'Zanim cokolwiek zmienię, patrzę na dane: cycle time, WIP, metryki DORA, a obok nich rozmowy z ludźmi. Punkt wyjścia ustalam na faktach, nie na wrażeniach.',
          },
          {
            title: 'Wybieram mało, ale ważne',
            description:
              'Zamiast wdrażać wszystko naraz, wybieram 2–3 obszary o największym wpływie i z góry określam, po czym poznamy postęp.',
          },
          {
            title: 'Pracuję ramię w ramię',
            description:
              'Zmiana dzieje się w codziennej pracy: w planowaniu, retrospektywach, code review i rozmowach 1:1. Działam razem z zespołem i liderami, w rytmie, który da się utrzymać.',
          },
          {
            title: 'Celem jest samodzielność',
            description:
              'Dobrze działa to, co zespół potrafi utrzymać beze mnie. Te same metryki pokazują efekt, a zespół uczy się sam je czytać i na ich podstawie działać.',
          },
        ],
      },
      about: {
        eyebrow: 'O mnie',
        lead: 'Agile Leader i Engineering Manager. Zarządzanie zespołami inżynierskimi i ponad 8 lat w Samsung Electronics: od programisty, przez Scrum Mastera, po prowadzenie zespołów w Samsung Ads.',
        bio: 'Znam delivery z obu stron: pisałem kod, prowadziłem ceremonie i odpowiadałem za roadmapę zespołów pracujących między Warszawą a Doliną Krzemową. Dziś skupiam się na zarządzaniu zespołami inżynierskimi, analizie tego, gdzie zespoły naprawdę tracą czas i budowaniu środowiska, w którym same potrafią to poprawiać.',
        areasTitle: 'Tematy, które mnie interesują',
        experienceTitle: 'Doświadczenie',
        certsTitle: 'Certyfikaty',
      },
      contact: {
        eyebrow: 'Kontakt',
        title: 'Chętnie porozmawiam o zespołach, delivery i rozwoju liderów.',
        description:
          'Jeśli chcesz wymienić doświadczenia, zrobić coś razem albo po prostu porozmawiać o pracy zespołów technologicznych, napisz do mnie lub połącz się na LinkedIn.',
        ctaEmail: 'Napisz wiadomość',
        modalTitle: 'Napisz do mnie',
        modalDescription:
          'Zostaw wiadomość — odpiszę najszybciej jak to możliwe na podany adres e-mail.',
        nameLabel: 'Twoje imię i nazwisko',
        namePlaceholder: 'np. Jan Kowalski',
        emailLabel: 'Twój adres e-mail',
        emailPlaceholder: 'imie.nazwisko@firma.com',
        messageLabel: 'Wiadomość',
        messagePlaceholder: 'Krótko opisz, w jakim temacie chcesz porozmawiać lub jak mogę pomóc...',
        consentText:
          'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i odpowiedzi na wiadomość. Szczegóły w ',
        privacyPolicyLink: 'Polityce prywatności',
        adminNote: 'Administratorem Twoich danych jest Rafał Kamieniarz.',
        submitButton: 'Wyślij wiadomość',
        sendingButton: 'Wysyłanie…',
        successTitle: 'Wiadomość została wysłana!',
        successMessage:
          'Dziękuję za kontakt. Odezwię się do Ciebie najszybciej jak to możliwe.',
        closeButton: 'Zamknij',
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
      auditHeading: 'Samoocena kompetencji',
      average: 'Średnia',
      areas: 'Obszary',
      resetRatings: 'Zresetuj oceny',
      savedInCookies: 'Wybory zapamiętane w cookies',
      dragHint: 'Przeciągnij punkt wzdłuż osi lub tarczę wokół Self-Mastery, aby ustawić poziom. Działa też klawiatura (strzałki ↑/↓ lub klawisze 1–5).',
      areaNumber: 'Obszar',
      fullGuideLink: 'Pełny przewodnik i kryteria →',
      ratingLevel: 'Ocena poziomu',
      level: 'Poziom',
      recommendedMaterials: 'Rekomendowane materiały',
      reportCtaTitle: 'Wygeneruj raport z samooceny',
      reportCtaDesc: 'Pobierz pełną analizę z rekomendacjami rozwojowymi.',
      reportCtaButton: 'Pobierz raport PDF',
      sourceInfoTitle: 'O modelu ACGW',
      sourceInfoText: 'Agile Coaching Growth Wheel został opracowany w 2022 roku przez międzynarodową społeczność pod egidą Scrum Alliance.',
      summaryCta: {
        title: 'Podsumowanie samooceny',
        desc: '9 obszarów · Profil dojrzałości i przestrzeń do akceptacji',
        button: 'Zobacz podsumowanie i plan',
      },
      summaryModal: {
        eyebrow: 'Agile Coaching Growth Wheel · Samoocena',
        title: 'Podsumowanie profilu i plan rozwoju',
        subtitle: 'Syntetyczna analiza Twoich mocnych stron, obszarów rozwoju oraz przestrzeń do zatwierdzenia priorytetów.',
        overallScore: 'Średnia z audytu',
        maturityProfile: 'Profil dojrzałości',
        strengthsTitle: 'Mocne strony (Fundament)',
        strengthsDesc: 'Najwyżej ocenione obszary — Twój naturalny filar w pracy z zespołami.',
        growthTitle: 'Obszary do rozwoju (Dźwignia)',
        growthDesc: 'Obszary o największym potencjale wzrostu — tu każda zmiana przynosi największy zwrot.',
        allCompetenciesTitle: 'Wszystkie 9 obszarów kompetencji',
        acceptanceTitle: 'Przestrzeń do akceptacji (Zobowiązanie rozwojowe)',
        acceptanceDesc: 'Rozwój zaczyna się od świadomej akceptacji punktu wyjścia. Wybierz 1–3 priorytety, na których skupisz się w najbliższym cyklu:',
        selectedPriorities: 'Wybrane priorytety',
        priorityHint: 'Kliknij, aby wybrać do 3 priorytetowych kompetencji:',
        priorityDetailsTitle: 'Rekomendacje i kierunek rozwoju dla wybranych obszarów',
        targetLevelLabel: 'Cel rozwojowy',
        keyPracticesTitle: 'Kluczowe praktyki do wdrożenia w najbliższym cyklu',
        commitmentLabel: 'Moje zobowiązanie / cel rozwojowy (opcjonalnie):',
        commitmentPlaceholder: 'np. Wprowadzę metryki Flow i DORA w zespole X lub przećwiczę facylitację trudnych retrospektyw...',
        acceptButton: 'Zatwierdzam punkt wyjścia i plan',
        acceptedBadge: 'Plan zatwierdzony',
        acceptedMessage: 'Plan rozwoju został zaakceptowany. Twoje priorytety na ten cykl zostały ustalone. Możesz teraz skopiować podsumowanie lub wydrukować je jako PDF.',
        copyButton: 'Kopiuj podsumowanie',
        copiedButton: 'Skopiowano do schowka!',
        downloadPdfButton: 'Pobierz PDF',
        downloadingPdf: 'Generowanie PDF…',
        printButton: 'Drukuj / Zapisz PDF',
        closeButton: 'Wróć do koła',
        editPlan: 'Zmień priorytety',
        wheelThumbnailTitle: 'Reprezentacja graficzna profilu',
        licenseTitle: 'Licencja modelu',
        licenseText:
          'Agile Coaching Growth Wheel concept by Shannon Carter; Rickard Jones; Martin Lambert; Stacey Louie; Tom Reynolds; Rohit Ratan; Andre Rubin; Kubair Shirazee; and Mark Summers is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.',
        tierAwareness: 'Świadomość (Awareness)',
        tierNovice: 'Początkujący Praktyk (Novice)',
        tierPractitioner: 'Dojrzały Praktyk (Practitioner)',
        tierProficient: 'Zaawansowany Lider (Proficient)',
        tierExpert: 'Mistrz / Strateg (Expert)',
        tierAwarenessDesc: 'Podstawowa orientacja w koncepcjach zwinnych. Kluczowy krok to przejście od teorii do pierwszych praktyk w zespole.',
        tierNoviceDesc: 'Praktyczne stosowanie podstawowych narzędzi. Rekomendowane pogłębianie warsztatu facylitatora i zrozumienia Lean.',
        tierPractitionerDesc: 'Świadome dobieranie praktyk do kontekstu. Solidny fundament pod rozwój coachingu 1:1 oraz transformacji systemowej.',
        tierProficientDesc: 'Zaawansowany lider łączący optymalizację delivery, mentoring i strategię produktową. Wpływ na poziomie całej organizacji.',
        tierExpertDesc: 'Najwyższy poziom mistrzostwa metodycznego i przywódczego. Kształtowanie kultury inżynierskiej i systemowych modeli operacyjnych.',
      },
    },
  },
  en: {
    nav: {
      brand: 'Rafał Kamieniarz',
      tagline: 'Agile Leader · Engineering Manager',
      start: 'Home',
      methods: 'Agile Methodologies',
      models: 'Competency Models',
      growthWheel: 'Agile Growth Wheel',
      audit: 'Competency Self-Assessment',
      domainKnowledge: 'Domain Knowledge',
      services: 'What I Work On',
      about: 'About',
      contact: 'Contact',
      overview: 'Overview',
    },
    home: {
      hero: {
        badge: 'Agile Leader · Engineering Manager',
        title: 'Agility proven in tangible outcomes, not slide decks.',
        description:
          'Over 8 years at Samsung, from code to leading teams, taught me one thing: predictable delivery does not depend on the framework you pick, but on data, engineering practices, and trust within the team.',
        ctaAudit: 'Explore the Agile Coaching Growth Wheel',
        ctaContact: 'Get in touch',
        wheelCaptionTitle: 'Agile Coaching Growth Wheel',
        wheelCaptionSubtitle: '9 competency areas',
      },
      services: {
        eyebrow: 'What I Work On',
        title: 'Areas I work in and keep exploring',
        items: [
          {
            title: 'Delivery & Flow Metrics',
            description:
              'Why work gets stuck: cross-team dependencies, oversized batches, queues, and context switching. I look at the data: cycle time, throughput, WIP, flow efficiency, and the four DORA metrics.',
            note: null,
          },
          {
            title: 'Agile & Ways of Working',
            description:
              'Scrum, Kanban, and hybrids chosen to fit the team, not the other way around. Fewer ceremonies for their own sake, more autonomy and ownership.',
            note: null,
          },
          {
            title: 'People: Coaching, Facilitation, Mentoring',
            description:
              'Growing Scrum Masters, Tech Leads, and Engineering Managers: coaching conversations, workshop facilitation, and work on role, decisions, and competencies.',
            note: null,
          },
          {
            title: 'AI in SDLC & Organizational Change',
            description:
              'How AI is changing software development and what it means for teams and leaders. Alongside it, change management: introducing new habits so that they stick.',
            note: null,
          },
        ],
      },
      tool: {
        eyebrow: 'A Tool I Use',
        title: 'Agile Coaching Growth Wheel: a competency map for Agile Coaches and Scrum Masters',
        description:
          'A model created by an international community of practitioners (CC BY-SA 4.0) that I use as a map for development conversations. I built an interactive version: rate yourself across 9 areas, see your profile on the wheel, and read what each level looks like.',
        cta: 'Open the tool',
        benefits: [
          'Self-assessment of 9 competencies on a 1–5 scale',
          'Instant visualization of your profile on the wheel',
          'A description of every level, from Awareness to Expert',
          'Behaviors, anti-patterns, and reflection questions for every subcompetency',
        ],
      },
      process: {
        eyebrow: 'How I Work',
        title: 'Four principles I follow when working with teams',
        steps: [
          {
            title: 'I start with facts',
            description:
              'Before changing anything, I look at the data: cycle time, WIP, DORA metrics, alongside conversations with people. The starting point is set by facts, not impressions.',
          },
          {
            title: 'I pick few things that matter',
            description:
              'Instead of rolling out everything at once, I choose 2–3 areas with the highest impact and define up front how we will recognize progress.',
          },
          {
            title: 'I work shoulder to shoulder',
            description:
              'Change happens in daily work: planning, retrospectives, code review, and 1:1s. I work together with the team and leaders, at a pace that can be sustained.',
          },
          {
            title: 'The goal is independence',
            description:
              'What works is what the team can sustain without me. The same metrics show the effect, and the team learns to read them and act on them.',
          },
        ],
      },
      about: {
        eyebrow: 'About Me',
        lead: 'Agile Leader & Engineering Manager. Engineering team management and 8+ years at Samsung Electronics: from software engineer, to Scrum Master, to leading engineering squads in Samsung Ads.',
        bio: "I know delivery from both sides of the table: writing production code, facilitating ceremonies, and owning roadmaps across distributed teams spanning Warsaw and Silicon Valley. Today I'm focused on engineering team management, identifying where teams really lose time, and building an environment in which they can improve it themselves.",
        areasTitle: 'Topics I Care About',
        experienceTitle: 'Track Record',
        certsTitle: 'Credentials & Certifications',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Happy to talk about teams, delivery, and developing leaders.',
        description:
          "If you'd like to exchange experiences, work on something together, or simply talk about how technology teams work, write to me or connect on LinkedIn.",
        ctaEmail: 'Send a message',
        modalTitle: 'Get in Touch',
        modalDescription:
          "Leave a message below and I will get back to you as soon as possible via email.",
        nameLabel: 'Your Name',
        namePlaceholder: 'e.g., Alex Morgan',
        emailLabel: 'Your Email',
        emailPlaceholder: 'name@company.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Briefly share what you would like to discuss or collaborate on...',
        consentText:
          'I agree to the processing of my personal data for the purpose of receiving a response. Details in ',
        privacyPolicyLink: 'Privacy Policy',
        adminNote: 'Data controller: Rafał Kamieniarz.',
        submitButton: 'Send Message',
        sendingButton: 'Sending…',
        successTitle: 'Message sent successfully!',
        successMessage:
          'Thank you for reaching out. I will get back to you as soon as possible.',
        closeButton: 'Close',
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
      auditHeading: 'Competency Self-Assessment',
      average: 'Average',
      areas: 'Areas',
      resetRatings: 'Reset scores',
      savedInCookies: 'Choices saved in cookies',
      dragHint: 'Drag a point along the axis or the dial around Self-Mastery to calibrate. Keyboard arrow keys (↑/↓ or 1–5) supported.',
      areaNumber: 'Skill Area',
      fullGuideLink: 'Full Guide & Assessment Criteria →',
      ratingLevel: 'Proficiency Level',
      level: 'Level',
      recommendedMaterials: 'Recommended Resources',
      reportCtaTitle: 'Generate Self-Assessment Report',
      reportCtaDesc: 'Download a complete analysis with developmental recommendations.',
      reportCtaButton: 'Download PDF Report',
      sourceInfoTitle: 'About the ACGW Framework',
      sourceInfoText: 'The Agile Coaching Growth Wheel was developed in 2022 by a global community of practitioners convened under Scrum Alliance.',
      summaryCta: {
        title: 'Assessment Summary',
        desc: '9 areas · Maturity profile and action space',
        button: 'View Summary & Plan',
      },
      summaryModal: {
        eyebrow: 'Agile Coaching Growth Wheel · Self-Assessment',
        title: 'Competency Profile & Development Plan',
        subtitle: 'Synthetic breakdown of your strengths, growth areas, and an interactive space to commit to your priorities.',
        overallScore: 'Average Score',
        maturityProfile: 'Maturity Profile',
        strengthsTitle: 'Core Strengths (Foundation)',
        strengthsDesc: 'Highest-rated competencies — your natural anchor in team and delivery work.',
        growthTitle: 'Growth Opportunities (Leverage)',
        growthDesc: 'Areas with the highest growth headroom — where deliberate practice yields the biggest return.',
        allCompetenciesTitle: 'All 9 Competency Areas',
        acceptanceTitle: 'Acceptance & Commitment Space',
        acceptanceDesc: 'Growth begins with accepting your current baseline. Select 1–3 focus competencies for your next development cycle:',
        selectedPriorities: 'Selected Priorities',
        priorityHint: 'Click to select up to 3 priority competencies:',
        priorityDetailsTitle: 'Growth Guidance & Milestones for Selected Focus Areas',
        targetLevelLabel: 'Target Level',
        keyPracticesTitle: 'Key Recommended Practices for this Cycle',
        commitmentLabel: 'My development commitment / focal goal (optional):',
        commitmentPlaceholder: 'e.g., Introduce Flow & DORA metrics to Team X or practice active coaching arc in 1:1 sessions...',
        acceptButton: 'Accept Baseline & Commit to Plan',
        acceptedBadge: 'Plan Committed',
        acceptedMessage: 'Development plan accepted. Your focus areas for this cycle have been locked. You can now copy the summary or print/save as PDF.',
        copyButton: 'Copy Summary',
        copiedButton: 'Copied to Clipboard!',
        downloadPdfButton: 'Download PDF',
        downloadingPdf: 'Generating PDF…',
        printButton: 'Print / Save PDF',
        closeButton: 'Back to Wheel',
        editPlan: 'Modify Priorities',
        wheelThumbnailTitle: 'Visual Wheel Representation',
        licenseTitle: 'Model License',
        licenseText:
          'Agile Coaching Growth Wheel concept by Shannon Carter; Rickard Jones; Martin Lambert; Stacey Louie; Tom Reynolds; Rohit Ratan; Andre Rubin; Kubair Shirazee; and Mark Summers is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.',
        tierAwareness: 'Awareness',
        tierNovice: 'Novice Practitioner',
        tierPractitioner: 'Proficient Practitioner',
        tierProficient: 'Advanced Leader',
        tierExpert: 'Master / Strategic Leader',
        tierAwarenessDesc: 'Foundational orientation in Agile concepts. Focus on transitioning from theory to team-level practices.',
        tierNoviceDesc: 'Hands-on application of standard frameworks. Recommended to deepen facilitation skills and Lean principles.',
        tierPractitionerDesc: 'Context-aware practice selection. Solid base to expand 1:1 coaching, systemic flow, and organizational change.',
        tierProficientDesc: 'Advanced leader connecting delivery optimization, leadership mentoring, and product strategy across teams.',
        tierExpertDesc: 'Pinnacle of methodological and leadership mastery. Shaping enterprise ways of working and engineering culture.',
      },
    },
  },
} as const

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T

/** Wspólny typ tłumaczeń: te same klucze w PL i EN, ale wartości jako `string` (nie literały). */
export type Translations = Widen<(typeof TRANSLATIONS)['pl']>

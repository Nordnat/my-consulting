import type { CompetencyId, Rating } from './growth-wheel-data'

export type DevelopmentGuidance = {
  id: CompetencyId
  title: string
  essence: string
  growthFocus: string
  nextLevelMilestone: string
  keyPractices: string[]
}

export const GROWTH_RECOMMENDATIONS_PL: Record<CompetencyId, DevelopmentGuidance> = {
  'self-mastery': {
    id: 'self-mastery',
    title: 'Self-Mastery (Mistrzostwo osobiste)',
    essence:
      'Fundament autentycznego przywództwa — wysoka samoświadomość, regulacja emocjonalna pod presją oraz nawyk ciągłej, krytycznej autorefleksji.',
    growthFocus:
      'Rozwijanie powściągliwości w działaniu, oddzielanie faktów od własnych projekcji oraz budowanie stabilnej obecności lidera w sytuacjach kryzysowych.',
    nextLevelMilestone:
      'Świadome zarządzanie własnym wpływem na emocje zespołu i regularna superwizja własnego stylu przywództwa.',
    keyPractices: [
      'Refleksja post-mortem nad własnymi decyzjami i reakcjami po trudnych spotkaniach.',
      'Rozpoznawanie osobistych wyzwalaczy stresu i stosowanie pauzy przed odpowiedzią.',
      'Pozyskiwanie anonimowego feedbacku 360° od inżynierów i partnerów biznesowych.',
    ],
  },
  'agile-lean-practitioner': {
    id: 'agile-lean-practitioner',
    title: 'Agile/Lean Practitioner (Praktyk zwinności i Lean)',
    essence:
      'Głębokie zrozumienie zasad przepływu wartości, redukcji marnotrawstwa i empiryzmu, stawiane wyżej niż mechaniczne powtarzanie schematów.',
    growthFocus:
      'Przejście od ceremonii ku inżynierii przepływu — wprowadzanie metryk DORA i Flow, limitów pracy w toku (WIP) oraz likwidacja wąskich gardeł.',
    nextLevelMilestone:
      'Projektowanie pragmatycznych systemów delivery, łączących Scrum, Kanban i praktyki inżynierskie XP w zależności od specyfiki produktu.',
    keyPractices: [
      'Analiza Cycle Time i Throughput zamiast niemiarodajnych Story Points.',
      'Wprowadzanie twardych limitów WIP na poziomie całego zespołu inżynierskiego.',
      'Systematyczne adresowanie długu technologicznego bezpośrednio w cyklu delivery.',
    ],
  },
  'serving': {
    id: 'serving',
    title: 'Serving (Przywództwo służebne)',
    essence:
      'Wspieranie autonomii i sprawczości inżynierów przy jednoczesnym zabezpieczaniu zwrotu z inwestycji biznesowej bez wchodzenia w rolę mikromenedżera.',
    growthFocus:
      'Budowanie mostu partnerskiego między zespołem deweloperskim a interesariuszami biznesowymi, mierząc sukces rozwojem i samodzielnością innych.',
    nextLevelMilestone:
      'Eliminacja systemowych barier organizacyjnych i budowanie zaufania biznesu opartego na przewidywalności dostarczania wartości.',
    keyPractices: [
      'Wsparcie Product Ownera w dekompozycji wymagań na małe, testowalne przyrosty wartości.',
      'Ochrona skupienia zespołu (Deep Work) przed chaotycznym przełączaniem kontekstu.',
      'Wzmacnianie odpowiedzialności inżynierów za końcowy rezultat biznesowy produktu.',
    ],
  },
  'coaching': {
    id: 'coaching',
    title: 'Coaching (Profesjonalny coaching)',
    essence:
      'Pobudzanie samodzielnego myślenia, odpowiedzialności i kreatywności rozmówcy poprzez aktywne słuchanie oraz precyzyjne pytania eksplorujące.',
    growthFocus:
      'Wstrzymywanie odruchu dawania gotowych rad i rozwiązań; tworzenie przestrzeni, w której inżynierowie i Tech Leadzi sami projektują rozwiązania.',
    nextLevelMilestone:
      'Prowadzenie ustrukturyzowanych sesji 1:1 w oparciu o czysty kontrakt coachingowy i systemowe spojrzenie na dynamikę relacji.',
    keyPractices: [
      'Stosowanie pytań otwartych zaczynających się od „co” i „jak” zamiast sugerujących tez.',
      'Ustalanie jednoznacznego celu i kryteriów sukcesu na początku każdej rozmowy 1:1.',
      'Świadome oddawanie odpowiedzialności za realizację ustaleń w ręce rozmówcy.',
    ],
  },
  'facilitating': {
    id: 'facilitating',
    title: 'Facilitating (Facylitacja procesów)',
    essence:
      'Projektowanie i neutralne prowadzenie spotkań oraz warsztatów zespołowych, zmierzających do jednoznacznych, wiążących decyzji.',
    growthFocus:
      'Koncentracja na architekturze spotkań (outcomes over agenda), neutralność merytoryczna i angażowanie wszystkich uczestników dyskusji.',
    nextLevelMilestone:
      'Biegłe posługiwanie się technikami dywergencji i konwergencji oraz zarządzanie napięciem i polaryzacją opinii w grupie.',
    keyPractices: [
      'Wdrażanie cichego zapisu myśli (Silent Writing) w celu neutralizacji dominujących głosów.',
      'Wyraźne rozdzielanie fazy generowania pomysłów od fazy ich selekcji i decyzji.',
      'Kończenie każdej dyskusji precyzyjną listą ustaleń: Kto, Co i do Kiedy.',
    ],
  },
  'guiding-learning': {
    id: 'guiding-learning',
    title: 'Guiding Learning (Mentoring i nauczanie)',
    essence:
      'Skuteczny transfer specjalistycznej wiedzy technicznej i procesowej poprzez metody edukacji dorosłych oraz długofalowy mentoring.',
    growthFocus:
      'Dopasowywanie formatu wiedzy do etapu rozwoju odbiorcy — przejście od wykładów do warsztatów „learning by doing” i mentoringu partnerskiego.',
    nextLevelMilestone:
      'Budowanie programów rozwoju kompetencji technicznych i mentoringu wewnętrznego w ramach gildii i wspólnot praktyków.',
    keyPractices: [
      'Omawianie realnych studiów przypadków z własnego doświadczenia (analiza kompromisów).',
      'Stosowanie formatów warsztatowych bazujących na natychmiastowym ćwiczeniu w kodzie/procesie.',
      'Definiowanie mierzalnych wskaźników postępu kompetencji podopiecznych.',
    ],
  },
  'advising': {
    id: 'advising',
    title: 'Advising (Doradztwo pragmatyczne)',
    essence:
      'Formułowanie celnych, strategicznych rekomendacji architektonicznych i procesowych w oparciu o twarde dane i diagnozę otoczenia.',
    growthFocus:
      'Przedstawianie wielowariantowych rekomendacji z jasnym bilansem zysków i strat (trade-offs), wspierających liderów w podejmowaniu decyzji.',
    nextLevelMilestone:
      'Pozycjonowanie się jako zaufany doradca kadry inżynierskiej (CTO, VP), diagnozujący przyczyny źródłowe spowolnienia delivery.',
    keyPractices: [
      'Opieranie diagnozy na faktach: metrykach przepływu, incydentach i architekturze.',
      'Przedstawianie opcji decyzyjnych w formule: „rekomendacja, alternatywy, ryzyka”.',
      'Pozostawianie ostatecznej decyzyjności właścicielom biznesowym i technicznym.',
    ],
  },
  'leading': {
    id: 'leading',
    title: 'Leading (Przywództwo transformacyjne)',
    essence:
      'Wyznaczanie inspirującego kierunku technologicznego, modelowanie pożądanych zachowań inżynierskich oraz rozwijanie przyszłych liderów.',
    growthFocus:
      'Przejście od zarządzania bieżącymi zadaniami do strategicznego przywództwa przez kontekst, autonomię i wysokie standardy techniczne.',
    nextLevelMilestone:
      'Tworzenie środowiska, w którym innowacyjność i eksperymenty są naturalnym elementem codziennej pracy zespołów.',
    keyPractices: [
      'Komunikowanie strategicznego „dlaczego” stojącego za celami kwartalnymi.',
      'Własnym przykładem demonstrowanie otwartości na przyznanie się do błędu i wyciąganie wniosków.',
      'Delegowanie pełnej własności (ownership) rozwiązań technicznych na zespoły.',
    ],
  },
  'transforming': {
    id: 'transforming',
    title: 'Transforming (Transformacja systemowa)',
    essence:
      'Projektowanie i przeprowadzanie głębokich zmian w strukturze organizacyjnej, topologii zespołów i przepływie zależności operacyjnych.',
    growthFocus:
      'Zarządzanie dynamiką zmiany — diagnoza barier systemowych (Value Stream Mapping), redukcja silosów i praca z oporem zespołów.',
    nextLevelMilestone:
      'Wdrażanie trwałych modeli operacyjnych zwiększających przepustowość całej organizacji i skracających Time-to-Market.',
    keyPractices: [
      'Mapowanie strumienia wartości (VSM) w celu identyfikacji realnych przestojów w delivery.',
      'Wprowadzanie zmian w małych, bezpiecznych iteracjach (Lean Change Management).',
      'Identyfikacja i optymalizacja interfejsów współpracy między zespołami (Team Topologies).',
    ],
  },
}

export const GROWTH_RECOMMENDATIONS_EN: Record<CompetencyId, DevelopmentGuidance> = {
  'self-mastery': {
    id: 'self-mastery',
    title: 'Self-Mastery (Personal Grounding)',
    essence:
      'The bedrock of authentic leadership — sharp self-awareness, emotional composure under pressure, and relentless reflective discipline.',
    growthFocus:
      'Cultivating mindful restraint, isolating facts from personal biases, and maintaining a steady, grounded leadership presence during crises.',
    nextLevelMilestone:
      'Consciously steering your emotional wake across teams and maintaining structured supervision of your leadership style.',
    keyPractices: [
      'Post-mortem self-reflection on key decisions and instinctive reactions after tough meetings.',
      'Recognizing personal stress triggers and inserting a deliberate pause before responding.',
      'Seeking continuous, unfiltered feedback from engineers and leadership peers.',
    ],
  },
  'agile-lean-practitioner': {
    id: 'agile-lean-practitioner',
    title: 'Agile/Lean Practitioner (Flow & Empirical Delivery)',
    essence:
      'A deep grasp of value flow, waste elimination, and empiricism, prioritized far above rigid ceremony compliance.',
    growthFocus:
      'Moving from ceremony rituals toward delivery engineering — establishing DORA metrics, Cycle Time visibility, and strict WIP limits.',
    nextLevelMilestone:
      'Architecting tailored delivery operating models that balance Scrum, Kanban, and XP practices to fit the product reality.',
    keyPractices: [
      'Analyzing Cycle Time and Throughput instead of speculative Story Points.',
      'Enforcing strict work-in-progress (WIP) constraints across engineering pipelines.',
      'Treating technical debt remediation as a first-class citizen in sprint delivery.',
    ],
  },
  'serving': {
    id: 'serving',
    title: 'Serving (Servant Leadership & Enablement)',
    essence:
      'Fostering engineer autonomy and psychological safety while securing business return on investment without micromanaging.',
    growthFocus:
      'Building an authentic partnership bridge between software teams and commercial stakeholders, measuring impact by the independence of others.',
    nextLevelMilestone:
      'Dismantling enterprise blockers and building leadership trust founded on predictable, incremental delivery.',
    keyPractices: [
      'Partnering with Product Owners to slice roadmaps into testable, high-impact increments.',
      'Shielding team deep-work capacity from disruptive context-switching and urgent firefighting.',
      'Fostering end-to-end technical ownership for production reliability within the team.',
    ],
  },
  'coaching': {
    id: 'coaching',
    title: 'Coaching (Professional Inquiry)',
    essence:
      'Igniting independent problem-solving and accountability through active listening and incisive exploratory questions rather than expert advice.',
    growthFocus:
      'Resisting the instinctive urge to prescribe solutions; creating psychological space where Tech Leads and engineers author their own solutions.',
    nextLevelMilestone:
      'Conducting structured 1:1 sessions driven by clear coaching contracts and systemic awareness of team dynamics.',
    keyPractices: [
      'Employing powerful open-ended questions focused on "what" and "how".',
      'Contracting mutual goals and clear success criteria at the start of every 1:1 interaction.',
      'Deliberately holding space and keeping problem ownership with the coachee.',
    ],
  },
  'facilitating': {
    id: 'facilitating',
    title: 'Facilitating (Collaborative Architecture)',
    essence:
      'Designing and neutrally stewarding group interactions to produce decisive, high-commitment collective outcomes.',
    growthFocus:
      'Focusing on session architecture (outcomes over agendas), content neutrality, and drawing out quiet perspectives across distributed teams.',
    nextLevelMilestone:
      'Mastering divergence and convergence dynamics while skillfully de-escalating polarized technical debates.',
    keyPractices: [
      'Using silent writing and canvas ideation to neutralize dominant voices.',
      'Strictly separating divergence (idea generation) from convergence (decision-making).',
      'Concluding sessions with crisp, visible accountability matrices: Who, What, By When.',
    ],
  },
  'guiding-learning': {
    id: 'guiding-learning',
    title: 'Guiding Learning (Mentoring & Mastery Transfer)',
    essence:
      'Accelerating engineering and leadership capabilities through adult learning principles and long-term capability mentoring.',
    growthFocus:
      'Tailoring educational interventions to practitioner readiness — evolving from presentations to experiential, hands-on learning.',
    nextLevelMilestone:
      'Building systemic internal growth tracks, engineering guilds, and peer-mentoring networks across departments.',
    keyPractices: [
      'Deconstructing real production case studies and trade-offs from lived experience.',
      'Designing hands-on workshop katas focused on immediate practice in code or process.',
      'Setting measurable, milestone-driven competency indicators for mentees.',
    ],
  },
  'advising': {
    id: 'advising',
    title: 'Advising (Pragmatic Consultation)',
    essence:
      'Delivering high-leverage architectural and operational recommendations rooted in empirical diagnosis and bottleneck analysis.',
    growthFocus:
      'Framing trade-offs with explicit cost-benefit analysis, empowering accountable decision-makers to choose with clarity.',
    nextLevelMilestone:
      'Positioning yourself as a trusted advisor to senior executives (CTO, VP of Engineering) solving systemic delivery blockers.',
    keyPractices: [
      'Grounding every assessment in observable delivery metrics and architectural facts.',
      'Structuring recommendations as: "Core Guidance, Alternatives, Explicit Trade-offs".',
      'Preserving final decision authority with technical and business owners.',
    ],
  },
  'leading': {
    id: 'leading',
    title: 'Leading (Transformational Direction)',
    essence:
      'Setting a compelling technical vector, exemplifying engineering culture, and cultivating the next generation of team leaders.',
    growthFocus:
      'Transitioning from operational oversight to strategic leadership through context, engineering excellence, and psychological safety.',
    nextLevelMilestone:
      'Creating an organizational climate where bold technical experimentation and continuous improvement are standard practice.',
    keyPractices: [
      'Articulating the strategic "why" behind organizational and technical initiatives.',
      'Role-modeling vulnerability by candidly analyzing personal missteps and lessons learned.',
      'Delegating complete operational autonomy for technical implementation to the teams.',
    ],
  },
  'transforming': {
    id: 'transforming',
    title: 'Transforming (Systemic Operating Models)',
    essence:
      'Re-engineering organizational design, team topologies, and cross-functional dependency paths to maximize enterprise delivery throughput.',
    growthFocus:
      'Navigating change dynamics — unearthing bottlenecks with Value Stream Mapping, dismantling silos, and managing emotional resistance.',
    nextLevelMilestone:
      'Embedding durable, scalable operating models that measurably compress Time-to-Market and empower team ownership.',
    keyPractices: [
      'Executing Value Stream Mapping (VSM) to uncover latent handoff delays and queues.',
      'Deploying small, safe-to-fail operational experiments (Lean Change Management).',
      'Optimizing interaction modes and boundaries using Team Topologies principles.',
    ],
  },
}

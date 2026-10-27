export type CompetencyId =
  | 'agile-lean-practitioner'
  | 'serving'
  | 'coaching'
  | 'facilitating'
  | 'guiding-learning'
  | 'advising'
  | 'leading'
  | 'transforming'
  | 'self-mastery'

export type Rating = 1 | 2 | 3 | 4 | 5

// Enabled routing for /kompetencja/* and /metodyki-zwinne/* subpages
export const ROUTING_ENABLED = true

export type Resource = {
  type: 'Artykuł' | 'Warsztat' | 'Checklista' | 'Case study'
  title: string
  href: string
}

export type SubCompetency = {
  name: string
  href: string
  description: string
}

export type Competency = {
  id: CompetencyId
  name: string
  href: string
  description: string
  subCompetencies: SubCompetency[]
  levels: [string, string, string, string, string]
  resources: [Resource, Resource]
}

export type KnowledgeArea = {
  name: string
  href: string
  description: string
}

export const LEVEL_NAMES: Record<Rating, string> = {
  1: 'Świadomość',
  2: 'Początkujący',
  3: 'Praktyk',
  4: 'Biegły',
  5: 'Ekspert',
}

const sub = (base: string, slug: string, name: string, description: string): SubCompetency => ({
  name,
  href: `/kompetencja/${base}/${slug}`,
  description,
})

export const WHEEL_COMPETENCIES: Competency[] = [
  {
    id: 'agile-lean-practitioner',
    name: 'Agile/Lean Practitioner',
    href: '/kompetencja/agile-lean-practitioner',
    description:
      'Głębokie, praktyczne zrozumienie wartości, zasad i frameworków Agile oraz Lean. Obejmuje umiejętność dobrania praktyk do kontekstu organizacji zamiast mechanicznego kopiowania wzorców. To fundament wiarygodności coacha w oczach zespołów.',
    subCompetencies: [
      sub('agile-lean-practitioner', 'mindset', 'Agile/Lean Mindset', 'Rozumienie wartości i zasad stojących za praktykami — dlaczego, a nie tylko jak.'),
      sub('agile-lean-practitioner', 'frameworki-i-praktyki', 'Frameworks and Practices', 'Biegłość w Scrum, Kanban, XP i Lean oraz świadome łączenie ich elementów.'),
    ],
    levels: [
      'Znasz podstawowe pojęcia Agile i Lean, ale wiedza jest głównie teoretyczna.',
      'Stosujesz wybrany framework w jednym zespole, opierając się na gotowych przepisach.',
      'Świadomie dobierasz praktyki do kontekstu i potrafisz uzasadnić ich sens.',
      'Łączysz frameworki, projektujesz systemy pracy i mierzysz przepływ wartości end-to-end.',
      'Kształtujesz praktyki na poziomie organizacji i inspirujesz społeczność branżową.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Przepływ ponad zajętość: metryki Kanban w praktyce', href: '/materialy/agile-lean/metryki-przeplywu' },
      { type: 'Checklista', title: 'Audyt dojrzałości praktyk Scrum', href: '/materialy/agile-lean/audyt-scrum' },
    ],
  },
  {
    id: 'serving',
    name: 'Serving',
    href: '/kompetencja/serving',
    description:
      'Postawa przywództwa służebnego wobec zespołu i biznesu. Coach usuwa przeszkody, chroni przestrzeń do pracy i pomaga obu stronom zrozumieć wzajemne potrzeby. Sukces mierzy rozwojem innych, a nie własną widocznością.',
    subCompetencies: [
      sub('serving', 'biznes', 'Serving the Business', 'Wspieranie Product Ownerów i interesariuszy w maksymalizacji wartości.'),
      sub('serving', 'zespol', 'Serving the Team', 'Budowanie samoorganizacji, usuwanie przeszkód i ochrona zespołu.'),
    ],
    levels: [
      'Pomagasz, gdy ktoś poprosi, ale skupiasz się głównie na własnych zadaniach.',
      'Usuwasz przeszkody zespołu i dbasz o rytm wydarzeń.',
      'Świadomie równoważysz potrzeby zespołu i biznesu, budując między nimi most.',
      'Wspierasz wiele zespołów i interesariuszy, wzmacniając ich samodzielność.',
      'Kształtujesz kulturę przywództwa służebnego w całej organizacji.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Servant leadership bez bycia sekretarzem zespołu', href: '/materialy/serving/servant-leadership' },
      { type: 'Warsztat', title: 'Mapowanie interesariuszy z Product Ownerem', href: '/materialy/serving/mapa-interesariuszy' },
    ],
  },
  {
    id: 'coaching',
    name: 'Coaching',
    href: '/kompetencja/coaching',
    description:
      'Partnerowanie klientowi w procesie myślenia, który wyzwala jego potencjał. Coach zadaje pytania, aktywnie słucha i pozostawia odpowiedzialność za rozwiązanie po stronie klienta. Bazuje na standardach ICF i świadomym kontraktowaniu.',
    subCompetencies: [
      sub('coaching', 'mindset', 'Coaching Mindset', 'Wiara w zasoby klienta, ciekawość i powstrzymanie się od dawania gotowych odpowiedzi.'),
      sub('coaching', 'umiejetnosci', 'Coaching Skills', 'Aktywne słuchanie, pytania otwierające, kontraktowanie i praca z celem.'),
    ],
    levels: [
      'Wiesz, czym coaching różni się od doradztwa, ale w rozmowach dominuje udzielanie rad.',
      'Prowadzisz proste sesje 1:1, choć łatwo wchodzisz w rolę eksperta.',
      'Utrzymujesz postawę coachingową i świadomie kontraktujesz cele sesji.',
      'Coachujesz zespoły i liderów, pracując z systemem, a nie tylko z jednostką.',
      'Posiadasz akredytację i superwizujesz innych coachów w organizacji.',
    ],
    resources: [
      { type: 'Warsztat', title: 'Model GROW w rozmowach z Product Ownerem', href: '/materialy/coaching/model-grow' },
      { type: 'Artykuł', title: '10 pytań, które zmieniają retrospektywę', href: '/materialy/coaching/pytania-otwierajace' },
    ],
  },
  {
    id: 'facilitating',
    name: 'Facilitating',
    href: '/kompetencja/facilitating',
    description:
      'Prowadzenie grupy przez proces, który pozwala jej samodzielnie dojść do wspólnych decyzji. Facylitator pozostaje neutralny wobec treści, a w pełni odpowiada za strukturę i energię spotkania.',
    subCompetencies: [
      sub('facilitating', 'mindset', 'Facilitation Mindset', 'Neutralność wobec treści i zaufanie do mądrości grupy.'),
      sub('facilitating', 'umiejetnosci', 'Facilitation Skills', 'Projektowanie warsztatów, dobór formatów i praca z konfliktem.'),
    ],
    levels: [
      'Prowadzisz spotkania według agendy, ale rzadko angażujesz wszystkich uczestników.',
      'Korzystasz z gotowych formatów (np. Liberating Structures) w znanych sytuacjach.',
      'Projektujesz warsztaty pod cel i elastycznie reagujesz na dynamikę grupy.',
      'Facylitujesz spotkania wielozespołowe i trudne rozmowy z udziałem kadry zarządzającej.',
      'Tworzysz własne metody facylitacji i uczysz ich innych facylitatorów.',
    ],
    resources: [
      { type: 'Checklista', title: 'Szablon projektowania warsztatu w 5 krokach', href: '/materialy/facylitacja/szablon-warsztatu' },
      { type: 'Case study', title: 'PI Planning dla 12 zespołów bez chaosu', href: '/materialy/facylitacja/pi-planning' },
    ],
  },
  {
    id: 'guiding-learning',
    name: 'Guiding Learning',
    href: '/kompetencja/guiding-learning',
    description:
      'Wspieranie nauki ludzi i zespołów poprzez szkolenia, mentoring i budowanie kultury uczenia się. Dobry przewodnik dopasowuje formę do odbiorcy i prowadzi do realnej zmiany zachowań, a nie tylko przekazania wiedzy.',
    subCompetencies: [
      sub('guiding-learning', 'teaching', 'Teaching', 'Projektowanie i prowadzenie interaktywnych szkoleń opartych na doświadczeniu.'),
      sub('guiding-learning', 'mentoring', 'Mentoring', 'Dzielenie się własnym doświadczeniem, by przyspieszyć rozwój innych.'),
      sub('guiding-learning', 'learning-mindset', 'Learning Mindset', 'Budowanie kultury eksperymentu i ciągłego uczenia się na błędach.'),
    ],
    levels: [
      'Tłumaczysz pojęcia Agile w rozmowach, ale bez struktury nauki.',
      'Prowadzisz krótkie wdrożenia i wspierasz pojedyncze osoby.',
      'Projektujesz interaktywne szkolenia i prowadzisz ustrukturyzowany mentoring.',
      'Budujesz programy rozwojowe dla różnych ról, od zespołów po zarząd.',
      'Jesteś uznanym trenerem i mentorem, rozwijasz kolejne pokolenia coachów.',
    ],
    resources: [
      { type: 'Warsztat', title: 'Training from the Back of the Room — wprowadzenie', href: '/materialy/guiding-learning/training-from-the-back' },
      { type: 'Checklista', title: 'Plan rozwoju Scrum Mastera na 90 dni', href: '/materialy/guiding-learning/plan-90-dni' },
    ],
  },
  {
    id: 'advising',
    name: 'Advising',
    href: '/kompetencja/advising',
    description:
      'Świadome dzielenie się eksperckimi rekomendacjami, gdy klient potrzebuje konkretnej odpowiedzi. Doradca diagnozuje sytuację, przedstawia opcje wraz z konsekwencjami i pozostawia decyzję klientowi.',
    subCompetencies: [
      sub('advising', 'mindset', 'Advising Mindset', 'Świadome przełączenie się ze stanowiska coacha i jasne sygnalizowanie tej zmiany.'),
      sub('advising', 'umiejetnosci', 'Advising Skills', 'Diagnoza sytuacji, przedstawianie opcji i ich konsekwencji.'),
    ],
    levels: [
      'Udzielasz rad intuicyjnie, bez diagnozy i bez sygnalizowania zmiany roli.',
      'Rekomendujesz rozwiązania w dobrze znanych sobie sytuacjach zespołowych.',
      'Diagnozujesz problem, przedstawiasz kilka opcji i ich konsekwencje.',
      'Doradzasz kadrze zarządzającej w sprawach struktury, procesu i priorytetów.',
      'Jesteś zaufanym doradcą zarządu, a Twoje rekomendacje kształtują strategię.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Kiedy coach powinien doradzić? Mapa stanowisk', href: '/materialy/advising/mapa-stanowisk' },
      { type: 'Checklista', title: 'Struktura rekomendacji: problem, opcje, ryzyka', href: '/materialy/advising/struktura-rekomendacji' },
    ],
  },
  {
    id: 'leading',
    name: 'Leading',
    href: '/kompetencja/leading',
    description:
      'Wpływanie na kierunek zmian bez formalnego autorytetu, poprzez przykład i budowanie zaufania. Agile Coach jako lider modeluje zachowania, które chce zobaczyć w organizacji, i wspiera rozwój innych liderów.',
    subCompetencies: [
      sub('leading', 'visionary', 'Visionary', 'Budowanie i komunikowanie inspirującej wizji zmiany.'),
      sub('leading', 'role-modeling', 'Role Modeling', 'Modelowanie zachowań, które chcesz zobaczyć w organizacji.'),
      sub('leading', 'leading-for-growth', 'Leading for Growth', 'Rozwijanie liderów i tworzenie warunków do wzrostu ludzi.'),
    ],
    levels: [
      'Koncentrujesz się na swoim zespole i unikasz zabierania głosu na forum organizacji.',
      'Inicjujesz drobne usprawnienia i zyskujesz zaufanie najbliższego otoczenia.',
      'Świadomie modelujesz zachowania i budujesz koalicje na rzecz zmiany.',
      'Wpływasz na decyzje kadry zarządzającej i współtworzysz wizję organizacji.',
      'Jesteś rozpoznawalnym liderem zmiany kulturowej w organizacji i branży.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Wpływ bez autorytetu: mapa interesariuszy', href: '/materialy/leading/mapa-interesariuszy' },
      { type: 'Case study', title: 'Jak przekonać zarząd do pracy w strumieniach wartości', href: '/materialy/leading/strumienie-wartosci' },
    ],
  },
  {
    id: 'transforming',
    name: 'Transforming',
    href: '/kompetencja/transforming',
    description:
      'Prowadzenie zmiany organizacyjnej w skali, z uwzględnieniem kultury, struktury i ludzi. Wymaga znajomości modeli zmiany, myślenia systemowego oraz pracy z oporem.',
    subCompetencies: [
      sub('transforming', 'organizational-design', 'Organizational Design', 'Projektowanie struktur, ról i przepływu wartości w organizacji.'),
      sub('transforming', 'organizational-change', 'Organizational Change', 'Modele zmiany, praca z oporem i myślenie systemowe.'),
    ],
    levels: [
      'Postrzegasz zmianę jako wdrożenie frameworka w kolejnych zespołach.',
      'Rozumiesz, że kultura i struktura wpływają na skuteczność zmiany.',
      'Stosujesz modele zmiany i myślenie systemowe na poziomie działu.',
      'Projektujesz i prowadzisz transformacje obejmujące wiele działów i funkcji.',
      'Prowadzisz transformacje całych organizacji i doradzasz innym firmom.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Model Kottera vs podejście ewolucyjne', href: '/materialy/transforming/modele-zmiany' },
      { type: 'Case study', title: 'Transformacja 400-osobowego działu IT', href: '/materialy/transforming/case-400' },
    ],
  },
]

export const CORE_COMPETENCY: Competency = {
  id: 'self-mastery',
  name: 'Self Mastery',
  href: '/kompetencja/self-mastery',
  description:
    'Rdzeń wszystkich pozostałych kompetencji: samoświadomość, zarządzanie własnymi emocjami i reakcjami. Coach z rozwiniętym Self Mastery zauważa swoje wzorce i świadomie wybiera stanowisko w danej chwili.',
  subCompetencies: [
    sub('self-mastery', 'samoswiadomosc', 'Samoświadomość', 'Rozpoznawanie własnych wzorców i reakcji.'),
    sub('self-mastery', 'regulacja-emocji', 'Regulacja emocji', 'Świadome zarządzanie reakcjami w trudnych sytuacjach.'),
    sub('self-mastery', 'ciagly-rozwoj', 'Ciągły rozwój', 'Praktyka refleksyjna i praca z superwizorem.'),
  ],
  levels: [
    'Rzadko reflektujesz nad własnymi reakcjami i ich wpływem na innych.',
    'Zauważasz swoje wzorce po fakcie, np. podczas retrospektywy własnej pracy.',
    'Rozpoznajesz swoje reakcje w trakcie rozmowy i świadomie wybierasz postawę.',
    'Pracujesz z superwizorem i regularnie rozwijasz swoją praktykę refleksyjną.',
    'Twoja obecność i spokój są modelem dla innych coachów i liderów.',
  ],
  resources: [
    { type: 'Artykuł', title: 'Praktyka refleksyjna Agile Coacha', href: '/materialy/self-mastery/praktyka-refleksyjna' },
    { type: 'Checklista', title: 'Dziennik obserwacji własnych reakcji', href: '/materialy/self-mastery/dziennik-reakcji' },
  ],
}

export const DOMAIN_KNOWLEDGE: KnowledgeArea = {
  name: 'Domain Knowledge',
  href: '/kompetencja/domain-knowledge',
  description:
    'Wiedza dziedzinowa otaczająca wszystkie kompetencje: znajomość branży, produktu, technologii i realiów biznesowych klienta. Pozwala coachowi rozumieć kontekst i zadawać trafniejsze pytania.',
}

export const COMPETENCIES: Competency[] = [...WHEEL_COMPETENCIES, CORE_COMPETENCY]

export const DEFAULT_RATINGS = Object.fromEntries(
  COMPETENCIES.map((competency) => [competency.id, 1]),
) as Record<CompetencyId, Rating>

export function getCompetencyById(id: string): Competency | undefined {
  return COMPETENCIES.find((c) => c.id === id)
}

export function getSubCompetency(
  competencyId: string,
  subSlug: string
): { competency: Competency; subCompetency: SubCompetency } | undefined {
  const competency = getCompetencyById(competencyId)
  if (!competency) return undefined
  const sub = competency.subCompetencies.find((s) => s.href.endsWith(`/${subSlug}`))
  if (!sub) return undefined
  return { competency, subCompetency: sub }
}

export function getNextPrevCompetency(id: CompetencyId): {
  prev: Competency
  next: Competency
} {
  const index = COMPETENCIES.findIndex((c) => c.id === id)
  const prevIndex = (index - 1 + COMPETENCIES.length) % COMPETENCIES.length
  const nextIndex = (index + 1) % COMPETENCIES.length
  return {
    prev: COMPETENCIES[prevIndex],
    next: COMPETENCIES[nextIndex],
  }
}

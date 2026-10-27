import type { CompetencyId, Rating, Resource, SubCompetency, Competency, KnowledgeArea } from './growth-wheel-data'

export const LEVEL_NAMES_EN: Record<Rating, string> = {
  1: 'Awareness',
  2: 'Novice',
  3: 'Practitioner',
  4: 'Proficient',
  5: 'Expert',
}

const subEn = (base: string, slug: string, name: string, description: string): SubCompetency => ({
  name,
  href: `/en/competency/${base}/${slug}`,
  description,
})

export const WHEEL_COMPETENCIES_EN: Competency[] = [
  {
    id: 'agile-lean-practitioner',
    name: 'Agile/Lean Practitioner',
    href: '/en/competency/agile-lean-practitioner',
    description:
      'Deep, practical understanding of Agile and Lean principles, values, and frameworks. Encompasses the ability to tailor practices to organizational context rather than blindly copying standard playbooks. Foundation of coach credibility with engineering teams.',
    subCompetencies: [
      subEn('agile-lean-practitioner', 'mindset', 'Agile/Lean Mindset', 'Embracing core values and principles behind practices — why, not just how.'),
      subEn('agile-lean-practitioner', 'frameworki-i-praktyki', 'Frameworks & Practices', 'Mastery in Scrum, Kanban, XP, and Lean, pragmatically synthesizing their elements.'),
    ],
    levels: [
      'Basic conceptual understanding of Agile and Lean; primarily theoretical knowledge.',
      'Applies a single framework within one team based strictly on textbook rules.',
      'Consciously tailors practices to team context and articulates their underlying rationale.',
      'Blends multiple frameworks, designs work systems, and optimizes end-to-end value flow.',
      'Shapes enterprise-level operating models and influences industry best practices.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Flow Over Utilization: Actionable Kanban Metrics', href: '/en/competency/agile-lean-practitioner/frameworki-i-praktyki' },
      { type: 'Checklista', title: 'Scrum Practices Maturity Assessment', href: '/en/competency/agile-lean-practitioner/mindset' },
    ],
  },
  {
    id: 'serving',
    name: 'Serving',
    href: '/en/competency/serving',
    description:
      'Servant leadership mindset towards both the delivery team and business stakeholders. The coach dismantles blockers, protects focus space, and aligns mutual needs, measuring success by the growth and autonomy of others.',
    subCompetencies: [
      subEn('serving', 'biznes', 'Serving the Business', 'Empowering Product Owners and business stakeholders to maximize outcome value.'),
      subEn('serving', 'zespol', 'Serving the Team', 'Fostering self-organization, eliminating systemic obstacles, and team psychological safety.'),
    ],
    levels: [
      'Assists only upon direct request; primarily focused on personal tasks.',
      'Resolves routine impediments and maintains meeting cadences.',
      'Balances team dynamics with commercial imperatives, building a reliable bridge.',
      'Mentors multiple teams and cross-functional stakeholders, expanding their autonomy.',
      'Cultivates an institutional servant leadership culture throughout the enterprise.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Servant Leadership Without Being a Team Secretary', href: '/en/competency/serving/zespol' },
      { type: 'Warsztat', title: 'Stakeholder Alignment with Product Owners', href: '/en/competency/serving/biznes' },
    ],
  },
  {
    id: 'coaching',
    name: 'Coaching',
    href: '/en/competency/coaching',
    description:
      'Partnering with individuals and teams in a thought-provoking and creative process that inspires them to maximize their potential. Rooted in ICF standards: active listening, powerful questioning, and strict neutrality.',
    subCompetencies: [
      subEn('coaching', 'mindset', 'Coaching Mindset', 'Belief in client resourcefulness, boundless curiosity, and withholding unsolicited advice.'),
      subEn('coaching', 'umiejetnosci', 'Coaching Skills', 'Deep listening, open-ended inquiry, clear contracting, and goal facilitation.'),
    ],
    levels: [
      'Understands how coaching differs from consulting, but conversations default to advice.',
      'Conducts straightforward 1-on-1 dialogues, occasionally slipping into expert mode.',
      'Consistently holds a clean coaching stance with explicit contract and objective.',
      'Coaches teams and senior leaders systemically, addressing collective organizational dynamics.',
      'Holds professional credentials (ICF/EMCC) and provides supervision for internal coaches.',
    ],
    resources: [
      { type: 'Warsztat', title: 'GROW Model in High-Stakes Product Dialogues', href: '/en/competency/coaching/umiejetnosci' },
      { type: 'Artykuł', title: '10 Powerful Questions that Transform Retrospectives', href: '/en/competency/coaching/mindset' },
    ],
  },
  {
    id: 'facilitating',
    name: 'Facilitating',
    href: '/en/competency/facilitating',
    description:
      'Guiding groups through collaborative processes that lead to high-quality, collective decisions. The facilitator remains neutral regarding content while taking full ownership of structure, psychological safety, and energy.',
    subCompetencies: [
      subEn('facilitating', 'mindset', 'Facilitation Mindset', 'Content neutrality, trust in collective intelligence, and unbiased leadership.'),
      subEn('facilitating', 'umiejetnosci', 'Facilitation Skills', 'Workshop architecture, divergence/convergence techniques, and constructive conflict resolution.'),
    ],
    levels: [
      'Follows an agenda mechanically with uneven participant engagement.',
      'Utilizes established formats (e.g., Liberating Structures) in familiar situations.',
      'Designs bespoke workshops around strategic outcomes and dynamically navigates group tensions.',
      'Facilitates multi-team events (PI Planning) and executive alignment meetings under high stakes.',
      'Develops proprietary facilitation frameworks and trains organizational facilitators.',
    ],
    resources: [
      { type: 'Checklista', title: '5-Step Workshop Architecture Blueprint', href: '/en/competency/facilitating/umiejetnosci' },
      { type: 'Case study', title: 'Flawless Multi-Team Alignment Across 12 Squads', href: '/en/competency/facilitating/mindset' },
    ],
  },
  {
    id: 'guiding-learning',
    name: 'Guiding Learning',
    href: '/en/competency/guiding-learning',
    description:
      'Accelerating individual and organizational learning through interactive experiential teaching, structured mentoring, and fostering a continuous learning culture based on experimentation.',
    subCompetencies: [
      subEn('guiding-learning', 'teaching', 'Teaching', 'Designing immersive adult learning experiences (Training from the Back of the Room).'),
      subEn('guiding-learning', 'mentoring', 'Mentoring', 'Sharing firsthand experience to accelerate development and professional craft.'),
      subEn('guiding-learning', 'learning-mindset', 'Learning Mindset', 'Instilling a hypothesis-driven culture of learning from failed experiments.'),
    ],
    levels: [
      'Explains agile concepts informally without structured instructional design.',
      'Delivers brief onboardings and supports individual practitioner development.',
      'Designs experiential workshops and conducts structured long-term mentoring.',
      'Builds multi-tier capability programs across roles from engineers to executive directors.',
      'Renowned educator, author, and master mentor developing future industry leaders.',
    ],
    resources: [
      { type: 'Warsztat', title: 'Training from the Back of the Room — Accelerated Learning', href: '/en/competency/guiding-learning/teaching' },
      { type: 'Checklista', title: '90-Day Scrum Master Competency Development Plan', href: '/en/competency/guiding-learning/mentoring' },
    ],
  },
  {
    id: 'advising',
    name: 'Advising',
    href: '/en/competency/advising',
    description:
      'Deliberately offering expert recommendations and diagnostic insights when clients require direction. The advisor diagnoses root causes, outlines options with trade-offs, and leaves final decisions with the client.',
    subCompetencies: [
      subEn('advising', 'mindset', 'Advising Mindset', 'Consciously switching hats and explicitly signaling the transition into an advisory stance.'),
      subEn('advising', 'umiejetnosci', 'Advising Skills', 'Systemic diagnosis, trade-off matrix evaluation, and executive recommendation structuring.'),
    ],
    levels: [
      'Gives intuitive advice ad-hoc without formal diagnosis or stance transparency.',
      'Recommends proven solutions in familiar team-level process scenarios.',
      'Conducts systemic diagnostic audits, presenting structured alternatives and risks.',
      'Advises senior leadership on organizational structure, value streams, and governance.',
      'Trusted strategic counsel to the C-suite whose recommendations drive enterprise strategy.',
    ],
    resources: [
      { type: 'Artykuł', title: 'When Should a Coach Advise? The Agile Stance Compass', href: '/en/competency/advising/mindset' },
      { type: 'Checklista', title: 'Executive Recommendation Framework: Problem, Trade-offs, ROI', href: '/en/competency/advising/umiejetnosci' },
    ],
  },
  {
    id: 'leading',
    name: 'Leading',
    href: '/en/competency/leading',
    description:
      'Driving cultural and operational evolution without formal authority, through inspiring vision, role modeling, and developing autonomy in other leaders throughout the engineering organization.',
    subCompetencies: [
      subEn('leading', 'visionary', 'Visionary', 'Articulating an inspiring, tangible vision of future operating excellence.'),
      subEn('leading', 'role-modeling', 'Role Modeling', 'Embodying the behaviors, transparency, and integrity expected across the company.'),
      subEn('leading', 'leading-for-growth', 'Leading for Growth', 'Nurturing autonomous leaders and delegating ownership instead of building followers.'),
    ],
    levels: [
      'Focuses narrowly on personal tasks; hesitant to speak out in broader forums.',
      'Champions localized micro-improvements, earning trust within the immediate squad.',
      'Role models agile ethics and builds coalitions for cross-departmental initiatives.',
      'Influences executive decision-making and co-creates organizational change strategy.',
      'Prominent transformational leader recognized for driving deep cultural shifts at scale.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Influence Without Authority: Engineering Stakeholder Mapping', href: '/en/competency/leading/visionary' },
      { type: 'Case study', title: 'Aligning C-Level Executives on Value Stream Delivery', href: '/en/competency/leading/leading-for-growth' },
    ],
  },
  {
    id: 'transforming',
    name: 'Transforming',
    href: '/en/competency/transforming',
    description:
      'Navigating systemic organizational transformation at enterprise scale, addressing culture, team structures (Team Topologies), value streams, and psychological resistance to change.',
    subCompetencies: [
      subEn('transforming', 'organizational-design', 'Organizational Design', 'Designing team topologies, value streams, and friction-free decision flows.'),
      subEn('transforming', 'organizational-change', 'Organizational Change', 'Change dynamics (Kotter/ADKAR), complexity theory (Cynefin), and systems thinking.'),
    ],
    levels: [
      'Perceives transformation merely as rolling out a standard framework to more teams.',
      'Understands how organizational culture and reporting hierarchies shape delivery success.',
      'Applies systems thinking and evolutionary change models across whole departments.',
      'Architects and steers multi-departmental transformations connecting tech, product, and HR.',
      'Leads enterprise-wide agility overhauls and advises Fortune 500 executive boards.',
    ],
    resources: [
      { type: 'Artykuł', title: 'Evolutionary Change vs Big Bang Framework Rollouts', href: '/en/competency/transforming/organizational-change' },
      { type: 'Case study', title: 'Transforming a 400-Engineer R&D Division', href: '/en/competency/transforming/organizational-design' },
    ],
  },
]

export const CORE_COMPETENCY_EN: Competency = {
  id: 'self-mastery',
  name: 'Self Mastery',
  href: '/en/competency/self-mastery',
  description:
    'The gravitational core of all competencies: emotional intelligence, self-awareness, and emotional regulation. A practitioner with mature Self Mastery recognizes internal triggers and consciously chooses their stance.',
  subCompetencies: [
    subEn('self-mastery', 'samoswiadomosc', 'Self-Awareness', 'Recognizing personal cognitive biases, internal patterns, and stress triggers.'),
    subEn('self-mastery', 'regulacja-emocji', 'Emotional Regulation', 'Maintaining composure and non-reactive presence in high-conflict crisis environments.'),
    subEn('self-mastery', 'ciagly-rozwoj', 'Continuous Growth', 'Rigorous reflective practice, professional supervision, and continuous learning.'),
  ],
  levels: [
    'Rarely reflects upon personal emotional reactions and their systemic impact on others.',
    'Identifies personal reactive patterns retrospectively, after engagements conclude.',
    'Maintains real-time self-awareness during difficult dialogues, deliberately choosing stance.',
    'Engages in ongoing professional supervision and cultivates an active journaling practice.',
    'Exemplifies unshakeable grounding, presence, and calm, serving as a pillar for the organization.',
  ],
  resources: [
    { type: 'Artykuł', title: 'Reflective Practice for High-Impact Agile Coaches', href: '/en/competency/self-mastery/ciagly-rozwoj' },
    { type: 'Checklista', title: 'Observer Journal for Internal Trigger Awareness', href: '/en/competency/self-mastery/samoswiadomosc' },
  ],
}

export const DOMAIN_KNOWLEDGE_EN: KnowledgeArea = {
  name: 'Domain Knowledge',
  href: '/en/competency/domain-knowledge',
  description:
    'The contextual outer ring: industry specialization, technical architectures, product discovery, and commercial realities. Enables the coach to formulate sharp, impactful questions that matter to the business.',
}

export const COMPETENCIES_EN: Competency[] = [...WHEEL_COMPETENCIES_EN, CORE_COMPETENCY_EN]

export function getCompetencyByIdEn(id: string): Competency | undefined {
  return COMPETENCIES_EN.find((c) => c.id === id)
}

export function getSubCompetencyEn(
  competencyId: string,
  subSlug: string
): { competency: Competency; subCompetency: SubCompetency } | undefined {
  const competency = getCompetencyByIdEn(competencyId)
  if (!competency) return undefined
  const sub = competency.subCompetencies.find((s) => s.href.endsWith(`/${subSlug}`))
  if (!sub) return undefined
  return { competency, subCompetency: sub }
}

export function getNextPrevCompetencyEn(id: CompetencyId): {
  prev: Competency
  next: Competency
} {
  const index = COMPETENCIES_EN.findIndex((c) => c.id === id)
  const prevIndex = (index - 1 + COMPETENCIES_EN.length) % COMPETENCIES_EN.length
  const nextIndex = (index + 1) % COMPETENCIES_EN.length
  return {
    prev: COMPETENCIES_EN[prevIndex],
    next: COMPETENCIES_EN[nextIndex],
  }
}

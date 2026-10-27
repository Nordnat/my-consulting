import type { SubCompetencyDetail } from './subcompetency-details'

export const SUBCOMPETENCY_DETAILS_EN: Record<string, Record<string, SubCompetencyDetail>> = {
  'agile-lean-practitioner': {
    'mindset': {
      tagline: 'Deep comprehension of agility and continuous improvement over rigid methodology dogmatism.',
      overview: 'Agile/Lean Mindset is the bedrock of coach credibility. It is not about reciting the Agile Manifesto or Scrum Guide rules, but about everyday decision-making rooted in empiricism (transparency, inspection, adaptation), waste elimination, and unrelenting focus on end-user value flow.',
      keyBehaviors: [
        'Consistently inquires "why?", guiding teams and executives to appreciate the purpose rather than just the ritual.',
        'Champions psychological safety and frames system errors and outages as blameless learning opportunities.',
        'Prioritizes flow efficiency and lead-time reduction over maximizing individual worker resource utilization.',
        'Fosters true product thinking and customer outcome orientation rather than output-driven project schedules.',
      ],
      antiPatterns: [
        'Dogmatically enforcing framework rules without empathy for technical, regulatory, or business realities.',
        '"Agile Police" demeanor — policing minor deviations instead of diagnosing systemic friction causes.',
        'Sanctioning Zombie Scrum or Cargo Cult agility where meetings take place without real empirical adaptation.',
      ],
      auditQuestions: [
        'Does the team clearly understand the value of each ceremony, or do they perceive it as administrative overhead?',
        'How do executives and squads respond to a failed production hypothesis or incident?',
        'Are process modifications grounded in verifiable data aimed at shortening time-to-value?',
      ],
      maturityIndicators: {
        level1: 'Possesses conceptual textbook knowledge, evaluating complex situations in binary terms.',
        level3: 'Pragmatically models and articulates agile principles amidst challenging delivery pressures.',
        level5: 'Shapes enterprise operating culture grounded in trust, autonomy, and continuous learning at C-level.',
      },
    },
    'frameworki-i-praktyki': {
      tagline: 'Proficiency in Scrum, Kanban, Extreme Programming (XP), and Lean with pragmatic contextual tailoring.',
      overview: 'Methodological and tooling mastery represents the core craftsmanship of the coach. Encompasses Scrum mechanics, Kanban pull systems, XP technical practices (TDD, CI/CD, Pair Programming), and scaling frameworks (LeSS, SAFe), with the wisdom to blend them seamlessly.',
      keyBehaviors: [
        'Matches the right framework to work dynamics (e.g., Scrum for novel feature discovery, Kanban for SLA-driven platform flow).',
        'Implements and tracks essential flow metrics: Lead Time, Cycle Time, WIP, and Throughput.',
        'Actively champions extreme programming practices, recognizing that without technical craft, agility cannot scale.',
        'Designs visual value boards reflecting actual end-to-end delivery rather than isolated departmental tasks.',
      ],
      antiPatterns: [
        'One-size-fits-all imposition of Scrum onto all teams irrespective of their operating reality.',
        'Neglecting software engineering discipline and technical debt in favor of purely superficial process rituals.',
        'Introducing heavyweight scaling frameworks where simple architectural decoupling and interface contracts suffice.',
      ],
      auditQuestions: [
        'Which flow metrics are continuously monitored and leveraged during team retrospectives?',
        'Are Work-in-Progress (WIP) limits defined, enforced, and respected across teams and stakeholders?',
        'How does the current delivery process incentivize automated testing, continuous integration, and frequent releases?',
      ],
      maturityIndicators: {
        level1: 'Knows standard Scrum mechanics but struggles when teams encounter edge cases.',
        level3: 'Fluently blends Scrum, Kanban, and modern engineering practices tailored to squad needs.',
        level5: 'Designs bespoke enterprise operating systems and value stream pipelines across multiple tech business units.',
      },
    },
  },
  'serving': {
    'biznes': {
      tagline: 'Empowering Product Owners and executive stakeholders to maximize business ROI and outcome value.',
      overview: 'Serving the Business constructs the strategic bridge between technical execution and corporate commercial objectives. The coach assists in hypothesis-driven backlog structuring, metric definition (OKRs, Pirate Metrics), and high-integrity stakeholder negotiation.',
      keyBehaviors: [
        'Coaches Product Owners in breaking large initiatives into testable hypotheses and vertical MVP slices.',
        'Facilitates data-driven discovery (user interviews, behavioral analytics, experimentation).',
        'Moderates roadmap prioritization sessions and transparent trade-off dialogues with executive sponsors.',
        'Ensures shared strategic clarity and product vision across autonomous development squads.',
      ],
      antiPatterns: [
        'Exclusively coaching the dev team while leaving the Product Owner unsupported amidst executive pressure.',
        'Allowing the Product Owner to become a passive "Jira ticket manager" instead of an empowered business leader.',
        'Sprinting without clear Sprint Goals tied to strategic measurable business needles.',
      ],
      auditQuestions: [
        'How does the Product Owner prioritize conflicting stakeholder demands in the backlog?',
        'Can every engineer explain how current sprint stories influence company bottom-line performance?',
        'How frequently is genuine feedback gathered from real end-users and integrated into roadmap pivots?',
      ],
      maturityIndicators: {
        level1: 'Understands the theoretical role of Product Ownership but cannot assist in backlog strategy.',
        level3: 'Hands-on partners with POs in User Story Mapping, WSJF prioritization, and OKR alignment.',
        level5: 'Advises executive committees on strategic product portfolio governance and investment prioritization.',
      },
    },
    'zespol': {
      tagline: 'Fostering genuine self-organization, psychological safety, and dismantling systemic organizational friction.',
      overview: 'Serving the Team represents the heartbeat of servant leadership. It focuses on cultivating conditions where squads take collective ownership of deliverables. The coach manages the environment, removes systemic blockers, and facilitates interpersonal maturity.',
      keyBehaviors: [
        'Proactively unearths and eliminates systemic, cross-team, and organizational bottlenecks.',
        'Protects deep work focus from disruptive external interruptions while cultivating healthy collaboration.',
        'Systematically transfers decision-making authority to the team, nurturing autonomous ownership.',
        'Builds an environment of psychological safety where team members voice concerns without fear.',
      ],
      antiPatterns: [
        '"Team Mom" syndrome — spoon-feeding engineers and creating learned helplessness instead of independence.',
        'Smoothing over critical conflicts and sweeps uncomfortable technical truths under the rug.',
        'Morphing into a traditional task-assigning project manager who demands individual status reports.',
      ],
      auditQuestions: [
        'Can the squad make architectural and planning decisions smoothly when the Scrum Master is on leave?',
        'How rapidly are cross-departmental blockers escalated, addressed, and resolved?',
        'Do team members debate fiercely yet respectfully during retrospectives, or is there passive silence?',
      ],
      maturityIndicators: {
        level1: 'Maintains meeting calendars and records minutes in a purely administrative capacity.',
        level3: 'Expertly diagnoses team dynamics, cultivating genuine trust, accountability, and psychological safety.',
        level5: 'Raises high-performing, autonomous engineering squads and creates permanent systemic blocker-clearing mechanisms.',
      },
    },
  },
  'coaching': {
    'mindset': {
      tagline: 'Unwavering belief in client potential, non-judgmental presence, and disciplined advisory restraint.',
      overview: 'A genuine coaching mindset reflects professional ICF standards. It assumes the client (team, leader, architect) holds the deepest contextual knowledge and creative capacity to find optimal solutions. The coach creates a protected thinking environment and provokes breakthrough insights rather than prescribing answers.',
      keyBehaviors: [
        'Deliberately refrains from judging, giving answers, or imposing personal biases.',
        'Holds unconditional positive regard for the team\'s innate problem-solving capability.',
        'Maintains complete present-moment awareness rather than pre-planning the next question.',
        'Comfortable with silence, allowing the thinker sufficient space for deep cognitive synthesis.',
      ],
      antiPatterns: [
        'Asking leading questions disguised as coaching (e.g., "Don\'t you think you should introduce pair programming?").',
        'Losing patience and jumping into expert problem-solver mode at the first sign of client struggle.',
        'Projecting personal anxieties, frustrations, or past corporate trauma onto the client system.',
      ],
      auditQuestions: [
        'Who speaks for the majority of the time during 1-on-1 dialogues — the coach or the coachee?',
        'Do the coach\'s questions expand the client\'s perspective or guide them toward a predetermined solution?',
        'Can the coach remain calm and neutral when the client chooses an unexpected path?',
      ],
      maturityIndicators: {
        level1: 'Understands coaching definitions, but defaults to advising and instructing in 80% of situations.',
        level3: 'Consistently sustains a clean coaching stance across individual and team developmental conversations.',
        level5: 'Operates with master-level presence, facilitating profound identity and paradigm shifts for executives.',
      },
    },
    'umiejetnosci': {
      tagline: 'Multi-level active listening, powerful inquiry, and rigorous professional contracting.',
      overview: 'Coaching competencies encompass precision conversational tools: global listening (words, emotional undertones, body language, systemic context), concise open-ended questions, powerful metaphors, and clear contracting (GROW model, Solution-Focused frameworks).',
      keyBehaviors: [
        'Listens at levels 2 and 3 (focused client immersion and intuitive awareness of unspoken energy shifts).',
        'Formulates laser-sharp, simple questions that disrupt fixed assumptions and trigger breakthrough clarity.',
        'Establishes explicit contracts for the overall engagement and for each discrete session (goal, measures of success, confidentiality).',
        'Anchors cognitive insights into tangible, accountable action plans committed to by the coachee.',
      ],
      antiPatterns: [
        'Drifting through meandering conversations without an agreed contract, clear objective, or success metric.',
        'Asking convoluted multi-part questions that confuse the client and dilute impact.',
        'Ignoring emotional tension or incongruence displayed during high-stakes dialogues.',
      ],
      auditQuestions: [
        'Does every coaching dialogue begin by confirming the target outcome and measures of success?',
        'How does the coach support accountability and review commitments established during previous sessions?',
        'Do questions reveal systemic root causes or remain on superficial operational symptoms?',
      ],
      maturityIndicators: {
        level1: 'Asks generic open questions but loses structure, contractual boundaries, and direction.',
        level3: 'Skillfully guides structured coaching processes using established frameworks with verifiable client progress.',
        level5: 'Provides supervision to other coaches and masterfully navigates deep-seated organizational resistance.',
      },
    },
  },
  'facilitating': {
    'mindset': {
      tagline: 'Procedural neutrality, profound faith in collective intelligence, and total transparency of intent.',
      overview: 'Facilitation Mindset embraces complete impartiality regarding meeting content while holding unwavering commitment to the design and safety of the process. The facilitator trusts that the assembled group possesses the necessary wisdom to reach sustainable consensus when provided structure and equal voice.',
      keyBehaviors: [
        'Maintains absolute neutrality, never taking sides or favoring particular technical solutions.',
        'Ensures radical inclusion — amplifying introverted perspectives while tempering dominant personalities.',
        'Transparently clarifies workshop objectives, agendas, and ground rules from the outset.',
        'Trusts the process, holding steady composure through moments of productive tension and ambiguity.',
      ],
      antiPatterns: [
        'Steering discussions toward a preconceived conclusion favored by leadership or oneself (covert manipulation).',
        'Permitting the HiPPO (Highest Paid Person\'s Opinion) to dominate and silence dissenting viewpoints.',
        'Displaying visible disappointment when the group collectively selects a strategy different from personal preference.',
      ],
      auditQuestions: [
        'Do all participants have an equal voice and influence on decisions made in strategic meetings?',
        'How does the facilitator intervene when an executive attempts to railroad group consensus?',
        'Are meeting agreements (working norms) explicitly co-created, respected, and upheld?',
      ],
      maturityIndicators: {
        level1: 'Attempts neutrality but quickly gets drawn into technical debates and argues for specific points.',
        level3: 'Consistently sustains neutrality and skillfully manages voice equity in multi-stakeholder sessions.',
        level5: 'Exemplifies masterful neutrality in high-tension crisis negotiations and board-level disputes.',
      },
    },
    'umiejetnosci': {
      tagline: 'Workshop architecture, divergence/convergence dynamics, and constructive conflict resolution.',
      overview: 'Facilitation skills provide the technical machinery of collaborative sessions: outcome-driven agenda design, divergence techniques (Brainstorming, Liberating Structures: 1-2-4-All, TRIZ), convergence methods (Dot Voting, Fist of Five), and conflict de-escalation.',
      keyBehaviors: [
        'Structures workshops with clear phases: set the stage, gather data, generate insights, decide what to do, close.',
        'Fluently orchestrates Liberating Structures and interactive visual collaboration canvases (Miro, Mural, physical boards).',
        'Identifies emotional friction early and facilitates constructive resolution rather than ignoring the tension.',
        'Ensures every critical decision is explicitly recorded with single-threaded owners and firm due dates.',
      ],
      antiPatterns: [
        'Running meetings on the fly without clear desired outcomes or intentional procedural design.',
        'Subjecting participants to passive slide lectures instead of engaging interactive formats.',
        'Concluding sessions with vague verbal agreements rather than crisp action items and assigned owners.',
      ],
      auditQuestions: [
        'Does every workshop conclude with unambiguous commitments, assigned owners, and explicit next steps?',
        'What specific facilitation techniques are applied to defuse emerging interpersonal conflict?',
        'How does the facilitator collect input from 30+ participants in 10 minutes without descend into chaos?',
      ],
      maturityIndicators: {
        level1: 'Manages basic meetings by following a simple linear agenda and timebox.',
        level3: 'Designs and executes complex multi-team events (e.g., PI Planning, Release Retrospectives) with precision.',
        level5: 'Facilitates high-stakes corporate mergers, reorganizations, and board-level strategy debates.',
      },
    },
  },
  'guiding-learning': {
    'teaching': {
      tagline: 'Modern andragogy, experiential adult learning, and Training from the Back of the Room (TBR).',
      overview: 'Teaching adult professionals requires methods vastly different from classical school lectures. Guiding Learning through teaching is grounded in TBR\'s 4Cs (Connections, Concepts, Concrete Practice, Conclusions), micro-learning, and simulations that translate knowledge into immediate habits.',
      keyBehaviors: [
        'Structures sessions with 70%+ time devoted to hands-on exercises, discussions, and simulations (70/20/10 model).',
        'Validates comprehension through applied practice rather than passive multiple-choice quizzes.',
        'Tailors tone, terminology, and real-world case examples to audience context (developers, QA, managers, executives).',
        'Designs deliberate post-training follow-up cadences and on-the-job micro-challenges to ensure retention.',
      ],
      antiPatterns: [
        '"Death by PowerPoint" — hours of monotone slide reading with zero active participant engagement.',
        'Delivering abstract textbook theory disconnected from the company\'s production codebase and real constraints.',
        'Zero evaluation of whether the training actually modified daily behaviors in the delivery squads.',
      ],
      auditQuestions: [
        'What percentage of training time is spent by attendees actively practicing versus listening to lectures?',
        'How is knowledge transfer and practical behavioral change measured weeks after the workshop concludes?',
        'Are training curricula routinely updated in response to real production challenges and tech evolution?',
      ],
      maturityIndicators: {
        level1: 'Delivers generic intro to Scrum slide decks based on off-the-shelf templates.',
        level3: 'Authors highly engaging, experiential learning workshops grounded in TBR and interactive simulations.',
        level5: 'Internationally recognized trainer, author of industry learning frameworks, who certifies other trainers.',
      },
    },
    'mentoring': {
      tagline: 'Thoughtful experience-sharing, role modeling, and structured career capability development.',
      overview: 'Mentoring accelerates mentee growth by sharing personal war stories, lessons learned, and proven patterns, accompanied by actionable feedback. The mentor guides Scrum Masters, Product Owners, and Tech Leads along deliberate career progression trajectories.',
      keyBehaviors: [
        'Shares concrete case studies from personal leadership history, detailing trade-offs and unintended consequences.',
        'Delivers constructive, fact-based behavioral feedback using proven frameworks (e.g., SBI: Situation-Behavior-Impact).',
        'Partners with mentees to diagnose skill blind spots and craft focused 90-day developmental roadmaps.',
        'Creates safe sandbox environments for mentees to experiment with unfamiliar leadership behaviors.',
      ],
      antiPatterns: [
        'Prescribing dogmatic instructions ("do it exactly how I did it"), which suffocates mentee autonomy.',
        'Infrequent, haphazard catch-ups without tracking developmental milestones or accountability.',
        'Using the mentoring platform to feed personal ego rather than genuinely elevating the mentee.',
      ],
      auditQuestions: [
        'Does the mentoring journey feature explicit growth goals and quantifiable progress indicators?',
        'How frequently is real-world shadowing feedback provided following live stakeholder meetings?',
        'Can the mentee operate with complete confidence and self-sufficiency upon conclusion of the program?',
      ],
      maturityIndicators: {
        level1: 'Provides informal, spontaneous advice to junior colleagues on an ad-hoc basis.',
        level3: 'Leads structured, multi-month mentoring partnerships for Scrum Masters and Product Owners.',
        level5: 'Designs enterprise-wide succession planning and leadership mentorship ecosystems.',
      },
    },
    'learning-mindset': {
      tagline: 'Fostering an institutional culture of continuous experimentation, curiosity, and psychological safety.',
      overview: 'Learning Mindset instills a thirst for continuous improvement throughout the engineering organization. The coach transforms every sprint and release into an empirical learning loop (Build-Measure-Learn) and catalyzes vibrant Communities of Practice and Guilds.',
      keyBehaviors: [
        'Champions internal guilds, tech dojos, knowledge-sharing meetups, and engineering hackathons.',
        'Advocates rapid prototyping and hypothesis-testing over months of speculative requirements analysis.',
        'Guides teams to extract high-value organizational learning from production incidents via blameless post-mortems.',
        'Personally embodies lifelong learning through voracious reading, conference engagement, and knowledge dissemination.',
      ],
      antiPatterns: [
        'Penalizing unsuccessful experiments, fostering risk-aversion, cover-ups, and bureaucratic paralysis.',
        'Siloed knowledge islands where teams make the same preventable mistakes repeatedly in isolation.',
        'Zero allocated capacity or innovation budget for research and technical exploration during sprint cadences.',
      ],
      auditQuestions: [
        'Are active Communities of Practice / Guilds thriving across functional and organizational boundaries?',
        'How are production incidents reviewed — is there a genuine blameless post-mortem culture?',
        'How much dedicated capacity are engineers empowered to invest in exploratory learning and innovation?',
      ],
      maturityIndicators: {
        level1: 'Focuses strictly on personal learning, with little involvement in broad organizational culture.',
        level3: 'Actively animates internal communities and embeds experimental learning habits across teams.',
        level5: 'Transforms the enterprise into a recognized "Learning Organization" that magnetic attracts premier tech talent.',
      },
    },
  },
  'advising': {
    'mindset': {
      tagline: 'Conscious hat-switching, transparency of intent, and absolute respect for client sovereignty.',
      overview: 'Advisory engagement requires strict discipline: explicitly stating "I am taking off my coaching hat and putting on my advisory hat." The advisor understands that a recommendation is a well-reasoned proposal accompanied by trade-off analysis, not an executive mandate. Final decision and accountability always remain with the client.',
      keyBehaviors: [
        'Requests explicit permission prior to entering an advisory stance ("May I share an expert recommendation?").',
        'Clearly distinguishes verified empirical data from subjective opinion and historical anecdotes.',
        'Presents multiple viable alternatives with their respective trade-offs and operational risks.',
        'Gracefully accepts when a client rejects a recommendation, remaining fully supportive of their chosen route.',
      ],
      antiPatterns: [
        'Unannounced switching into advice mode, dominating discussions and dismantling client ownership.',
        'Promoting dogmatic "Best Practice" dogma instead of contextual "Good Practice" tailored to realities.',
        'Displaying resentment or withdrawing engagement when leadership selects a different strategic approach.',
      ],
      auditQuestions: [
        'Does the coach clearly signal when pivoting between neutral coaching questions and advisory guidance?',
        'Do recommendations reflect the unique culture, technology stack, and commercial constraints of the client?',
        'How does the coach react when management decides against their suggested approach?',
      ],
      maturityIndicators: {
        level1: 'Gives advice haphazardly without structure, awareness, or conscious stance distinction.',
        level3: 'Consciously and cleanly toggles stances, offering balanced, evidence-backed options.',
        level5: 'Serves as an indispensable C-level advisor whose insights shape the enterprise technical architecture.',
      },
    },
    'umiejetnosci': {
      tagline: 'Structured diagnosis, multi-criteria trade-off modeling, and crisp executive recommendation design.',
      overview: 'Advisory skill relies on rapid systemic diagnostics (DORA metrics, Value Stream Mapping, codebase insights, stakeholder interviews), clear data synthesis, and structuring recommendations for senior executives (Executive Summary, Trade-offs, Risk Matrices, ROI).',
      keyBehaviors: [
        'Leverages objective diagnostic frameworks (e.g., DORA metrics, Flow Framework, Value Stream Audits).',
        'Formulates recommendations in commercial and risk-mitigation language understood by business leaders.',
        'Identifies high-impact immediate Quick Wins alongside strategic, systemic transformations.',
        'Equips recommendations with actionable implementation roadmaps and measurable KPIs/OKRs.',
      ],
      antiPatterns: [
        'Issuing diagnostic opinions based on superficial hallway chatter without validating underlying telemetry.',
        'Producing voluminous, academic PDF reports that gather dust without real-world execution.',
        'Neglecting organizational friction costs and cognitive load imposed on teams by the recommendation.',
      ],
      auditQuestions: [
        'Do advisory proposals include realistic risk assessments and clear opportunity cost calculations?',
        'What objective telemetry and observed evidence substantiate the diagnostic conclusions?',
        'How are the outcomes of implemented recommendations tracked and reviewed over time?',
      ],
      maturityIndicators: {
        level1: 'Offers recommendations based on gut instinct without analytical structure or trade-off evaluation.',
        level3: 'Conducts professional audits and presents concise, well-reasoned decision packages.',
        level5: 'Designs comprehensive transformation strategies with multi-million-dollar bottom-line impact.',
      },
    },
  },
  'leading': {
    'visionary': {
      tagline: 'Crafting compelling change narratives, painting vivid future states, and infusing work with purpose.',
      overview: 'Visionary leadership sees beyond the current sprint and quarter. The visionary coach defines and articulates what the future organization will look like once agility takes root, why the arduous transformation journey is worthwhile, and the tangible benefits for engineers, customers, and investors.',
      keyBehaviors: [
        'Translates abstract executive OKRs into relatable, inspiring day-to-day narratives for squads.',
        'Guides teams and product leaders in defining their North Star Metric and long-term delivery vision.',
        'Maintains alignment and morale during predictable dips in performance (the transformational J-curve).',
        'Continually connects mundane daily engineering chores to the overarching company mission.',
      ],
      antiPatterns: [
        'Spouting hollow corporate buzzwords and slogans that provoke engineering cynicism.',
        'Visioneering completely detached from technical debt, architectural reality, and budget limitations.',
        'Constantly shifting vision narratives, generating confusion and fatigue across teams.',
      ],
      auditQuestions: [
        'Can every engineer articulate the long-term vision of the organization in a single sentence?',
        'How is the transformation narrative reinforced and refreshed during regular all-hands and planning cadences?',
        'Do sprint goals directly connect to the overarching multi-year product strategy?',
      ],
      maturityIndicators: {
        level1: 'Focuses exclusively on operational tasks, unable to articulate or rally people around a broader horizon.',
        level3: 'Inspires teams and Product Owners, guiding them in co-creating cohesive, aspirational product visions.',
        level5: 'Co-creates the industry-wide transformation vision, mobilizing hundreds of employees across business units.',
      },
    },
    'role-modeling': {
      tagline: 'Leadership by personal example, radical integrity, transparency, and moral courage.',
      overview: 'One cannot teach transparency while being defensive. Role Modeling represents the living embodiment of the values we wish to see in the organization. The coach is the first to admit mistakes, solicit critical feedback, show respect in heated debates, and display courage during difficult conversations.',
      keyBehaviors: [
        'Demonstrates complete congruence: behaviors match spoken values under high stress (Walk the Talk).',
        'Openly acknowledges errors and demonstrates how to derive lessons without shame or deflection.',
        'Displays moral courage: tells hard, uncomfortable truths to senior management with tact and poise.',
        'Promotes dignity and actively refuses to participate in backchannel office politics or gossip.',
      ],
      antiPatterns: [
        '"Do as I say, not as I do" — hypocrisy and double standards between advice and personal behavior.',
        'Dodging critical conversations out of fear of displeasing powerful stakeholders.',
        'Pointing fingers and blaming external leadership for transformation impediments.',
      ],
      auditQuestions: [
        'Are the coach\'s behaviors under acute pressure fully aligned with declared agile values?',
        'Does the coach regularly ask teams and peers for rigorous, unvarnished feedback on their performance?',
        'How does the coach receive direct pushback or criticism regarding their methods?',
      ],
      maturityIndicators: {
        level1: 'Espouses agile values verbally but retreats into defensive reactions when challenged.',
        level3: 'Recognized as an ethical anchor and model of professionalism within their sphere of influence.',
        level5: 'Their personal presence reshapes ethical standards, trust, and psychological safety enterprise-wide.',
      },
    },
    'leading-for-growth': {
      tagline: 'Multiplying leaders rather than building followers, delegating authority, and nurturing autonomy.',
      overview: 'The true test of leadership is how many new leaders one produces. Leading for Growth focuses on identifying emerging talent, building self-confidence in engineers and managers, creating safe spaces for decentralized decision-making, and deliberately stepping back into a supportive role.',
      keyBehaviors: [
        'Creates platforms for team members to lead initiatives, speak at all-hands, and celebrate achievements.',
        'Applies structured delegation tools (e.g., Delegation Poker, 7 Levels of Delegation).',
        'Strengthens ownership and agency among Engineering Managers and Tech Leads.',
        'Celebrates the accomplishments of others and stays in the background when squads receive accolades.',
      ],
      antiPatterns: [
        'Creating dependency by positioning oneself as the indispensable bottleneck for every decision.',
        'Taking credit for team innovations and successes in status reports to executives.',
        'Micromanaging every initiative out of anxiety that emerging leaders might stumble.',
      ],
      auditQuestions: [
        'How many new agile leaders and champions have emerged within the organization over the past year?',
        'To what degree are technical and process decisions executed autonomously without coach involvement?',
        'Do engineering managers view the coach as a collaborative accelerator of their own authority?',
      ],
      maturityIndicators: {
        level1: 'Hoards influence and insists that all major process decisions pass through their desk.',
        level3: 'Intentionally builds leadership capabilities among Product Owners, Scrum Masters, and Tech Leads.',
        level5: 'Constructs a self-sustaining leadership ecosystem across a global tech enterprise.',
      },
    },
  },
  'transforming': {
    'organizational-design': {
      tagline: 'Organizational architecture: team topologies, value stream mapping, and streamlined governance.',
      overview: 'Organizational design is the structural engineering of work. In accordance with Conway\'s Law, software architectures mirror communication pathways. The coach guides the creation of cross-functional topologies (Stream-aligned, Enabling, Complicated-subsystem, Platform teams), dismantling dependency gridlocks.',
      keyBehaviors: [
        'Leverages Team Topologies and Dynamic Reteaming frameworks to structure resilient squads.',
        'Conducts Value Stream Mapping (VSM) to uncover structural friction and handoff delays.',
        'Guides transitions from functional component silos to autonomous, end-to-end product value teams.',
        'Clarifies team interaction modes (X-as-a-Service, Collaboration, Facilitating) to minimize cognitive load.',
      ],
      antiPatterns: [
        'Adopting agile rituals inside artificial silos (e.g., separate Agile-Frontend, Agile-Backend, Agile-QA teams).',
        'Building Byzantine matrix reporting structures that paralyze fast decision-making.',
        'Ignoring Conway\'s Law by trying to build microservices while maintaining monolithic departmental hierarchies.',
      ],
      auditQuestions: [
        'Can squads deploy customer value to production independently without depending on 5 other teams?',
        'What is the average wait time for cross-team dependencies or external component approvals?',
        'Does the team topology reflect business domain boundaries (Domain-Driven Bounded Contexts)?',
      ],
      maturityIndicators: {
        level1: 'Understands basic cross-functional definitions but cannot restructure real-world department setups.',
        level3: 'Hands-on applies Team Topologies and VSM across units of 50–150 engineers.',
        level5: 'Architects global organizational topologies for multinational enterprises comprising thousands of staff.',
      },
    },
    'organizational-change': {
      tagline: 'Systemic change leadership, cultural dynamics, resistance management, and systems thinking.',
      overview: 'Real transformation is not tooling adoption; it is a fundamental shift in cultural habits, incentives, and power structures. The coach combines change psychology (Kotter, ADKAR, Lean Change Management), complexity science (Cynefin), and systems thinking to navigate change with empathy and endurance.',
      keyBehaviors: [
        'Interprets resistance not as sabotage, but as vital feedback regarding unaddressed anxieties and needs.',
        'Executes transformations as a sequence of small, measurable experiments (Lean Change Management).',
        'Identifies and empowers influential change agents across all vertical tiers of the company.',
        'Partners with executives in delivering transparent, empathetic communication regarding strategic shifts.',
      ],
      antiPatterns: [
        'Imposing "Big Bang" top-down process mandates without engaging in genuine dialogue with practitioners.',
        'Branding employees with legitimate concerns as "enemies of change" or "dinosaurs".',
        'Declaring victory prematurely after training people and updating HR job titles.',
      ],
      auditQuestions: [
        'How is ongoing feedback gathered from staff regarding the pace, clarity, and impact of organizational changes?',
        'Is the transformation roadmap subjected to regular inspection and adaptation based on business telemetry?',
        'How are vulnerability, anxiety, and role identity shifts supported during structural transitions?',
      ],
      maturityIndicators: {
        level1: 'Views change mechanically as an administrative project schedule of training events.',
        level3: 'Expertly facilitates systemic change utilizing iterative experiments and high organizational empathy.',
        level5: 'Shepherds enduring, deep cultural transformations that elevate enterprise competitiveness permanently.',
      },
    },
  },
  'self-mastery': {
    'samoswiadomosc': {
      tagline: 'Discerning personal cognitive biases, internal trigger points, and emotional limits.',
      overview: 'Self-awareness is the central axis of the entire wheel. Without it, the coach remains hostage to unconscious habit loops and unexamined triggers. Encompasses intimate knowledge of personal strengths, shadow traits, communication styles, and moments where stress compromises objectivity.',
      keyBehaviors: [
        'Notices somatic and psychological triggers when encountering challenging participant behaviors.',
        'Maintains clear awareness of personal strengths, shadow areas, and impatience tendencies.',
        'Clarifies internal intentions prior to facilitating high-stakes workshops or 1-on-1 dialogues.',
        'Maintains a disciplined habit of reflective debriefing following critical interventions.',
      ],
      antiPatterns: [
        'Harboring an aura of infallibility and moral superiority over "non-agile" corporate colleagues.',
        'Blindness to personal unconscious biases and projecting emotional insecurities onto teams.',
        'Ignoring warning signs of emotional exhaustion, stress, and approaching burnout.',
      ],
      auditQuestions: [
        'What specific team or executive behaviors most quickly provoke defensiveness or agitation in the coach?',
        'What rigorous practices does the coach employ to illuminate personal blind spots?',
        'Can the coach comfortably state with humility: "I do not know, I was mistaken"?',
      ],
      maturityIndicators: {
        level1: 'Operates on autopilot, becoming aware of mistakes only long after consequences unfold.',
        level3: 'Monitors emotional reactions in real-time, preventing personal triggers from steering interventions.',
        level5: 'Exemplifies profound personal grounding and authenticity, anchoring trust across the organization.',
      },
    },
    'regulacja-emocji': {
      tagline: 'Composure under acute pressure, psychological resilience, and deliberate response choices.',
      overview: 'Emotional regulation is the capacity to preserve clarity and equanimity when chaos strikes. When meetings become combative or when executives demand immediate miracles, the coach remains an unshakeable anchor for the surrounding human system.',
      keyBehaviors: [
        'Maintains calm and composure during intense conflict, ambiguity, and tight deadline pressure.',
        'Employs somatic grounding and mindfulness techniques to preserve centered presence.',
        'Responds to aggression or frustration with curiosity and empathy rather than counter-attack.',
        'Maintains emotional hygiene and restorative recovery routines, guarding against burnout.',
      ],
      antiPatterns: [
        'Entering technical debates from a stance of wounded ego, resentment, or defensive status-protection.',
        'Reactivly absorbing executive panic and frantically altering established plans in distress.',
        'Repressing emotions behind a facade of false cheer while nursing internal cynicism.',
      ],
      auditQuestions: [
        'How does the coach maintain presence when emotional outbursts occur during a contentious retrospective?',
        'What routines safeguard the coach\'s mental and emotional energy during prolonged crises?',
        'Does the coach\'s entry into a room calm collective tension or amplify anxiety?',
      ],
      maturityIndicators: {
        level1: 'Gets pulled into emotional whirlpools, reacting defensively to criticism or skepticism.',
        level3: 'Consciously regulates reactions, actively de-escalating tension in volatile scenarios.',
        level5: 'Radiates a calm, grounded presence that naturally stabilizes turbulent group dynamics.',
      },
    },
    'ciagly-rozwoj': {
      tagline: 'Reflective practice, regular professional supervision, journaling, and broad intellectual curiosity.',
      overview: 'Continuous growth in Self Mastery embodies professional humility. The mature practitioner knows their diagnostic instruments require regular recalibration. They partner with accredited coaching supervisors, keep reflective journals, and draw wisdom from psychology, neuroscience, and sociology.',
      keyBehaviors: [
        'Regularly engages in individual or peer coaching supervision with an accredited master practitioner.',
        'Maintains a disciplined reflective journal recording insights, failures, and breakthroughs from client engagements.',
        'Actively solicits critical feedback from clients, co-workers, and professional mentors.',
        'Explores multidisciplinary research beyond traditional IT (complexity science, behavioral economics, adult development).',
      ],
      antiPatterns: [
        'Believing that acquiring an initial certification marks the end of professional learning.',
        'Never engaging in external supervision, feedback loops, or mentor evaluation.',
        'Confining intellectual intake solely to social media forums and superficial corporate platitudes.',
      ],
      auditQuestions: [
        'When did the coach last participate in a professional supervision session, and what case was analyzed?',
        'Which recent books or scientific research have materially refined the coach\'s daily practices?',
        'How does the coach document and systematically analyze challenging client engagements?',
      ],
      maturityIndicators: {
        level1: 'Learns sporadically, primarily when preparing for routine certification exams.',
        level3: 'Maintains an active journaling discipline and regular professional supervision partnerships.',
        level5: 'Contributes to body of knowledge in the global community, mentoring and supervising practitioners.',
      },
    },
  },
}

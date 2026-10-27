'use client'

import { useId, type MouseEvent, type ReactElement } from 'react'
import { ArrowUpRight } from 'lucide-react'
import {
  CORE_COMPETENCY,
  DOMAIN_KNOWLEDGE,
  ROUTING_ENABLED,
  WHEEL_COMPETENCIES,
  type CompetencyId,
  type Rating,
} from '@/lib/growth-wheel-data'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'

const SIZE = 640
const C = SIZE / 2
const R_OUTER = 316
const R_DOMAIN = 276
const R_SUB = 190
const R_CORE = 60
const SEGMENT = (Math.PI * 2) / WHEEL_COMPETENCIES.length
const MAX_SCORE = 5

type Side = 'top' | 'bottom' | 'left' | 'right'

const segmentCenter = (index: number) => -Math.PI / 2 + index * SEGMENT
const segmentStart = (index: number) => segmentCenter(index) - SEGMENT / 2

const fmt = (value: number) => value.toFixed(2)

function polar(angle: number, radius: number) {
  return { x: C + radius * Math.cos(angle), y: C + radius * Math.sin(angle) }
}

function sector(a0: number, a1: number, inner: number, outer: number) {
  const o0 = polar(a0, outer)
  const o1 = polar(a1, outer)
  const i1 = polar(a1, inner)
  const i0 = polar(a0, inner)
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${fmt(o0.x)} ${fmt(o0.y)} A ${outer} ${outer} 0 ${large} 1 ${fmt(o1.x)} ${fmt(o1.y)} L ${fmt(i1.x)} ${fmt(i1.y)} A ${inner} ${inner} 0 ${large} 0 ${fmt(i0.x)} ${fmt(i0.y)} Z`
}

function sideFor(angle: number): Side {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  if (Math.abs(sin) >= Math.abs(cos)) return sin < 0 ? 'top' : 'bottom'
  return cos > 0 ? 'right' : 'left'
}

function wrap(text: string, maxChars: number) {
  const lines: string[] = []
  for (const word of text.split(' ')) {
    const last = lines[lines.length - 1]
    if (last && `${last} ${word}`.length <= maxChars) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
  }
  return lines
}

function preventIfDisabled(event: MouseEvent) {
  if (!ROUTING_ENABLED) event.preventDefault()
}

type MultilineProps = {
  lines: string[]
  x: number
  y: number
  lineHeight: number
  className: string
}

function Multiline({ lines, x, y, lineHeight, className }: MultilineProps) {
  const offset = ((lines.length - 1) * lineHeight) / 2
  return (
    <text x={x} textAnchor="middle" dominantBaseline="middle" className={cn('pointer-events-none select-none', className)}>
      {lines.map((line, i) => (
        <tspan key={line} x={x} y={y - offset + i * lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

type CompetencyWheelProps = {
  ratings: Record<CompetencyId, Rating>
  activeId: CompetencyId
  onSelect: (id: CompetencyId) => void
}

export function CompetencyWheel({ ratings, activeId, onSelect }: CompetencyWheelProps) {
  const uid = useId()
  const domainArcStart = polar(-Math.PI / 2 - 0.6, (R_OUTER + R_DOMAIN) / 2)
  const domainArcEnd = polar(-Math.PI / 2 + 0.6, (R_OUTER + R_DOMAIN) / 2)
  const domainArcRadius = (R_OUTER + R_DOMAIN) / 2

  function select(event: MouseEvent, id: CompetencyId) {
    preventIfDisabled(event)
    onSelect(id)
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="h-auto w-full"
      role="group"
      aria-label="Agile Coaching Growth Wheel: Domain Knowledge, 8 kompetencji z pod-kompetencjami i rdzeń Self Mastery"
    >
      <defs>
        <path
          id={`${uid}-domain`}
          d={`M ${fmt(domainArcStart.x)} ${fmt(domainArcStart.y)} A ${domainArcRadius} ${domainArcRadius} 0 0 1 ${fmt(domainArcEnd.x)} ${fmt(domainArcEnd.y)}`}
          fill="none"
        />
      </defs>

      <InfoCard
        side="top"
        eyebrow="Obszar wiedzy"
        title={DOMAIN_KNOWLEDGE.name}
        description={DOMAIN_KNOWLEDGE.description}
        href={DOMAIN_KNOWLEDGE.href}
      >
        <a href={DOMAIN_KNOWLEDGE.href} onClick={preventIfDisabled} className="group cursor-pointer outline-none">
          <path
            d={`M ${C - R_OUTER} ${C} a ${R_OUTER} ${R_OUTER} 0 1 0 ${R_OUTER * 2} 0 a ${R_OUTER} ${R_OUTER} 0 1 0 ${-R_OUTER * 2} 0 M ${C - R_DOMAIN} ${C} a ${R_DOMAIN} ${R_DOMAIN} 0 1 0 ${R_DOMAIN * 2} 0 a ${R_DOMAIN} ${R_DOMAIN} 0 1 0 ${-R_DOMAIN * 2} 0`}
            className="fill-slate-900 transition-colors group-hover:fill-slate-800 group-focus-visible:fill-slate-700"
            fillRule="evenodd"
          />
          <text className="pointer-events-none select-none fill-slate-100 text-[13px] font-semibold uppercase tracking-[0.3em]">
            <textPath href={`#${uid}-domain`} startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              Domain Knowledge
            </textPath>
          </text>
        </a>
      </InfoCard>

      {WHEEL_COMPETENCIES.map((competency, index) => {
        const start = segmentStart(index)
        const slice = SEGMENT / competency.subCompetencies.length
        const shade = index % 2 === 0 ? 'fill-indigo-600' : 'fill-indigo-500'
        return competency.subCompetencies.map((subCompetency, j) => {
          const a0 = start + j * slice
          const mid = a0 + slice / 2
          const label = polar(mid, (R_SUB + R_DOMAIN) / 2)
          return (
            <InfoCard
              key={subCompetency.href}
              side={sideFor(mid)}
              eyebrow={competency.name}
              title={subCompetency.name}
              description={subCompetency.description}
              href={subCompetency.href}
            >
              <a
                href={subCompetency.href}
                onClick={(event) => select(event, competency.id)}
                className="group cursor-pointer outline-none"
              >
                <path
                  d={sector(a0, a0 + slice, R_SUB, R_DOMAIN)}
                  className={cn(shade, 'transition-colors group-hover:fill-indigo-700 group-focus-visible:fill-indigo-800')}
                />
                <Multiline
                  lines={wrap(subCompetency.name, competency.subCompetencies.length > 2 ? 9 : 12)}
                  x={label.x}
                  y={label.y}
                  lineHeight={14}
                  className="fill-indigo-50 text-[12px] font-medium"
                />
              </a>
            </InfoCard>
          )
        })
      })}

      {WHEEL_COMPETENCIES.map((competency, index) => {
        const start = segmentStart(index)
        const mid = segmentCenter(index)
        const label = polar(mid, (R_CORE + R_SUB) / 2 + 8)
        const lines = wrap(competency.name, 12)
        const isActive = competency.id === activeId
        const rating = ratings[competency.id]
        const dotsY = label.y + (lines.length * 18) / 2 + 8
        return (
          <InfoCard
            key={competency.id}
            side={sideFor(mid)}
            eyebrow="Kompetencja"
            title={competency.name}
            description={competency.description}
            href={competency.href}
            rating={rating}
            links={competency.subCompetencies}
          >
            <a
              href={competency.href}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`${competency.name}, ocena ${rating} z 5`}
              onClick={(event) => select(event, competency.id)}
              className="group cursor-pointer outline-none"
            >
              <path
                d={sector(start, start + SEGMENT, R_CORE, R_SUB)}
                className={cn(
                  'stroke-slate-200 transition-colors group-focus-visible:fill-indigo-100',
                  isActive ? 'fill-indigo-50' : 'fill-white group-hover:fill-slate-50',
                )}
                strokeWidth={1}
              />
              <Multiline
                lines={lines}
                x={label.x}
                y={label.y}
                lineHeight={18}
                className={cn('text-[15px] font-semibold', isActive ? 'fill-indigo-700' : 'fill-slate-900')}
              />
              <g aria-hidden="true">
                {Array.from({ length: MAX_SCORE }, (_, i) => (
                  <rect
                    key={i}
                    x={label.x - 22 + i * 9.5}
                    y={dotsY}
                    width={6}
                    height={6}
                    className={cn('transition-colors duration-300', i < rating ? 'fill-indigo-600' : 'fill-slate-200')}
                  />
                ))}
              </g>
            </a>
          </InfoCard>
        )
      })}

      <g aria-hidden="true" className="pointer-events-none">
        {WHEEL_COMPETENCIES.map((competency, index) => {
          const a = polar(segmentStart(index), R_SUB)
          const b = polar(segmentStart(index), R_DOMAIN)
          return <line key={competency.id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-white" strokeWidth={2} />
        })}
        <circle cx={C} cy={C} r={R_SUB} fill="none" className="stroke-slate-200" strokeWidth={1} />
      </g>

      <InfoCard
        side="top"
        eyebrow="Rdzeń"
        title={CORE_COMPETENCY.name}
        description={CORE_COMPETENCY.description}
        href={CORE_COMPETENCY.href}
        rating={ratings[CORE_COMPETENCY.id]}
        links={CORE_COMPETENCY.subCompetencies}
      >
        <a
          href={CORE_COMPETENCY.href}
          aria-current={activeId === CORE_COMPETENCY.id ? 'true' : undefined}
          aria-label={`${CORE_COMPETENCY.name}, ocena ${ratings[CORE_COMPETENCY.id]} z 5`}
          onClick={(event) => select(event, CORE_COMPETENCY.id)}
          className="group cursor-pointer outline-none"
        >
          <circle
            cx={C}
            cy={C}
            r={R_CORE - 6}
            className={cn(
              'stroke-white transition-colors group-focus-visible:fill-indigo-800',
              activeId === CORE_COMPETENCY.id ? 'fill-indigo-700' : 'fill-indigo-600 group-hover:fill-indigo-700',
            )}
            strokeWidth={4}
          />
          <Multiline lines={['Self', 'Mastery']} x={C} y={C - 6} lineHeight={16} className="fill-white text-[14px] font-semibold" />
          <g aria-hidden="true" className="pointer-events-none">
            {Array.from({ length: MAX_SCORE }, (_, i) => (
              <rect
                key={i}
                x={C - 22 + i * 9.5}
                y={C + 18}
                width={6}
                height={6}
                className={cn(
                  'transition-colors duration-300',
                  i < ratings[CORE_COMPETENCY.id] ? 'fill-white' : 'fill-indigo-400',
                )}
              />
            ))}
          </g>
        </a>
      </InfoCard>
    </svg>
  )
}

type InfoCardProps = {
  side: Side
  eyebrow: string
  title: string
  description: string
  href: string
  rating?: Rating
  links?: { name: string; href: string }[]
  children: ReactElement
}

function InfoCard({ side, eyebrow, title, description, href, rating, links, children }: InfoCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger delay={120} closeDelay={120} render={children} />
      <HoverCardContent
        side={side}
        sideOffset={8}
        className="flex w-80 flex-col gap-0 rounded-none bg-slate-950 p-0 text-slate-100 shadow-xl ring-0"
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{eyebrow}</p>
            {rating !== undefined && <span className="font-mono text-xs text-indigo-300">{rating}/5</span>}
          </div>
          <p className="text-base font-semibold leading-tight text-white">{title}</p>
          <p className="text-[13px] leading-relaxed text-slate-300">{description}</p>
        </div>

        {links && links.length > 0 && (
          <ul className="flex flex-col border-t border-slate-800" aria-label={`Tematy: ${title}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={preventIfDisabled}
                  className="flex items-center justify-between gap-3 px-4 py-2 text-[13px] text-slate-200 transition-colors hover:bg-slate-900 hover:text-white focus-visible:bg-slate-900 focus-visible:outline-none"
                >
                  {link.name}
                  <ArrowUpRight className="size-3.5 text-slate-500" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <a
          href={href}
          onClick={preventIfDisabled}
          className="flex items-center justify-between gap-3 border-t border-slate-800 bg-indigo-600 px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:bg-indigo-500 focus-visible:outline-none"
        >
          Przejdź do podstrony
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </HoverCardContent>
    </HoverCard>
  )
}

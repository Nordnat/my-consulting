'use client'

import { useId, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from 'react'
import {
  CORE_COMPETENCY,
  WHEEL_COMPETENCIES,
  type CompetencyId,
  type Rating,
} from '@/lib/growth-wheel-data'
import { useAnimatedValues } from '@/hooks/use-animated-values'
import { cn } from '@/lib/utils'

const SIZE = 500
const CENTER = SIZE / 2
const CORE_RADIUS = 54
const GRID_RADIUS = 182
const RING_INNER = 186
const RING_OUTER = 238
const LABEL_RADIUS = (RING_INNER + RING_OUTER) / 2
const MAX_SCORE = 5
const LEVELS = [1, 2, 3, 4, 5]
const SEGMENT_COUNT = WHEEL_COMPETENCIES.length
const SEGMENT_ANGLE = (Math.PI * 2) / SEGMENT_COUNT

const DIAL_RADIUS = 45
const DIAL_START = -135
const DIAL_SWEEP = 270
const DIAL_STEP = DIAL_SWEEP / MAX_SCORE
const DIAL_GAP = 3

const segmentStart = (index: number) => -Math.PI / 2 + index * SEGMENT_ANGLE
const segmentCenter = (index: number) => segmentStart(index) + SEGMENT_ANGLE / 2
const levelRadius = (score: number) => CORE_RADIUS + (score / MAX_SCORE) * (GRID_RADIUS - CORE_RADIUS)

function polar(angle: number, radius: number) {
  return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) }
}

function clockPolar(clockDeg: number, radius: number) {
  return polar(((clockDeg - 90) * Math.PI) / 180, radius)
}

function fmt(value: number) {
  return value.toFixed(2)
}

function toRating(value: number): Rating {
  return Math.min(MAX_SCORE, Math.max(1, Math.round(value))) as Rating
}

function annularSector(index: number, inner: number, outer: number) {
  const a0 = segmentStart(index)
  const a1 = a0 + SEGMENT_ANGLE
  const o0 = polar(a0, outer)
  const o1 = polar(a1, outer)
  const i1 = polar(a1, inner)
  const i0 = polar(a0, inner)
  return [
    `M ${fmt(o0.x)} ${fmt(o0.y)}`,
    `A ${outer} ${outer} 0 0 1 ${fmt(o1.x)} ${fmt(o1.y)}`,
    `L ${fmt(i1.x)} ${fmt(i1.y)}`,
    `A ${inner} ${inner} 0 0 0 ${fmt(i0.x)} ${fmt(i0.y)}`,
    'Z',
  ].join(' ')
}

function clockArc(fromDeg: number, toDeg: number, radius: number) {
  const start = clockPolar(fromDeg, radius)
  const end = clockPolar(toDeg, radius)
  const largeArc = toDeg - fromDeg > 180 ? 1 : 0
  return `M ${fmt(start.x)} ${fmt(start.y)} A ${radius} ${radius} 0 ${largeArc} 1 ${fmt(end.x)} ${fmt(end.y)}`
}

function isBottomHalf(index: number) {
  return Math.sin(segmentCenter(index)) > 0
}

function labelArc(index: number) {
  const padding = 0.04
  const a0 = segmentStart(index) + padding
  const a1 = segmentStart(index) + SEGMENT_ANGLE - padding
  const start = polar(a0, LABEL_RADIUS)
  const end = polar(a1, LABEL_RADIUS)
  if (isBottomHalf(index)) {
    return `M ${fmt(end.x)} ${fmt(end.y)} A ${LABEL_RADIUS} ${LABEL_RADIUS} 0 0 0 ${fmt(start.x)} ${fmt(start.y)}`
  }
  return `M ${fmt(start.x)} ${fmt(start.y)} A ${LABEL_RADIUS} ${LABEL_RADIUS} 0 0 1 ${fmt(end.x)} ${fmt(end.y)}`
}

function polygonPoints(values: number[]) {
  return values
    .map((value, index) => {
      const { x, y } = polar(segmentCenter(index), levelRadius(value))
      return `${fmt(x)},${fmt(y)}`
    })
    .join(' ')
}

function keyToRating(key: string, current: Rating): Rating | null {
  switch (key) {
    case 'ArrowUp':
    case 'ArrowRight':
      return toRating(current + 1)
    case 'ArrowDown':
    case 'ArrowLeft':
      return toRating(current - 1)
    case 'Home':
      return 1
    case 'End':
      return 5
    default:
      return null
  }
}

type RadarChartProps = {
  ratings: Record<CompetencyId, Rating>
  activeId: CompetencyId
  onSelect: (id: CompetencyId) => void
  onRatingChange: (id: CompetencyId, rating: Rating) => void
}

export function RadarChart({ ratings, activeId, onSelect, onRatingChange }: RadarChartProps) {
  const uid = useId()
  const svgRef = useRef<SVGSVGElement>(null)
  const [draggingId, setDraggingState] = useState<CompetencyId | null>(null)
  const draggingRef = useRef<CompetencyId | null>(null)
  const setDraggingId = (id: CompetencyId | null) => {
    draggingRef.current = id
    setDraggingState(id)
  }
  const animated = useAnimatedValues(WHEEL_COMPETENCIES.map((competency) => ratings[competency.id]))

  const coreId = CORE_COMPETENCY.id
  const coreActive = activeId === coreId
  const coreRating = ratings[coreId]

  function toSvgPoint(event: PointerEvent) {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return null
    const scale = SIZE / rect.width
    return {
      dx: (event.clientX - rect.left) * scale - CENTER,
      dy: (event.clientY - rect.top) * scale - CENTER,
    }
  }

  function commit(id: CompetencyId, rating: Rating) {
    if (ratings[id] !== rating) onRatingChange(id, rating)
  }

  function ratingFromAxis(event: PointerEvent, index: number) {
    const point = toSvgPoint(event)
    if (!point) return null
    const angle = segmentCenter(index)
    const projected = point.dx * Math.cos(angle) + point.dy * Math.sin(angle)
    return toRating(((projected - CORE_RADIUS) / (GRID_RADIUS - CORE_RADIUS)) * MAX_SCORE)
  }

  function ratingFromDial(event: PointerEvent) {
    const point = toSvgPoint(event)
    if (!point) return null
    let clock = (Math.atan2(point.dy, point.dx) * 180) / Math.PI + 90
    if (clock > 180) clock -= 360
    if (clock < DIAL_START) return 1
    if (clock > DIAL_START + DIAL_SWEEP) return 5
    return toRating(Math.floor((clock - DIAL_START) / DIAL_STEP) + 1)
  }

  function startDrag(event: PointerEvent<SVGElement>, id: CompetencyId) {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setDraggingId(id)
    onSelect(id)
  }

  function endDrag(event: PointerEvent<SVGElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setDraggingId(null)
  }

  function handleKey(event: KeyboardEvent, id: CompetencyId) {
    const next = keyToRating(event.key, ratings[id])
    if (next === null) return
    event.preventDefault()
    onSelect(id)
    commit(id, next)
  }

  function handleNavigate(event: MouseEvent, id: CompetencyId) {
    event.preventDefault()
    onSelect(id)
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={cn('mx-auto h-auto w-full max-w-[560px] select-none', draggingId && 'cursor-grabbing')}
      role="group"
      aria-label="Agile Coaching Growth Wheel: 8 kompetencji wokół rdzenia Self-Mastery. Przeciągnij punkty, aby ustawić ocenę."
    >
      <defs>
        {WHEEL_COMPETENCIES.map((competency, index) => (
          <path key={competency.id} id={`${uid}-arc-${competency.id}`} d={labelArc(index)} fill="none" />
        ))}
      </defs>

      <circle cx={CENTER} cy={CENTER} r={RING_OUTER} className="fill-white stroke-slate-300" strokeWidth={1} />

      {WHEEL_COMPETENCIES.map((competency, index) => (
        <path
          key={competency.id}
          d={annularSector(index, RING_INNER, RING_OUTER)}
          className={cn('transition-colors', competency.id === activeId ? 'fill-indigo-600' : 'fill-slate-100')}
          aria-hidden="true"
        />
      ))}

      <g aria-hidden="true">
        {LEVELS.map((level) => (
          <circle
            key={level}
            cx={CENTER}
            cy={CENTER}
            r={levelRadius(level)}
            fill="none"
            className={level === MAX_SCORE ? 'stroke-slate-400' : 'stroke-slate-300'}
            strokeWidth={1}
            strokeDasharray="3 4"
          />
        ))}

        {WHEEL_COMPETENCIES.map((competency, index) => {
          const inner = polar(segmentStart(index), CORE_RADIUS)
          const outer = polar(segmentStart(index), RING_OUTER)
          return (
            <line
              key={competency.id}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              className="stroke-slate-300"
              strokeWidth={1}
            />
          )
        })}

        {WHEEL_COMPETENCIES.map((competency, index) => {
          const inner = polar(segmentCenter(index), levelRadius(1))
          const outer = polar(segmentCenter(index), levelRadius(MAX_SCORE))
          return (
            <line
              key={competency.id}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              className={competency.id === activeId ? 'stroke-indigo-300' : 'stroke-slate-200'}
              strokeWidth={competency.id === activeId ? 2 : 1}
            />
          )
        })}

        {LEVELS.map((level) => (
          <text
            key={level}
            x={CENTER + 4}
            y={CENTER - levelRadius(level) - 3}
            className="fill-slate-400 font-mono text-[9px]"
          >
            {level}
          </text>
        ))}
      </g>

      <polygon
        points={polygonPoints(animated)}
        className="pointer-events-none fill-indigo-500/25 stroke-indigo-600"
        strokeWidth={2}
        strokeLinejoin="miter"
      />

      {WHEEL_COMPETENCIES.map((competency, index) => {
        const isActive = competency.id === activeId
        return (
          <a
            key={competency.id}
            href={competency.href}
            aria-label={`Wybierz ${competency.name}`}
            aria-current={isActive ? 'true' : undefined}
            tabIndex={-1}
            onClick={(event) => handleNavigate(event, competency.id)}
            className="group cursor-pointer outline-none"
          >
            <path
              d={annularSector(index, CORE_RADIUS, RING_OUTER)}
              className="fill-transparent transition-colors group-hover:fill-slate-900/[0.04]"
            />
            <text
              dominantBaseline="middle"
              className={cn(
                'pointer-events-none text-[11.5px] font-semibold tracking-wide transition-colors',
                isActive ? 'fill-white' : 'fill-slate-700 group-hover:fill-slate-950',
              )}
            >
              <textPath href={`#${uid}-arc-${competency.id}`} startOffset="50%" textAnchor="middle">
                {competency.name}
              </textPath>
            </text>
          </a>
        )
      })}

      {WHEEL_COMPETENCIES.map((competency, index) => {
        const value = animated[index]
        const rating = ratings[competency.id]
        const { x, y } = polar(segmentCenter(index), levelRadius(value))
        const isActive = competency.id === activeId
        const isDragging = draggingId === competency.id
        const half = isDragging ? 6 : isActive ? 5 : 3.5
        return (
          <g
            key={competency.id}
            role="slider"
            tabIndex={0}
            aria-label={`${competency.name}: ocena`}
            aria-valuemin={1}
            aria-valuemax={MAX_SCORE}
            aria-valuenow={rating}
            aria-valuetext={`Poziom ${rating} z ${MAX_SCORE}`}
            className={cn('group touch-none outline-none', isDragging ? 'cursor-grabbing' : 'cursor-grab')}
            onFocus={() => onSelect(competency.id)}
            onKeyDown={(event) => handleKey(event, competency.id)}
            onPointerDown={(event) => startDrag(event, competency.id)}
            onPointerMove={(event) => {
              if (draggingRef.current !== competency.id) return
              const next = ratingFromAxis(event, index)
              if (next) commit(competency.id, next)
            }}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <circle cx={x} cy={y} r={16} className="fill-transparent" />
            <rect
              x={x - half - 3}
              y={y - half - 3}
              width={(half + 3) * 2}
              height={(half + 3) * 2}
              className="fill-none stroke-transparent group-focus-visible:stroke-indigo-600"
              strokeWidth={1.5}
            />
            <rect
              x={x - half}
              y={y - half}
              width={half * 2}
              height={half * 2}
              className={cn(
                'transition-colors',
                isActive ? 'fill-indigo-600 stroke-white' : 'fill-white stroke-indigo-600 group-hover:fill-indigo-100',
              )}
              strokeWidth={1.5}
            />
            {isDragging && (
              <g className="pointer-events-none">
                <rect x={x + 10} y={y - 22} width={20} height={16} className="fill-slate-900" />
                <text
                  x={x + 20}
                  y={y - 14}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-white font-mono text-[10px] font-semibold"
                >
                  {rating}
                </text>
              </g>
            )}
          </g>
        )
      })}

      <a
        href={CORE_COMPETENCY.href}
        aria-label={`Wybierz ${CORE_COMPETENCY.name}`}
        aria-current={coreActive ? 'true' : undefined}
        tabIndex={-1}
        onClick={(event) => handleNavigate(event, coreId)}
        className="group cursor-pointer outline-none"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={CORE_RADIUS}
          className={cn(
            'transition-colors',
            coreActive ? 'fill-indigo-600' : 'fill-slate-900 group-hover:fill-slate-800',
          )}
        />
        <text
          x={CENTER}
          textAnchor="middle"
          className="pointer-events-none fill-white text-[10px] font-semibold tracking-wide"
        >
          <tspan x={CENTER} y={CENTER - 5}>
            Self-
          </tspan>
          <tspan x={CENTER} y={CENTER + 8}>
            Mastery
          </tspan>
        </text>
        <text
          x={CENTER}
          y={CENTER + 40}
          textAnchor="middle"
          dominantBaseline="central"
          className="pointer-events-none fill-white font-mono text-[10px] font-semibold"
        >
          {coreRating}
        </text>
      </a>

      <g
        role="slider"
        tabIndex={0}
        aria-label={`${CORE_COMPETENCY.name}: ocena`}
        aria-valuemin={1}
        aria-valuemax={MAX_SCORE}
        aria-valuenow={coreRating}
        aria-valuetext={`Poziom ${coreRating} z ${MAX_SCORE}`}
        className={cn('group touch-none outline-none', draggingId === coreId ? 'cursor-grabbing' : 'cursor-grab')}
        onFocus={() => onSelect(coreId)}
        onKeyDown={(event) => handleKey(event, coreId)}
        onPointerDown={(event) => {
          startDrag(event, coreId)
          const next = ratingFromDial(event)
          if (next) commit(coreId, next)
        }}
        onPointerMove={(event) => {
          if (draggingRef.current !== coreId) return
          const next = ratingFromDial(event)
          if (next) commit(coreId, next)
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <path
          d={clockArc(DIAL_START, DIAL_START + DIAL_SWEEP, DIAL_RADIUS)}
          fill="none"
          stroke="transparent"
          strokeWidth={16}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={CORE_RADIUS + 3}
          fill="none"
          className="stroke-transparent group-focus-visible:stroke-indigo-600"
          strokeWidth={2}
        />
        {LEVELS.map((level) => {
          const from = DIAL_START + (level - 1) * DIAL_STEP + DIAL_GAP / 2
          const to = DIAL_START + level * DIAL_STEP - DIAL_GAP / 2
          const filled = level <= coreRating
          return (
            <path
              key={level}
              d={clockArc(from, to, DIAL_RADIUS)}
              fill="none"
              strokeWidth={6}
              className={cn(
                'pointer-events-none transition-colors duration-200',
                filled
                  ? coreActive
                    ? 'stroke-white'
                    : 'stroke-indigo-400'
                  : coreActive
                    ? 'stroke-indigo-400'
                    : 'stroke-slate-700',
              )}
            />
          )
        })}
        {(() => {
          const knob = clockPolar(DIAL_START + coreRating * DIAL_STEP - DIAL_GAP / 2, DIAL_RADIUS)
          const half = draggingId === coreId ? 5.5 : 4.5
          return (
            <rect
              x={knob.x - half}
              y={knob.y - half}
              width={half * 2}
              height={half * 2}
              className="pointer-events-none fill-white stroke-indigo-600 transition-all duration-200"
              strokeWidth={1.5}
            />
          )
        })()}
      </g>
    </svg>
  )
}

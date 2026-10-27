import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { LEVEL_NAMES, type Competency, type Rating } from '@/lib/growth-wheel-data'
import { LEVEL_NAMES_EN } from '@/lib/growth-wheel-data-en'
import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'
import { RecommendedResources } from './recommended-resources'

type CompetencyPanelProps = {
  competency: Competency
  index: number
  total: number
  rating: Rating
  onRatingChange: (rating: Rating) => void
}

const STEPS: Rating[] = [1, 2, 3, 4, 5]

export function CompetencyPanel({ competency, index, total, rating, onRatingChange }: CompetencyPanelProps) {
  const { language, t } = useLanguage()
  const isEn = language === 'en'
  const levelNames = isEn ? LEVEL_NAMES_EN : LEVEL_NAMES

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {t.growthWheel.areaNumber} {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <Link
            href={competency.href}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            {t.growthWheel.fullGuideLink}
          </Link>
        </div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950">
          <Link href={competency.href} className="hover:text-indigo-600 transition-colors">
            {competency.name}
          </Link>
        </h2>
        <ul className="flex flex-wrap gap-2" aria-label="Sub-competencies">
          {competency.subCompetencies.map((sub) => (
            <li key={sub.href}>
              <Link href={sub.href}>
                <Badge
                  variant="outline"
                  className="h-7 border-slate-300 px-2.5 font-normal text-slate-700 hover:border-indigo-400 hover:bg-indigo-50/50 hover:text-indigo-700 transition-colors cursor-pointer"
                >
                  {sub.name}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <section aria-labelledby="rating-heading" className="flex flex-col gap-5 border border-slate-200 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 id="rating-heading" className="text-sm font-medium text-slate-950">
            {t.growthWheel.ratingLevel}
          </h3>
          <p className="font-mono text-sm text-slate-500">
            <span className="text-2xl font-semibold text-indigo-600">{rating}</span> / 5
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Slider
            aria-label={`Rating for ${competency.name}`}
            min={1}
            max={5}
            step={1}
            value={[rating]}
            onValueChange={(value) => {
              const next = Array.isArray(value) ? value[0] : value
              onRatingChange(next as Rating)
            }}
          />
          <div className="grid grid-cols-5 text-[11px] text-slate-500" aria-hidden="true">
            {STEPS.map((step) => (
              <span
                key={step}
                className={cn(
                  step === 1 ? 'text-left' : step === 5 ? 'text-right' : 'text-center',
                  step === rating && 'font-medium text-indigo-600',
                )}
              >
                {step}. {levelNames[step]}
              </span>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-indigo-600 bg-slate-50 px-4 py-3" aria-live="polite">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {t.growthWheel.level} {rating}: {levelNames[rating]}
          </p>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-slate-800">
            {competency.levels[rating - 1]}
          </p>
        </div>
      </section>

      <RecommendedResources resources={competency.resources} />
    </div>
  )
}

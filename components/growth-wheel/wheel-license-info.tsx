'use client'

import { Info, ExternalLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const ACGW_LICENSE_TEXT =
  'Agile Coaching Growth Wheel concept by Shannon Carter; Rickard Jones; Martin Lambert; Stacey Louie; Tom Reynolds; Rohit Ratan; Andre Rubin; Kubair Shirazee; and Mark Summers is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.'

export const ACGW_LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/'

type WheelLicenseInfoProps = {
  className?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

export function WheelLicenseInfo({
  className = '',
  side = 'top',
  align = 'end',
}: WheelLicenseInfoProps) {
  return (
    <TooltipProvider delay={100}>
      <Tooltip>
        <TooltipTrigger
          type="button"
          aria-label="Informacja o licencji Agile Coaching Growth Wheel"
          className={`inline-flex items-center justify-center rounded-full text-slate-400 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-600 transition-colors cursor-pointer ${className}`}
        >
          <Info className="size-3.5" aria-hidden="true" />
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={6}
          className="max-w-xs sm:max-w-sm rounded-lg border border-slate-700 bg-slate-900 p-3.5 text-xs text-slate-200 shadow-xl leading-relaxed"
        >
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white tracking-wide text-[11px] uppercase">
              Licencja / Attribution
            </p>
            <p className="text-[11px] leading-relaxed text-slate-300">
              {ACGW_LICENSE_TEXT}
            </p>
            <a
              href={ACGW_LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 underline underline-offset-2 w-fit pt-0.5"
            >
              CC BY-SA 4.0
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

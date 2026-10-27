import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Resource } from '@/lib/growth-wheel-data'

export function RecommendedResources({ resources }: { resources: Resource[] }) {
  return (
    <section aria-labelledby="resources-heading" className="flex flex-col gap-4">
      <h3 id="resources-heading" className="text-sm font-medium text-slate-950">
        Rekomendowane Materiały
      </h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {resources.map((resource) => (
          <li key={resource.href}>
            <Link
              href={resource.href}
              className="group flex h-full flex-col justify-between gap-6 border border-slate-200 p-4 transition-colors hover:border-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  {resource.type}
                </span>
                <ArrowUpRight
                  className="size-4 text-slate-400 transition-colors group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-pretty text-sm font-medium leading-snug text-slate-950">
                  {resource.title}
                </span>
                <span className="truncate font-mono text-[11px] text-slate-400">{resource.href}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

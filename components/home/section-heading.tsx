type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  inverted?: boolean
}

export function SectionHeading({ id, eyebrow, title, inverted = false }: SectionHeadingProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      <p
        className={`font-mono text-[11px] uppercase tracking-widest ${inverted ? 'text-indigo-300' : 'text-indigo-600'}`}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

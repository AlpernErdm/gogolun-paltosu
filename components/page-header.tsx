export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="paper-texture frame-border rounded-lg bg-parchment px-6 py-10 text-center text-parchment-foreground md:px-10 md:py-14">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h1 className="mx-auto mt-3 max-w-3xl text-balance font-display text-3xl font-bold uppercase tracking-wide md:text-5xl">
        {title}
      </h1>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-parchment-foreground/85 md:text-base">
        {description}
      </p>
    </header>
  )
}

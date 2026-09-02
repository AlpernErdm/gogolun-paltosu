import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { genres } from "@/lib/genres"

export const metadata: Metadata = {
  title: "Türler | Gogol’un Paltosu",
  description: "Hiciv, psikolojik roman, varoluşçu edebiyat ve daha fazlası.",
}

export default function TurlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Edebi Türler"
        title="Türler"
        description="Her tür, insanı anlamanın farklı bir yolu. Gogol’un ustalıkla harmanladığı hicivden psikolojik derinliğe, edebiyatın zengin damarlarını keşfedin."
      />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className="grid gap-6 sm:grid-cols-2">
          {genres.map((genre) => (
            <li
              key={genre.title}
              className="flex flex-col rounded-md bg-popover/50 p-5 ring-1 ring-parchment-foreground/20"
            >
              <h2 className="font-display text-xl font-semibold text-parchment-foreground">{genre.title}</h2>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-primary" aria-hidden="true" />
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-parchment-foreground/85">
                {genre.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-wide text-primary">
                Örnekler:{" "}
                <span className="italic normal-case text-parchment-foreground/70">{genre.examples}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

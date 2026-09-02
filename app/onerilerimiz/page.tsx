import type { Metadata } from "next"
import Link from "next/link"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { getBook } from "@/lib/books"

export const metadata: Metadata = {
  title: "Önerilerimiz | Gogol’un Paltosu",
  description: "Palto ile aynı ruhu taşıyan, özenle seçilmiş okuma önerileri.",
}

const weeklySlug = "paltosu"
const similarSlugs = ["dostoyevski", "kafka", "puskin"]

export default function OnerilerimizPage() {
  const weekly = getBook(weeklySlug)
  const similar = similarSlugs.map(getBook).filter((b): b is NonNullable<typeof b> => Boolean(b))

  return (
    <>
      <PageHeader
        eyebrow="Editörün Seçkisi"
        title="Önerilerimiz"
        description="Palto’yu sevdiyseniz, aynı grotesk mizahı, toplumsal eleştiriyi ve derin insan gözlemini taşıyan bu eserler tam size göre."
      />

      {weekly ? (
        <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Haftanın Önerisi</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-parchment-foreground md:text-3xl">{weekly.title}</h2>
              <p className="text-sm italic text-parchment-foreground/70">
                {weekly.author} · {weekly.year}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-parchment-foreground/85">
                {weekly.description}
              </p>
              <Link
                href={`/kitap/${weekly.slug}`}
                className="mt-5 inline-block rounded-full bg-popover px-6 py-2 font-display text-sm text-accent shadow-md transition-transform hover:-translate-y-0.5"
              >
                Detayları Gör
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">Benzer Ruhtaki Eserler</h2>
        <div className="mt-2 h-0.5 w-16 rounded-full bg-primary" aria-hidden="true" />
        <ul className={`mt-6 ${cardGridClass}`}>
          {similar.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </ul>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { getBook } from "@/lib/books"

export const metadata: Metadata = {
  title: "Dünya Edebiyatı | Gogol’un Paltosu",
  description: "Farklı coğrafyalardan, çağları aşan edebi başyapıtlar.",
}

const sections = [
  { title: "Rus Edebiyatı", slugs: ["paltosu", "dostoyevski", "puskin", "olu-canlar", "suc-ve-ceza"] },
  { title: "Alman Edebiyatı", slugs: ["kafka"] },
]

export default function DunyaEdebiyatiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sınırların Ötesinde"
        title="Dünya Edebiyatı"
        description="Rusya’dan Orta Avrupa’ya uzanan, insanlığın ortak duygularını farklı dillerde anlatan eserler. Yabancılaşmadan umuda, edebiyatın evrensel dili."
      />
      {sections.map((section) => {
        const items = section.slugs.map(getBook).filter((b): b is NonNullable<typeof b> => Boolean(b))
        return (
          <section
            key={section.title}
            className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10"
          >
            <h2 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">{section.title}</h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-primary" aria-hidden="true" />
            <ul className={`mt-6 ${cardGridClass}`}>
              {items.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </ul>
          </section>
        )
      })}
    </>
  )
}

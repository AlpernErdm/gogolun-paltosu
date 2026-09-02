import type { Metadata } from "next"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { getBook } from "@/lib/books"

export const metadata: Metadata = {
  title: "Klasikler | Gogol’un Paltosu",
  description: "Rus ve dünya edebiyatının ölümsüz klasiklerini keşfedin.",
}

const slugs = ["paltosu", "dostoyevski", "puskin", "olu-canlar", "suc-ve-ceza"]

export default function KlasiklerPage() {
  const items = slugs.map(getBook).filter((b): b is NonNullable<typeof b> => Boolean(b))

  return (
    <>
      <PageHeader
        eyebrow="Ölümsüz Eserler"
        title="Klasikler"
        description="Zamana meydan okuyan, insan doğasının en derin katmanlarına inen Rus edebiyatının başyapıtları. Her biri, edebiyat tarihine yön veren birer dönüm noktası."
      />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className={cardGridClass}>
          {items.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </ul>
      </section>
    </>
  )
}

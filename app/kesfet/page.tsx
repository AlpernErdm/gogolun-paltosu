import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { getBook } from "@/lib/books"

export const metadata: Metadata = {
  title: "Keşfet | Gogol’un Paltosu",
  description: "Gogol’un Paltosu ile aynı ruhu taşıyan başyapıtları yakından inceleyin.",
}

const slugs = ["dostoyevski", "kafka", "puskin", "olu-canlar", "suc-ve-ceza"]

export default function KesfetPage() {
  const items = slugs.map(getBook).filter((b): b is NonNullable<typeof b> => Boolean(b))

  return (
    <>
      <PageHeader
        eyebrow="Derinlemesine"
        title="Keşfet"
        description="Palto’nun izinden giden, insan ruhunu ve toplumu masaya yatıran eserleri satır satır inceleyin."
      />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className="space-y-6">
          {items.map((book) => (
            <li
              key={book.slug}
              className="flex flex-col gap-4 border-t border-parchment-foreground/20 pt-6 first:border-t-0 first:pt-0 sm:flex-row"
            >
              <div className="relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-sm shadow-lg ring-1 ring-parchment-foreground/30">
                <Image src={book.cover} alt={book.coverAlt} fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-parchment-foreground">{book.author}</h2>
                <p className="text-sm italic text-parchment-foreground/75">
                  {book.title} · {book.year}
                </p>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-parchment-foreground/85">
                  {book.description}
                </p>
                <Link
                  href={`/kitap/${book.slug}`}
                  className="mt-3 inline-block font-display text-sm text-primary underline-offset-4 hover:underline"
                >
                  Detayları Gör →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

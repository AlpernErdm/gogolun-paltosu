import Image from "next/image"
import Link from "next/link"
import type { BookSummary } from "@/sanity/lib/types"
import { urlFor } from "@/sanity/lib/image"

/**
 * Kart izgarasi: sabit sutunlar yerine esnek satir kullaniyoruz; boylece
 * eksik kalan son satir sola yaslanmak yerine ortalaniyor. Genislikler
 * uc sutunlu izgarayla ayni olcude.
 */
export const cardGridClass = "flex flex-wrap justify-center gap-6"
export const cardWidthClass = "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"

export function BookCard({ book }: { book: BookSummary }) {
  return (
    <li
      className={`${cardWidthClass} flex flex-col overflow-hidden rounded-md bg-popover/50 ring-1 ring-parchment-foreground/20 transition-transform hover:-translate-y-1`}
    >
      <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden bg-secondary">
        <Image
          src={urlFor(book.cover).width(600).url()}
          alt={book.cover.alt || `${book.author} - ${book.title} kitap kapağı`}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-primary">
          <span>{book.genre}</span>
          <span aria-hidden="true">•</span>
          <span>{book.year}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-parchment-foreground">
          {book.title}
        </h3>
        <p className="text-sm italic text-parchment-foreground/70">{book.author}</p>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-parchment-foreground/85">{book.description}</p>
        <Link
          href={`/kitap/${book.slug}`}
          className="mt-4 self-start rounded-full border border-parchment-foreground/40 px-4 py-1.5 font-display text-xs text-parchment-foreground transition-colors hover:bg-parchment-foreground hover:text-parchment"
        >
          Detayları Gör
        </Link>
      </div>
    </li>
  )
}

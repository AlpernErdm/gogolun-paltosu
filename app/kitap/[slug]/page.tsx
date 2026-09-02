import { PortableText } from "@portabletext/react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { bookBySlugQuery, bookSlugsQuery } from "@/sanity/lib/queries"
import type { BookDetail } from "@/sanity/lib/types"

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(bookSlugsQuery)
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const book = await client.fetch<BookDetail | null>(bookBySlugQuery, { slug })
  if (!book) return {}
  return {
    title: `${book.title} — ${book.author} | Gogol’un Paltosu`,
    description: book.description,
  }
}

export default async function BookPage({ params }: Params) {
  const { slug } = await params
  const book = await client.fetch<BookDetail | null>(bookBySlugQuery, { slug })
  if (!book) notFound()

  return (
    <>
      <article className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <Link href="/kesfet" className="font-display text-sm text-primary underline-offset-4 hover:underline">
          ← Keşfet&#39;e dön
        </Link>

        <div className="mt-6 flex flex-col gap-8 md:flex-row">
          <div className="mx-auto w-48 shrink-0 md:mx-0">
            <div className="relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-sm bg-secondary shadow-xl ring-1 ring-parchment-foreground/30">
              <Image
                src={urlFor(book.cover).width(400).url()}
                alt={book.cover.alt || `${book.author} - ${book.title} kitap kapağı`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-primary">
              <span>{book.genre}</span>
              <span aria-hidden="true">•</span>
              <span>{book.literature}</span>
              <span aria-hidden="true">•</span>
              <span>{book.year}</span>
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">{book.title}</h1>
            <p className="mt-1 font-serif text-lg italic text-parchment-foreground/75">{book.author}</p>

            {book.quote ? (
              <blockquote className="mt-5 border-l-2 border-primary pl-4 font-serif text-lg italic text-parchment-foreground/90">
                “{book.quote}”
              </blockquote>
            ) : null}

            {book.body ? (
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-parchment-foreground/85">
                <PortableText value={book.body} />
              </div>
            ) : null}
          </div>
        </div>
      </article>

      {book.related?.length ? (
        <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">Bunları da İnceleyin</h2>
          <div className="mt-2 h-0.5 w-16 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {book.related.map((item) => (
              <li key={item._id}>
                <Link
                  href={`/kitap/${item.slug}`}
                  className="flex h-full flex-col rounded-md bg-popover/50 p-4 ring-1 ring-parchment-foreground/20 transition-transform hover:-translate-y-1"
                >
                  <span className="font-display text-base font-semibold text-parchment-foreground">
                    {item.title}
                  </span>
                  <span className="text-sm italic text-parchment-foreground/70">{item.author}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  )
}

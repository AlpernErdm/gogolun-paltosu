import type { Metadata } from "next"
import Link from "next/link"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { client } from "@/sanity/lib/client"
import { pageQuery } from "@/sanity/lib/queries"
import type { PageDoc } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<PageDoc | null>(pageQuery, { slug: "onerilerimiz" })
  if (!data) return {}
  return { title: data.seoTitle, description: data.seoDescription }
}

export default async function OnerilerimizPage() {
  const data = await client.fetch<PageDoc>(pageQuery, { slug: "onerilerimiz" })
  const weekly = data.featuredBook
  const similarSection = data.sections?.[0]

  return (
    <>
      <PageHeader eyebrow={data.eyebrow || ""} title={data.title} description={data.description || ""} />

      {weekly ? (
        <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Haftanın Önerisi</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-parchment-foreground md:text-3xl">
                {weekly.title}
              </h2>
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

      {similarSection ? (
        <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
          {similarSection.title ? (
            <>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
                {similarSection.title}
              </h2>
              <div className="mt-2 h-0.5 w-16 rounded-full bg-primary" aria-hidden="true" />
            </>
          ) : null}
          <ul className={`mt-6 ${cardGridClass}`}>
            {similarSection.books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </ul>
        </section>
      ) : null}
    </>
  )
}

import type { Metadata } from "next"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { client } from "@/sanity/lib/client"
import { pageQuery } from "@/sanity/lib/queries"
import type { PageDoc } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<PageDoc | null>(pageQuery, { slug: "dunya-edebiyati" })
  if (!data) return {}
  return { title: data.seoTitle, description: data.seoDescription }
}

export default async function DunyaEdebiyatiPage() {
  const data = await client.fetch<PageDoc>(pageQuery, { slug: "dunya-edebiyati" })

  return (
    <>
      <PageHeader eyebrow={data.eyebrow || ""} title={data.title} description={data.description || ""} />
      {(data.sections || []).map((section) => (
        <section
          key={section._key}
          className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10"
        >
          {section.title ? (
            <>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-2 h-0.5 w-16 rounded-full bg-primary" aria-hidden="true" />
            </>
          ) : null}
          <ul className={`mt-6 ${cardGridClass}`}>
            {section.books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

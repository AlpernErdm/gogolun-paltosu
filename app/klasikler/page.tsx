import type { Metadata } from "next"
import { BookCard, cardGridClass } from "@/components/book-card"
import { PageHeader } from "@/components/page-header"
import { client } from "@/sanity/lib/client"
import { pageQuery } from "@/sanity/lib/queries"
import type { PageDoc } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<PageDoc | null>(pageQuery, { slug: "klasikler" })
  if (!data) return {}
  return { title: data.seoTitle, description: data.seoDescription }
}

export default async function KlasiklerPage() {
  const data = await client.fetch<PageDoc>(pageQuery, { slug: "klasikler" })
  const items = data.sections?.[0]?.books || []

  return (
    <>
      <PageHeader eyebrow={data.eyebrow || ""} title={data.title} description={data.description || ""} />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className={cardGridClass}>
          {items.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </ul>
      </section>
    </>
  )
}

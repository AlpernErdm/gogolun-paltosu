import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { pageQuery } from "@/sanity/lib/queries"
import type { PageDoc } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<PageDoc | null>(pageQuery, { slug: "kesfet" })
  if (!data) return {}
  return { title: data.seoTitle, description: data.seoDescription }
}

export default async function KesfetPage() {
  const data = await client.fetch<PageDoc>(pageQuery, { slug: "kesfet" })
  const items = data.sections?.[0]?.books || []

  return (
    <>
      <PageHeader eyebrow={data.eyebrow || ""} title={data.title} description={data.description || ""} />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className="space-y-6">
          {items.map((book) => (
            <li
              key={book._id}
              className="flex flex-col gap-4 border-t border-parchment-foreground/20 pt-6 first:border-t-0 first:pt-0 sm:flex-row"
            >
              <div className="relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-sm shadow-lg ring-1 ring-parchment-foreground/30">
                <Image
                  src={urlFor(book.cover).width(200).height(300).fit("max").url()}
                  alt={book.cover.alt || `${book.author} - ${book.title} kitap kapağı`}
                  fill
                  className="object-contain"
                />
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

import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { client } from "@/sanity/lib/client"
import { pageQuery } from "@/sanity/lib/queries"
import type { PageDoc } from "@/sanity/lib/types"

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<PageDoc | null>(pageQuery, { slug: "turler" })
  if (!data) return {}
  return { title: data.seoTitle, description: data.seoDescription }
}

export default async function TurlerPage() {
  const data = await client.fetch<PageDoc>(pageQuery, { slug: "turler" })
  const genres = data.genres || []

  return (
    <>
      <PageHeader eyebrow={data.eyebrow || ""} title={data.title} description={data.description || ""} />
      <section className="paper-texture frame-border rounded-lg bg-parchment p-6 text-parchment-foreground md:p-10">
        <ul className="grid gap-6 sm:grid-cols-2">
          {genres.map((genre) => (
            <li
              key={genre._id}
              className="flex flex-col rounded-md bg-popover/50 p-5 ring-1 ring-parchment-foreground/20"
            >
              <h2 className="font-display text-xl font-semibold text-parchment-foreground">{genre.title}</h2>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-primary" aria-hidden="true" />
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-parchment-foreground/85">
                {genre.description}
              </p>
              {genre.examples ? (
                <p className="mt-4 text-xs uppercase tracking-wide text-primary">
                  Örnekler:{" "}
                  <span className="italic normal-case text-parchment-foreground/70">{genre.examples}</span>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Feather } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { homePageQuery } from "@/sanity/lib/queries"
import type { HomePageDoc } from "@/sanity/lib/types"

export default async function HomePage() {
  const home = await client.fetch<HomePageDoc>(homePageQuery)

  return (
    <>
      <section className="relative overflow-hidden rounded-lg frame-border" aria-label="Gogol'un Paltosu tanıtım">
        <div className="absolute inset-0">
          {home.heroImage ? (
            <Image
              src={urlFor(home.heroImage).width(1600).height(900).url()}
              alt={home.heroImage.alt || ""}
              fill
              priority
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        </div>

        <div className="relative flex min-h-[340px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[440px] md:py-24">
          <h1 className="flex flex-col items-center font-display italic text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="text-5xl leading-[0.9] sm:text-6xl md:text-8xl">{home.heroTitleTop}</span>
            <span className="flex items-end gap-3 text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
              {home.heroTitleBottom}
              <Feather className="mb-2 size-9 -rotate-12 md:mb-4 md:size-16" aria-hidden="true" />
            </span>
          </h1>

          <span
            className="mt-3 block h-2 w-56 rounded-full bg-primary md:w-80"
            style={{ clipPath: "polygon(2% 40%, 98% 10%, 100% 70%, 0% 90%)" }}
            aria-hidden="true"
          />

          {home.heroAuthor ? (
            <p className="mt-4 flex items-center gap-2 font-display text-sm uppercase tracking-[0.3em] text-accent/80">
              <span className="inline-block h-px w-8 bg-accent/50" aria-hidden="true" />
              {home.heroAuthor}
              <span className="inline-block h-px w-8 bg-accent/50" aria-hidden="true" />
            </p>
          ) : null}
        </div>
      </section>

      <section className="paper-texture frame-border rounded-lg bg-parchment text-parchment-foreground">
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-6">
          <div id="neden-okumalisiniz" className="scroll-mt-28">
            <div className="flex items-start gap-3">
              <BookOpen className="mt-1 size-8 shrink-0 text-primary" aria-hidden="true" />
              <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
                {home.whyReadTitle}
              </h2>
            </div>
            {home.whyReadBody ? (
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-parchment-foreground/85">
                <PortableText value={home.whyReadBody} />
              </div>
            ) : null}
          </div>

          <div
            id="benzer-oneriler"
            className="scroll-mt-28 lg:border-x lg:border-parchment-foreground/20 lg:px-6"
          >
            <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
              <span className="block text-center">{home.featuredTitle}</span>
            </h2>
            <ul className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
              {(home.featuredBooks || []).map((item) => {
                const image = item.homeCover || item.cover
                return (
                  <li key={item._id} className="flex flex-col items-center text-center">
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-lg ring-1 ring-parchment-foreground/30">
                      <Image
                        src={urlFor(image).width(300).url()}
                        alt={image.alt || `${item.author} - ${item.title} kitap kapağı`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-3 font-display text-sm font-semibold leading-tight text-parchment-foreground">
                      {item.shortAuthor || item.author}
                    </p>
                    <p className="text-xs italic leading-tight text-parchment-foreground/75">{item.title}</p>
                    <Link
                      href={`/kitap/${item.slug}`}
                      className="mt-2 rounded-full border border-parchment-foreground/40 px-3 py-1 font-display text-xs text-parchment-foreground transition-colors hover:bg-parchment-foreground hover:text-parchment"
                    >
                      Detayları Gör
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div id="gogol-hakkinda" className="flex scroll-mt-28 flex-col">
            <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
              {home.aboutTitle}
            </h2>
            <div className="mt-4 flex gap-4">
              {home.aboutImage ? (
                <div className="relative size-24 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-parchment-foreground/30">
                  <Image
                    src={urlFor(home.aboutImage).width(200).height(200).url()}
                    alt={home.aboutImage.alt || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              {home.aboutBody ? (
                <div className="text-[15px] leading-relaxed text-parchment-foreground/85">
                  <PortableText value={home.aboutBody} />
                </div>
              ) : null}
            </div>
            {home.aboutCtaLabel ? (
              <Link
                href="/kesfet"
                className="mt-5 self-start rounded-full bg-popover px-6 py-2 font-display text-sm text-accent shadow-md transition-transform hover:-translate-y-0.5"
              >
                {home.aboutCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {home.bottomCtaLabel ? (
        <div className="flex justify-center pb-2">
          <Link
            href="/onerilerimiz"
            className="rounded-full border border-border bg-popover px-8 py-2.5 font-display text-base text-accent shadow-md transition-transform hover:-translate-y-0.5"
          >
            {home.bottomCtaLabel}
          </Link>
        </div>
      ) : null}
    </>
  )
}

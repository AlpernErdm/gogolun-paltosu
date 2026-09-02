import Image from "next/image"
import Link from "next/link"
import { BookOpen, Feather } from "lucide-react"

// Ana sayfadaki "Benzer Oneriler" vitrini kendi kapak gorsellerini kullanir.
const featured = [
  {
    slug: "dostoyevski",
    author: "Dostoyevski",
    title: "Yeraltından Notlar",
    image: "/images/book-dostoyevski.png",
    alt: "Dostoyevski - Yeraltından Notlar kitap kapağı",
  },
  {
    slug: "kafka",
    author: "Kafka",
    title: "Dönüşüm",
    image: "/images/book-kafka.png",
    alt: "Kafka - Dönüşüm kitap kapağı",
  },
  {
    slug: "puskin",
    author: "Puşkin",
    title: "Maça Kızı",
    image: "/images/book-puskin.png",
    alt: "Puşkin - Maça Kızı kitap kapağı",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-lg frame-border" aria-label="Gogol'un Paltosu tanıtım">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-scene.png"
            alt="19. yüzyıl Petersburg'unda karlı bir gecede paltolu ve şapkalı bir adamın silüeti"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        </div>

        <div className="relative flex min-h-[340px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[440px] md:py-24">
          <h1 className="flex flex-col items-center font-display italic text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="text-5xl leading-[0.9] sm:text-6xl md:text-8xl">Gogol&#39;un</span>
            <span className="flex items-end gap-3 text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
              Paltosu
              <Feather className="mb-2 size-9 -rotate-12 md:mb-4 md:size-16" aria-hidden="true" />
            </span>
          </h1>

          <span
            className="mt-3 block h-2 w-56 rounded-full bg-primary md:w-80"
            style={{ clipPath: "polygon(2% 40%, 98% 10%, 100% 70%, 0% 90%)" }}
            aria-hidden="true"
          />

          <p className="mt-4 flex items-center gap-2 font-display text-sm uppercase tracking-[0.3em] text-accent/80">
            <span className="inline-block h-px w-8 bg-accent/50" aria-hidden="true" />
            Nikolay Gogol
            <span className="inline-block h-px w-8 bg-accent/50" aria-hidden="true" />
          </p>
        </div>
      </section>

      <section className="paper-texture frame-border rounded-lg bg-parchment text-parchment-foreground">
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-6">
          <div id="neden-okumalisiniz" className="scroll-mt-28">
            <div className="flex items-start gap-3">
              <BookOpen className="mt-1 size-8 shrink-0 text-primary" aria-hidden="true" />
              <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
                Neden Okumalısınız?
              </h2>
            </div>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-parchment-foreground/85">
              <p>
                Gogol&#39;un Paltosu, yalnızca bir kısa öykü değil; sosyal eleştiri, konunun kurgusu ve bürokrasinin
                insan onuru üzerindeki baskısını bir arada barındırır.
              </p>
              <p>
                Gogol&#39;un yalın diliyle küçük memurun trajedisini, bürokrasinin acımasızlığını ve katmanlı insan
                duygularını keşfedersiniz.
              </p>
            </div>
          </div>

          <div
            id="benzer-oneriler"
            className="scroll-mt-28 lg:border-x lg:border-parchment-foreground/20 lg:px-6"
          >
            <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
              <span className="block text-center">Benzer Öneriler</span>
            </h2>
            <ul className="mt-5 grid grid-cols-3 gap-3 sm:gap-5">
              {featured.map((item) => (
                <li key={item.slug} className="flex flex-col items-center text-center">
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-lg ring-1 ring-parchment-foreground/30">
                    <Image src={item.image} alt={item.alt} fill className="object-contain" />
                  </div>
                  <p className="mt-3 font-display text-sm font-semibold leading-tight text-parchment-foreground">
                    {item.author}
                  </p>
                  <p className="text-xs italic leading-tight text-parchment-foreground/75">{item.title}</p>
                  <Link
                    href={`/kitap/${item.slug}`}
                    className="mt-2 rounded-full border border-parchment-foreground/40 px-3 py-1 font-display text-xs text-parchment-foreground transition-colors hover:bg-parchment-foreground hover:text-parchment"
                  >
                    Detayları Gör
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="gogol-hakkinda" className="flex scroll-mt-28 flex-col">
            <h2 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-parchment-foreground md:text-2xl">
              Gogol Hakkında
            </h2>
            <div className="mt-4 flex gap-4">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-parchment-foreground/30">
                <Image
                  src="/images/gogol-portrait.png"
                  alt="Yazar Nikolay Gogol'un portresi"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[15px] leading-relaxed text-parchment-foreground/85">
                1809&#39;da doğan Nikolay Gogol, Rus edebiyatının en özgün ve etkili yazarlarından biridir.
                Gerçekçiliği grotesk ve ironiyle harmanlayan üslubu, modern edebiyata yön verdi.
              </p>
            </div>
            <Link
              href="/kesfet"
              className="mt-5 self-start rounded-full bg-popover px-6 py-2 font-display text-sm text-accent shadow-md transition-transform hover:-translate-y-0.5"
            >
              Hemen Keşfet
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center pb-2">
        <Link
          href="/onerilerimiz"
          className="rounded-full border border-border bg-popover px-8 py-2.5 font-display text-base text-accent shadow-md transition-transform hover:-translate-y-0.5"
        >
          Daha Fazla Öneri
        </Link>
      </div>
    </>
  )
}

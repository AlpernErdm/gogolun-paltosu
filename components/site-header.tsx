import Link from "next/link"
import { Search } from "lucide-react"

const navLinks = [
  { href: "/klasikler", label: "Klasikler" },
  { href: "/dunya-edebiyati", label: "Dünya Edebiyatı" },
  { href: "/onerilerimiz", label: "Önerilerimiz" },
  { href: "/turler", label: "Türler" },
  { href: "/kesfet", label: "Keşfet" },
]

export function SiteHeader() {
  return (
    <header className="px-4 pt-4 md:px-6 md:pt-6">
      <div className="frame-border mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-lg bg-popover px-5 py-3 md:flex-row md:gap-8 md:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <span className="font-display text-xl font-bold uppercase leading-none tracking-wide text-accent md:text-2xl">
            Gogol&#39;un
            <br className="hidden md:block" /> <span className="md:hidden"> </span>Paltosu
          </span>
        </Link>

        <div className="hidden h-10 w-px bg-border md:block" aria-hidden="true" />

        <nav
          aria-label="Ana menü"
          className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start md:gap-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-base text-foreground/90 transition-colors hover:text-accent md:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative w-full max-w-[220px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Ara"
            aria-label="Sitede ara"
            className="w-full rounded-full border border-border bg-background/60 py-2 pl-9 pr-4 font-serif text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
          />
        </div>
      </div>
    </header>
  )
}

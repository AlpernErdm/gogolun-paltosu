import type {PortableTextBlock} from "@portabletext/types"

export type SanityImage = {
  asset: {_ref: string; _type: "reference"}
  alt?: string
}

export type BookSummary = {
  _id: string
  title: string
  slug: string
  author: string
  shortAuthor?: string
  genre?: string
  literature?: string
  year?: string
  description: string
  cover: SanityImage
  homeCover?: SanityImage
}

export type BookDetail = BookSummary & {
  quote?: string
  body: PortableTextBlock[]
  related: BookSummary[]
}

export type GenreItem = {
  _id: string
  title: string
  description: string
  examples?: string
}

export type PageSection = {
  _key: string
  title?: string
  books: BookSummary[]
}

export type PageDoc = {
  slug: string
  eyebrow?: string
  title: string
  description?: string
  seoTitle?: string
  seoDescription?: string
  featuredBook?: BookSummary
  sections?: PageSection[]
  genres?: GenreItem[]
}

export type HomePageDoc = {
  heroTitleTop: string
  heroTitleBottom: string
  heroAuthor?: string
  heroImage?: SanityImage
  whyReadTitle?: string
  whyReadBody?: PortableTextBlock[]
  featuredTitle?: string
  featuredBooks?: BookSummary[]
  aboutTitle?: string
  aboutBody?: PortableTextBlock[]
  aboutImage?: SanityImage
  aboutCtaLabel?: string
  bottomCtaLabel?: string
  seoTitle?: string
  seoDescription?: string
}

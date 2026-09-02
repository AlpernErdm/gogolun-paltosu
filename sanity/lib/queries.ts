/**
 * Kartlarda ve vitrinlerde kullanilan ozet kitap alanlari.
 * "slug" duz string olarak donduruluyor (slug.current yerine).
 */
const bookSummaryProjection = `{
  _id,
  title,
  "slug": slug.current,
  author,
  shortAuthor,
  genre,
  literature,
  year,
  description,
  cover,
  homeCover,
}`

export const homePageQuery = `*[_id == "homePage"][0]{
  heroTitleTop,
  heroTitleBottom,
  heroAuthor,
  heroImage,
  whyReadTitle,
  whyReadBody,
  featuredTitle,
  "featuredBooks": featuredBooks[]->${bookSummaryProjection},
  aboutTitle,
  aboutBody,
  aboutImage,
  aboutCtaLabel,
  bottomCtaLabel,
  seoTitle,
  seoDescription,
}`

export const pageQuery = `*[_type == "page" && slug == $slug][0]{
  slug,
  eyebrow,
  title,
  description,
  seoTitle,
  seoDescription,
  "featuredBook": featuredBook->${bookSummaryProjection},
  sections[]{
    _key,
    title,
    "books": books[]->${bookSummaryProjection},
  },
  "genres": genres[]->{_id, title, description, examples},
}`

export const bookSlugsQuery = `*[_type == "book"]{"slug": slug.current}`

export const bookBySlugQuery = `*[_type == "book" && slug.current == $slug][0]{
  ...${bookSummaryProjection},
  quote,
  body,
  "related": related[]->${bookSummaryProjection},
}`

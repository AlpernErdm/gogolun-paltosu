export type Genre = {
  title: string
  description: string
  examples: string
}

export const genres: Genre[] = [
  {
    title: "Hiciv & Grotesk",
    description: `Toplumsal aksaklıkları abartı ve ironiyle deşifre eden, Gogol’un ustası olduğu tür.`,
    examples: "Palto, Ölü Canlar, Müfettiş",
  },
  {
    title: "Psikolojik Roman",
    description: `İnsan zihninin karanlık köşelerini, vicdanı ve bilinci merkeze alan anlatılar.`,
    examples: "Suç ve Ceza, Yeraltından Notlar",
  },
  {
    title: "Varoluşçu Edebiyat",
    description: `Bireyin anlam arayışını, yabancılaşmayı ve özgürlük sorununu ele alan eserler.`,
    examples: "Dönüşüm, Yeraltından Notlar",
  },
  {
    title: "Klasik Öykü",
    description: `Kısa ama yoğun anlatımıyla insan doğasına dair kalıcı izler bırakan öyküler.`,
    examples: "Maça Kızı, Palto",
  },
]

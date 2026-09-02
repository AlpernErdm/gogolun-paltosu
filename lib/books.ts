export type Book = {
  slug: string
  title: string
  author: string
  description: string
  genre: string
  literature: string
  year: string
  quote?: string
  paragraphs: string[]
  cover: string
  coverAlt: string
  related: string[]
}

export const books: Book[] = [
  {
    slug: "paltosu",
    title: "Palto",
    author: "Nikolay Gogol",
    description: `Silik bir memurun yeni bir paltoya duyduğu tutku üzerinden bürokrasiyi ve insan onurunu sorgulayan başyapıt.`,
    genre: "Uzun Öykü",
    literature: "Rus Edebiyatı",
    year: "1842",
    quote: `Hepimiz Gogol’un Paltosu’ndan çıktık.`,
    paragraphs: [
      `Akaki Akakiyeviç, St. Petersburg’da evrak temize çeken silik bir memurdur. Hayatı, eski paltosunun onarılamayacak kadar yıprandığını öğrendiğinde köklü bir dönüşüme uğrar.`,
      `Yeni bir palto için yaptığı fedakârlıklar ve bu paltonun elinden alınması, küçük insanın büyük şehir ve acımasız bürokrasi karşısındaki çaresizliğini gözler önüne serer.`,
      `Dostoyevski’ye atfedilen "Hepimiz Gogol’un Paltosu’ndan çıktık" sözü, bu öykünün modern Rus edebiyatının temel taşı olduğunu vurgular.`,
    ],
    cover: "/images/cover-palto.png",
    coverAlt: "Nikolay Gogol - Palto kitap kapağı",
    related: ["dostoyevski", "kafka", "puskin"],
  },
  {
    slug: "dostoyevski",
    title: "Yeraltından Notlar",
    author: "Fyodor Dostoyevski",
    description: `Toplumdan soyutlanmış bir adamın karanlık iç monologuyla insan iradesini ve bilinci sorgulayan bir başyapıt.`,
    genre: "Felsefi Roman",
    literature: "Rus Edebiyatı",
    year: "1864",
    quote: `İki kere iki dört, hayatın değil ölümün başlangıcıdır.`,
    paragraphs: [
      `Modern varoluşçuluğun habercisi sayılan eser, isimsiz anlatıcının çelişkilerle dolu itiraflarından oluşur.`,
      `Akıl ve çıkar temelli toplum düzenine karşı bireyin irrasyonel özgürlük arzusunu savunur.`,
      `Gogol’un "küçük memur" tipini alıp onu felsefi bir bilinç düzeyine taşır.`,
    ],
    cover: "/images/cover-yeraltindan-notlar.png",
    coverAlt: "Fyodor Dostoyevski - Yeraltından Notlar kitap kapağı",
    related: ["kafka", "paltosu", "puskin"],
  },
  {
    slug: "kafka",
    title: "Dönüşüm",
    author: "Franz Kafka",
    description: `Bir sabah dev bir böceğe dönüşen Gregor Samsa üzerinden yabancılaşmayı ve aile baskısını anlatır.`,
    genre: "Modern Öykü",
    literature: "Alman Edebiyatı",
    year: "1915",
    quote: `Huzursuz düşlerden uyandığında kendini dev bir böceğe dönüşmüş buldu.`,
    paragraphs: [
      `Gregor Samsa bir sabah kendini dev bir böceğe dönüşmüş olarak bulur ve hayatı tümüyle alt üst olur.`,
      `Ailesinin ona bakışındaki dönüşüm, bireyin üretkenliğini yitirdiğinde toplumdaki değersizleşmesini grotesk bir dille anlatır.`,
      `Gogol’un grotesk gerçekçiliğinin 20. yüzyıldaki en güçlü yankısıdır.`,
    ],
    cover: "/images/cover-donusum.png",
    coverAlt: "Franz Kafka - Dönüşüm kitap kapağı",
    related: ["dostoyevski", "paltosu", "puskin"],
  },
  {
    slug: "puskin",
    title: "Maça Kızı",
    author: "Aleksandr Puşkin",
    description: `Kumar tutkusu ve açgözlülüğün pençesindeki bir subayın kaderini doğaüstüyle harmanlayan Rus klasiği.`,
    genre: "Öykü",
    literature: "Rus Edebiyatı",
    year: "1834",
    quote: `Üç, yedi, as!`,
    paragraphs: [
      `Genç subay Hermann, kazanan üç kartın sırrına ulaşmak için her şeyi göze alır.`,
      `Hırs, kader ve doğaüstü öğeler ustaca birleşerek gerilimli bir atmosfer yaratır.`,
      `Puşkin’in yalın ama keskin anlatımı, sonraki kuşak Rus yazarlarına ilham verdi.`,
    ],
    cover: "/images/cover-maca-kizi.png",
    coverAlt: "Aleksandr Puşkin - Maça Kızı kitap kapağı",
    related: ["dostoyevski", "kafka", "paltosu"],
  },
  {
    slug: "olu-canlar",
    title: "Ölü Canlar",
    author: "Nikolay Gogol",
    description: `Ölmüş serfleri satın alarak servet peşinde koşan Çiçikov üzerinden Rusya’yı hicveden dev bir yapıt.`,
    genre: "Hiciv Romanı",
    literature: "Rus Edebiyatı",
    year: "1842",
    paragraphs: [
      `Çiçikov, kâğıt üzerinde hâlâ yaşıyor görünen ölü serfleri satın alarak zenginleşmeyi planlar.`,
      `Gogol, taşra Rusya’sının ahlaki çürümüşlüğünü ve toprak sahiplerinin tiplemelerini keskin bir mizahla çizer.`,
      `Yarım kalmış bu destansı roman, Rus toplumsal hicvinin zirvesi kabul edilir.`,
    ],
    cover: "/images/cover-olu-canlar.png",
    coverAlt: "Nikolay Gogol - Ölü Canlar kitap kapağı",
    related: ["dostoyevski", "kafka", "paltosu"],
  },
  {
    slug: "suc-ve-ceza",
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    description: `Bir cinayetin ardından vicdan, suçluluk ve kefaretle boğuşan Raskolnikov’un psikolojik çöküşü.`,
    genre: "Psikolojik Roman",
    literature: "Rus Edebiyatı",
    year: "1866",
    paragraphs: [
      `Yoksul öğrenci Raskolnikov, kendi geliştirdiği "üstün insan" kuramını sınamak için bir cinayet işler.`,
      `Ardından gelen vicdan azabı ve psikolojik gerilim, insan ruhunun derinliklerine iner.`,
      `Suçun bireyi içeriden nasıl cezalandırdığını gösteren evrensel bir başyapıttır.`,
    ],
    cover: "/images/cover-suc-ve-ceza.png",
    coverAlt: "Fyodor Dostoyevski - Suç ve Ceza kitap kapağı",
    related: ["dostoyevski", "kafka", "paltosu"],
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}

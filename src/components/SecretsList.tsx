const secrets = [
  {
    n: "01",
    title: "Kundalik tuting",
    desc: "Ko'plab muvaffaqiyatli kishilar har kuni o'z fikrlari, rejalari va voqealarini yozib boradi. Bu xotirani mustahkamlaydi va aniq maqsad qo'yishga yordam beradi.",
    long:
      "Leonardo da Vinchi 13 000 sahifalik kundalik qoldirgan — unda ixtirolari, rasmlari va kuzatuvlari bor. Marcus Aurelius (Rim imperatori) ham har kuni \"O'zim haqimda\" kitobini yozgan — bu falsafa shoh asariga aylangan. Tadqiqotlar shuni ko'rsatadiki, har kuni 10-15 daqiqa kundalik yozish stressni 25% ga kamaytiradi va xotirani 30% gacha yaxshilaydi. Yozganlaringizni yana o'qish — o'zingizni tanish va xatolardan saboq olishning eng yaxshi usuli.",
    examples: ["Leonardo da Vinchi", "Marcus Aurelius", "Mark Twain"],
  },
  {
    n: "02",
    title: "Tanaffus qiling",
    desc: "Mizg'ib olish — bir yoki yarim soatlik uyqu — sizning ish samaradorligingizni 30% gacha oshiradi. Eynshteyn kuniga 10 soat uxlagan.",
    long:
      "NASA ning tadqiqoti shuni ko'rsatdiki, 26 daqiqalik kunduzgi uyqu uchuvchining diqqatini 54% ga oshirgan. Uinston Cherchill, Jon F. Kennedi, Margaret Tetcher — barchasi mizg'ib olishning ashaddiy tarafdorlari edi. Cherchill: \"Siz shunchaki kechgacha o'zingizni majbur qilmang. Tushdan keyin bir soat uxlang — bir kun ichida ikki kunlik ish qilasiz\" — degan. Hatto 5-10 daqiqalik tanaffus ham — telefonsiz, ekrandansiz — miyangizga \"qayta yuklanish\" imkonini beradi.",
    examples: ["Cherchill", "Kennedi", "Tetcher"],
  },
  {
    n: "03",
    title: "Kuniga 15 daqiqa piyoda yuring",
    desc: "Charlz Darvin har kuni ikki marta sayr qilgan. Piyoda yurish ijodiy fikrlash va sog'liq uchun foydali.",
    long:
      "Stanford universiteti tadqiqoti: piyoda yurish vaqtida ijodiy fikrlash 60% gacha oshadi. Charlz Darvin uyining yonida \"Sandwalk\" — \"o'ylash yo'li\" qurib, har kuni unda 2-3 marta aylanardi. Bethoven, Kant, Aristotel — barchasi piyoda yurib o'zlarining buyuk g'oyalariga kelishgan. Sayr — bu nafaqat sog'liq, balki tafakkur uchun zarur ozuqa. Stiv Jobs eng muhim uchrashuvlarini piyoda sayrda o'tkazgan.",
    examples: ["Darvin", "Bethoven", "Kant", "Stiv Jobs"],
  },
  {
    n: "04",
    title: "Ko'proq kitob o'qing",
    desc: "Bill Geyts kitob o'qishni o'zining sevimli mashg'uloti deb ataydi. Mark Sukerberg haftasiga 2 ta, Ilon Mask yoshligida shuncha kitob o'qigan.",
    long:
      "Oksford universiteti tadqiqoti: kuniga 6 daqiqa o'qish stressni 68% ga kamaytiradi — bu musiqa eshitish yoki sayrdan ham samaraliroq. Uorren Baffet kunining 80% ini o'qishga sarflaydi. Bill Geyts yiliga 50 ta kitob o'qiydi — bu haftada bittadan ko'p degani. \"Hayotiy shart-sharoitlarga qaramay, har birimiz dunyoning eng badavlat kishilaridan biri Bill Geytsning sevimli resursi bo'lgan kitoblarni o'qish imkoniga egamiz\" — bu maqoladagi eng muhim fikrlardan biri. Kitob — bilim olishning eng arzon va eng kuchli vositasi.",
    examples: ["Bill Geyts", "Uorren Baffet", "Mark Sukerberg", "Ilon Mask"],
  },
  {
    n: "05",
    title: "Qiziqishlaringiz bo'yicha suhbatdosh toping",
    desc: "\"Powers Of Two\" kitobiga ko'ra: Lennon va Makkartni, Stiv Jobs va Voznyak — barchasi birgalikda ulug' ishlarni qilishgan.",
    long:
      "Tarixdagi eng buyuk yutuqlar — yakka kishilarning emas, balki juftliklarning ishi. Stiv Jobs Stiv Voznyaksiz Apple'ni yarata olmasdi. Lennon Makkartnisiz \"The Beatles\" musiqasini yoza olmasdi. Bill Geyts Pol Allensiz Microsoft'ni qura olmasdi. Aksariyat hollarda yaqin do'st — bu sizning fikr aytadigan, qarama-qarshi turadigan, shubhalaringizni bo'lashadigan odam. To'g'ri suhbatdosh sizni 10 yilda erishadigan natijaga 1 yilda olib keladi.",
    examples: ["Jobs & Voznyak", "Lennon & Makkartni", "Geyts & Allen"],
  },
  {
    n: "06",
    title: "Tajriba qilishdan qo'rqmang",
    desc: "Tomas Edison muvaffaqiyatsiz urinishlarni \"yuvib ketadi\" degan. Edison 1100 patentga egalik qilgan — ortida minglab tajribalar.",
    long:
      "Edison: \"Men muvaffaqiyatsizlikka uchramadim. Men 10 000 ta ishlamaydigan usulni topdim\" — degan. Aka-uka Raytlar uchish ixtirosi uchun 200 ga yaqin urinish qilgan, ko'pchilik ularni \"jinni\" deb atagan. Sara Bleykli — Spanx'ning asoschisi — kompaniyasini ochishdan oldin 7 yil davomida faks mashinalarini sotib yashagan, har kuni eshikdan eshikka yurib, rad javoblarini olgan. Bugun u milliarder. Muvaffaqiyat — bu muvaffaqiyatsizliklarning eng yaxshi bola.",
    examples: ["Edison", "Aka-uka Raytlar", "Sara Bleykli"],
  },
];

export function SecretsList() {
  return (
    <section id="sirlar" className="py-20 md:py-28 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-clay/15 text-clay text-xs font-medium tracking-wider uppercase mb-4">
            Asosiy mavzu
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground text-balance">
            Muvaffaqiyatli shaxslarning <em className="text-clay">6 siri</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Muvaffaqiyatli kishilarning o'rnak olsa arzigulik foydali odatlari bo'ladi. Quyida har bir sir batafsil yoritilgan — ilmiy tadqiqotlar va tarixiy misollar bilan.
          </p>
        </div>

        <div className="space-y-5">
          {secrets.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-card p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-500"
            >
              <div className="flex-shrink-0 flex items-baseline gap-3 md:w-32">
                <span className="number-display text-6xl md:text-7xl text-clay leading-none">
                  {s.n}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed border-l-2 border-warm pl-4 italic">
                  {s.long}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.examples.map((e) => (
                    <span
                      key={e}
                      className="inline-block px-3 py-1 rounded-full bg-sage/20 text-sage-foreground text-xs font-medium"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const secrets = [
  {
    n: "01",
    title: "Kundalik tuting",
    desc: "Ko'plab muvaffaqiyatli kishilar har kuni o'z fikrlari, rejalari va voqealarini yozib boradi. Bu xotirani mustahkamlaydi va aniq maqsad qo'yishga yordam beradi.",
    color: "warm",
  },
  {
    n: "02",
    title: "Tanaffus qiling",
    desc: "Mizg'ib olish — bir yoki yarim soatlik uyqu — sizning ish samaradorligingizni 30% gacha oshiradi. Eynshteyn kuniga 10 soat uxlagan.",
    color: "sage",
  },
  {
    n: "03",
    title: "Kuniga 15 daqiqa piyoda yuring",
    desc: "Charlz Darvin har kuni ikki marta sayr qilgan. Piyoda yurish ijodiy fikrlash va sog'liq uchun foydali.",
    color: "clay",
  },
  {
    n: "04",
    title: "Ko'proq kitob o'qing",
    desc: "Bill Geyts kitob o'qishni o'zining sevimli mashg'uloti deb ataydi. Mark Sukerberg haftasiga 2 ta, Ilon Mask yoshligida shuncha kitob o'qigan.",
    color: "warm",
  },
  {
    n: "05",
    title: "Qiziqishlaringiz bo'yicha suhbatdosh toping",
    desc: "\"Powers Of Two\" kitobiga ko'ra: Lennon va Makkartni, Stiv Jobs va Voznyak — barchasi birgalikda ulug' ishlarni qilishgan.",
    color: "sage",
  },
  {
    n: "06",
    title: "Tajriba qilishdan qo'rqmang",
    desc: "Tomas Edison muvaffaqiyatsiz urinishlarni \"yuvib ketadi\" degan. Edison 1100 patentga egalik qilgan — ortida minglab tajribalar.",
    color: "clay",
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
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Muvaffaqiyatli kishilarning o'rnak olsa arzigulik foydali odatlari bo'ladi.
          </p>
        </div>

        <div className="space-y-4">
          {secrets.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-card p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-500"
            >
              <div className="flex-shrink-0 flex items-baseline gap-3 md:w-40">
                <span className="number-display text-6xl md:text-7xl text-clay leading-none">
                  {s.n}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import billGates from "@/assets/bill-gates.jpg";
import elonMusk from "@/assets/elon-musk.jpg";
import steveJobs from "@/assets/steve-jobs.jpg";
import einstein from "@/assets/einstein.jpg";
import oprah from "@/assets/oprah.jpg";
import disney from "@/assets/disney.jpg";
import rowling from "@/assets/rowling.jpg";
import darwin from "@/assets/darwin.jpg";
import edison from "@/assets/edison.jpg";

type Person = {
  name: string;
  role: string;
  fact: string;
  img: string;
  born: string;
  failure: string;
  story: string;
  habit: string;
  quote: string;
};

const people: Person[] = [
  {
    name: "Bill Geyts",
    role: "Microsoft asoschisi",
    fact: "Har kuni kamida 1 soat kitob o'qiydi.",
    img: billGates,
    born: "1955-yil, AQSh, Sietl",
    failure:
      "Birinchi tashkil etgan kompaniyasi — Traf-O-Data — to'liq muvaffaqiyatsiz tugagan. U Garvard universitetini ham tashlab ketgan va ko'pchilik buni katta xato deb hisoblagan.",
    story:
      "Yoshligida kompyuter klassiga shu qadar berilgan ediki, kechalari maktabga yashirin kirib kod yozar edi. 1975-yilda Pol Allen bilan Microsoft kompaniyasiga asos solgan. Birinchi yillar juda og'ir bo'lgan: ofis kichik, pul yo'q, raqobatchilar zo'r. Ammo Geyts har kuni 12-14 soat ishlagan va kitob o'qishni tark etmagan. 1980-yilda IBM bilan tarixiy bitim tuzdi — bu uni dunyodagi eng boy odamga aylantirdi.",
    habit:
      "Yiliga ikki marta \"O'ylash haftasi\"ga chiqadi — bir o'zi uyga yopilib, o'nlab kitob va maqolalarni o'qiydi. Hech kim, hatto oilasi ham bezovta qilmasligi shart.",
    quote: "\"Eng baxtsiz mijozlaringiz — sizning eng katta o'qituvchilaringizdir.\"",
  },
  {
    name: "Ilon Mask",
    role: "Tesla va SpaceX rahbari",
    fact: "Yoshligida haftasiga 2 tadan kitob o'qigan.",
    img: elonMusk,
    born: "1971-yil, JAR, Pretoriya",
    failure:
      "SpaceX'ning birinchi 3 ta raketasi yonib ketgan. Tesla deyarli bankrot bo'lgan. 2008-yilda u oxirgi pulini ikki kompaniyaga bo'lib bergan va o'zi do'stlaridan qarz olib yashagan.",
    story:
      "Bolaligida maktabda uni qattiq urishgan, bir marta zinadan tashlab yuborishgan — kasalxonada uzoq yotgan. Bu og'ir paytlarda kitob uning yagona do'sti bo'lgan: kuniga 10 soat o'qigan, 9 yoshida butun \"Britannica\" ensiklopediyasini tugatgan. 24 yoshida Zip2 kompaniyasini sotib 22 million dollar ishlagan, keyin PayPal bilan 165 million. Lekin bu pullarni Mars uchun raketa qurishga sarf qilgan. 2008-yil dekabrda — Rojdestvodan 3 kun oldin — SpaceX'ning 4-uchirilishi muvaffaqiyatli bo'ldi va NASA bilan 1.6 milliard dollarlik shartnoma tuzdi. Bir kunda u bankrotlikdan qutuldi.",
    habit:
      "Kunini 5 daqiqalik bloklarga bo'lib rejalashtiradi. Haftasiga 80-100 soat ishlaydi va kuniga 1-2 ta texnik kitob o'qishni odat qilgan.",
    quote: "\"Agar nimadir juda muhim bo'lsa, hatto ehtimollar siz tomonda bo'lmasa ham, qilishingiz kerak.\"",
  },
  {
    name: "Stiv Jobs",
    role: "Apple asoschisi",
    fact: "Har kuni piyoda sayr qilib, eng muhim qarorlarini qabul qilgan.",
    img: steveJobs,
    born: "1955-yil, AQSh, San-Fransisko",
    failure:
      "1985-yilda o'zi tashkil etgan Apple kompaniyasidan haydab yuborilgan. \"Bu hayotimdagi eng yaxshi narsa edi\" deb keyinchalik aytgan, ammo o'sha paytda bu uni juda qiynagan.",
    story:
      "Tug'ilishidan oldin biologik ota-onasi uni boqishga rozi bo'lmagan. Asrab oluvchi oilada o'sgan. Reed kollejini moliyaviy sabablarga ko'ra tashlab ketgan, ammo unga qiziqarli darslarga \"yashirin\" kirib o'tirgan — shulardan biri kalligrafiya bo'lib, keyinchalik Mac'dagi go'zal shriftlarning asosi bo'lgan. 21 yoshida garajda Apple'ni ochgan. Apple'dan haydalgach, NeXT va Pixar kompaniyalarini yaratgan — Pixar \"Toy Story\" filmi bilan tarixga kirgan. 1997-yilda Apple'ga qaytib kelgan va iPod, iPhone, iPad'ni dunyoga olib chiqqan.",
    habit:
      "Har kuni piyoda sayr qilib uchrashuvlar o'tkazgan. Har ertalab ko'zguga qarab: \"Agar bugun oxirgi kunim bo'lsa, men hozir qilayotgan ishni qilarmidim?\" deb so'ragan.",
    quote: "\"Vaqtingiz cheklangan, shuning uchun uni boshqa birovning hayotini yashashga sarflamang.\"",
  },
  {
    name: "Albert Eynshteyn",
    role: "Buyuk fizik olim",
    fact: "Kuniga 10 soatdan ortiq uxlagan — uyqu uning siri edi.",
    img: einstein,
    born: "1879-yil, Germaniya, Ulm",
    failure:
      "Bolaligida 4 yoshigacha gapirmagan, o'qituvchilari uni \"aqli zaif\" deb hisoblashgan. Tsyurix politexnikumiga birinchi marta kira olmagan. Universitetni bitirib, 2 yil ishsiz yurgan.",
    story:
      "Maktabda Albertni \"sekin\", \"qiziqishsiz\" deb chaqirishgan. Ota-onasi uning kelajagidan umid uzgan paytlar bo'lgan. Universitetdan keyin u patent idorasida oddiy xizmatchi bo'lib ishlagan. Aynan shu yerda — bo'sh vaqtlarida — u nisbiylik nazariyasini yaratgan. 1905-yil — uning \"mo''jiza yili\" — bir vaqtning o'zida 4 ta inqilobiy maqola e'lon qilgan. 1921-yilda Nobel mukofotini olgan. U muvaffaqiyat sirini shunday aytgan: \"Men aqlli emasman, faqat muammolar bilan ko'proq vaqt o'tkazaman.\"",
    habit:
      "Har kuni 10 soat uxlagan, qisqa kunduzgi uyqular ham qilgan. Skripka chalish — uning tafakkurini tinchlantirgan asosiy odati edi.",
    quote: "\"Aql-zakovat — bilim emas, tasavvurdir.\"",
  },
  {
    name: "Oprah Uinfri",
    role: "Mashhur jurnalist va shouxost",
    fact: "Dunyodagi eng nufuzli ayol, kambag'allikdan milliarderlikka erishgan.",
    img: oprah,
    born: "1954-yil, AQSh, Mississippi",
    failure:
      "Bolaligida juda qashshoq oilada o'sgan — kiyim o'rniga kartoshka qoplari kiygan. 9 yoshida zo'rlik qurboni bo'lgan, 14 yoshida bola tug'ib, chaqaloq vafot etgan. Birinchi televideniye ishidan \"televideniyega yaroqsiz\" deb haydalgan.",
    story:
      "Buvisi Oprah'ni juda kichikligida o'qishga o'rgatgan — bu unga butun hayoti davomida najot bo'lgan. Kitob — uning yagona do'sti edi. Maktabda yaxshi o'qigan, stipendiya bilan universitetga kirgan. 19 yoshida radioda ishlay boshlagan. Birinchi TV ishidan haydalgach, tushkunlikka tushmagan — boshqa shaharda tok-shou olib bora boshlagan. \"The Oprah Winfrey Show\" 25 yil davomida AQShdagi eng mashhur ko'rsatuv bo'lgan. Bugungi kunda uning boyligi 3 milliard dollardan oshadi.",
    habit:
      "Har kuni minnatdorlik kundaligi yuritadi: kuniga 5 ta minnatdor bo'ladigan narsani yozadi. 20 daqiqa meditatsiya va kitob o'qishni tashlamaydi.",
    quote: "\"Sizning hayotingizdagi eng katta sarguzasht — orzularingiz bo'yicha hayot kechirishdir.\"",
  },
  {
    name: "Uolt Disney",
    role: "Disney kompaniyasi asoschisi",
    fact: "Multfilm sanoatining otasi, 22 ta \"Oskar\" mukofoti sohibi.",
    img: disney,
    born: "1901-yil, AQSh, Chikago",
    failure:
      "Gazetadagi birinchi ishidan \"tasavvurga ega emas, yaxshi g'oyalari yo'q\" deb haydalgan. Birinchi kompaniyasi \"Laugh-O-Gram\" bankrot bo'lgan. Mikki Maus g'oyasi dastlab barcha studiyalar tomonidan rad etilgan — 300 marta!",
    story:
      "Bolaligi qashshoqlikda o'tgan, otasi qattiqqo'l edi. Maktabda darslarda ko'pincha rasm chizib o'tirardi. Birinchi karikaturalarini gazetaga sotishga harakat qilgan, ammo \"iste'dodsiz\" deb topshirilgan. 1923-yilda akasi bilan Gollivudga kelib, garajda kichik studiya ochgan. Bir necha bor bankrot bo'lgan, lekin har safar qaytadan boshlagan. 1928-yilda Mikki Maus dunyoga keldi. 1937-yilda \"Qor malikasi va 7 mitti\" — birinchi to'liq metrajli multfilm — chiqdi. Bu loyiha shu qadar qimmatga tushganki, hammada \"Disney bankrot bo'ladi\" degan fikr edi. Film tarixdagi eng daromadli bo'ldi.",
    habit:
      "Har ertalab quyosh chiqishidan oldin uyg'onib, qog'ozda eskizlar chizardi. \"Agar orzu qila olsangiz, uni amalga oshira olasiz\" — uning hayot qoidasi edi.",
    quote: "\"Boshlash usuli — gapirishni to'xtatib, ish qilishni boshlashdir.\"",
  },
  {
    name: "J.K. Rouling",
    role: "\"Garri Potter\" muallifi",
    fact: "Ijtimoiy nafaqada yashagan ayoldan birinchi yozuvchi-milliarderga aylangan.",
    img: rowling,
    born: "1965-yil, Buyuk Britaniya, Yeyt",
    failure:
      "Garri Potter qo'lyozmasi 12 ta nashriyot tomonidan rad etilgan. Yozayotgan paytda u ajrashgan, onasi vafot etgan, qo'lida go'dak qizi bilan ishsiz qolgan. Klinik depressiya tashxisini olgan.",
    story:
      "1990-yilda poyezdda ketayotganda Garri Potter g'oyasi to'satdan miyasiga kelgan. Lekin bu g'oyani yozish uchun 5 yil vaqt ketdi. Shu davrda turmushi buzildi, onasi rakdan vafot etdi, u bir o'zi go'dak qizi bilan Edinburg shahriga ko'chib ketdi. Pul yo'q edi — issiq qaynar suvi yo'q xonadonda yashagan, ijtimoiy yordam puli bilan kun ko'rgan. Qizi uxlatib qo'ygach, kafelarda kitobni yozar edi (uyda isitish yo'q edi). 1995-yilda kitob tayyor bo'ldi — 12 ta nashriyot rad etdi. Faqat 13-uchisi — Bloomsbury — chop etishga rozi bo'ldi va boshlovchi muharrirning 8 yashar qizi qo'lyozmani o'qib \"Buni chiqarish kerak!\" deb aytgani uchun. Bugun \"Garri Potter\" — tarixdagi eng ko'p sotilgan kitob seriyalaridan biri.",
    habit:
      "Har kuni belgilangan miqdorda yozadi — qancha qiyin bo'lmasin. Yangi g'oyalar uchun har kuni uzoq sayrlar qiladi.",
    quote: "\"Muvaffaqiyatsizlikdan qo'rqmaslik mumkin emas — bu hayotning bir qismi. Lekin haqiqiy halokat — urinishdan voz kechishdir.\"",
  },
  {
    name: "Charlz Darvin",
    role: "Evolutsiya nazariyasi muallifi",
    fact: "Kuniga 2 marta sayr qilib, eng buyuk ilmiy kashfiyotini qilgan.",
    img: darwin,
    born: "1809-yil, Buyuk Britaniya",
    failure:
      "Otasi uni \"oilamiz uchun sharmandalik\" deb atagan, chunki Charlz tibbiyot fakultetini tashlab ketgan. O'qituvchilari ham uni o'rta darajadagi o'quvchi deb hisoblashgan.",
    story:
      "22 yoshida \"Beagle\" kemasida 5 yillik dunyo bo'ylab sayohatga chiqdi. Galapagos orollarida turli qushlar va hayvonlarni kuzatib, evolutsiya nazariyasini ishlab chiqdi. Lekin u 20 yil davomida bu nazariyani e'lon qilishga jur'at etmadi — diniy va ilmiy jamoatchilikning g'azabidan qo'rqdi. Faqat 1859-yilda \"Turlarning kelib chiqishi\" kitobi nashr etildi va dunyoni o'zgartirdi.",
    habit:
      "Har kuni \"O'ylash yo'li\" deb atagan bog' aylanasidan 2 marta o'tardi. Eng murakkab ilmiy savollarini aynan shu paytda hal qilgan.",
    quote: "\"Eng kuchli yoki eng aqlli emas, balki o'zgarishlarga eng yaxshi moslasha oladigan tur omon qoladi.\"",
  },
  {
    name: "Tomas Edison",
    role: "Buyuk ixtirochi",
    fact: "1093 ta patent egasi — tarixdagi eng ko'p ixtirochi.",
    img: edison,
    born: "1847-yil, AQSh, Ogayo",
    failure:
      "Maktabda \"aqli yetmaydi\" deb o'qishdan haydalgan — atigi 3 oy o'qigan. Lampochkani ixtiro qilish uchun 10 000 marta urinib ko'rgan, har safar muvaffaqiyatsiz.",
    story:
      "Onasi unga uyda ta'lim bergan — uy unga maktab bo'ldi. 12 yoshida poyezdda gazeta sotuvchi bo'lib ishladi va daromadini eksperimentlar uchun sarfladi. 22 yoshida birinchi patentini oldi. Lampochka ustida ishlaganda, jurnalist undan: \"Siz 10 000 marta muvaffaqiyatsizlikka uchradingiz, qanday his qilasiz?\" deb so'radi. Edison: \"Men muvaffaqiyatsizlikka uchramadim. Men 10 000 ta ishlamaydigan usulni topdim\" deb javob berdi. 1879-yilda lampochka, fonograf, kino kameralarini ixtiro qildi. Bu ixtirolar dunyoni butunlay o'zgartirdi.",
    habit:
      "Kuniga atigi 4-5 soat uxlardi. Bo'sh vaqtlarida — qisqa \"power nap\" lar olar, qo'lida tosh ushlab — tosh tushganda uyg'onib, g'oyalarni yozardi.",
    quote: "\"Daho — bu 1% ilhom va 99% mehnat.\"",
  },
];

export function PeopleGallery() {
  const [active, setActive] = useState<Person | null>(null);

  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="shaxslar" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-sage/30 text-sage-foreground text-xs font-medium tracking-wider uppercase mb-4">
            Mashhur shaxslar
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground text-balance">
            Ular ham bir paytlar <em className="text-clay">muvaffaqiyatsiz</em> bo'lishgan
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Bu insonlarning hayoti — muvaffaqiyatsizliklar, qaytishlar va qattiq mehnat hikoyasi. Har bir kishi haqida batafsil o'qish uchun rasmlariga bosing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {people.map((p) => (
            <button
              key={p.name}
              onClick={() => setActive(p)}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`${p.name} portreti`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.role}</p>
                <p className="mt-3 text-xs md:text-sm text-foreground/75 leading-relaxed line-clamp-2">
                  {p.fact}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-clay group-hover:gap-2 transition-all">
                  Batafsil o'qish <span aria-hidden>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-up"
          style={{ animationDuration: "0.25s" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl shadow-lift max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Yopish"
              className="sticky top-3 ml-auto mr-3 z-10 w-9 h-9 rounded-full bg-card border border-border shadow-soft flex items-center justify-center text-foreground hover:bg-accent transition-colors block"
            >
              ✕
            </button>

            <div className="px-6 md:px-10 pb-10 -mt-9">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={active.img}
                  alt={active.name}
                  width={768}
                  height={768}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-soft flex-shrink-0"
                />
                <div className="pt-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-clay">
                    {active.born}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-1 leading-tight">
                    {active.name}
                  </h3>
                  <p className="text-muted-foreground mt-1">{active.role}</p>
                </div>
              </div>

              <div className="mt-8 space-y-7">
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-destructive rounded-full" />
                    Muvaffaqiyatsizlik davri
                  </h4>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{active.failure}</p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-clay rounded-full" />
                    Qanday muvaffaqiyatga erishgan
                  </h4>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{active.story}</p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-sage rounded-full" />
                    Asosiy odati
                  </h4>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{active.habit}</p>
                </div>

                <blockquote className="bg-warm/30 border-l-4 border-clay px-5 py-4 rounded-r-xl">
                  <p className="font-display text-lg italic text-foreground leading-relaxed">
                    {active.quote}
                  </p>
                  <footer className="mt-2 text-xs text-muted-foreground tracking-wider uppercase">
                    — {active.name}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

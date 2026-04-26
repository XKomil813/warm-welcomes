import billGates from "@/assets/bill-gates.jpg";
import elonMusk from "@/assets/elon-musk.jpg";
import steveJobs from "@/assets/steve-jobs.jpg";
import einstein from "@/assets/einstein.jpg";

const people = [
  {
    name: "Bill Geyts",
    role: "Microsoft asoschisi",
    fact: "Har kuni kamida 1 soat kitob o'qiydi.",
    img: billGates,
  },
  {
    name: "Ilon Mask",
    role: "Tesla va SpaceX rahbari",
    fact: "Yoshligida haftasiga 2 tadan kitob o'qigan.",
    img: elonMusk,
  },
  {
    name: "Stiv Jobs",
    role: "Apple asoschisi",
    fact: "Har kuni piyoda sayr qilib, eng muhim qarorlarini qabul qilgan.",
    img: steveJobs,
  },
  {
    name: "Albert Eynshteyn",
    role: "Buyuk olim",
    fact: "Kuniga 10 soatdan ortiq uxlagan — uyqu uning siri edi.",
    img: einstein,
  },
];

export function PeopleGallery() {
  return (
    <section id="shaxslar" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-sage/30 text-sage-foreground text-xs font-medium tracking-wider uppercase mb-4">
            Mashhur shaxslar
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground text-balance">
            Ular ham bir paytlar <em className="text-clay">o'quvchi</em> bo'lishgan
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Dunyoning eng muvaffaqiyatli insonlari kundalik odatlari bilan boshqalardan ajralib turadi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p, i) => (
            <article
              key={p.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
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
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.role}</p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.fact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative max-w-5xl mx-auto w-full py-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border text-xs font-medium tracking-widest uppercase text-clay animate-fade-up">
          8-sinf · Ona tili · 10.14-mavzu
        </span>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-foreground leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: "120ms" }}>
          Muvaffaqiyatli<br />
          insonning <em className="text-clay">6 siri</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg md:text-xl text-foreground/75 leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
          Bill Geyts, Ilon Mask, Stiv Jobs va boshqa buyuk insonlarning kundalik odatlarini o'rganamiz hamda topshiriqlarni birgalikda bajaramiz.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
          <a
            href="#sirlar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5"
          >
            6 sirni o'qish
            <span aria-hidden>→</span>
          </a>
          <a
            href="#topshiriqlar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent transition-all"
          >
            Topshiriqlarga o'tish
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md animate-fade-up" style={{ animationDelay: "480ms" }}>
          {[
            { n: "6", l: "ta sir" },
            { n: "4", l: "topshiriq" },
            { n: "10+", l: "shaxs" },
          ].map((s) => (
            <div key={s.l}>
              <div className="number-display text-4xl text-clay">{s.n}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

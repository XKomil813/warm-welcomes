import { useState } from "react";

type Row = {
  n: number;
  tavsiya: string;
  natijaPlaceholder: string;
  daliPlaceholder: string;
  // Namunaviy javoblar — ko'rish uchun
  natijaSample: string;
  dalilSample: string;
};

const rows: Row[] = [
  {
    n: 1,
    tavsiya: "Kundalik tutish",
    natijaPlaceholder: "Bu tavsiya nimaga olib keladi?",
    daliPlaceholder: "Buni qanday isbotlash mumkin?",
    natijaSample:
      "Xotira mustahkamlanadi, fikrlar tartibga keladi va aniq maqsad qo'yish osonlashadi. Stress kamayadi, o'z-o'zini tushunish ortadi.",
    dalilSample:
      "Leonardo da Vinchi 13 000 sahifalik kundalik qoldirgan; Marcus Aurelius o'z fikrlarini yozgan va bu kitob \"O'zim haqimda\" nomi bilan tarixga kirgan.",
  },
  {
    n: 2,
    tavsiya: "Kitob o'qish",
    natijaPlaceholder: "Bu odat qanday foyda beradi?",
    daliPlaceholder: "Qaysi inson buni isbotlaydi?",
    natijaSample:
      "Bilim ortadi, so'z boyligi kengayadi, vaziyatga boshqa tomondan qarash va yangi g'oyalar yaratish qobiliyati rivojlanadi.",
    dalilSample:
      "Bill Geyts yiliga 50 ta kitob o'qiydi; Mark Sukerberg haftasiga 2 tadan; Ilon Mask yoshligida \"Britannica\" ensiklopediyasini to'liq o'qib chiqqan.",
  },
  {
    n: 3,
    tavsiya: "Suhbatdoshga ega bo'lish",
    natijaPlaceholder: "Bu nimaga yordam beradi?",
    daliPlaceholder: "Qanday misol keltirish mumkin?",
    natijaSample:
      "E'tiborli va ziyrak bo'lishni o'rgatadi, to'g'ri qarorlar qabul qilishga yordam beradi, fikrlash chuqurlashadi.",
    dalilSample:
      "Stiv Jobs va Stiv Voznyak Apple'ni; Lennon va Makkartni \"The Beatles\"ni; Bill Geyts va Pol Allen Microsoft'ni birgalikda yaratishgan.",
  },
];

export function TableTask() {
  const [data, setData] = useState<Record<number, { natija: string; dalil: string }>>(
    {}
  );
  const [revealed, setRevealed] = useState(false);

  const update = (n: number, field: "natija" | "dalil", value: string) => {
    setData({
      ...data,
      [n]: { natija: data[n]?.natija || "", dalil: data[n]?.dalil || "", [field]: value },
    });
  };

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 5
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Muvaffaqiyatga erishish sirlarini jadvalda ifodalang
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Har bir tavsiya uchun <strong>natija</strong> va <strong>dalil</strong>ni yozing. Tugatgach, namunaviy javoblarni ochib, o'zingiznikiga solishtiring.
        </p>
      </div>

      <div className="space-y-5">
        {rows.map((r) => (
          <div
            key={r.n}
            className="border border-border rounded-2xl overflow-hidden"
          >
            <div className="bg-warm/30 px-5 py-3 flex items-center gap-3">
              <span className="number-display text-2xl text-clay">{r.n}</span>
              <span className="font-display text-lg font-semibold text-foreground">
                Tavsiya: {r.tavsiya}
              </span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-4">
                <label className="block text-xs font-medium uppercase tracking-wider text-sage-foreground mb-2">
                  Natija
                </label>
                <textarea
                  rows={3}
                  value={data[r.n]?.natija || ""}
                  onChange={(e) => update(r.n, "natija", e.target.value)}
                  placeholder={r.natijaPlaceholder}
                  className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
                {revealed && (
                  <div className="mt-2 p-3 rounded-lg bg-sage/15 border border-sage/30 text-sm text-foreground/85 leading-relaxed">
                    <span className="text-xs font-semibold uppercase text-sage-foreground">
                      Namuna:
                    </span>
                    <p className="mt-1">{r.natijaSample}</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <label className="block text-xs font-medium uppercase tracking-wider text-clay mb-2">
                  Dalil
                </label>
                <textarea
                  rows={3}
                  value={data[r.n]?.dalil || ""}
                  onChange={(e) => update(r.n, "dalil", e.target.value)}
                  placeholder={r.daliPlaceholder}
                  className="w-full p-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                />
                {revealed && (
                  <div className="mt-2 p-3 rounded-lg bg-clay/10 border border-clay/30 text-sm text-foreground/85 leading-relaxed">
                    <span className="text-xs font-semibold uppercase text-clay">
                      Namuna:
                    </span>
                    <p className="mt-1">{r.dalilSample}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => setRevealed(!revealed)}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-soft transition-all"
        >
          {revealed ? "Namunalarni yashirish" : "Namunaviy javoblarni ko'rsatish"}
        </button>
      </div>
    </div>
  );
}

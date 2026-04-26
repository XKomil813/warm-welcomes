import { useState } from "react";

const items = [
  { id: 1, text: "Kundalik tutish" },
  { id: 2, text: "Tanaffus qilish" },
  { id: 3, text: "Piyoda yurish" },
  { id: 4, text: "Kitob mutolaasi" },
  { id: 5, text: "Suhbatdoshga ega bo'lish" },
  { id: 6, text: "Tajriba qilishdan qo'rqmaslik" },
];

const matches = [
  { id: "A", text: "xotirani yaxshilash, empatiya darajasini oshirish, stressni kamaytirish" },
  { id: "B", text: "vaziyatga boshqa tomondan qarash va yangi narsa yaratish" },
  { id: "C", text: "" }, /* not used */
  { id: "D", text: "e'tiborli va ziyrak bo'lish, to'g'ri qarorlar qabul qilish" },
  { id: "E", text: "xatolardan xulosa chiqarish" },
  { id: "F", text: "samaradorlik va ijodiy fikrlash salohiyatini rivojlantirish" },
  { id: "G", text: "toliqib qolmaslik, jismoniy faol bo'lish" },
];

const correct: Record<number, string> = {
  1: "A",
  2: "G",
  3: "F",
  4: "B",
  5: "D",
  6: "E",
};

const dropOptions = matches.filter((m) => m.text);

export function MatchTask() {
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const reset = () => {
    setPicks({});
    setChecked(false);
  };

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 2
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Tavsiyalar va ularning foydasini moslashtiring
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Har bir tavsiyaning yonidagi ro'yxatdan to'g'ri foydani tanlang.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const pick = picks[item.id];
          const isCorrect = checked && pick === correct[item.id];
          const isWrong = checked && pick && pick !== correct[item.id];
          return (
            <div
              key={item.id}
              className={[
                "grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-3 md:gap-4 items-center p-4 rounded-xl border transition-colors",
                isCorrect
                  ? "border-success bg-success/10"
                  : isWrong
                  ? "border-destructive bg-destructive/10"
                  : "border-border bg-background",
              ].join(" ")}
            >
              <span className="number-display text-2xl text-clay w-8">{item.id}</span>
              <span className="font-medium text-foreground">{item.text}</span>
              <select
                value={pick || ""}
                onChange={(e) => setPicks({ ...picks, [item.id]: e.target.value })}
                disabled={checked}
                className="px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-70"
              >
                <option value="">— tanlang —</option>
                {dropOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.id}. {o.text.slice(0, 50)}{o.text.length > 50 ? "…" : ""}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm text-clay font-medium hover:underline">
          Variantlar (to'liq matn)
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80 pl-4">
          {dropOptions.map((m) => (
            <li key={m.id}>
              <span className="font-semibold text-clay">{m.id}.</span> {m.text}
            </li>
          ))}
        </ul>
      </details>

      <div className="mt-8 flex flex-wrap gap-3">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={Object.keys(picks).length < items.length}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-soft transition-all"
          >
            Tekshirish
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-card border border-border font-medium hover:bg-accent transition-all"
          >
            Qaytadan urinish
          </button>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

type Question = {
  text: string;
  category: "Tavsiya" | "Natija" | "Dalil";
};

const sampleQuestions: Question[] = [
  { text: "Sizningcha, qanday odat insonni muvaffaqiyatga olib boradi?", category: "Tavsiya" },
  { text: "Bu odatni siz qachondan boshlab amal qilasiz?", category: "Tavsiya" },
  { text: "Bu odat sizga qanday natija berdi?", category: "Natija" },
  { text: "Bu odat sizning hayotingizni qanday o'zgartirdi?", category: "Natija" },
  { text: "Bu odatning samaradorligini qaysi misol bilan isbotlay olasiz?", category: "Dalil" },
  { text: "Sizning ushbu yo'lda yo'naltiruvchingiz kim bo'lgan?", category: "Dalil" },
];

const categoryColors: Record<Question["category"], string> = {
  Tavsiya: "bg-warm/30 text-warm-foreground border-warm",
  Natija: "bg-sage/20 text-sage-foreground border-sage",
  Dalil: "bg-clay/15 text-clay border-clay",
};

export function InterviewTask() {
  const [questions, setQuestions] = useState<Question[]>([
    { text: "", category: "Tavsiya" },
    { text: "", category: "Natija" },
    { text: "", category: "Dalil" },
  ]);
  const [showSamples, setShowSamples] = useState(false);

  const update = (i: number, field: "text" | "category", value: string) => {
    const next = [...questions];
    next[i] = { ...next[i], [field]: value as Question["category"] };
    setQuestions(next);
  };

  const add = () => {
    setQuestions([...questions, { text: "", category: "Tavsiya" }]);
  };

  const remove = (i: number) => {
    setQuestions(questions.filter((_, idx) => idx !== i));
  };

  const filled = questions.filter((q) => q.text.trim().length > 5).length;

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 6
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Intervyu uchun savollar tuzing
        </h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Muvaffaqiyatli insonlardan biri bilan suhbatlashish imkoni bo'lganida, unga qanday savollar bilan murojaat qilardingiz? <strong>Tavsiya</strong>, <strong>Natija</strong>, <strong>Dalil</strong> turlaridagi savollar tuzing.
        </p>
      </div>

      <div className="space-y-3">
        {questions.map((q, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_auto_1fr_auto] gap-3 items-center p-3 rounded-xl border border-border bg-background"
          >
            <span className="number-display text-xl text-clay w-7 text-center">
              {i + 1}
            </span>
            <select
              value={q.category}
              onChange={(e) => update(i, "category", e.target.value)}
              className={[
                "px-3 py-1.5 rounded-full text-xs font-semibold border focus:outline-none focus:ring-2 focus:ring-ring",
                categoryColors[q.category],
              ].join(" ")}
            >
              <option value="Tavsiya">Tavsiya</option>
              <option value="Natija">Natija</option>
              <option value="Dalil">Dalil</option>
            </select>
            <input
              type="text"
              value={q.text}
              onChange={(e) => update(i, "text", e.target.value)}
              placeholder="Savolingizni yozing..."
              className="px-3 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={() => remove(i)}
              disabled={questions.length <= 1}
              aria-label="O'chirish"
              className="w-8 h-8 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          onClick={add}
          className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
        >
          + Yana savol qo'shish
        </button>
        <button
          onClick={() => setShowSamples(!showSamples)}
          className="px-5 py-2.5 rounded-full bg-warm/40 text-warm-foreground text-sm font-medium hover:bg-warm/60 transition-colors"
        >
          {showSamples ? "Namunalarni yashirish" : "💡 Namuna savollarni ko'rish"}
        </button>
        <span className="text-sm text-muted-foreground">
          To'ldirilgan: <strong className="text-foreground">{filled}</strong> ta
        </span>
      </div>

      {showSamples && (
        <div className="mt-6 p-5 rounded-2xl bg-muted/50 border border-border animate-fade-up">
          <h4 className="font-display text-lg font-semibold text-foreground mb-3">
            Namuna savollar
          </h4>
          <ul className="space-y-2">
            {sampleQuestions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span
                  className={[
                    "inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border flex-shrink-0 mt-0.5",
                    categoryColors[s.category],
                  ].join(" ")}
                >
                  {s.category}
                </span>
                <span className="text-foreground/80 leading-relaxed">{s.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

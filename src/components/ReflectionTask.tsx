import { useState } from "react";

const questions = [
  "Maqolada kundalik tutishning qanday foydali tomoni haqida so'z bormoqda? Sizning ham kundaligingiz bormi, undan qanday maqsadda foydalanasiz?",
  "Muallif kun davomidagi tanaffuslar samaradorlik, ijodkorlik va fikrlash salohiyatining oshishiga yordam berishini ta'kidlamoqda. Sizning bu boradagi fikringiz qanday?",
  "Kun davomida sport bilan shug'ullanishga qancha vaqt ajratasiz? Sport bilan shug'ullanish va muvaffaqiyat o'rtasida qanday bog'liqlik bor deb hisoblaysiz?",
  "Muvaffaqiyatga erishgan shaxslarning kitob mutolaasiga qanday yondashganiga e'tibor qarating. Sizning bu boradagi ko'rsatkichlaringiz qanday?",
  "Kimni yaxshi suhbatdosh deb bilasiz? Nima uchun?",
];

export function ReflectionTask() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const update = (i: number, v: string) => {
    const next = [...answers];
    next[i] = v;
    setAnswers(next);
  };

  const allFilled = answers.every((a) => a.trim().length >= 5);

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 4
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Savollarga o'z fikringiz bilan javob bering
        </h3>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i}>
            <label className="block font-medium text-foreground mb-2">
              <span className="text-clay font-display font-semibold mr-2">{i + 1}.</span>
              {q}
            </label>
            <textarea
              value={answers[i]}
              onChange={(e) => update(i, e.target.value)}
              rows={3}
              placeholder="Javobingizni shu yerga yozing..."
              className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm leading-relaxed resize-y"
            />
            <div className="mt-1 text-xs text-muted-foreground text-right">
              {answers[i].length} ta belgi
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allFilled}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-soft transition-all"
        >
          Javoblarni saqlash
        </button>
        {submitted && (
          <span className="text-sm text-success font-medium">
            ✓ Javoblaringiz qabul qilindi. O'qituvchingizga ko'rsating!
          </span>
        )}
      </div>
    </div>
  );
}

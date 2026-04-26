import { useState } from "react";

type Question = {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correct: string;
};

const questions: Question[] = [
  {
    id: "q1",
    text: "Maqola haqidagi qaysi fikr noto'g'ri ekanini aniqlang.",
    options: [
      { id: "A", text: "Maqolada berilgan tavsiyalar ilmiy tadqiqotlar va muvaffaqiyatli insonlarning kundalik odatlari asosida dalillangan." },
      { id: "B", text: "Maqolada muallifning shaxsiy kuzatuvlari va tajribalari asosida chiqargan xulosalari aks etgan." },
      { id: "C", text: "Maqolada mashhur insonlarning muvaffaqiyatga erishish sirlari haqidagi ma'lumotlar aks etgan." },
      { id: "D", text: "Maqolada har bir tavsiyaning muvaffaqiyatga erishishdagi hissasi alohida izohlab berilgan." },
    ],
    correct: "B",
  },
  {
    id: "q2",
    text: "Mizg'ib olish deganda qanday uyqu nazarda tutiladi?",
    options: [
      { id: "A", text: "Tushlik payti uxlash" },
      { id: "B", text: "Uyqu rejimiga amal qilish" },
      { id: "C", text: "Ozgina uxlash, ko'z ilintirish" },
      { id: "D", text: "Tiniqib, yetarlicha uxlash" },
    ],
    correct: "C",
  },
  {
    id: "q3",
    text: "Muallif ushbu fikrni ifodalar ekan, hayotiy shart-sharoitlarga qaramay nimani nazarda tutmoqda? \"Hayotiy shart-sharoitlarga qaramay, har birimiz dunyoning eng badavlat kishilaridan biri Bill Geytsning sevimli resursi bo'lgan kitoblarni o'qish imkoniga egamiz.\"",
    options: [
      { id: "A", text: "Kitob o'qish — pul talab qilmaydigan, hammaga ochiq imkoniyat ekanini" },
      { id: "B", text: "Faqat boy odamlar yaxshi kitoblarni sotib ola olishi mumkinligini" },
      { id: "C", text: "Bill Geyts kitob bilan emas, pul bilan boy bo'lganini" },
      { id: "D", text: "Kitob o'qish faqat katta kishilar uchun ekanini" },
    ],
    correct: "A",
  },
];

export function QuizTask() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const select = (qid: string, oid: string) => {
    if (checked) return;
    setAnswers({ ...answers, [qid]: oid });
  };

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-clay">
            Topshiriq 1
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
            Test savollari
          </h3>
        </div>
        <span className="hidden sm:inline-block text-xs px-3 py-1 rounded-full bg-sage/30 text-sage-foreground">
          {Object.keys(answers).length}/{questions.length} javob
        </span>
      </div>

      <div className="space-y-8">
        {questions.map((q, idx) => (
          <div key={q.id}>
            <p className="font-medium text-foreground mb-3">
              <span className="text-clay font-display font-semibold mr-2">{idx + 1}.</span>
              {q.text}
            </p>
            <div className="grid gap-2">
              {q.options.map((o) => {
                const selected = answers[q.id] === o.id;
                const isCorrect = checked && o.id === q.correct;
                const isWrong = checked && selected && o.id !== q.correct;
                return (
                  <button
                    key={o.id}
                    onClick={() => select(q.id, o.id)}
                    disabled={checked}
                    className={[
                      "text-left p-4 rounded-xl border transition-all flex gap-3 items-start",
                      isCorrect
                        ? "border-success bg-success/10"
                        : isWrong
                        ? "border-destructive bg-destructive/10"
                        : selected
                        ? "border-clay bg-clay/5"
                        : "border-border bg-background hover:border-clay/40 hover:bg-accent/30",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium",
                        isCorrect
                          ? "bg-success text-success-foreground"
                          : isWrong
                          ? "bg-destructive text-destructive-foreground"
                          : selected
                          ? "bg-clay text-clay-foreground"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      {o.id}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85">{o.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={Object.keys(answers).length < questions.length}
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
        {checked && (
          <p className="self-center text-sm text-muted-foreground">
            To'g'ri javoblar yashil rangda ko'rsatildi.
          </p>
        )}
      </div>
    </div>
  );
}

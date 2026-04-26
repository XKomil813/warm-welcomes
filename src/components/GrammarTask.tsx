import { useState } from "react";

/*
 * 10.17 — Matndan qoidalarga mos so'zlarni topish
 * Misollar va matnda ulardan keyingi mos so'zlar bor; o'quvchi to'g'ri kelishini tanlaydi.
 */

type RuleRow = {
  qoida: string;
  namuna: string;
  options: string[];
  answer: string; // matndagi to'g'ri so'z
};

const rules: RuleRow[] = [
  {
    qoida: "Qo'shma fe'lning qismlari ajratib yoziladi.",
    namuna: "sotib olmoq",
    options: ["o'qib chiqmoq", "o'qishni", "kitobxonlik"],
    answer: "o'qib chiqmoq",
  },
  {
    qoida: "Ko'makchi fe'l va to'liqsiz fe'l mustaqil fe'ldan ajratib yoziladi.",
    namuna: "ayta olmoq",
    options: ["yoza olmoq", "yozadi", "yozuvchi"],
    answer: "yoza olmoq",
  },
  {
    qoida: "Yildan-yilga, kundan-kunga kabi birikmalar ham ajratib yoziladi.",
    namuna: "ko'pdan ko'p",
    options: ["yildan-yilga", "ko'pchilik", "yillik"],
    answer: "yildan-yilga",
  },
  {
    qoida: "Har, hech, u, shu, o'sha, hamma kabi so'zlar o'zi birikib kelgan so'zdan ajratib yoziladi.",
    namuna: "hech qaysi",
    options: ["har kuni", "harchand", "hamisha"],
    answer: "har kuni",
  },
  {
    qoida: "-u, -yu, -da, -ku, -chi kabi bog'lovchi va yuklamalar o'zi qo'shilgan so'zdan chiziqcha bilan ajratib yoziladi.",
    namuna: "erta-yu kech",
    options: ["kel-da", "keladi", "kelgan"],
    answer: "kel-da",
  },
  {
    qoida: "Juft so'zlarning qismlari chiziqcha bilan ajratib yoziladi.",
    namuna: "oldi-sotdi",
    options: ["asta-sekin", "astoydil", "asta"],
    answer: "asta-sekin",
  },
];

export function GrammarTask() {
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const correctCount = rules.filter((r, i) => picks[i] === r.answer).length;

  const reset = () => {
    setPicks({});
    setChecked(false);
  };

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 7
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Matndan qoidalarga mos so'zlarni toping
        </h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Har bir qoida uchun <strong>namuna</strong> berilgan. O'sha qoidaga mos keladigan so'zni tanlang.
        </p>
      </div>

      <div className="overflow-x-auto -mx-2">
        <div className="min-w-[560px] px-2">
          <div className="grid grid-cols-[40px_1fr_180px_1fr] gap-3 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
            <span>№</span>
            <span>Qoida</span>
            <span>Namuna</span>
            <span>Matndagi so'z</span>
          </div>

          <div className="divide-y divide-border">
            {rules.map((r, i) => {
              const pick = picks[i];
              const isCorrect = checked && pick === r.answer;
              const isWrong = checked && pick && pick !== r.answer;
              return (
                <div
                  key={i}
                  className={[
                    "grid grid-cols-[40px_1fr_180px_1fr] gap-3 items-start px-3 py-4 transition-colors",
                    isCorrect ? "bg-success/10" : isWrong ? "bg-destructive/10" : "",
                  ].join(" ")}
                >
                  <span className="number-display text-lg text-clay">{i + 1}</span>
                  <span className="text-sm text-foreground/85 leading-relaxed">
                    {r.qoida}
                  </span>
                  <span className="font-display italic text-foreground bg-warm/30 inline-block px-3 py-1 rounded-md self-start text-sm">
                    {r.namuna}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {r.options.map((opt) => {
                      const selected = pick === opt;
                      const correct = checked && opt === r.answer;
                      const wrong = checked && selected && opt !== r.answer;
                      return (
                        <button
                          key={opt}
                          onClick={() => !checked && setPicks({ ...picks, [i]: opt })}
                          disabled={checked}
                          className={[
                            "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                            correct
                              ? "bg-success text-success-foreground border-success"
                              : wrong
                              ? "bg-destructive text-destructive-foreground border-destructive"
                              : selected
                              ? "bg-clay text-clay-foreground border-clay"
                              : "bg-background border-border hover:border-clay",
                          ].join(" ")}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={Object.keys(picks).length < rules.length}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-soft transition-all"
          >
            Tekshirish
          </button>
        ) : (
          <>
            <button
              onClick={reset}
              className="px-6 py-3 rounded-full bg-card border border-border font-medium hover:bg-accent transition-all"
            >
              Qaytadan urinish
            </button>
            <span className="text-sm text-foreground">
              To'g'ri javoblar: <strong className="text-success">{correctCount}</strong> / {rules.length}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

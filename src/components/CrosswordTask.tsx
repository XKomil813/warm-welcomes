import { useEffect, useMemo, useRef, useState } from "react";

/*
  Vertikal kalit so'z: MUVAFFAQIYAT (12 harf)
  Har bir qator — gorizontal so'z. Belgilangan ustun (col) — kalit harf joyi.
*/

type Row = {
  n: number;
  letter: string; // kalit harf (MUVAFFAQIYAT)
  answer: string; // gorizontal javob (katta harflarda, bo'sh joysiz)
  col: number; // kalit harf gorizontal so'zda nechanchi pozitsiyada (0-indeksli)
  clue: string; // savol/ta'rif
};

const ROWS: Row[] = [
  { n: 1,  letter: "M", answer: "MAQSAD",     col: 0, clue: "Inson o'z hayotida erishmoqchi bo'lgan asosiy niyat." },
  { n: 2,  letter: "U", answer: "UYQU",       col: 0, clue: "Tananing dam olishi uchun zarur bo'lgan jarayon (kuniga 7–8 soat tavsiya etiladi)." },
  { n: 3,  letter: "V", answer: "VAQT",       col: 0, clue: "Eng qimmatli, qaytarib bo'lmaydigan resurs." },
  { n: 4,  letter: "A", answer: "ADABIYOT",   col: 0, clue: "Bill Geyts yiliga 50 ta o'qiydigan narsa turi (umumiy nomi)." },
  { n: 5,  letter: "F", answer: "FIKR",       col: 0, clue: "Miyada tug'iladigan g'oya, mulohaza." },
  { n: 6,  letter: "F", answer: "FAOLIYAT",   col: 0, clue: "Insonning muayyan maqsad yo'lidagi mehnati, harakati." },
  { n: 7,  letter: "A", answer: "AQL",        col: 0, clue: "Tafakkur va tushunish qobiliyati." },
  { n: 8,  letter: "Q", answer: "QALAM",      col: 0, clue: "Kundalik yozish uchun zarur asbob." },
  { n: 9,  letter: "I", answer: "INTILISH",   col: 0, clue: "Maqsad sari kuchli ichki harakat, istak." },
  { n: 10, letter: "Y", answer: "YOZUV",      col: 0, clue: "Fikrlarni qog'ozga tushirish jarayoni; kundalikning asosi." },
  { n: 11, letter: "A", answer: "ANIQLIK",    col: 0, clue: "Vaqt va so'zda buzilmaslik — muvaffaqiyatli insonning fazilati." },
  { n: 12, letter: "T", answer: "TAJRIBA",    col: 0, clue: "Xato va sinovlardan to'plangan amaliy bilim." },
];

// Maksimal kenglik (keyin va oldin bo'sh kataklar)
const maxLeft = Math.max(...ROWS.map((r) => r.col));
const maxRight = Math.max(...ROWS.map((r) => r.answer.length - r.col - 1));
const TOTAL_COLS = maxLeft + 1 + maxRight;
const KEY_COL = maxLeft; // kalit ustun indeksi

export function CrosswordTask() {
  const [values, setValues] = useState<string[][]>(() =>
    ROWS.map((r) => Array(r.answer.length).fill(""))
  );
  const [checked, setChecked] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[][]>([]);

  useEffect(() => {
    inputsRef.current = ROWS.map((r) => Array(r.answer.length).fill(null));
  }, []);

  const handleChange = (rowIdx: number, cellIdx: number, val: string) => {
    const ch = val.toUpperCase().slice(-1).replace(/[^A-ZA-ZʼʻЎҚҒҲ']/g, "");
    const next = values.map((row) => [...row]);
    next[rowIdx][cellIdx] = ch;
    setValues(next);

    if (ch && cellIdx + 1 < ROWS[rowIdx].answer.length) {
      inputsRef.current[rowIdx][cellIdx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    rowIdx: number,
    cellIdx: number
  ) => {
    if (e.key === "Backspace" && !values[rowIdx][cellIdx] && cellIdx > 0) {
      inputsRef.current[rowIdx][cellIdx - 1]?.focus();
    }
    if (e.key === "ArrowRight" && cellIdx + 1 < ROWS[rowIdx].answer.length) {
      inputsRef.current[rowIdx][cellIdx + 1]?.focus();
    }
    if (e.key === "ArrowLeft" && cellIdx > 0) {
      inputsRef.current[rowIdx][cellIdx - 1]?.focus();
    }
  };

  const reset = () => {
    setValues(ROWS.map((r) => Array(r.answer.length).fill("")));
    setChecked(false);
  };

  const reveal = () => {
    setValues(ROWS.map((r) => r.answer.split("")));
    setChecked(true);
  };

  const correctCount = useMemo(() => {
    return values.reduce((sum, row, i) => {
      const ans = ROWS[i].answer;
      return sum + (row.join("") === ans ? 1 : 0);
    }, 0);
  }, [values]);

  const keyWord = ROWS.map((r, i) => values[i][r.col] || "·").join("");
  const allCorrect = correctCount === ROWS.length;

  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 8 · Krossvord
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Vertikal kalit so'z: <em className="text-clay not-italic">MUVAFFAQIYAT</em>
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Pastdagi savollar yordamida har bir gorizontal so'zni toping. Sariq ustundagi harflar yuqoridan pastga "MUVAFFAQIYAT" so'zini hosil qiladi.
        </p>
      </div>

      {/* Krossvord setkasi */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-block min-w-full">
          {ROWS.map((r, rowIdx) => {
            const offset = KEY_COL - r.col; // chap tomondagi bo'sh kataklar soni
            return (
              <div key={r.n} className="flex items-center gap-1 mb-1">
                {/* Qator raqami */}
                <span className="number-display text-sm md:text-base text-clay w-7 text-right pr-2">
                  {r.n}
                </span>

                {/* Setka */}
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL_COLS }).map((_, colIdx) => {
                    const cellIdx = colIdx - offset;
                    const inAnswer = cellIdx >= 0 && cellIdx < r.answer.length;
                    const isKey = colIdx === KEY_COL;

                    if (!inAnswer) {
                      return (
                        <div
                          key={colIdx}
                          className="w-8 h-8 md:w-10 md:h-10"
                          aria-hidden
                        />
                      );
                    }

                    const value = values[rowIdx][cellIdx] || "";
                    const correctChar = r.answer[cellIdx];
                    const isCorrect = checked && value === correctChar;
                    const isWrong = checked && value && value !== correctChar;

                    return (
                      <input
                        key={colIdx}
                        ref={(el) => {
                          if (inputsRef.current[rowIdx]) {
                            inputsRef.current[rowIdx][cellIdx] = el;
                          }
                        }}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(rowIdx, cellIdx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, rowIdx, cellIdx)}
                        className={[
                          "w-8 h-8 md:w-10 md:h-10 text-center font-display text-base md:text-xl font-semibold uppercase rounded-md border-2 outline-none transition-colors",
                          isKey
                            ? "bg-warm/50 border-clay text-clay"
                            : "bg-background border-border text-foreground",
                          isCorrect ? "!bg-success/20 !border-success" : "",
                          isWrong ? "!bg-destructive/15 !border-destructive" : "",
                          "focus:ring-2 focus:ring-ring",
                        ].join(" ")}
                        aria-label={`Qator ${r.n}, katak ${cellIdx + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kalit so'z natijasi */}
      <div className="mt-6 p-4 rounded-xl bg-warm/25 border border-clay/30 flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-clay">
          Kalit so'z:
        </span>
        <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.3em] text-foreground">
          {keyWord}
        </span>
        {allCorrect && (
          <span className="ml-auto text-sm font-medium text-success">
            ✓ Barcha so'zlar to'g'ri!
          </span>
        )}
      </div>

      {/* Savollar jadvali */}
      <div className="mt-8">
        <h4 className="font-display text-xl font-semibold text-foreground mb-3">
          Savollar
        </h4>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-warm/30">
              <tr className="text-left">
                <th className="px-4 py-3 w-16 font-medium uppercase text-xs tracking-wider text-clay">
                  Qator
                </th>
                <th className="px-4 py-3 w-24 font-medium uppercase text-xs tracking-wider text-clay">
                  Kalit harf
                </th>
                <th className="px-4 py-3 font-medium uppercase text-xs tracking-wider text-clay">
                  Ta'rif
                </th>
                <th className="px-4 py-3 w-20 font-medium uppercase text-xs tracking-wider text-clay">
                  Harflar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {ROWS.map((r) => (
                <tr key={r.n} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3 number-display text-base text-clay">{r.n}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-warm/50 border border-clay/30 font-display font-semibold text-clay">
                      {r.letter}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-foreground/85 leading-relaxed">{r.clue}</td>
                  <td className="px-4 py-3 text-muted-foreground tabular-nums">
                    {r.answer.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Boshqaruv tugmalari */}
      <div className="mt-8 flex flex-wrap gap-3 items-center">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-soft transition-all"
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
        <button
          onClick={reveal}
          className="px-6 py-3 rounded-full bg-card border border-border font-medium hover:bg-accent transition-all"
        >
          Javoblarni ko'rsatish
        </button>
        {checked && (
          <span className="ml-auto text-sm text-muted-foreground">
            To'g'ri so'zlar:{" "}
            <strong className="text-foreground">
              {correctCount} / {ROWS.length}
            </strong>
          </span>
        )}
      </div>
    </div>
  );
}

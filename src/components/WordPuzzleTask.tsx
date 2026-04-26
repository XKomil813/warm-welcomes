import { useState } from "react";

type Puzzle = {
  letters: string[];
  answer: string;
  hint: string;
};

const puzzles: Puzzle[] = [
  { letters: ["P", "A", "T", "T", "E", "N"], answer: "PATENT", hint: "Edison 1100 tasiga egalik qilgan" },
  { letters: ["S", "R", "S", "U", "R", "E"], answer: "RESURS", hint: "Geytsning sevimli kitobi — bu bilim ..." },
  { letters: ["O", "Q", "B", "S", "I", "L", "T"], answer: "QOBILIYAT", hint: "Insondagi iste'dod va salohiyat" },
  { letters: ["S", "E", "T", "R", "S"], answer: "STRES", hint: "Tanaffus uni kamaytiradi" },
  { letters: ["A", "Y", "P", "E", "M", "I", "T", "A"], answer: "EMPATIYA", hint: "Boshqa odamning his-tuyg'usini tushunish" },
  { letters: ["U", "T", "I", "D", "E"], answer: "ETIUD", hint: "Bo'sh harf — keyin to'ldiriladi" },
];

function shuffle(arr: string[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function PuzzleCircle({ puzzle, idx }: { puzzle: Puzzle; idx: number }) {
  const [order, setOrder] = useState<number[]>([]);
  const [shuffled] = useState(() => shuffle(puzzle.letters));
  const [checked, setChecked] = useState<null | boolean>(null);

  const click = (i: number) => {
    if (order.includes(i)) {
      setOrder(order.filter((x) => x !== i));
    } else {
      setOrder([...order, i]);
    }
    setChecked(null);
  };

  const word = order.map((i) => shuffled[i]).join("");

  const check = () => {
    setChecked(word.toUpperCase() === puzzle.answer.toUpperCase());
  };

  const reset = () => {
    setOrder([]);
    setChecked(null);
  };

  const radius = 70;
  const total = shuffled.length;

  return (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium tracking-wider uppercase text-clay">
          So'z {idx + 1}
        </span>
        <span className="text-xs text-muted-foreground">{puzzle.letters.length} ta harf</span>
      </div>

      <div className="relative mx-auto" style={{ width: 200, height: 200 }}>
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/60" />
        {shuffled.map((letter, i) => {
          const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          const pos = order.indexOf(i);
          const picked = pos !== -1;
          return (
            <button
              key={i}
              onClick={() => click(i)}
              style={{ left: x - 22, top: y - 22 }}
              className={[
                "absolute w-11 h-11 rounded-full font-display font-semibold text-lg transition-all",
                picked
                  ? "bg-clay text-clay-foreground scale-105 shadow-soft"
                  : "bg-background border border-border text-foreground hover:border-clay",
              ].join(" ")}
            >
              {letter}
              {picked && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-sage text-sage-foreground text-[10px] flex items-center justify-center font-sans">
                  {pos + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-center">
        <div
          className={[
            "min-h-[2.5rem] py-2 px-4 rounded-lg font-display text-xl tracking-widest font-semibold",
            checked === true
              ? "bg-success/15 text-success"
              : checked === false
              ? "bg-destructive/15 text-destructive"
              : "bg-muted text-foreground",
          ].join(" ")}
        >
          {word || "—"}
        </div>
        <p className="text-xs text-muted-foreground mt-2 italic">💡 {puzzle.hint}</p>
      </div>

      <div className="mt-4 flex gap-2 justify-center">
        <button
          onClick={check}
          disabled={!order.length}
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium disabled:opacity-40"
        >
          Tekshirish
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:bg-accent"
        >
          Tozalash
        </button>
      </div>
    </div>
  );
}

export function WordPuzzleTask() {
  return (
    <div className="bg-card rounded-3xl shadow-soft p-6 md:p-10 border border-border">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-clay">
          Topshiriq 3
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
          Harflarni ma'lum ketma-ketlikda tartiblab so'z hosil qiling
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Aylanadagi harflarni kerakli tartibda bosib, so'zni yig'ing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {puzzles.map((p, i) => (
          <PuzzleCircle key={i} puzzle={p} idx={i} />
        ))}
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SecretsList } from "@/components/SecretsList";
import { PeopleGallery } from "@/components/PeopleGallery";
import { QuizTask } from "@/components/QuizTask";
import { MatchTask } from "@/components/MatchTask";
import { WordPuzzleTask } from "@/components/WordPuzzleTask";
import { ReflectionTask } from "@/components/ReflectionTask";
import { TableTask } from "@/components/TableTask";
import { InterviewTask } from "@/components/InterviewTask";
import { GrammarTask } from "@/components/GrammarTask";
import { CrosswordTask } from "@/components/CrosswordTask";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muvaffaqiyatli insonning 6 siri | 8-sinf Ona tili" },
      {
        name: "description",
        content:
          "8-sinf ona tili 10.14-mavzu: Muvaffaqiyatli insonning 6 siri. Bill Geyts, Ilon Mask, Stiv Jobs va boshqa buyuk shaxslar kundalik odatlari hamda interaktiv topshiriqlar.",
      },
      { property: "og:title", content: "Muvaffaqiyatli insonning 6 siri" },
      {
        property: "og:description",
        content: "Buyuk insonlarning kundalik odatlari va interaktiv topshiriqlar.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-paper-texture">
      <Navbar />
      <Hero />
      <SecretsList />
      <PeopleGallery />

      <section id="topshiriqlar" className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-warm/40 text-warm-foreground text-xs font-medium tracking-wider uppercase mb-4">
              Amaliyot
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground text-balance">
              Topshiriqlar
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Mavzuni o'zlashtirganingizni tekshiring. Sakkiz xil topshiriq sizni kutmoqda.
            </p>
          </div>

          <div className="space-y-10">
            <QuizTask />
            <MatchTask />
            <WordPuzzleTask />
            <ReflectionTask />
            <TableTask />
            <InterviewTask />
            <GrammarTask />
            <CrosswordTask />
          </div>
        </div>
      </section>

      <footer className="border-t border-border mt-10 py-10 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p className="font-display text-lg text-foreground mb-2">
            Muvaffaqiyatli insonning 6 siri
          </p>
          <p>8-sinf · Ona tili · 10.14-mavzu · O'quv maqsadida tayyorlangan</p>
        </div>
      </footer>
    </main>
  );
}

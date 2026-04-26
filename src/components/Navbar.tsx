import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sirlar", label: "6 sir" },
    { href: "#shaxslar", label: "Shaxslar" },
    { href: "#topshiriqlar", label: "Topshiriqlar" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-clay text-clay-foreground flex items-center justify-center font-display font-semibold text-sm group-hover:scale-110 transition-transform">
            6
          </span>
          <span className="font-display font-semibold text-lg">Sir</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 hover:text-clay transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-5 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/80 hover:text-clay"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

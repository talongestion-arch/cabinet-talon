import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          Cabinet Talon
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <Link href="/about" className="transition hover:text-slate-950">
            À propos
          </Link>
          <Link href="/realisations" className="transition hover:text-slate-950">
            Réalisations
          </Link>
          <Link href="/blog" className="transition hover:text-slate-950">
            Blog
          </Link>
          <Link href="/contact" className="transition hover:text-slate-950">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Devis gratuit
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="grid min-h-screen place-items-center px-6 py-20">
        <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Page introuvable</p>
          <h1 className="mt-6 text-4xl font-semibold text-slate-950">Nous n'avons pas trouvé cette page.</h1>
          <p className="mt-4 text-slate-600">Retournez à l'accueil ou explorez nos services et réalisations.</p>
          <div className="mt-8">
            <Link href="/" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

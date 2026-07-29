export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_36%),linear-gradient(180deg,rgba(249,250,251,1),rgba(255,255,255,1))] py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Réalisations
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Projets d'architecture et rénovation livrés avec soin.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Découvrez quelques-uns des projets que nous avons accompagnés en conception, rénovation énergétique et aménagement intérieur.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Maison individuelle à Arras</h2>
              <p className="mt-4 text-slate-600">Extension contemporaine, isolation renforcée et optimisation des espaces de vie.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Appartement haut de gamme à Gauchy</h2>
              <p className="mt-4 text-slate-600">Réaménagement complet pour un confort maximal et un style élégant.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Bureau réinventé pour une PME</h2>
              <p className="mt-4 text-slate-600">Design fonctionnel, luminosité accrue et optimisation des flux de travail.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Studio urbain sur mesure</h2>
              <p className="mt-4 text-slate-600">Transformation d'un espace restreint en un intérieur moderne et utile.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

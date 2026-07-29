export default function AmenagementInterieurArticle() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-6 lg:px-8">
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Blog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Aménagement intérieur : optimisez chaque m²</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Des stratégies pour mieux organiser les volumes, améliorer la circulation et donner une vraie identité à votre intérieur.
            </p>
          </div>
          <article className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Conception sur mesure</h2>
            <p className="mt-6 text-slate-600 leading-8">
              L'aménagement intérieur efficace repose sur une analyse des usages et une conception adaptée aux besoins de la famille ou de l'entreprise.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-slate-950">Ambiance et fonctionnalité</h3>
            <p className="mt-4 text-slate-600 leading-8">
              Nos projets associent matériaux durables et design élégant pour créer des espaces qui inspirent et rendent la vie quotidienne plus agréable.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

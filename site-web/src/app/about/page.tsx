import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_36%),linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,1))] py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              À propos
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Cabinet Talon, expertise en architecture performante et rénovations durables.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Nous accompagnons les particuliers et les professionnels depuis Arras, Gauchy et toute la région Hauts-de-France pour créer des espaces plus beaux, plus efficaces et plus responsables.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Vision</h2>
              <p className="mt-4 text-slate-600">
                Concevoir des projets qui mettent l'humain, la performance énergétique et l'esthétique au cœur de chaque chantier.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Approche</h2>
              <p className="mt-4 text-slate-600">
                Audit technique, design sur mesure et pilotage opérationnel pour garantir qualité, respect des coûts et maîtrise des délais.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Engagement</h2>
              <p className="mt-4 text-slate-600">
                Des réalisations conçues pour durer, avec un suivi personnalisé et une exigence environnementale mesurée.
              </p>
            </article>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-10 text-white">
            <h2 className="text-3xl font-semibold">Nous sommes votre partenaire de confiance</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Cabinet Talon allie expertise technique, créativité architecturale et sens du service pour proposer des solutions adaptées aux enjeux de rénovation énergétique, d'extension et d'aménagement d'intérieur.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Notre équipe</h2>
              <p className="mt-4 text-slate-600">
                Une équipe experte en architecture, ingénierie et coordination de chantier pour assurer chaque étape du projet.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Votre projet</h2>
              <p className="mt-4 text-slate-600">
                Nous étudions chaque projet avec attention, du diagnostic initial à la livraison finale, pour offrir un résultat performant et esthétique.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Parlez-nous de votre projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

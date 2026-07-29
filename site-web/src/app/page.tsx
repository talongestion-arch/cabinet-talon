import Link from "next/link";

const services = [
  {
    title: "Conception architecturale",
    description:
      "Plans sur mesure, études techniques et solutions esthétiques pour chaque projet.",
  },
  {
    title: "Aménagement intérieur",
    description:
      "Optimisation des volumes, design fonctionnel et ambiance contemporaine.",
  },
  {
    title: "Rénovation durable",
    description:
      "Réhabilitation technique et énergétique des bâtiments existants.",
  },
];

const steps = [
  {
    title: "1. Écoute et étude",
    description:
      "Comprendre vos besoins, analyser le site et définir un concept global.",
  },
  {
    title: "2. Conception et suivi",
    description:
      "Des plans détaillés jusqu’au suivi de chantier, nous restons à vos côtés.",
  },
  {
    title: "3. Livraison maîtrisée",
    description:
      "Un projet livré dans les délais, avec qualité et respect de votre budget.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_33%)] py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Architecture & rénovation
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Concevons des lieux utiles, durables et totalement sur mesure.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Cabinet Talon accompagne particuliers et entreprises en Hauts-de-France pour transformer chaque projet en une réalisation élégante, performante et inspirée.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Demander un devis
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Voir les services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Nos engagements</p>
                <h2 className="text-3xl font-semibold text-white">Un accompagnement clair à chaque étape</h2>
                <div className="grid gap-4 rounded-3xl bg-slate-950/90 p-6">
                  <p className="text-slate-300">Conception personnalisée, suivi de chantier et solutions techniques pour maîtriser coûts, délais et performance.</p>
                  <ul className="space-y-3 text-slate-200">
                    <li>• Conception 3D et plans techniques</li>
                    <li>• Suivi de chantier rigoureux</li>
                    <li>• Rendement énergétique optimisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-24 text-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Nos services</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">De l’idée à la réalisation, nous structurons votre projet.</h2>
            <p className="text-base leading-8 text-slate-600">
              Architecture, rénovation, aménagement intérieur et modélisation 3D : des prestations complètes pour une expérience projet sereine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Service</div>
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-slate-100 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Méthode</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Une approche structurée pour chaque projet.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Cabinet Talon combine créativité, expertise technique et suivi de chantier afin de livrer des espaces qui durent et qui vous ressemblent.
              </p>
            </div>

            <div className="grid gap-6">
              {steps.map((step) => (
                <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">{step.title}</p>
                  <p className="mt-4 text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Réalisations</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Des projets qui allient esthétique et fonctionnalité.</h2>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-slate-100 shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Projet</p>
                <h3 className="mt-4 text-2xl font-semibold">Maison rénovée à Arras</h3>
                <p className="mt-4 text-slate-300">Extension, isolation performante et aménagement intérieur sur mesure pour une maison familiale.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Projet</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">Appartement contemporain</h3>
                <p className="mt-4 text-slate-600">Réaménagement haut de gamme et optimisation de la lumière naturelle dans un espace urbain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-slate-100 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
              <p className="text-4xl font-semibold text-white">150+</p>
              <p className="mt-3 text-slate-400">Clients accompagnés</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
              <p className="text-4xl font-semibold text-white">20 ans</p>
              <p className="mt-3 text-slate-400">d’expérience en architecture</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
              <p className="text-4xl font-semibold text-white">45+</p>
              <p className="mt-3 text-slate-400">Projets réalisés</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-24 text-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Contact</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Prêt à lancer votre projet ?</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Échangeons sur votre chantier, votre rénovation ou votre support d’aménagement intérieur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Prendre contact
                </Link>
                <a
                  href="mailto:contact@cabinettalon.fr"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  contact@cabinettalon.fr
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Cabinet Talon</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">Arras / Gauchy</p>
              <div className="mt-6 space-y-3 text-slate-600">
                <p>Tel : 03 00 00 00 00</p>
                <p>Email : contact@cabinettalon.fr</p>
              </div>
              <div className="mt-8 rounded-[1.75rem] bg-slate-950 p-6 text-slate-100">
                <p className="font-semibold">Suivi personnalisé</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">Rendez-vous rapide, étude de faisabilité et proposition sur mesure pour votre projet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

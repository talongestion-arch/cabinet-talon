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

const values = [
  {
    title: "Stratégie claire",
    description: "Des objectifs définis dès l’avant-projet pour un chantier maîtrisé.",
  },
  {
    title: "Design responsable",
    description: "Des solutions esthétiques et techniques qui respectent les budgets et l’environnement.",
  },
  {
    title: "Suivi rapproché",
    description: "Un interlocuteur unique pour piloter l’ensemble du projet, de l’étude à la livraison.",
  },
];

const stats = [
  { value: "150+", label: "clients accompagnés" },
  { value: "20 ans", label: "d’expérience" },
  { value: "45+", label: "projets réalisés" },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_33%)] py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
                Architecture & rénovation
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Cabinet Talon transforme vos espaces en projets durables et sur mesure.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                De l’étude initiale au suivi de chantier, nous concevons des bâtiments performants, esthétiques et parfaitement adaptés à votre mode de vie.
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
                  Voir nos services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Valeurs</p>
                <h2 className="text-3xl font-semibold text-white">Architecture engagée, maîtrisée et performante.</h2>
                <div className="grid gap-4 rounded-3xl bg-slate-950/90 p-6">
                  <p className="text-slate-300">Nous mettons la clarté, la technique et le suivi de chantier au cœur de chaque réalisation.</p>
                  <ul className="space-y-3 text-slate-200">
                    <li>• Études techniques précises</li>
                    <li>• Plans 2D/3D et rendus immersifs</li>
                    <li>• Qualité, budget et délai maîtrisés</li>
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
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Des solutions complètes, de l’idée au chantier.</h2>
            <p className="text-base leading-8 text-slate-600">
              Architecture, rénovation, aménagement intérieur et modélisation 3D : nous accompagnons chaque étape avec professionnalisme et réactivité.
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

      <section className="bg-white py-24 text-slate-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Approche</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Une méthode structurée pour chaque projet.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Cabinet Talon organise votre projet en trois phases transparentes : étude, conception et livraison, avec un suivi précis à chaque étape.
              </p>
            </div>

            <div className="grid gap-6">
              {values.map((value) => (
                <div key={value.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-600">{value.title}</p>
                  <p className="mt-4 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-slate-100 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-slate-400">{stat.label}</p>
              </div>
            ))}
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
                Échangeons sur votre chantier, votre rénovation ou votre projet d’aménagement intérieur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Parlez-nous de votre projet
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

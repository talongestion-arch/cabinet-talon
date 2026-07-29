import Link from "next/link";

const posts = [
  {
    title: "Rénover en maîtrisant vos coûts énergétiques",
    excerpt: "Nos conseils pour diminuer la facture énergétique et améliorer le confort de votre habitat.",
    href: "/blog/renovation-energetique",
  },
  {
    title: "Aménagement intérieur : optimisez chaque m²",
    excerpt: "Des solutions pratiques et esthétiques pour tirer le meilleur parti de votre espace.",
    href: "/blog/amenagement-interieur",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Blog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Actualités et conseils architecture.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Découvrez nos meilleures pratiques pour rénovation durable, design intérieur et suivi de chantier.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.href} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-4 text-slate-600">{post.excerpt}</p>
                <Link href={post.href} className="mt-6 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                  Lire l'article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

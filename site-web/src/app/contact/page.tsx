export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function ContactPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Contactez Cabinet Talon pour votre projet.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              Renseignez vos coordonnées et votre besoin, nous vous rappelons rapidement pour une première consultation.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="contact@exemple.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Parlez-nous de votre projet"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Envoyer la demande
              </button>
            </form>

            <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Cabinet Talon</p>
                  <p className="mt-3 text-lg font-semibold">Arras / Gauchy</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <p className="mt-2 text-sm leading-6">contact@cabinettalon.fr</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Téléphone</p>
                  <p className="mt-2 text-sm leading-6">03 00 00 00 00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Derniers contacts</p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {contacts.length > 0 ? (
                      contacts.map((contact) => (
                        <div key={contact.id} className="rounded-2xl bg-slate-900 p-4">
                          <p className="font-semibold text-slate-100">{contact.name}</p>
                          <p>{contact.email}</p>
                        </div>
                      ))
                    ) : (
                      <p>Aucun contact enregistré pour le moment.</p>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

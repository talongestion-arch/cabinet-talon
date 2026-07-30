const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/20 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Cabinet Talon</p>
            <p className="max-w-xl text-sm leading-6 text-slate-300">
              Agence d’architecture en Hauts-de-France, spécialisée en rénovation performante, construction durable et design intérieur sur mesure.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</p>
              <p className="mt-3 text-sm leading-6">Arras / Gauchy</p>
              <p className="text-sm leading-6">contact@cabinettalon.fr</p>
              <p className="text-sm leading-6">03 00 00 00 00</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Services</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                <li>Rénovation énergétique</li>
                <li>Architecture d’intérieur</li>
                <li>Suivi de chantier</li>
                <li>Modélisation 3D</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-900/10 pt-6 text-sm text-slate-500">
          © {currentYear} Cabinet Talon. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

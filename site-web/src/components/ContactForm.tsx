"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const json = await response.json();
        throw new Error(json?.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (reason) {
      setStatus("error");
      setError(reason instanceof Error ? reason.message : "Impossible d'envoyer le message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
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
          value={form.email}
          onChange={handleChange}
          required
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
          value={form.message}
          onChange={handleChange}
          required
          className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="Parlez-nous de votre projet"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      {status === "success" && <p className="text-sm text-emerald-700">Message envoyé, nous revenons vers vous rapidement.</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Envoi..." : "Envoyer la demande"}
      </button>
    </form>
  );
}

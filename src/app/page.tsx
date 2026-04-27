import Image from "next/image";
import { Download, AlertTriangle, Ruler, FileX } from "lucide-react";

export default function Sistema90gLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-300 mb-6">
              <AlertTriangle className="h-4 w-4" />
              Per cucinieri e falegnami
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              La cucina è pronta, ma il frigo non entra. <span className="text-red-500">800€ buttati.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Succede ogni settimana: misure sbagliate, clienti furiosi, margini che vanno in fumo. 
              Sistema90G è la checklist in 9 minuti che azzera gli errori di rilievo prima di produrre.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#scarica" className="rounded-xl bg-red-600 px-6 py-4 text-lg font-bold text-white hover:bg-red-700">
                Scarica Gratis il PDF “10 Errori che Costano Migliaia di Euro”
              </a>
              <p className="text-sm text-gray-400 self-center">PDF + Video 3 min. Zero spam.</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-errore-800.png"
              alt="Cucina montata con frigo che non entra, X rossa e 800 euro persi"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3 ERRORI */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Questi 3 errori ti stanno già costando margine
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-8">
            <Ruler className="h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">Frigo che non entra</h3>
            <p className="mt-2 text-gray-600">Nicchia 60cm, frigo 65cm. Smonti tutto e ricompatti. Cliente incazzato, 2 giorni persi.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <FileX className="h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">Lavastoviglie spostata</h3>
            <p className="mt-2 text-gray-600">Attacco acqua a 40cm invece che 30cm. Modifica in opera, taglio zoccolo, bestemmia del montatore.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <AlertTriangle className="h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">Boiserie tagliata male</h3>
            <p className="mt-2 text-gray-600">Presa dietro al pannello. Seghi la boiserie in cantiere. Il cliente vede tutto. Reputazione a zero.</p>
          </div>
        </div>
      </section>

      {/* SOLUZIONE */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Sistema90G: 9 minuti per non sbagliare più
            </h2>
            <ul className="mt-6 space-y-4 text-lg">
              <li>✅ Checklist di 27 punti critici da spuntare sul posto</li>
              <li>✅ Sequenza foto da fare col telefono per avere prove</li>
              <li>✅ Scheda unica che architetto + falegname + montatore capiscono</li>
            </ul>
            <p className="mt-6 text-gray-600">
              Usata da 140+ laboratori. Risparmio medio: 2.400€/anno in errori evitati.
            </p>
          </div>
          <Image
            src="/mockup-pdf.png"
            alt="Mockup PDF Sistema90G con checklist e schemi"
            width={500}
            height={700}
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="scarica" className="bg-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-black">
            Scarica ora il PDF gratuito
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            “10 Errori che Costano Migliaia di Euro” + Mini-video 3 min con il metodo.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-4">
            <input
              type="email"
              placeholder="La tua email migliore"
              className="rounded-xl border-0 px-5 py-4 text-gray-900"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-6 py-4 text-lg font-bold hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Sì, voglio smettere di buttare soldi
            </button>
            <p className="text-xs text-gray-500">100% privacy. Cancellati quando vuoi.</p>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 Sistema90G di Gian Carlo. P.IVA 00000000000
      </footer>
    </main>
  );
}
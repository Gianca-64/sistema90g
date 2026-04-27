 import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function Sistema90gLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image 
              src="/logo-90g.jpg" 
              alt="Sistema90G" 
              width={80} 
              height={80}
              className="mb-8 rounded-full"
            />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Stai per firmare<br />
              15.000€ di cucina?<br />
              Ti evito l'errore da<br />
              800€.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Sono Gian Carlo. Non faccio rilievi. Analizzo il progetto del 
              mobilificio e ti do la Checklist delle 3 quote che devi farti 
              garantire SCRITTE prima di firmare. Se sbagliano loro, 
              pagano loro. Non tu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#prezzi" className="rounded-xl bg-[#B5946A] px-6 py-4 text-lg font-bold text-white hover:bg-[#9d7e58]">
                Vedi il Check-up<br />147€
              </a>
              <a href="https://wa.me/393275478485" target="_blank" className="rounded-xl border-2 border-[#B5946A] px-6 py-4 text-lg font-medium text-[#B5946A]">
                Scrivimi su<br />WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Consulenza d'uso 100% online • No rilievi tecnici • Consegna max 24h • sistema90g@icloud.com
            </p>
          </div>
          <div>
            <Image
              src="/hero-errore-800.png"
              alt="Errore invisibile nel progetto"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3 ERRORI */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            I 3 errori che ti costano 800€ dopo il montaggio
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Il 70% li scopre quando è troppo tardi. Io te li faccio intercettare PRIMA di firmare.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <Image
                src="/problema-frigo.png"
                alt="Il frigo non entra"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">PROBLEMA #1: "Il frigo non entra"</h3>
              <p className="mt-2 text-gray-600">
                Lo scopri a cucina montata. Mobile da rifare: <strong>800€ buttati.</strong>
              </p>
              <p className="mt-3 text-sm text-[#B5946A]">
                → Nel Check-up ti dico quale quota farti scrivere per non rischiare.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <Image
                src="/problema-scarico.png"
                alt="Devo spaccare il muro"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">PROBLEMA #2: "Devo spaccare il muro"</h3>
              <p className="mt-2 text-gray-600">
                Idraulico dice "impossibile". Muro da rompere: <strong>600€ di muratore.</strong>
              </p>
              <p className="mt-3 text-sm text-[#B5946A]">
                → Nel Check-up ti dico le 2 domande da fare per smascherarli prima.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="rounded-lg border-2 border-red-200 p-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-bold text-red-600">ANTA BLOCCATA</p>
                    <p className="text-sm text-red-500">500€ DI DANNO</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">PROBLEMA #3: "L'anta sbatte"</h3>
              <p className="mt-2 text-gray-600">
                Cassetto bloccato dalla maniglia del forno. Colonna inutilizzabile. <strong>500€ di danno.</strong>
              </p>
              <p className="mt-3 text-sm text-[#B5946A]">
                → Nel Check-up ti spiego i 3 rischi d'uso che il rendering non mostra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREZZI */}
      <section id="prezzi" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Scegli come vuoi blindarti</h2>
          <p className="mt-4 text-center text-gray-600">
            Lavoro 100% online su tutta Italia. <strong>Il progetto parte solo dopo pagamento completo. Non eseguo rilievi tecnici.</strong>
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#B5946A] bg-white p-8">
              <div className="mb-4 inline-block rounded-full bg-[#B5946A] px-3 py-1 text-xs font-bold text-white">
                PIÙ SCELTO
              </div>
              <h3 className="text-2xl font-bold">Check-up Pre-Firma</h3>
              <p className="mt-2 text-4xl font-black">147€</p>
              <Image
                src="/checklist-mockup.png"
                alt="Checklist 3 Quote"
                width={300}
                height={400}
                className="my-6 rounded-lg border"
              />
              <p className="font-semibold">Ferma l'errore da 800€ prima di firmare</p>
              <p className="mt-2 text-sm text-gray-600">Per chi ha il progetto del mobilificio ma non si fida</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>✓ Analisi progetto + foto ambiente del mobilificio</li>
                <li>✓ Audio 10min: ti spiego i 3 rischi d'uso invisibili</li>
                <li>✓ PDF "Checklist 3 Quote da Farti Garantire"</li>
                <li>✓ Le 3 domande killer da fare al venditore</li>
                <li>✓ Cosa farti scrivere nel preventivo per tutelarti</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Blindatura Totale</h3>
              <p className="mt-2 text-4xl font-black">297€</p>
              <p className="mt-4 text-sm font-semibold">Vedi le soluzioni se il mobilificio dice "non si può"</p>
              <p className="text-xs text-gray-500">Per chi vuole dormire tranquillo con piano B</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>✓ Tutto il Check-up Pre-Firma</li>
                <li>✓ 3 Render concettuali delle soluzioni alternative</li>
                <li>✓ PDF "Script Negoziazione" per parlare col venditore</li>
                <li>✓ Revisione 1 email/chat col mobilificio fino alla firma</li>
                <li>✓ Consegna max 72h</li>
                <li>✓ Si parte dopo pagamento completo</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold">SOS Post-Firma</h3>
              <p className="mt-2 text-4xl font-black">497€</p>
              <p className="mt-4 text-sm font-semibold">Hai già firmato e scoperto l'errore?</p>
              <p className="text-xs text-gray-500">Per chi deve limitare i danni col mobilificio</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>✓ Analisi contratto + progetto firmato</li>
                <li>✓ Strategia verbale per trattare col mobilificio</li>
                <li>✓ Cosa chiedere, come dirlo, quando minacciare legale</li>
                <li>✓ Solo consulenza strategica. No rilievi tecnici.</li>
                <li>✓ Consegna in 48h via chiamata + PDF</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COME LAVORO */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 text-center text-sm">
            ⚠️ <strong>COME FUNZIONA: 1. Paghi online → 2. Invii progetto via WhatsApp → 3. Consegno in 24/72h</strong>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Come lavoro - Zero rischi per te</h2>
          
          <div className="mt-12 space-y-8">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#B5946A] text-xl font-bold text-white">1</div>
              <div>
                <h3 className="text-xl font-bold">Paghi e blocchi il tuo slot</h3>
                <p className="mt-2 text-gray-600">Scegli il Check-up, paghi online. Così ho la certezza di dedicarti il tempo.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#B5946A] text-xl font-bold text-white">2</div>
              <div>
                <h3 className="text-xl font-bold">Invii il progetto del mobilificio</h3>
                <p className="mt-2 text-gray-600">Foto progetto, render, lista elettrodomestici. Via WhatsApp. Non mi servono misure tue.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#B5946A] text-xl font-bold text-white">3</div>
              <div>
                <h3 className="text-xl font-bold">Analizzo e ti blindo</h3>
                <p className="mt-2 text-gray-600">Individuo i 3 rischi d'uso invisibili. Ti registro un audio + ti mando la Checklist con le quote da farti garantire scritte. <strong>Consegna max 24h.</strong></p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#B5946A] text-xl font-bold text-white">4</div>
              <div>
                <h3 className="text-xl font-bold">Vai dal mobilificio blindato</h3>
                <p className="mt-2 text-gray-600">Con la Checklist e le 3 domande, sai cosa pretendere. Se sbagliano loro, pagano loro. Non tu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">Chi risolve il problema</h2>
          <p className="mt-6 text-lg text-gray-600">
            Sono Gian Carlo, consulente tecnico cucine da 15 anni. Lavoro 100% online su tutta Italia.
            Ho visto troppi clienti disperati perché hanno scoperto l'errore a cucina montata.
          </p>
          <p className="mt-4 text-xl font-semibold text-[#B5946A]">
            Il mio lavoro: dirti cosa farti garantire PRIMA che costi 800€.
          </p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Hai il progetto della cucina?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Non firmare al buio. Con 147€ ti dico le 3 quote che devi farti scrivere per non pagare tu gli errori.
          </p>
          <a href="#prezzi" className="mt-8 inline-block rounded-xl bg-[#00E676] px-8 py-4 text-xl font-bold text-gray-900 hover:bg-[#00d66a]">
            Voglio il Check-up 147€
          </a>
          <p className="mt-6 text-sm text-gray-400">
            Pagamento anticipato → Invio progetto → Consegna audio+PDF in 24h
          </p>
        </div>
      </section>

      {/* FOOTER SENZA P.IVA */}
      <footer className="bg-gray-800 py-6 text-center text-xs text-gray-400">
        <p>Sistema90G di Gian Carlo - Consulenza d'uso pre-firma per cucine.</p>
        <p className="mt-1">Non esegue rilievi tecnici né si sostituisce a progettisti, architetti o installatori.</p>
        <p className="mt-2">Contatti: sistema90g@icloud.com • WhatsApp +39 327 547 8485</p>
      </footer>
    </main>
  )
}
 import Image from "next/image";
import { Ruler, Cpu, Camera, FileCheck } from "lucide-react";

export default function Sistema90gLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight">
              Sistema90G
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Il metodo in 90 giorni per architetti e progettisti: dal rilievo al rendering, senza perdere tempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/dashboard" className="rounded-xl bg-black px-6 py-4 text-lg font-bold text-white hover:bg-gray-800">
                Accedi all'app
              </a>
              <a href="#livelli" className="rounded-xl border border-gray-300 px-6 py-4 text-lg font-medium">
                Scopri i 4 livelli
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/checklist-mockup.png"
              alt="Sistema90G Dashboard"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* 4 LIVELLI */}
      <section id="livelli" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">I 4 livelli di Sistema90G</h2>
          
          <div className="mt-16 grid gap-12">
            {/* LIVELLO 1 + 2 */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Image
                src="/hero-errore-800.png"
                alt="Rilievo Smart e Progetto AI"
                width={500}
                height={350}
                className="rounded-xl shadow-lg"
              />
              <div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-8 w-8 text-black" />
                  <h3 className="text-2xl font-bold">1. Rilievo Smart</h3>
                </div>
                <p className="mt-3 text-gray-600">App mobile per misure precise in 15 minuti. Stop errori di quotatura.</p>
                
                <div className="mt-6 flex items-center gap-3">
                  <Cpu className="h-8 w-8 text-black" />
                  <h3 className="text-2xl font-bold">2. Progetto AI</h3>
                </div>
                <p className="mt-3 text-gray-600">L'AI genera 3 layout ottimizzati in automatico partendo dal tuo rilievo.</p>
              </div>
            </div>

            {/* LIVELLO 3 + 4 */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="md:order-2">
                <Image
                  src="/problema-frigo.png"
                  alt="Rendering Express e Consegna"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <div className="flex items-center gap-3">
                  <Camera className="h-8 w-8 text-black" />
                  <h3 className="text-2xl font-bold">3. Rendering Express</h3>
                </div>
                <p className="mt-3 text-gray-600">Render fotorealistici pronti in 90 minuti per convincere il cliente subito.</p>

                <div className="mt-6 flex items-center gap-3">
                  <FileCheck className="h-8 w-8 text-black" />
                  <h3 className="text-2xl font-bold">4. Consegna Cliente</h3>
                </div>
                <p className="mt-3 text-gray-600">Tavole esecutive e capitolato pronti da firmare per falegname e cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - SENZA P.IVA */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
          <Image 
            src="/logo-90g.jpg" 
            alt="Sistema90G" 
            width={120} 
            height={40} 
            className="mx-auto mb-4"
          />
          <p>© 2026 Sistema90G. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  )
}
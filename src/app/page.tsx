 import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Analisi Tecniche
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Consulenze, analisi tecniche, e analisi preventive
          </p>
          <Link 
            href="/analisi-distribuzione-interna"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Verifica la tua pianta - 97€
          </Link>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Come ti aiuto</h2>
        
        <div className="grid gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Analisi Distribuzione 97€</h3>
            <p className="text-slate-600 mb-4">
              Verifico la pianta prima che firmi. Percorsi, distanze minime, norme di abitabilità. 
              Ti evito errori da 13.000€ che scopri solo dopo il rogito.
            </p>
            <Link 
              href="/analisi-distribuzione-interna" 
              className="text-green-700 font-semibold hover:underline"
            >
              Dettagli →
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Analisi Tecnica Completa 240€</h3>
            <p className="text-slate-600 mb-4">
              Distribuzione + impianti + strutturale. Per ristrutturazioni e acquisti importanti.
            </p>
            <Link 
              href="/analisi-tecnica-completa" 
              className="text-green-700 font-semibold hover:underline"
            >
              Dettagli →
            </Link>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Analisi Cucina 57€</h3>
            <p className="text-slate-600 mb-4">
              Verifica misure, triangolo di lavoro, prese, scarichi prima di ordinare la cucina.
            </p>
            <Link 
              href="/analisi-cucina" 
              className="text-green-700 font-semibold hover:underline"
            >
              Dettagli →
            </Link>
          </div>
        </div>
      </section>

      {/* Sezione Blog */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Articoli Tecnici</h2>
            <Link 
              href="/blog" 
              className="text-green-700 font-semibold hover:underline"
            >
              Vedi tutti →
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/blog/errori-distribuzione-open-space-appartamento" className="block bg-white p-6 rounded-lg border hover:border-green-600 transition">
              <h3 className="font-bold mb-2">Open space: 5 errori di distribuzione</h3>
              <p className="text-sm text-slate-600">
                Errori tecnici che fanno perdere fino a 13.000€ in soluzioni correttive.
              </p>
            </Link>

            <Link href="/blog/distanze-minime-camera-norme-abitabilita" className="block bg-white p-6 rounded-lg border hover:border-green-600 transition">
              <h3 className="font-bold mb-2">Distanze minime in camera</h3>
              <p className="text-sm text-slate-600">
                Norme di abitabilità e quote da rispettare per letto, armadi e passaggi.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
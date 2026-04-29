 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Check-up Progetto Cucina - Analisi tecnica prima della firma',
  description: 'Analisi completa del progetto cucina: misure, impianti, ergonomia, quote tecniche. Report PDF per ordinare senza sorprese in cantiere.'
}

export default function CheckUpCucina() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO TECNICO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Check-up Progetto</h1>
          <p className="text-xl text-gray-600 mb-8">
            Analisi tecnica completa del progetto cucina prima della firma. Verifico misure, impianti ed ergonomia.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Check-up Progetto →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100 relative">
          <Image 
            src="/hero-verifica-cucina-800.jpeg"
            alt="Check-up Progetto Cucina"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa controllo nel progetto</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Quote e misure reali vs progetto</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Confronto le misure del rilievo con il disegno del mobiliere. Verifico tolleranze muri fuori squadro, 
              altezze soffitto, posizione pilastri. Se le quote non tornano, ti dico dove andrà adattato il mobile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Compatibilità impianti esistenti</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo posizione scarico lavello, attacchi acqua calda/fredda, prese elettriche, punto gas. 
              Verifico che lavastoviglie, forno e piano induzione abbiano linee dedicate. Se serve spostare impianti, te lo segnalo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Ergonomia e altezze di lavoro</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Verifico altezza piano di lavoro in base a chi cucina, profondità top, distanza pensili, 
              altezza cappa. Controllo che ante e cassetti non sbattano contro muri o elettrodomestici.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Ventilazione e scarico cappa</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Verifico diametro e posizione foro cappa. Controllo che il percorso del tubo sia lineare senza curve a 90°. 
              Se la cappa è a ricircolo, verifico che sia specificato nel capitolato.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Report tecnico PDF</strong> con tutte le verifiche effettuate</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Checklist modifiche</strong> da girare al mobiliere prima dell'ordine</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Schede tecniche</strong> elettrodomestici verificati con misure nicchie</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>1 call di chiarimento</strong> inclusa per discutere il report</div></li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">Consegna in 48 ore lavorative dall'invio del progetto.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Progetto da Zero - Cucina completa con capitolato',
  description: 'Progetto cucina da piantina vuota: sopralluogo, 3D, capitolato tecnico, distinta elettrodomestici. Preventivi confrontabili da più mobilifici.'
}

export default function ProgettoDaZero() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">PROGETTO COMPLETO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Progetto da Zero</h1>
          <p className="text-xl text-gray-600 mb-8">
            Parti da zero? Progetto la cucina completa con capitolato blindato per preventivi confrontabili.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Progetto da Zero →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100 relative">
          <Image 
            src="/hero-progetto-zero-800.jpeg"
            alt="Progetto da Zero"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Come funziona</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>1. Sopralluogo e rilievo misure</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Vengo a casa tua o analizzo planimetria e foto. Rilevo tutte le quote, posizione impianti, 
              scarichi, vincoli strutturali. Definisco con te esigenze, budget e stile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>2. Progettazione 3D con misure standard</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Disegno la cucina in 3D usando moduli e misure standard che tutti i mobilifici possono produrre. 
              Non ti lego a un fornitore. Ricevi render fotorealistici e piante quotate.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>3. Capitolato tecnico blindato</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Scrivo il capitolato con spessori, ferramenta, cerniere, maniglie, zoccolo, finiture. 
              Specifico tutto quello che deve essere incluso per evitare preventivi con voci mancanti.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>4. Distinta elettrodomestici e impianti</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Ti fornisco elenco elettrodomestici con misure nicchie, potenze, schede tecniche. 
              Indico predisposizioni impianti necessarie per evitare adeguamenti dopo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Render 3D fotorealistici</strong> della cucina completa</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Piante quotate</strong> in PDF scala 1:50 per mobilifici</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Capitolato tecnico</strong> con tutte le specifiche materiali</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Distinta elettrodomestici</strong> con misure e potenze</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>2 revisioni incluse</strong> per modifiche layout</div></li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">Consegna in 7 giorni lavorativi dal sopralluogo. Valido per preventivi da qualsiasi mobilificio.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Add-on Capitolato - Revisione materiali e ferramenta',
  description: 'Revisione del capitolato cucina: spessori, ferramenta, maniglie, zoccolo. Add-on al Check-up Progetto per blindare i materiali.'
}

export default function AddOnCapitolato() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">ADD-ON</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Add-on Capitolato</h1>
          <p className="text-xl text-gray-600 mb-8">
            Revisione completa del capitolato materiali. Solo con Check-up Progetto.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Aggiungi Add-on Capitolato →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100 relative">
          <Image 
            src="/hero-capitolato-800.jpeg"
            alt="Add-on Capitolato"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico nel capitolato</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Spessori ante, fianchi e top</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo che siano specificati gli spessori reali: 18mm vs 22mm per ante, 3cm vs 4cm per top. 
              Se non c'è scritto, ti dico cosa chiedere al mobiliere per evitare sorprese al montaggio.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Ferramenta: guide e cerniere</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Verifico marca e modello di guide cassetti e cerniere. Controllo che siano ammortizzate ed estrazione totale. 
              Se il capitolato dice solo "ferramenta di serie", ti indico cosa farti scrivere per esteso.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Zoccolo, maniglie e finiture</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo materiale zoccolo, altezza, tipologia maniglie, profili di finitura. 
              Verifico che siliconatura top-parete e smaltimento imballi siano inclusi nel montaggio.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3"><span className="text-green-700">✓</span>Voci escluse e sovrapprezzi</h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Evidenzio tutte le voci "escluso" e "opzionale". Ti dico cosa integrare prima della firma 
              per evitare preventivi che lievitano del 20% in corso d'opera.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Report capitolato annotato</strong> con richieste di integrazione</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Lista voci mancanti</strong> da farti scrivere prima della firma</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Confronto specifiche</strong> tra preventivo e standard di mercato</div></li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">Disponibile solo con Check-up Progetto. Consegna insieme al Check-up.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
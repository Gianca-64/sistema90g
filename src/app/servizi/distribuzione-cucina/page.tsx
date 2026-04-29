 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Analisi Distribuzione Cucina - Verifica pianta prima del cantiere',
  description: 'Analizzo la pianta del tuo open space o cucina. Verifico flussi, passaggi minimi, triangoli di lavoro e orientamenti. Report con correzioni in 24h.'
}

export default function DistribuzioneCucina() {
  return (
    <main>
      <section className="bg-gray-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/servizi" className="text-sm text-gray-500 hover:underline mb-6 inline-block">← Tutti i servizi</Link>
          <div className="text-xs text-green-700 font-semibold mb-3 uppercase">SERVIZIO TECNICO</div>
          <h1 className="text-5xl font-serif font-bold mb-4">Analisi Distribuzione</h1>
          <p className="text-xl text-gray-600 mb-8">
            Verifico flussi, passaggi e funzionalità della pianta prima che inizino i lavori edili.
          </p>
          <Link 
            href="/contatti" 
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 inline-block"
          >
            Richiedi Analisi Distribuzione →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="h-96 overflow-hidden rounded-lg bg-gray-100 relative">
          <Image 
            src="/hero-distribuzione-800.jpeg"
            alt="Analisi Distribuzione"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold mb-8">Cosa verifico nella tua pianta</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3">
              <span className="text-green-700">✓</span>
              Percorsi cucina-soggiorno e incroci di flusso
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Analizzo il tragitto dal frigo al tavolo, dal piano cottura al lavello, dalla dispensa alla zona lavoro. 
              Se i percorsi si incrociano o attraversano zone relax, ti propongo alternative di layout. 
              Verifico che non ci siano corridoi ciechi o passaggi obbligati attraverso l'area pranzo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3">
              <span className="text-green-700">✓</span>
              Distanze minime tra arredi per passaggi funzionali
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Controllo quote critiche: 120cm minimi tra isola e mobili perimetrali, 90cm dietro sedie per alzarsi dal tavolo, 
              80cm per aprire ante e cassetti senza sbattere. Se le distanze non tornano, calcolo lo spazio reale disponibile 
              e ti dico di quanto devi ridurre l'isola o spostare il tavolo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3">
              <span className="text-green-700">✓</span>
              Posizione impianti rispetto alla distribuzione arredi
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Confronto la posizione di scarichi, prese, attacchi gas/acqua con il progetto arredi. 
              Verifico che il lavello cada sul muro con lo scarico, che il piano induzione abbia la linea 32A sotto, 
              che la cappa sia nel raggio di 2m dal foro. Se serve spostare impianti, te lo segnalo prima di tracciare i muri.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex gap-3">
              <span className="text-green-700">✓</span>
              Ingombri porte, finestre e aperture
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              Simulo l'apertura di ogni porta e finestra. Controllo che non sbattano contro isola, tavolo o pensili. 
              Verifico che le finestre non cadano dietro al piano cottura o al lavello. Se c'è interferenza, 
              propongo spostamento arredi o modifica aperture prima di ordinare i serramenti.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">Cosa ricevi</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Elaborato grafico quotato</strong> in PDF scala 1:50 con la tua pianta analizzata</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Evidenziazione criticità</strong> con note rosse sui punti da correggere</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Soluzioni alternative</strong> con 1-2 proposte di layout correttivo</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>Lista modifiche</strong> da girare a impresa/mobiliere prima del cantiere</div></li>
              <li className="flex gap-3"><span className="text-green-700 font-bold">→</span><div><strong>1 revisione inclusa</strong> se cambi idea su disposizione</div></li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm">Consegna in 24 ore lavorative via email dall'invio della planimetria.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
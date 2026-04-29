 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '7 Verifiche misure progetto cucina prima di firmare | Check-up 147€',
  description: 'Frigo che non entra, cassetti che sbattono, piano troppo basso. Le 7 misure che il mobilificio deve darti per iscritto prima della firma.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Verifica Progetto · 27 Aprile 2026 · 8 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            7 Verifiche misure progetto cucina prima di firmare
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Il progetto sembra perfetto sul disegno. Poi arriva il montaggio e il frigo non entra di 2cm. 
              <strong> Errore medio: 5.000€ di modifiche post-montaggio.</strong>
            </p>
            <p className="mb-8">
              Fai queste 7 verifiche PRIMA di dare l'ok al mobilificio. Ti salvano da errori che scopri solo quando è troppo tardi.
            </p>
            
            <h2>1. Misura i fuorisquadro reali del vano</h2>
            <p>
              I muri non sono mai a 90°. Se il mobile è preciso al mm senza tolleranza, non entra. 
              <strong>Lascia 2cm di agio per lato.</strong> Il mobilificio deve rilevare i fuorisquadro, non tu.
            </p>
            
            <h2>2. Controlla scarichi e attacchi esistenti</h2>
            <p>
              Gas, acqua calda/fredda e scarico lavello devono stare dove dice il progetto. 
              Spostare lo scarico dopo il massetto costa <strong>800€ + piastrellista.</strong>
            </p>

            <h2>3. Verifica altezza finestra vs piano lavoro</h2>
            <p>
              Se la finestra apre a 85cm e il top è a 90cm, l'anta non apre. O alzi il top o cambi finestra: 
              <strong>1.200€ di modifica.</strong>
            </p>

            <h2>4. Conta le prese elettriche reali</h2>
            <p>
              Servono minimo 6 prese: frigo, forno, lavastoviglie, cappa, piano lavoro x2. 
              Il mobilificio ne predispone 2. Aggiungerle dopo: <strong>220€ a presa + muratore.</strong>
            </p>

            <h2>5. Misura profondità colonne frigo/forno</h2>
            <p>
              Il frigo sporge 5cm, il forno 3cm. La colonna deve essere 60cm + spessore anta + aria. 
              Altrimenti l'elettrodomestico sporge e rovina l'estetica.
            </p>

            <h2>6. Verifica distanza cappa da piano cottura</h2>
            <p>
              Minimo 65cm per gas, 50cm per induzione secondo UNI 7129. Se è più bassa, 
              <strong>non passa il collaudo e perdi la garanzia.</strong>
            </p>

            <h2>7. Controlla aperture complete elettrodomestici</h2>
            <p>
              Frigo, lavastoviglie e forno devono aprire al 100% senza sbattere su muro, isola o altre ante. 
              Prova con sagoma in cartone prima di firmare.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">LIVELLO 2 CUCINA</p>
            <h3 className="font-bold text-xl mb-3">Check-up 147€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Hai già il progetto? Controllo 12 quote critiche in 48h. Report PDF + lista modifiche per il mobilificio + call 30min.
            </p>
            <Link 
              href="/servizi/check-up-cucina"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Attiva Check-up 147€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Risposta in 48h</p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Altri articoli</h4>
            <div className="space-y-4">
              <Link href="/blog/errori-distribuzione-open-space-appartamento" className="block group">
                <p className="text-sm font-semibold text-green-700">LIVELLO 1</p>
                <p className="text-sm group-hover:text-green-700 transition">
                  Open space: 5 errori di distribuzione che costano 13.000€ dopo il rogito
                </p>
              </Link>
              <Link href="/blog/induzione-vs-gas-verifiche-impianti" className="block group">
                <p className="text-sm font-semibold text-green-700">LIVELLO 2 CUCINA</p>
                <p className="text-sm group-hover:text-green-700 transition">
                  Piano induzione: serve aumentare il contatore? Verifica prima di scegliere
                </p>
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}
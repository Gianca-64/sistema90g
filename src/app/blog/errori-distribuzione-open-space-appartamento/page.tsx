 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Open space: 5 errori di distribuzione che costano 13.000€ dopo il rogito',
  description: 'Percorsi incrociati, distanze non rispettate, impianti impossibili. Controlla la planimetria prima di comprare casa o ristrutturare.'
}

export default function Articolo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        
        <article className="lg:col-span-2">
          <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block hover:underline">← Torna al blog</Link>
          <p className="text-sm text-slate-500 mb-2">Distribuzione Interna · 10 Gennaio 2026 · 7 min</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Open space: 5 errori di distribuzione che costano 13.000€ dopo il rogito
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              Gli open space sembrano facili. In realtà nascondono 5 errori tecnici che ti costano 
              tra 2.000€ e 13.000€ in soluzioni correttive che scopri solo dopo il rogito.
            </p>
            <p className="mb-8">
              <strong>Il problema:</strong> una volta tracciati i muri, spostarli costa come rifare casa.
            </p>
            
            <h2>1. Percorsi incrociati cucina-soggiorno</h2>
            <p>
              Se il percorso dalla cucina al tavolo attraversa l'area relax, avrai sempre piatti sporchi in vista. 
              Errore da <strong>3.500€ di parete in cartongesso</strong> per dividere dopo.
            </p>
            <Image 
              src="/blog/open-space-planimetria.jpg" 
              alt="Planimetria open space errori" 
              width={800} 
              height={500} 
              className="rounded-lg my-8" 
            />
            
            <h2>2. Distanze minime non rispettate</h2>
            <p>
              Tra divano e TV servono almeno 2,2m. Tra tavolo e parete 90cm per passare con le sedie. 
              Se la pianta non rispetta questi numeri, vivi scomodo per sempre. <strong>Non si corregge.</strong>
            </p>
            
            <h2>3. Impianti cucina impossibili</h2>
            <p>
              Scarico troppo lontano dalla colonna. Cappa senza uscita esterna. Gas che passa in mezzo al soggiorno. 
              Costo spostamento impianti a massetto fatto: <strong>4.000€ + demolizioni.</strong>
            </p>

            <h2>4. Finestre che tagliano i mobili</h2>
            <p>
              Finestra a 80cm da terra dove dovrebbe andare la cucina. Porta-finestra che impedisce il divano. 
              Devi rinunciare a mobili o luce. <strong>Vale 6.000€ di spazio perso.</strong>
            </p>

            <h2>5. Pilastri in mezzo alla stanza</h2>
            <p>
              Quel pilastro al centro non lo sposti. Se non progetti i flussi attorno, ti mangia 4mq utili. 
              <strong>Vale 8.000€ di spazio buttato</strong> a 2.000€/mq.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-green-700 mb-2">LIVELLO 1</p>
            <h3 className="font-bold text-xl mb-3">Distribuzione 97€</h3>
            <p className="text-sm text-slate-700 mb-4">
              Verifica pianta appartamento completo. 12 punti di controllo su impianti, norme, flussi. 
              Report PDF 15 pagine in 24h + call 30min.
            </p>
            <Link 
              href="/servizi/distribuzione"
              className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Analizza Distribuzione 97€
            </Link>
            <p className="text-xs text-slate-500 mt-3">Eviti errori da 10.000€</p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Altri articoli</h4>
            <div className="space-y-4">
              <Link href="/blog/verifiche-misure-progetto-cucina" className="block group">
                <p className="text-sm font-semibold text-green-700">LIVELLO 2 CUCINA</p>
                <p className="text-sm group-hover:text-green-700 transition">
                  7 Verifiche misure progetto cucina prima di firmare
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
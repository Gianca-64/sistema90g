 import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open Space: 3 errori di distribuzione che rovinano la cucina',
  description: 'Isola che blocca il passaggio, triangolo lavoro interrotto, flussi incrociati. Verifica tecnica prima di montare. Check-up Progetto €69.',
  alternates: { canonical: 'https://www.sistema90g.it/blog/open-space-errori' },
}

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="lg:flex lg:gap-12">
        <article className="lg:w-2/3">
          <div className="text-sm text-green-700 font-semibold mb-2 uppercase">LAYOUT</div>
          <h1 className="text-4xl font-serif font-bold mb-8">
            Open Space: 3 errori di distribuzione che rovinano la cucina
          </h1>
          
          <div className="h-80 overflow-hidden rounded-lg bg-gray-100 relative mb-12">
            <Image 
              src="/blog/open-space-errori-hero.jpg"
              alt="Pianta open space con errori di distribuzione cucina evidenziati"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Nell'open space sbagli 1 quota e ti giochi 30mq. Questi 3 errori li vedo su 8 progetti su 10.
            </p>
            
            <h2>1. Isola che blocca il passaggio - danno €2000</h2>
            <p>
              Se tra isola e muro/divano hai meno di 110cm, non passano 2 persone. Risultato: rifai il top e sposti gli impianti. 
              Minimo 110cm, meglio 120cm se hai cassetti che si aprono.
            </p>
            
            <h2>2. Triangolo lavoro interrotto - danno ergonomia</h2>
            <p>
              Frigo, lavello, piano cottura devono formare un triangolo libero. Se ci metti l'isola in mezzo, 
              fai 40 passi in più a ogni pasto. Norma: somma lati triangolo tra 3.6m e 6.6m.
            </p>

            <h2>3. Flussi incrociati soggiorno-cucina - danno vivibilità</h2>
            <p>
              Se chi esce dal divano incrocia chi apre il forno, l'open space non funziona. 
              La cucina deve avere un flusso indipendente, non di attraversamento.
            </p>
          </div>
        </article>

        <aside className="lg:w-1/3 mt-12 lg:mt-0">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 sticky top-24">
            <p className="font-semibold mb-2">Trigger: Invio foto ambiente + progetto</p>
            <p className="text-gray-700 mb-4">
              <strong>CHECK-UP PROGETTO €69</strong><br/>
              Analisi foto ambiente + progetto mobilificio. Trovo problematiche ergonomiche, 
              abbinamenti materiali sbagliati, elettrodomestici incompatibili.
            </p>
            <Link 
              href="/contatti" 
              className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800"
            >
              Check-Up Progetto €69 →
            </Link>
            <p className="text-xs text-gray-600 mt-3">
              Report PDF con criticità + soluzioni in 24h. Max 700 caratteri.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}

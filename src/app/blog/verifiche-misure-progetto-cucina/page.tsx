import Link from 'next/link'

export const metadata = {
  title: '7 Verifiche tecniche prima di confermare il progetto cucina',
  description: 'Check-list per validare quote, impianti e conformità norme UNI del progetto cucina prima dell\'ordine.'
}

export default function Articolo() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-green-700 text-sm mb-6 inline-block">← Torna al blog</Link>
      
      <p className="text-sm text-slate-500 mb-2">Verifica Progetto · 27 Aprile 2026 · 8 min</p>
      <h1 className="text-4xl font-bold mb-6 leading-tight">7 Verifiche tecniche prima di confermare il progetto cucina</h1>
      
      <div className="prose prose-lg prose-slate">
        <p className="lead">Fai queste 7 verifiche PRIMA di dare l'ok al mobilificio. Ti salvano da errori da 5.000€ che scopri solo al montaggio.</p>
        
        <ol className="space-y-6">
          <li>
            <strong>1. Misura i fuorisquadro reali</strong><br/>
            I muri non sono mai a 90°. Se il mobile è preciso al mm senza tolleranza, non entra. Lascia 2cm di agio per lato.
          </li>
          <li>
            <strong>2. Controlla scarichi e attacchi esistenti</strong><br/>
            Gas, acqua calda/fredda e scarico lavello devono stare dove dice il progetto. Spostare lo scarico dopo il massetto costa 800€.
          </li>
          <li>
            <strong>3. Verifica altezza finestra vs top</strong><br/>
            Se la finestra apre a 85cm e il top è a 90cm, l'anta non apre. O alzi il top o cambi finestra: 1.200€ di modifica.
          </li>
          <li>
            <strong>4. Conta le prese elettriche reali</strong><br/>
            Servono minimo 6 prese: frigo, forno, lavastoviglie, cappa, piano lavoro x2. Il mobilificio ne predispone 2. Aggiungerle dopo: 220€ a presa.
          </li>
          <li>
            <strong>5. Misura profondità colonne frigo/forno</strong><br/>
            Il frigo sporge 5cm, il forno 3cm. La colonna deve essere 60cm + spessore anta + aria. Altrimenti l'elettrodomestico sporge.
          </li>
          <li>
            <strong>6. Verifica distanza cappa da piano cottura</strong><br/>
            Minimo 65cm per gas, 50cm per induzione secondo UNI. Se è più bassa, non passa il collaudo e non hai garanzia.
          </li>
          <li>
            <strong>7. Controlla aperture complete</strong><br/>
            Frigo, lavastoviglie e forno devono aprire al 100% senza sbattere su muro, isola o altre ante. Prova con sagoma in cartone.
          </li>
        </ol>
        
        <div className="bg-slate-50 p-6 rounded-lg mt-12 not-prose">
          <h3 className="font-bold text-xl mb-2">Non hai tempo di controllare tutto?</h3>
          <p className="mb-4">Lo faccio io per te. Check-up completo 147€ in 48h con report PDF + correzioni al progetto.</p>
          <a href="https://wa.me/393275478485?text=Check-up%20Progetto%20147%E2%82%AC" 
             target="_blank"
             className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Attiva Check-up 147€
          </a>
        </div>
      </div>
    </main>
  )
}
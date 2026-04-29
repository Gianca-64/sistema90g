 import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Progetto cucina da zero: come farlo senza errori',
  description: 'Ordine corretto delle fasi: prima gli impianti, poi i muri, poi i mobili. La sequenza che evita cantieri infiniti e modifiche in corso.'
}

export default function ProgettoDaZero() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">← Blog</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <div className="text-xs text-green-700 font-semibold mb-2 uppercase">PROGETTO</div>
        <h1 className="mb-6">Progetto cucina da zero: come si fa senza errori</h1>
        
        <div className="relative w-full h-96 rounded-lg overflow-hidden my-8 not-prose">
          <Image 
            src="/hero-progetto-zero-800.jpeg" 
            alt="Progetto cucina 3D da piantina vuota"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="lead">
          Parti da zero? L'ordine delle fasi è fondamentale. Prima gli impianti, poi i muri, poi i mobili. 
          Se inverti, paghi modifiche edili.
        </p>
        
        <h2>Il problema del "progetto gratis" del mobilificio</h2>
        <p>
          1. <strong>Quote personalizzate:</strong> Usa misure non standard che solo lui produce.<br/>
          2. <strong>Materiali proprietari:</strong> Specifica finiture che ha solo lui.<br/>
          3. <strong>Nessun capitolato tecnico:</strong> Non ti dà l'elenco di spessori, ferramenta, cerniere.
        </p>
        
        <h2>Come funziona un progetto indipendente</h2>
        <p>
          <strong>1. Sopralluogo misure:</strong> Rilievo di tutte le quote, impianti, scarichi.<br/>
          <strong>2. Progettazione 3D:</strong> Disegno la cucina con misure standard che tutti i mobilifici possono fare.<br/>
          <strong>3. Capitolato tecnico:</strong> Scrivo spessori, ferramenta, cerniere, elettrodomestici.<br/>
          <strong>4. Confronto preventivi:</strong> Stesso progetto, stesso capitolato. Ricevi preventivi confrontabili.
        </p>

        <h2>Vantaggi</h2>
        <p>
          Con progetto indipendente eviti il lock-in: se il primo mobilificio ti tratta male, hai già altri preventivi pronti.
          Confronti mele con mele, non preventivi con voci diverse.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Progetto da Zero</h3>
          <p className="mb-6">
            Parti da zero? Progetto la cucina con te. Sopralluogo + 3D + capitolato + distinta elettrodomestici.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">890€</span>
            <Link 
              href="/servizi/progetto-da-zero"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
            >
              Scopri il servizio →
            </Link>
          </div>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Progetto cucine da zero con capitolato blindato.
        </p>
      </article>
    </main>
  )
}
 import Link from 'next/link'
import Image from 'next/image'

const servizi = [
  {
    nome: 'Consulenza Finiture',
    descrizione: 'Risolviamo dubbi tecnici su materiali, colori e top. Analisi compatibilità e rischi nascosti.',
    link: '/contatti',
    icona: '🎨'
  },
  {
    nome: 'Revisione Capitolato',
    descrizione: 'Controlliamo spessori, ferramenta e voci nascoste nel capitolato del mobiliere prima della firma.',
    link: '/contatti',
    icona: '📋'
  },
  {
    nome: 'Check-up Progetto',
    descrizione: 'Analizziamo foto ambiente + progetto mobiliere. Troviamo problemi ergonomici e tecnici.',
    link: '/contatti',
    icona: '✓'
  },
  {
    nome: 'Blindatura Pre-Contratto',
    descrizione: 'Checklist clausole critiche da verificare. Eviti sorprese da migliaia di euro prima di firmare.',
    link: '/contatti',
    icona: '🛡️'
  },
  {
    nome: 'Progetto da Zero',
    descrizione: 'Progettiamo noi la cucina completa con 3D e capitolato blindato. Vai dal mobiliere preparato.',
    link: '/contatti',
    icona: '🏗️'
  }
]

const collaborazioni = [
  {
    nome: 'Tech per Geometri e Imprese',
    descrizione: 'Analisi tecnica pre-posa. Report PDF con rischi e soluzioni quote/impianti in 24h.',
    link: '/contatti',
    icona: '👷'
  },
  {
    nome: 'Archis per Architetti',
    descrizione: 'Verifica norme DM 236/89 + impatto estetico. Consegniamo report, progetto esecutivo e render.',
    link: '/contatti',
    icona: '📐'
  },
  {
    nome: 'Agency per Agenzie Immobiliari',
    descrizione: 'Evitiamo blocco vendita per problemi cucina. Report rischi + render marketing.',
    link: '/contatti',
    icona: '🏠'
  }
]

const articoli = [
  {
    slug: 'open-space-errori',
    categoria: 'DISTRIBUZIONE',
    titolo: 'Open space: 5 errori di distribuzione da evitare prima del cantiere',
    descrizione: 'Isola che blocca il passaggio, triangolo di lavoro interrotto, flussi incrociati. I 5 errori tecnici che richiedono modifiche murarie dopo.',
    immagine: '/hero-distribuzione-800.jpeg',
    servizio: '/servizi/distribuzione-cucina',
    servizioNome: 'Analisi Distribuzione'
  },
  {
    slug: 'verifiche-misure-progetto-cucina',
    categoria: 'VERIFICA PROGETTO',
    titolo: '7 Verifiche tecniche prima di progettare la cucina',
    descrizione: 'Scarichi, prese, fori cappa, ventilazione frigo. Le 7 quote che il mobiliere non controlla e che ti obbligano a interventi edili dopo la firma.',
    immagine: '/hero-verifica-cucina-800.jpeg',
    servizio: '/servizi/check-up-cucina',
    servizioNome: 'Check-up Progetto'
  },
  {
    slug: 'capitolato-cucina-cosa-controllare',
    categoria: 'CAPITOLATO',
    titolo: 'Capitolato cucina: cosa controllare prima di firmare',
    descrizione: 'Tempi di consegna, penali, tolleranze di montaggio. Le clausole che proteggono te e che mancano nel 90% dei preventivi.',
    immagine: '/hero-capitolato-800.jpeg',
    servizio: '/servizi/add-on-capitolato',
    servizioNome: 'Add-on Capitolato'
  },
  {
    slug: 'induzione-vs-gas-verifiche-impianti',
    categoria: 'IMPIANTI',
    titolo: 'Induzione vs Gas: verifiche impianti obbligatorie',
    descrizione: 'Linee dedicate, potenze, prese d\'aria. Cosa serve davvero per non rifare l\'impianto elettrico o del gas dopo.',
    immagine: '/hero-induzione-800.jpeg',
    servizio: '/servizi/check-up-cucina',
    servizioNome: 'Check-up Progetto'
  },
  {
    slug: 'progetto-cucina-da-zero-come-fare',
    categoria: 'PROGETTO',
    titolo: 'Progetto cucina da zero: come si fa senza errori',
    descrizione: 'Ordine corretto delle fasi: prima gli impianti, poi i muri, poi i mobili. La sequenza che evita cantieri infiniti.',
    immagine: '/hero-progetto-zero-800.jpeg',
    servizio: '/servizi/progetto-da-zero',
    servizioNome: 'Progetto da Zero'
  },
  {
    slug: 'revisione-contratto-cucina-clausole-da-controllare',
    categoria: 'CONTRATTO',
    titolo: 'Revisione contratto cucina: clausole da controllare',
    descrizione: 'Variazioni di prezzo, consegna ritardata, difformità. I 3 punti che devi far scrivere nero su bianco prima di firmare.',
    immagine: '/hero-contratto-800.jpeg',
    servizio: '/servizi/blindatura',
    servizioNome: 'Blindatura Contratto'
  }
]

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 py-24 text-center">
        <h1 className="text-6xl font-serif mb-4">Analisi Tecniche</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consulenze tecniche indipendenti per evitare errori di progetto nella cucina e nella distribuzione
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-b">
        <h2 className="text-2xl font-serif mb-6">Cosa faccio</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sono Gian Carlo Primo, tecnico indipendente. Non vendo cucine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Analizzo progetti cucina prima che inizino i lavori. Verifico quote impianti, scarichi, 
          prese, ventilazione e vincoli tecnici che i mobilieri non controllano. Analizzo anche 
          la distribuzione interna di appartamenti e ville per ottimizzare flussi e funzionalità.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Individuo le criticità tecniche prima della firma. Così eviti modifiche edili, 
          ritardi di cantiere e contenziosi. Ricevi una relazione tecnica che giri al fornitore.
        </p>
      </section>

      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Per chi compra casa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Analisi indipendenti per ogni fase del progetto. Dal controllo pianta al contratto firmato.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {servizi.map((servizio) => (
              <Link 
                key={servizio.nome} 
                href={servizio.link}
                className="border border-gray-200 rounded-lg p-6 hover:border-green-700 hover:shadow-lg transition group"
              >
                <div className="text-3xl mb-3">{servizio.icona}</div>
                <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-green-700">
                  {servizio.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {servizio.descrizione}
                </p>
                <span className="text-green-700 text-sm font-semibold">Contattaci →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NUOVA SEZIONE COLLABORAZIONI */}
      <section className="bg-gray-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Per Professionisti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sei un architetto, geometra o agenzia? Lavora con il Metodo 90G.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collaborazioni.map((item) => (
              <Link 
                key={item.nome} 
                href={item.link}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-700 hover:shadow-lg transition group bg-white"
              >
                <div className="text-3xl mb-3">{item.icona}</div>
                <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-blue-700">
                  {item.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.descrizione}
                </p>
                <span className="text-blue-700 text-sm font-semibold">Collabora con noi →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif font-bold">Guide Tecniche</h2>
          <Link href="/blog" className="text-green-700 font-semibold hover:underline">
            Vedi tutte →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {articoli.map((articolo, index) => (
            <article key={articolo.slug} className={index < articoli.length - 1 ? 'pb-12 border-b' : ''}>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 relative">
                  <Image 
                    src={articolo.immagine}
                    alt={articolo.titolo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="text-xs text-green-700 font-semibold mb-2 uppercase">
                    {articolo.categoria}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    {articolo.titolo}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {articolo.descrizione}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <Link 
                      href={`/blog/${articolo.slug}`} 
                      className="text-green-700 font-semibold hover:underline"
                    >
                      Leggi l'articolo →
                    </Link>
                    <Link 
                      href={articolo.servizio} 
                      className="text-gray-600 hover:underline"
                    >
                      {articolo.servizioNome}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

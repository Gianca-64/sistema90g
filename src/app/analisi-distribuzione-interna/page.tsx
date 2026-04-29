import Link from 'next/link'
import type { Metadata } from 'next'
import ServiziBox from '../../components/ServiziBox'
export const metadata: Metadata = {
  title: 'Analisi Distribuzione Interna Appartamento 97€ | Verifica Pianta Tecnica',
  description: 'Servizio di analisi tecnica della distribuzione interna appartamento prima dei lavori. Verifica flussi, norme, impianti. Consulenza indipendente 97€.',
}

export default function AnalisiDistribuzione() {
  return (
    <main className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm text-slate-500 mb-2">Servizio Tecnico Indipendente</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Analisi Distribuzione Interna
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Verifica tecnica della pianta appartamento prima di tracciare i muri. 
              Analisi flussi, norme dimensionali, posizione impianti. Evita modifiche post-costruzione da 15.000€.
            </p>

            <div className="prose prose-slate max-w-none">
              <h2>Cosa viene verificato</h2>
              <ul>
                <li><strong>Flussi funzionali:</strong> Percorsi cucina-soggiorno, zona notte, bagni. Interferenze e colli di bottiglia.</li>
                <li><strong>Norme dimensionali:</strong> Larghezza minima corridoi, disimpegni, distanze letto-pareti secondo DM 1975.</li>
                <li><strong>Posizione impianti:</strong> Coerenza scarichi, canne fumarie, colonne tecniche con distribuzione proposta.</li>
                <li><strong>Illuminazione naturale:</strong> Rapporto aeroilluminante camere e soggiorno secondo norme regionali.</li>
                <li><strong>Accessibilità:</strong> Verifiche preventive su norme barriere architettoniche.</li>
              </ul>

              <h2>Quando richiederlo</h2>
              <p>
                Il momento ideale è <strong>dopo la prima bozza dell'architetto e prima di approvare l'esecutivo</strong>. 
                Modificare un file DWG costa zero. Spostare un muro in cantiere costa 3.000-8.000€.
              </p>

              <h2>Cosa ricevi</h2>
              <ul>
                <li>Report PDF con pianta annotata + check-list verifiche</li>
                <li>Elenco criticità rilevate con riferimenti normativi</li>
                <li>Suggerimenti correttivi oggettivi, senza preferenze estetiche</li>
                <li>Consegna in 48h lavorative</li>
              </ul>

              <h2>Cosa NON faccio</h2>
              <ul>
                <li>Non rifaccio il progetto: verifico quello esistente</li>
                <li>Non faccio sopralluoghi: lavoro su pianta DWG/PDF</li>
                <li>Non fornisco render: solo analisi tecnica</li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-600">Prezzo servizio</p>
                  <p className="text-3xl font-bold text-slate-900">97€</p>
                </div>
                <Link 
                  href="/contatti" 
                  className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800"
                >
                  Richiedi Analisi
                </Link>
              </div>
              <p className="text-xs text-slate-500">
                Aggiungibile al Check-up Progetto Cucina a 47€ invece che 97€
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiziBox />
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Analisi Distribuzione Interna Appartamento",
            "description": "Verifica tecnica pianta appartamento prima dei lavori",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Consulenza Tecnica Indipendente"
            },
            "offers": {
              "@type": "Offer",
              "price": "97",
              "priceCurrency": "EUR"
            }
          })
        }}
      />
    </main>
  )
}
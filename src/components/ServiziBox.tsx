 import Link from 'next/link'

export default function ServiziBox() {
  return (
    <div className="sticky top-8 space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Analisi Tecnica Indipendente</h3>
        <p className="text-sm text-slate-600 mb-4">
          Verifico la tua pianta prima che sia troppo tardi. 12 punti di controllo su impianti, norme, flussi. 
        </p>
        <div className="text-3xl font-bold text-blue-600 mb-4">97€</div>
        <Link 
          href="https://wa.me/393275478485?text=Analisi%20tecnica%2097%E2%82%AC" 
          target="_blank"
          className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Richiedi su WhatsApp
        </Link>
        <p className="text-xs text-slate-500 mt-3">Risposta in 24h con report PDF</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Progetto Completo Cucina</h3>
        <p className="text-sm text-slate-600 mb-4">
          Distribuzione ottimizzata + verifica tecnica + lista errori da evitare. Per mobilifici e privati.
        </p>
        <div className="text-3xl font-bold text-slate-900 mb-4">147€</div>
        <Link 
          href="https://wa.me/393275478485?text=Progetto%20cucina%20147%E2%82%AC" 
          target="_blank"
          className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800"
        >
          Richiedi su WhatsApp
        </Link>
        <p className="text-xs text-slate-500 mt-3">Consegna 48h con piante DWG + PDF</p>
      </div>
    </div>
  )
}
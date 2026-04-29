 import Link from 'next/link'

export const metadata = {
  title: '7 Verifiche tecniche prima di progettare la cucina',
  description: 'Checklist tecnica: 7 controlli su impianti, misure e vincoli da fare prima di firmare il progetto cucina. Evita modifiche edili in cantiere.'
}

export default function VerificheCucina() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-4">
        <Link href="/" className="text-sm text-gray-500 hover:underline">← Home</Link>
      </div>

      <article className="prose prose-lg prose-gray">
        <h1 className="mb-6">7 Verifiche tecniche prima di progettare la cucina</h1>
        
        <img 
          src="/blog/verifiche-cucina.jpg" 
          alt="Schema verifiche tecniche progetto cucina"
          className="w-full h-auto rounded-lg my-8"
        />

        <p className="lead">
          Prima di firmare il progetto del mobiliere, fai queste 7 verifiche. 
          Ti evitano demolizioni, spostamenti impianti e contenziosi dopo la consegna.
        </p>

        <h2>1. Posizione e quota scarico lavello</h2>
        <p>
          <strong>Cosa verificare:</strong> Il centro dello scarico a muro deve coincidere con il centro 
          del lavello in progetto. Altezza standard: 50-55cm da pavimento finito. Diametro tubo: 40-50mm.
        </p>
        <p>
          <strong>Se sbagli:</strong> devi rompere il rivestimento, spostare il tubo nel muro, 
          rifare intonaco e piastrelle.
        </p>

        <h2>2. Prese elettriche piano cottura e forno</h2>
        <p>
          <strong>Cosa verificare:</strong> Piano a induzione: linea dedicata da 32A sotto il top, non dietro. 
          Forno: presa Schuko dedicata da 16A. Norma CEI 64-8 vieta prese dietro fonti di calore.
        </p>
        <p>
          <strong>Se sbagli:</strong> l'elettricista deve aggiungere linee nuove. Significa tracce a muro, 
          tinteggiatura, polvere. Impianto non a norma = garanzia elettrodomestici invalidata.
        </p>

        <h2>3. Foro scarico cappa: diametro e posizione</h2>
        <p>
          <strong>Cosa verificare:</strong> Cappa aspirante moderna richiede foro da 150mm. 
          Verifica che esista e che sia nel raggio di 2m dal piano cottura. Se va a soffitto, 
          controlla che sopra non ci siano travi o impianti.
        </p>
        <p>
          <strong>Se sbagli:</strong> carotaggio solaio non previsto o sistema a ricircolo obbligato. 
          Il ricircolo ha resa inferiore e filtri a carbone da sostituire ogni 3-6 mesi.
        </p>

        <h2>4. Spazi di ventilazione frigorifero</h2>
        <p>
          <strong>Cosa verificare:</strong> Frigorifero a colonna o americano richiede 5cm liberi sopra 
          e dietro per dissipazione calore. Controlla la scheda tecnica del modello scelto.
        </p>
        <p>
          <strong>Se sbagli:</strong> il motore lavora sotto sforzo, consuma di più e si rompe prima. 
          La garanzia non copre installazione non conforme.
        </p>

        <h2>5. Altezza piano di lavoro rispetto a chi cucina</h2>
        <p>
          <strong>Cosa verificare:</strong> Standard 90cm. Ma ergonomia dice: altezza gomito - 10cm. 
          Per persone 1,60m → 85cm. Per 1,90m → 95-100cm. Misura chi cucina di più.
        </p>
        <p>
          <strong>Se sbagli:</strong> dolori a schiena e spalle ogni giorno. Modificare dopo significa 
          buttare top, zoccoli e fianchi laterali.
        </p>

        <h2>6. Apertura ante e cassetti vs ingombri</h2>
        <p>
          <strong>Cosa verificare:</strong> Simula l'apertura di ogni anta. Controlla che non sbatta contro 
          muro, calorifero, finestra, tavolo. Cassetti sotto al piano cottura: verificano interferenza 
          con il forno sotto.
        </p>
        <p>
          <strong>Se sbagli:</strong> ante che si rovinano o non si aprono completamente. Cassetti inutilizzabili. 
          Modifica = rifare il modulo.
        </p>

        <h2>7. Punti acqua lavastoviglie e quote allacci</h2>
        <p>
          <strong>Cosa verificare:</strong> La lavastoviglie vuole carico e scarico acqua entro 1,5m dal 
          lavello. Altezza scarico: 40-80cm da terra. Presa elettrica: separata e accessibile.
        </p>
        <p>
          <strong>Se sbagli:</strong> tubi di prolunga a vista, scarico che non pesca, allagamenti. 
          Spostare gli attacchi = rompere il muro dietro i mobili.
        </p>

        <h2>Come fare le verifiche</h2>
        <p>
          Ti servono: metro laser, livella, progetto quotato del mobiliere, schede tecniche elettrodomestici. 
          Vai in casa con un tecnico prima di firmare. 2 ore ti salvano il cantiere.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12 not-prose">
          <h3 className="text-xl font-semibold mb-4">Servizio: Check-up Tecnico Progetto</h3>
          <p className="mb-6">
            Vengo in cantiere o analizzo le tue foto e planimetrie. Verifico tutte le 7 quote e ti consegno 
            relazione con correzioni da dare al mobiliere. Usala con qualsiasi fornitore.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-3xl font-bold">Da 147€</span>
            <a 
              href="https://wa.me/393275478485?text=Voglio%20il%20Check-up%20Tecnico%20per%20la%20cucina"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Prenota su WhatsApp
            </a>
          </div>
        </div>

        <p>
          <strong>Gian Carlo Primo</strong><br/>
          Tecnico indipendente. Non vendo cucine. Verifico che il progetto entri in casa tua senza sorprese.
        </p>
      </article>
    </main>
  )
}
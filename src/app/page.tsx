 import Link from 'next/link'
import Image from 'next/image'
import { XCircleIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const nome = 'Gian Carlo'
  const whatsapp = '393275478485'

  const pacchetti = [
    {
      nome: 'Check-up Pre-Firma',
      prezzo: '147€',
      desc: 'Ferma l\'errore da 800€ prima di firmare',
      ideale: 'Per chi ha il progetto del mobilificio ma non si fida',
      tag: 'PIÙ SCELTO',
      evidenziato: true,
      servizi: [
        'Analisi progetto + foto ambiente del mobilificio',
        'Audio 10min: ti spiego i 3 rischi d\'uso invisibili',
        'PDF "Checklist 3 Quote da Farti Garantire"',
        'Le 3 domande killer da fare al venditore',
        'Cosa farti scrivere nel preventivo per tutelarti',
        'Consegna in 24h via WhatsApp/Email',
        'Non eseguo rilievi. Ti dico cosa pretendere.'
      ]
    },
    {
      nome: 'Blindatura Totale',
      prezzo: '297€',
      desc: 'Vedi le soluzioni se il mobilificio dice "non si può"',
      ideale: 'Per chi vuole dormire tranquillo con piano B',
      servizi: [
        'Tutto il Check-up Pre-Firma',
        '3 Render concettuali delle soluzioni alternative',
        'PDF "Script Negoziazione" per parlare col venditore',
        'Revisione 1 email/chat col mobilificio fino alla firma',
        'Immagini indicative. Quote da verificare col mobilificio.',
        'Consegna max 72h',
        'Si parte dopo pagamento completo'
      ]
    },
    {
      nome: 'SOS Post-Firma',
      prezzo: '497€',
      desc: 'Hai già firmato e scoperto l\'errore?',
      ideale: 'Per chi deve limitare i danni col mobilificio',
      servizi: [
        'Analisi contratto + progetto firmato',
        'Strategia verbale per trattare col mobilificio',
        'Cosa chiedere, come dirlo, quando minacciare legale',
        'Solo consulenza strategica. No rilievi tecnici.',
        'Consegna in 48h via chiamata + PDF',
        'Si parte dopo pagamento completo'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Image src="/logo-90g.jpg" alt="Sistema 90G" width={80} height={80} className="mb-6 mx-auto md:mx-0" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A4A] mb-6">
              Stai per firmare 15.000€ di cucina? <br/>Ti evito l'errore da 800€.
            </h1>
            <p className="text-xl text-[#65676B] mb-8">
              Sono {nome}. Non faccio rilievi. Analizzo il progetto del mobilificio e ti do la Checklist delle 3 quote che devi farti garantire SCRITTE prima di firmare. Se sbagliano loro, pagano loro. Non tu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-lg">
              <Link
                href="#prezzi"
                className="bg-[#A6937C] hover:bg-[#9A856E] text-white font-bold py-4 px-8 rounded-lg text-lg transition"
              >
                Vedi il Check-up 147€
              </Link>
              <a
                href={`https://wa.me/${whatsapp}?text=Ciao ${nome}, voglio il Check-up Pre-Firma da 147€`}
                target="_blank"
                className="bg-white border-2 border-[#A6937C] text-[#A6937C] hover:bg-[#F5F5F5] font-bold py-4 px-8 rounded-lg text-lg transition"
              >
                Scrivimi su WhatsApp
              </a>
            </div>
            <p className="text-sm text-[#65676B] mt-6">
              Consulenza d'uso 100% online • No rilievi tecnici • Consegna max 24h • +39 327 547 8485
            </p>
          </div>
          <div className="hidden md:block">
            <Image src="/hero-errore-800.png" alt="Errore 800 euro evitabile" width={500} height={400} className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* PROBLEMI */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4 text-center">
            I 3 errori che ti costano 800€ dopo il montaggio
          </h2>
          <p className="text-center text-[#65676B] mb-12 max-w-2xl mx-auto">
            Il 70% li scopre quando è troppo tardi. Io te li faccio intercettare PRIMA di firmare.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#A6937C]">
              <Image src="/problema-frigo.png" alt="Frigo non entra" width={300} height={150} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">PROBLEMA #1: "Il frigo non entra"</h3>
              <p className="text-[#65676B] mb-4">
                Lo scopri a cucina montata. Mobile da rifare: <strong>800€ buttati.</strong>
              </p>
              <p className="text-sm text-[#A6937C] font-bold">
                → Nel Check-up ti dico quale quota farti scrivere per non rischiare.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#A6937C]">
              <Image src="/problema-scarico.png" alt="Scarico sbagliato" width={300} height={150} className="mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">PROBLEMA #2: "Devo spaccare il muro"</h3>
              <p className="text-[#65676B] mb-4">
                Idraulico dice "impossibile". Muro da rompere: <strong>600€ di muratore.</strong>
              </p>
              <p className="text-sm text-[#A6937C] font-bold">
                → Nel Check-up ti dico le 2 domande da fare per smascherarli prima.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#A6937C]">
              <div className="bg-white p-4 rounded-lg mb-4 border-2 border-red-200 flex items-center justify-center h-">
                <XCircleIcon className="h-16 w-16 text-red-500" />
                <p className="text-center text-xs font-bold text-red-600 ml-2">ANTA BLOCCATA<br/>500€ DI DANNO</p>
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">PROBLEMA #3: "L'anta sbatte"</h3>
              <p className="text-[#65676B] mb-4">
                Cassetto bloccato dalla maniglia del forno. Colonna inutilizzabile.
                <strong> 500€ di danno.</strong>
              </p>
              <p className="text-sm text-[#A6937C] font-bold">
                → Nel Check-up ti spiego i 3 rischi d'uso che il rendering non mostra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREZZI */}
      <section id="prezzi" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4 text-center">
            Scegli come vuoi blindarti
          </h2>
          <p className="text-center text-[#65676B] mb-12 max-w-2xl mx-auto">
            Lavoro 100% online su tutta Italia. <strong>Il progetto parte solo dopo pagamento completo. Non eseguo rilievi tecnici.</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pacchetti.map((p) => (
              <div
                key={p.nome}
                className={`bg-white p-6 rounded-lg shadow-lg flex flex-col ${
                  p.evidenziato? 'border-2 border-[#A6937C] lg:scale-105' : ''
                }`}
              >
                {p.tag && (
                  <div className="bg-[#A6937C] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    {p.tag}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#4A4A4A] mb-1">{p.nome}</h3>
                <p className="text-4xl font-bold text-[#A6937C] mb-2">{p.prezzo}</p>

                {p.evidenziato && (
                  <div className="bg-[#F5F5F5] p-4 rounded-lg mb-4 border">
                    <Image src="/checklist-mockup.png" alt="Checklist PDF" width={200} height={280} className="mx-auto" />
                  </div>
                )}

                <p className="text-sm text-[#65676B] mb-1 font-bold">{p.desc}</p>
                <p className="text-xs text-[#65676B] mb-4 italic">{p.ideale}</p>
                <ul className="text-sm text-[#65676B] space-y-2 mb-6 flex-grow">
                  {p.servizi.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A6937C] mt-1">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsapp}?text=Ciao ${nome}, voglio acquistare ${p.nome} a ${p.prezzo}`}
                  target="_blank"
                  className={`text-center font-bold py-3 px-6 rounded-lg transition ${
                    p.evidenziato
                    ? 'bg-[#A6937C] hover:bg-[#9A856E] text-white'
                      : 'bg-white border-2 border-[#A6937C] text-[#A6937C] hover:bg-[#F5F5F5]'
                  }`}
                >
                  Acquista Ora
                </a>
              </div>
            ))}
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg mt-8 max-w-3xl mx-auto">
            <p className="text-center text-sm text-[#4A4A4A] font-bold">
              ⚠️ COME FUNZIONA: 1. Paghi online → 2. Invii progetto via WhatsApp → 3. Consegno in 24/72h
            </p>
            <p className="text-center text-xs text-[#65676B] mt-2">
              Sistema 90G fornisce consulenza d'uso pre-firma. Non esegue rilievi tecnici né si sostituisce al progettista. Le quote e la fattibilità tecnica vanno sempre verificate e garantite dall'installatore.
            </p>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-12 text-center">
            Come lavoro - Zero rischi per te
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-[#A6937C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-[#4A4A4A] mb-1">Paghi e blocchi il tuo slot</h3>
                <p className="text-[#65676B]">Scegli il Check-up, paghi online. Così ho la certezza di dedicarti il tempo.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#A6937C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-[#4A4A4A] mb-1">Invii il progetto del mobilificio</h3>
                <p className="text-[#65676B]">Foto progetto, render, lista elettrodomestici. Via WhatsApp. Non mi servono misure tue.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#A6937C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-[#4A4A4A] mb-1">Analizzo e ti blindo</h3>
                <p className="text-[#65676B]">Individuo i 3 rischi d'uso invisibili. Ti registro un audio + ti mando la Checklist con le quote da farti garantire scritte. <strong>Consegna max 24h.</strong></p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-[#A6937C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold text-[#4A4A4A] mb-1">Vai dal mobilificio blindato</h3>
                <p className="text-[#65676B]">Con la Checklist e le 3 domande, sai cosa pretendere. Se sbagliano loro, pagano loro. Non tu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Chi risolve il problema</h2>
          <p className="text-[#65676B] text-lg mb-6">
            Sono {nome}, consulente tecnico cucine da 15 anni. Lavoro 100% online su tutta Italia.
            Ho visto troppi clienti disperati perché hanno scoperto l'errore a cucina montata.
          </p>
          <p className="text-[#A6937C] font-bold text-xl">
            Il mio lavoro: dirti cosa farti garantire PRIMA che costi 800€.
          </p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-[#4A4A4A] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hai il progetto della cucina?
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8">
            Non firmare al buio. Con 147€ ti dico le 3 quote che devi farti scrivere per non pagare tu gli errori.
          </p>
          <a
            href={`https://wa.me/${whatsapp}?text=Ciao ${nome}, voglio il Check-up Pre-Firma da 147€`}
            target="_blank"
            className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-8 rounded-lg text-lg transition"
          >
            Voglio il Check-up 147€
          </a>
          <p className="text-sm text-[#F5F5F5] mt-6">
            Pagamento anticipato → Invio progetto → Consegna audio+PDF in 24h
          </p>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="bg-[#2A2A2A] py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-[#A0A0A0]">
            Sistema 90G di {nome} - Consulenza d'uso pre-firma per cucine. Non esegue rilievi tecnici né si sostituisce a progettisti, architetti o installatori. Le quote, la fattibilità tecnica e la conformità normativa vanno sempre verificate e garantite per iscritto dall'installatore/mobilificio incaricato. P.IVA [tua P.IVA] • info@sistema90g.it
          </p>
        </div>
      </footer>
    </div>
  )
}
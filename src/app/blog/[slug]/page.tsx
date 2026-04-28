 import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ServiziBox from '@/components/ServiziBox'

export const dynamic = 'force-static'
export const dynamicParams = false

const articoli = {
  'errori-distribuzione-open-space-appartamento': {
    titolo: 'Open space: 5 errori di distribuzione che costano 15.000€ di modifiche',
    descrizione: 'Analisi tecnica dei 5 errori distributivi più frequenti nelle piante open space. Verifica flussi, norme disimpegno, scarichi e illuminazione prima di tracciare i muri.',
    data: '29 Aprile 2026',
    categoria: 'Distribuzione Interna',
    readTime: '7 min',
    img: '/hero-distribuzione-800.png',
    servizio: 'Analisi Distribuzione 97€',
    contenuto: `
<p>
In fase di analisi preventiva su 200+ piante, il 68% degli open space presenta almeno una criticità distributiva che emerge solo in cantiere. Il costo medio di modifica post-muri è 15.000€. Obiettivo di questa analisi: fornire check-list oggettiva prima di approvare l'esecutivo.
</p>

<h2>1. Errore flusso cucina-soggiorno</h2>
<p><strong>Oggetto verifica:</strong> Distanza e ostacoli tra zona cottura e zona pranzo.</p>
<p><strong>Soglia critica:</strong> Percorso >6 metri o con spigoli <90° da girare con piatti caldi.</p>
<p><strong>Impatto:</strong> Usabilità quotidiana compromessa. Modifica tramezze: 4.000-7.000€.</p>
<p><strong>Nota tecnica:</strong> Il triangolo lavoro deve restare entro 7 metri complessivi di perimetro.</p>

<h2>2. Errore posizione colonna scarichi</h2>
<img src="/pianta-scarichi.png" alt="Posizione scarichi open space" loading="lazy" />
<p><strong>Oggetto verifica:</strong> Distanza cucina/bagni da colonna fecale esistente.</p>
<p><strong>Soglia critica:</strong> Tratti orizzontali >4 metri richiedono pendenza che buca solai.</p>
<p><strong>Impatto:</strong> Abbassamento controsoffitto o gradino. Adeguamento: 3.000-5.000€.</p>

<h2>3. Errore rapporto aeroilluminante</h2>
<p><strong>Oggetto verifica:</strong> Superficie finestrata / superficie pavimento zona giorno.</p>
<p><strong>Norma:</strong> DM 1975: minimo 1/8. Milano: 1/8. Roma: 1/8. Verifica PGT locale.</p>
<p><strong>Impatto:</strong> Mancata abitabilità. Apertura nuova finestra: 2.500-6.000€ + pratiche.</p>

<h2>4. Errore corridoio cieco</h2>
<p><strong>Oggetto verifica:</strong> Lunghezza disimpegno zona notte senza affaccio.</p>
<p><strong>Soglia critica:</strong> >10 metri lineari = effetto tunnel, deprezzamento immobile.</p>
<p><strong>Impatto:</strong> Modifica distribuzione per inserire luce. Ristrutturazione: 8.000-12.000€.</p>

<h2>5. Errore interferenza pilastri-arredi</h2>
<img src="/pilastro-cucina.png" alt="Pilastro interferenza cucina" loading="lazy" />
<p><strong>Oggetto verifica:</strong> Posizione pilastri strutturali vs ingombro mobili previsti.</p>
<p><strong>Soglia critica:</strong> Pilastro 30x30 in centro parete = perdita 2 basi da 60cm.</p>
<p><strong>Impatto:</strong> Riduzione contenimento -20%. Soluzione su misura: 2.000-4.000€.</p>

<hr class="my-12" />

<h2>Metodologia di analisi distribuzione</h2>
<p>L'analisi preventiva richiede:</p>
<ul>
<li>Pianta DWG/PDF quotata</li>
<li>Indicazione posizione colonne tecniche esistenti</li>
<li>Verifica incrociata norme nazionali + PGT comunale</li>
<li>Simulazione flussi funzionali quotidiani</li>
</ul>
<p>Tempo analisi: 48h. Costo 97€ vs costo medio modifiche 15.000€.</p>
    `,
    faq: [
      {
        q: "Quando va fatta l'analisi distribuzione interna?",
        a: "Dopo la prima bozza dell'architetto e prima di approvare il progetto esecutivo. Modificare DWG costa zero, spostare muri costa 3.000-8.000€."
      },
      {
        q: "Serve il sopralluogo per analizzare la distribuzione?",
        a: "No. L'analisi si basa su pianta DWG/PDF e posizione colonne tecniche. È una verifica documentale e normativa."
      }
    ]
  },

  'verifiche-misure-progetto-cucina': {
    titolo: '7 Verifiche tecniche prima di confermare il progetto cucina',
    descrizione: 'Check-list per validare quote, impianti e conformità norme UNI del progetto cucina prima dell\'ordine. Guida tecnica per committenti e progettisti.',
    data: '27 Aprile 2026',
    categoria: 'Verifica Progetto',
    readTime: '8 min',
    img: '/hero-verifica-cucina-800.png',
    servizio: 'Check-up Progetto 147€',
    contenuto: `
<p>
In fase di analisi pre-ordine, il 90% dei progetti cucina presenta almeno un punto da verificare su misure o impianti. L'obiettivo di questa check-list è fornire a committenti, architetti e rivenditori uno strumento di controllo oggettivo prima della conferma d'ordine.
</p>

<h2>1. Verifica squadro pareti</h2>
<p><strong>Oggetto verifica:</strong> Scostamento angoli da 90° mediante squadra laser 50cm.</p>
<p><strong>Soglia critica:</strong> Differenza >5mm tra inizio e fine parete.</p>
<p><strong>Impatto:</strong> Basi modulari richiedono riduzione su misura. Costi di adeguamento post-montaggio: 800-1500€.</p>

<h2>2. Verifica quota scarico lavastoviglie</h2>
<img src="/problema-scarico.png" alt="Quota scarico lavastoviglie" loading="lazy" />
<p><strong>Oggetto verifica:</strong> Altezza centro scarico da pavimento finito.</p>
<p><strong>Norma:</strong> Schede tecniche: 400-450mm.</p>
<p><strong>Impatto:</strong> Mancato svuotamento. Adeguamento idraulico: 600-900€.</p>

<h2>3. Verifica distanza cappa-piano cottura gas</h2>
<p><strong>Oggetto verifica:</strong> Distanza verticale bruciatori-filtro cappa.</p>
<p><strong>Norma:</strong> UNI 7129: minimo 650mm per piani a gas.</p>
<p><strong>Impatto:</strong> Non conformità impianto. Decadenza assicurazione. Adeguamento: 400-700€.</p>

<h2>4. Verifica interferenza prese-elettrodomestici</h2>
<p><strong>Oggetto verifica:</strong> Sporgenza frutti vs profondità nicchia.</p>
<p><strong>Soglia critica:</strong> Presa schuko = 40mm. Se nicchia = 560mm, impedisce inserimento.</p>
<p><strong>Impatto:</strong> Spostamento punto certificato: 250-400€.</p>

<h2>5. Verifica spazio apertura frigorifero</h2>
<img src="/problema-frigo.png" alt="Spazio apertura frigorifero" loading="lazy" />
<p><strong>Oggetto verifica:</strong> Angolo apertura anta 110° senza interferenze.</p>
<p><strong>Soglia critica:</strong> Parete a filo = impossibilità estrazione cassetti.</p>
<p><strong>Impatto:</strong> Modifica colonna con distanziale: 500-800€.</p>

<h2>6. Verifica planarità pavimento per zoccolo</h2>
<p><strong>Oggetto verifica:</strong> Dislivello pavimento su lunghezza cucina.</p>
<p><strong>Soglia critica:</strong> Dislivello >10mm = zoccolo H100mm non compensa.</p>
<p><strong>Impatto:</strong> Zoccoli sagomati: 300-500€.</p>

<h2>7. Verifica spazio tecnico colonna forno</h2>
<p><strong>Oggetto verifica:</strong> Distanza laterale per apertura anta 110°.</p>
<p><strong>Soglia critica:</strong> Minimo 50mm da parete laterale.</p>
<p><strong>Impatto:</strong> Usura guarnizione. Sostituzione colonna: 800-1200€.</p>

<hr class="my-12" />

<p><strong>Nota distributiva:</strong> La verifica delle misure cucina è efficace solo se la distribuzione generale dell'appartamento è già stata validata. Errori su posizione pilastri o scarichi compromettono anche il miglior progetto.</p>
    `,
    faq: [
      {
        q: "Chi è responsabile se il progetto cucina ha errori di misura?",
        a: "Una volta firmato il contratto di fornitura, la responsabilità delle quote approvate è del committente. Per questo è consigliata verifica tecnica terza prima della conferma d'ordine."
      },
      {
        q: "Quanto costa verificare un progetto cucina?",
        a: "Il servizio Check-up Progetto ha costo 147€. Include verifica quote, impianti e norme UNI con report PDF."
      }
    ]
  },

  'induzione-vs-gas-verifiche-impianti': {
    titolo: 'Piano induzione vs gas: verifiche tecniche su impianti e areazione',
    descrizione: 'Analisi comparativa dei requisiti tecnici: potenza elettrica, sezione cavi, volume ambiente e canna fumaria. Cosa verificare prima di scegliere.',
    data: '24 Aprile 2026',
    categoria: 'Elettrodomestici',
    readTime: '6 min',
    img: '/hero-induzione-800.png',
    servizio: 'Check-up Progetto 147€',
    contenuto: `
<p>
La scelta tra induzione e gas non è estetica ma tecnica. Il 40% delle sostituzioni gas→induzione richiede adeguamento impianto elettrico. Il 30% delle installazioni gas non rispetta UNI 7129. Analisi oggettiva dei requisiti.
</p>

<h2>Se scegli Induzione: verifiche elettriche</h2>
<p><strong>Potenza richiesta:</strong> Piano 4 zone = 7,4 kW. Forno = 3,5 kW. Totale contemporaneo: 11 kW.</p>
<p><strong>Verifica contatore:</strong> Standard 3 kW insufficiente. Serve aumento a 6 kW o 10 kW.</p>
<p><strong>Verifica cavi:</strong> Linea dedicata minimo 6mm². Magnetotermico 32A. Se impianto ante 1990, probabile sezione 2,5mm² = non conforme.</p>
<p><strong>Costo adeguamento:</strong> Aumento potenza + linea dedicata: 800-1.500€.</p>

<h2>Se scegli Gas: verifiche areazione</h2>
<p><strong>Volume ambiente:</strong> UNI 7129: minimo 20 m³ per cucina con piano gas. Open space 40 m² H2,7m = 108 m³ = ok.</p>
<p><strong>Aperture ventilazione:</strong> Foro 100 cm² su parete esterna, H max 30cm da terra. Spesso mancante.</p>
<p><strong>Distanza cappa:</strong> Minimo 650mm da bruciatori. Minore = non conforme, decadenza assicurazione.</p>
<p><strong>Canna fumaria:</strong> Se presente cappa filtrante, serve comunque presa aria. Adeguamento: 400-900€.</p>

<h2>Tabella comparativa verifiche</h2>
<table class="w-full text-sm border-collapse my-8">
<thead>
<tr class="border-b border-slate-300">
<th class="text-left py-2">Requisito</th>
<th class="text-left py-2">Induzione</th>
<th class="text-left py-2">Gas</th>
</tr>
</thead
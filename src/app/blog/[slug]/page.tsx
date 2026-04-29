 import { notFound } from 'next/navigation'
import Link from 'next/link'
import ServiziBox from '../../../../components/ServiziBox'

const articles: Record<string, any> = {
  'errori-distribuzione-open-space-appartamento': {
    title: 'Errori distribuzione open space: i 5 più costosi',
    date: '28 Apr 2026',
    content: `
      <p>Un open space sbagliato costa 5.000€+ in modifiche post-rogito. Ecco i 5 errori che vedo ogni settimana.</p>
      <h2>1. Pilastro in mezzo alla zona giorno</h2>
      <p>Se il pilastro cade a 2,8m dalla parete, non ci sta tavolo + divano. Soluzione: verificare allineamenti prima di firmare.</p>
      <h2>2. Scarico cucina troppo lontano dalla colonna</h2>
      <p>Oltre 4m di distanza = pendenza insufficiente. Il mobilificio dice "si può fare", poi l'idraulico ti chiede 800€ per la pompa.</p>
      <img src="/pilastro-cucina.jpeg" alt="Pilastro cucina" style="width:100%;margin:20px 0;border-radius:8px" />
      <h2>3. Finestra che blocca la composizione</h2>
      <p>Se la finestra è a 85cm da terra, non ci stanno basi cucina standard. Devi fare muretto o cambiare serramento: 1.200€.</p>
      <h2>4. Frigo vicino al forno</h2>
      <p>Il calore del forno fa lavorare di più il frigo. Consumi +15%. Distanza minima 60cm o pannello isolante.</p>
      <img src="/problema-frigo.jpeg" alt="Frigo vicino forno" style="width:100%;margin:20px 0;border-radius:8px" />
      <h2>5. Isola senza prese elettriche</h2>
      <p>Fare le tracce dopo il pavimento costa 400€ a presa. Verificare predisposizioni prima del massetto.</p>
    `
  },
  'progetto-cucina-errori-verifica-tecnica': {
    title: 'Progetto cucina: la verifica tecnica che il mobilificio non fa',
    date: '27 Apr 2026',
    content: `
      <p>Il mobilificio ti fa il 3D, ma non verifica se tecnicamente si può fare. Risultato: firmi, versi acconto, poi scopri che l'idraulico chiede 1.500€ di extra.</p>
      <h2>I 12 punti che controllo io a 97€</h2>
      <ol>
        <li>Distanza scarico da colonna < 4m</li>
        <li>Pendenza scarico min 1%</li>
        <li>Attacco gas presente e a norma UNI 7129</li>
        <li>Prese elettriche dedicate per forno e induzione</li>
        <li>Sezione cavi 6mm² per induzione >7kW</li>
        <li>Salvavita dedicato 32A</li>
        <li>Prese a 30cm da lavello: distanza sicurezza</li>
        <li>Altezza finestra vs basi cucina</li>
        <li>Ingombro apertura frigo vs muro</li>
        <li>Spazio cappa: foro 150mm già presente?</li>
        <li>Predisposizione lavastoviglie: carico + scarico</li>
        <li>Fuori squadro pareti >2cm</li>
      </ol>
      <img src="/pianta-scarichi.jpeg" alt="Verifica scarichi" style="width:100%;margin:20px 0;border-radius:8px" />
      <p>Se anche 1 solo punto è ko, il preventivo del mobilificio è carta straccia. Meglio saperlo prima.</p>
    `
  },
  'induzione-cucina-impianto-elettrico-casa': {
    title: 'Induzione in cucina: quando l\'impianto non regge',
    date: '26 Apr 2026',
    content: `
      <p>Il piano induzione da 7,4kW non funziona con il contatore da 3kW. Eppure te lo vendono lo stesso.</p>
      <h2>Il calcolo che nessuno fa</h2>
      <p>Contatore 3kW = 3.300W disponibili. Se accendi induzione a 5.000W + forno 2.000W + frigo 150W = 7.150W. Salta tutto.</p>
      <h2>Soluzioni</h2>
      <table style="width:100%;border-collapse:collapse;margin:20px 0">
        <thead>
          <tr style="border-bottom:2px solid #ddd">
            <th style="text-align:left;padding:8px">Opzione</th>
            <th style="text-align:left;padding:8px">Costo</th>
            <th style="text-align:left;padding:8px">Pro/Contro</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:8px">Aumento a 4,5kW</td>
            <td style="padding:8px">35€/mese fisso</td>
            <td style="padding:8px">Ok per uso normale. Se accendi tutto salta comunque</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:8px">Aumento a 6kW</td>
            <td style="padding:8px">70€/mese fisso</td>
            <td style="padding:8px">Sicuro. Ma paghi anche se non usi</td>
          </tr>
          <tr>
            <td style="padding:8px">Induzione con limitatore</td>
            <td style="padding:8px">+200€ sul piano</td>
            <td style="padding:8px">Lo imposti a 3kW. Cuoci più lento ma non salta</td>
          </tr>
        </tbody>
      </table> 
      </table>
      <img src="/hero-induzione-800.jpeg" alt="Piano induzione" style="width:100%;margin:20px 0;border-radius:8px" />
      <p>Prima di firmare il mobilificio, chiedi: "L'induzione va a piena potenza col mio contatore?" Se non sanno rispondere, scappa.</p>
    `
  },
  'camera-matrimoniale-misure-minime-normative': {
    title: 'Camera matrimoniale: misure minime per non avere problemi',
    date: '25 Apr 2026',
    content: `
      <p>Il DM 5 luglio 1975 dice: camera matrimoniale minimo 14mq. Ma non basta. Se sbagli distribuzione, non ci entra l'armadio.</p>
      <h2>Regola del rettangolo 3x4,5m</h2>
      <p>14mq può essere 2x7m = corridoio. Ti serve almeno 3m sul lato corto per letto 160cm + comodini 50cm + passaggio 60cm.</p>
      <h2>Errori che bloccano il mutuo</h2>
      <ol>
        <li><strong>Finestra < 1/8 della superficie:</strong> 14mq = finestra min 1,75mq. Se è 1,5mq, la banca non eroga</li>
        <li><strong>Altezza < 2,70m:</strong> Sottotetto a 2,50m = non è abitabile. Non puoi accatastarla come camera</li>
        <li><strong>Pilastro nell'apertura armadio:</strong> Armadio 3m, ma a 2,8m c'è pilastro. Butti via 20cm o fai su misura +800€</li>
      </ol>
      <img src="/hero-camera-800.jpeg" alt="Camera matrimoniale" style="width:100%;margin:20px 0;border-radius:8px" />
      <p>Prima di comprare casa o firmare il progetto, stampa la planimetria e disegna il letto in scala. Se non ci sta con 60cm per lato, quella non è una camera matrimoniale.</p>
    `
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()
  
  return (
    <div style={{maxWidth:'1200px',margin:'0 auto',padding:'40px 20px',display:'grid',gridTemplateColumns:'1fr 320px',gap:'40px'}}>
      <article>
        <p style={{fontSize:'14px',color:'#666'}}>{article.date}</p>
        <h1 style={{fontSize:'36px',lineHeight:'1.2',margin:'12px 0 32px'}}>{article.title}</h1>
        <div dangerouslySetInnerHTML={{__html: article.content}} style={{fontSize:'18px',lineHeight:'1.7'}} />
        <div style={{marginTop:'40px',padding:'24px',background:'#f0f9ff',borderLeft:'4px solid #0ea5e9',borderRadius:'4px'}}>
          <p><strong>Hai un dubbio sul tuo progetto?</strong> Analisi tecnica indipendente da 97€. <Link href="https://wa.me/39TUONUMERO?text=Verifica progetto" style={{color:'#0ea5e9',fontWeight:'bold'}}>Scrivimi su WhatsApp</Link></p>
        </div>
      </article>
      <aside>
        <ServiziBox />
      </aside>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}
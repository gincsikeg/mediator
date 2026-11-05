// A mediációs szolgáltatások. A "slug" adja az URL-t: /szolgaltatasok/<slug> (minden nyelven ugyanaz).
// A sorrendet és a képeket a "base" adja, a szövegeket nyelvenként a "text".
const base = [
  { slug: 'penzugyi-gazdasagi-mediacio', symbol: '⚖', image: 'gina-meeting.png' },
  { slug: 'valasi-mediacio', symbol: '◈', image: null },
  { slug: 'valas-utokovetes-mediacio', symbol: '♡', image: 'gina-parkapcsolat.jpg' },
  { slug: 'penzugyi-atvilagitas-szervezeti-mediacio', symbol: '◔', image: 'gina-meeting.png' },
  { slug: 'csapatepito-faultetes', symbol: '❦', image: 'faultetes.jpeg' },
]

const text = {
  hu: {
    'penzugyi-gazdasagi-mediacio': {
      label: 'Pénzügyi / gazdasági mediáció',
      tagline: 'Konfliktus helyett közös megoldás',
      short:
        'Pénzügyi, gazdasági viták rendezése – tiszta, egyenes kommunikáció, valódi megoldás, a bírósági per elkerülése. Cégek vagy magánszemélyek között. JOBB MA EGY MEDIÁCIÓ, MINT HOLNAP EGY PER!',
      intro:
        'Egy per évekig elhúzódhat, felemészti az energiát és zárolja a vitatott tőkét – a végén pedig valaki mindig veszít. A mediáció más utat kínál: nem a hibást keressük, hanem a közös nevezőt. Tiszta, egyenes kommunikációval, a felek által kidolgozott megoldással, a bírósági per elkerülésével.',
      forWhom: [
        'Cégek, üzleti partnerek, beszállítók, akik között a vita eszkalálódni kezd.',
        'Vállalkozások, amelyeknek fontos a hírnév és az üzleti kapcsolat megőrzése.',
        'Magánszemélyek, akik pénzügyi, gazdasági nézeteltérést rendeznének peren kívül.',
        'Párok, családtagok, akik között pénzügyi nézeteltérések merültek fel, és szeretnék rendezni, mielőtt kapcsolatuk sérül.',
      ],
      steps: [
        ['Probléma feltárása', 'Mindkét fél elmondja a saját szemszögét. Külön beszélgetés.'],
        ['Közös asztal', 'Strukturált, moderált tárgyalás – érdekek, nem pozíciók mentén.'],
        ['Megoldáskeresés', 'Kreatív, üzleti alapú kompromisszumok.'],
        ['Megállapodás', 'Írásba foglalt, mindkét fél számára vállalható lezárás.'],
      ],
    },
    'valasi-mediacio': {
      label: 'Válási mediáció',
      tagline: 'Méltósággal, a gyermekekért',
      short:
        'A gyermekek szempontjait szem előtt tartva a mediációs eljárás során kialakított megegyezést a felek írásban is megkapják, amellyel a bíróságon már nem érik őket meglepetések.',
      intro: [
        'Elváltként pontosan tudom, milyen komplex, pszichológiailag és pénzügyileg terhelt folyamaton mennek keresztül a felek. Lehetőség van akár egy személyes tanácsadásra is, vagy természetesen mediációra is a partnereddel. Amennyiben közös gyermek van a házasságban, a házastárs a válás után is szülőtárs marad, így különösen fontos a válási folyamat során az együttműködés és a konfliktusok kezelése – nem pusztán a kellemes későbbi hangulat, hanem a gyermek és a felek egészsége miatt is.',
        'A lelki síkon túl különös hangsúlyt kap a válás pénzügyi vetülete, melyet korábbi tapasztalataim alapján átlátok és kezelni tudok.',
        'Állítsuk össze pénzügyi, válási terveteket, így nem érhetnek meglepetések a folyamatban – hívj időpontegyeztetésért: +36 70 638 9702',
      ],
      forWhom: [
        'Válás előtt vagy közben álló felek – vagyonmegosztás, közös költségek.',
        'Szülők, akiknek fontos, hogy a gyermek a konfliktuson kívül maradjon.',
        'Párok, akik írásban rögzített, kiszámítható megállapodással szeretnék lezárni a helyzetet.',
      ],
      steps: [
        ['Biztonságos keret', 'Világos szabályok, semleges légkör, teljes titoktartás.'],
        ['A gyermekek szempontjai', 'Az összes témakört, melyben megegyezés szükséges, felvázoljuk.'],
        ['Gyakorlati kérdések', 'Vagyon, közös költségek, gyermekvállalás pénzügyei – tételesen.'],
        ['Írásos megegyezés', 'A felek írásban is megkapják a megállapodást – a bíróságon nincs meglepetés.'],
      ],
    },
    'valas-utokovetes-mediacio': {
      label: 'Válás utókövetés mediáció',
      tagline: 'Szülőtársként a válás után is',
      short: 'A válással járó érzelmi kihívások feldolgozása.',
      intro: [
        'A válással járó érzelmi kihívások kihathatnak jövőbeli kapcsolódásainkra, ezért ezek feldolgozása elengedhetetlen.',
        'A közös gyermekkel rendelkező elvált házastársak szülőtársak maradnak a válás kimondása után is, így a gyermekek és a felek érdeke az esetleges későbbi konfliktusok kezelése.',
      ],
      forWhom: [
        'Elvált felek, akik szeretnék feldolgozni a válással járó érzelmi kihívásokat.',
        'Szülőtársak, akiknek a válás után is együtt kell működniük a gyermekek érdekében.',
        'Volt házastársak, akik között a válás után új konfliktusok merültek fel.',
      ],
      steps: [
        ['Biztonságos keret', 'Világos szabályok, semleges légkör, teljes titoktartás.'],
        ['Feldolgozás', 'Teret adunk a válással járó érzelmi kihívásoknak.'],
        ['Szülőtársi együttműködés', 'A gyermekek érdekét szem előtt tartva tisztázzuk a közös kérdéseket.'],
        ['Konfliktuskezelés', 'A későbbi nézeteltéréseket is békés úton kezeljük.'],
      ],
    },
    'penzugyi-atvilagitas-szervezeti-mediacio': {
      label: 'Pénzügyi átvilágítás és szervezeti mediáció',
      tagline: 'A rejtett költségek feltárása',
      short:
        'A cég pénzügyi átvilágítása során a teljes szervezetet monitorozzuk. Feltárjuk egy hiány vagy elakadás okát, és békés úton át is vezetjük a szervezetet a megoldásig.',
      intro:
        'Mennyibe kerül egy cégnek, ha két kulcsvezetője vagy alkalmazottja hónapok óta nem beszél egymással érdemben? Ez a tétel egyetlen mérlegben sem szerepel, mégis akár ez a legdrágább rejtett költség. A számok és a munkaerő közötti összefüggést – hogy pl. a konfliktus hogyan égeti a profitot – ritkán mérik. Mi nemcsak feltárjuk, mi az oka egy esetleges hiánynak, elakadásnak, hanem békés úton át is vezetjük a szervezetet a megoldásig, mediációs eszköztárral kezeljük a felmerülő konfliktusokat.',
      forWhom: [
        'Cégvezetők, akik tisztán szeretnék látni vállalatuk valós pénzügyi működését.',
        'Szervezetek, ahol kulcsemberek közötti kezeletlen konfliktus égeti a profitot.',
        'Vállalkozások, amelyek egy hiány vagy elakadás valódi okát keresik.',
      ],
      steps: [
        ['Átvilágítás', 'A cég pénzügyi átvilágítása során a teljes szervezetet monitorozzuk.'],
        ['A rejtett költség', 'Megnevezzük, hol égeti a kezeletlen konfliktus a profitot.'],
        ['Ok feltárása', 'Feltárjuk egy esetleges hiány vagy elakadás valódi okát.'],
        ['Békés megoldás', 'Mediációs eszköztárral vezetjük át a szervezetet a megoldásig.'],
      ],
    },
    'csapatepito-faultetes': {
      label: 'Csapatépítő faültetés',
      tagline: 'Faültető csapatépítés a természetben',
      short:
        'Faültető csapatépítő misszió, hogy közeledjünk a természethez: földelés, csatlakozás, elfogadás közben a mediálás eszközeivel tágítjuk a nézőpontokat.',
      intro:
        'A faültető csapatépítő missziója, hogy közeledjünk a természethez: földelés, csatlakozás, elfogadás közben a mediálás eszközeivel tágítjuk a nézőpontokat. Más emberként térnek haza a kollégák egy erdő- vagy faültetést követően.',
      forWhom: [
        'Csapatok, amelyek a természet közelében szeretnének feltöltődni és összekovácsolódni.',
        'Szervezetek, amelyek egy élményközpontú csapatépítéssel tágítanák a nézőpontokat.',
        'Bárki, aki a földelés és a közös alkotás erejét szeretné megtapasztalni.',
      ],
      steps: [
        ['Földelés', 'A figyelmünket tudatosan visszahozzuk a jelen pillanatba, az „itt és most”-ba a testi érzékeléseink által.'],
        ['Csatlakozás', 'Közös munka és élmény köti össze a csapatot.'],
        ['Nézőpontok tágítása', 'A mediálás eszközeivel dolgozunk az elfogadáson és a rálátáson.'],
        ['Hazatérés', 'A kollégák más emberként térnek haza egy faültetést követően.'],
      ],
    },
  },

  en: {
    'penzugyi-gazdasagi-mediacio': {
      label: 'Financial / commercial mediation',
      tagline: 'A shared solution instead of conflict',
      short:
        'Resolving financial and commercial disputes – clear, direct communication, a real solution and no court case. Between companies or private individuals. BETTER A MEDIATION TODAY THAN A LAWSUIT TOMORROW!',
      intro:
        'A lawsuit can drag on for years, drains energy and ties up the disputed capital – and in the end someone always loses. Mediation offers a different path: we don’t look for who is to blame, but for common ground. With clear, direct communication and a solution worked out by the parties themselves, without going to court.',
      forWhom: [
        'Companies, business partners and suppliers whose dispute is starting to escalate.',
        'Businesses for whom their reputation and business relationships matter.',
        'Private individuals who want to settle a financial or commercial disagreement out of court.',
        'Couples and family members facing financial disagreements who want to resolve them before their relationship suffers.',
      ],
      steps: [
        ['Exploring the problem', 'Each party shares their own perspective, in separate conversations.'],
        ['At the same table', 'A structured, moderated negotiation – based on interests, not positions.'],
        ['Finding solutions', 'Creative, business-minded compromises.'],
        ['Agreement', 'A written settlement that both parties can commit to.'],
      ],
    },
    'valasi-mediacio': {
      label: 'Divorce mediation',
      tagline: 'With dignity, for the children',
      short:
        'With the children’s needs in mind, the parties also receive the agreement reached in mediation in writing – so there are no surprises in court.',
      intro: [
        'Having been through a divorce myself, I know exactly how complex, psychologically and financially demanding this process is for everyone involved. You can come for an individual consultation, or of course for mediation together with your partner. Where there are children, a spouse remains a co-parent after the divorce, so cooperation and conflict management during the divorce are especially important – not just for a better atmosphere later, but for the wellbeing of the children and the parents.',
        'Beyond the emotional side, special attention goes to the financial aspects of divorce, which my professional background allows me to see through and manage.',
        'Let’s put together your financial and divorce plan, so the process holds no surprises – call to book an appointment: +36 70 638 9702',
      ],
      forWhom: [
        'Couples before or during a divorce – division of assets, shared costs.',
        'Parents for whom it matters that the children stay out of the conflict.',
        'Couples who want to close the chapter with a predictable, written agreement.',
      ],
      steps: [
        ['A safe framework', 'Clear rules, a neutral atmosphere, complete confidentiality.'],
        ['The children’s needs', 'We map out every topic on which an agreement is needed.'],
        ['Practical matters', 'Assets, shared costs, the finances of raising children – item by item.'],
        ['Written agreement', 'The parties receive the agreement in writing – no surprises in court.'],
      ],
    },
    'valas-utokovetes-mediacio': {
      label: 'Post-divorce follow-up mediation',
      tagline: 'Co-parenting after divorce',
      short: 'Working through the emotional challenges of divorce.',
      intro: [
        'The emotional challenges of divorce can affect our future relationships, which is why working through them is essential.',
        'Divorced spouses who share children remain co-parents after the divorce is finalised, so dealing with any later conflicts is in the interest of both the children and the parents.',
      ],
      forWhom: [
        'Divorced partners who want to work through the emotional challenges of divorce.',
        'Co-parents who need to keep cooperating for their children after the divorce.',
        'Former spouses between whom new conflicts have arisen since the divorce.',
      ],
      steps: [
        ['A safe framework', 'Clear rules, a neutral atmosphere, complete confidentiality.'],
        ['Working through', 'We make room for the emotional challenges of divorce.'],
        ['Co-parenting', 'With the children’s interests in mind, we clarify shared questions.'],
        ['Managing conflict', 'Later disagreements are resolved peacefully too.'],
      ],
    },
    'penzugyi-atvilagitas-szervezeti-mediacio': {
      label: 'Financial review and organisational mediation',
      tagline: 'Uncovering hidden costs',
      short:
        'During the company’s financial review we monitor the entire organisation. We uncover the cause of a shortfall or blockage – and guide the organisation peacefully all the way to a solution.',
      intro:
        'What does it cost a company when two of its key managers or employees haven’t had a meaningful conversation for months? This item appears on no balance sheet, yet it may be the most expensive hidden cost of all. The link between the numbers and the people – for example, how conflict burns through profit – is rarely measured. We don’t just uncover the cause of a shortfall or blockage: we guide the organisation peacefully to a solution, managing the conflicts that arise with the tools of mediation.',
      forWhom: [
        'Business leaders who want a clear picture of how their company really works financially.',
        'Organisations where unresolved conflict between key people is burning through profit.',
        'Businesses looking for the real cause of a shortfall or blockage.',
      ],
      steps: [
        ['Review', 'During the financial review we monitor the entire organisation.'],
        ['The hidden cost', 'We identify where unresolved conflict is burning through profit.'],
        ['Finding the cause', 'We uncover the real cause of any shortfall or blockage.'],
        ['A peaceful solution', 'With the tools of mediation, we guide the organisation to a solution.'],
      ],
    },
    'csapatepito-faultetes': {
      label: 'Team-building tree planting',
      tagline: 'Tree-planting team building in nature',
      short:
        'A tree-planting team-building mission that brings us closer to nature: through grounding, connection and acceptance, we broaden perspectives with the tools of mediation.',
      intro:
        'The mission of tree-planting team building is to bring us closer to nature: through grounding, connection and acceptance, we broaden perspectives with the tools of mediation. After planting a forest or trees together, colleagues go home as different people.',
      forWhom: [
        'Teams who want to recharge and bond close to nature.',
        'Organisations that want to broaden perspectives through experience-based team building.',
        'Anyone who wants to experience the power of grounding and creating something together.',
      ],
      steps: [
        ['Grounding', 'We consciously bring our attention back to the present moment – the “here and now” – through our bodily senses.'],
        ['Connection', 'Shared work and experience bring the team together.'],
        ['Broadening perspectives', 'We use the tools of mediation to work on acceptance and insight.'],
        ['Going home', 'After a tree planting, colleagues return home as different people.'],
      ],
    },
  },

  it: {
    'penzugyi-gazdasagi-mediacio': {
      label: 'Mediazione finanziaria / commerciale',
      tagline: 'Una soluzione comune invece del conflitto',
      short:
        'Risoluzione di controversie finanziarie e commerciali – comunicazione chiara e diretta, una soluzione concreta, senza cause in tribunale. Tra aziende o tra privati. MEGLIO UNA MEDIAZIONE OGGI CHE UNA CAUSA DOMANI!',
      intro:
        'Una causa può durare anni, consuma energie e blocca il capitale conteso – e alla fine qualcuno perde sempre. La mediazione offre un’altra strada: non cerchiamo il colpevole, ma un punto d’incontro. Con una comunicazione chiara e diretta e una soluzione elaborata dalle parti stesse, evitando il tribunale.',
      forWhom: [
        'Aziende, partner commerciali e fornitori tra cui la controversia inizia a inasprirsi.',
        'Imprese per cui la reputazione e i rapporti commerciali sono importanti.',
        'Privati che vorrebbero risolvere un disaccordo finanziario o economico in via stragiudiziale.',
        'Coppie e familiari tra cui sono sorti disaccordi economici e che vorrebbero risolverli prima che il rapporto ne risenta.',
      ],
      steps: [
        ['Analisi del problema', 'Ciascuna parte espone il proprio punto di vista, in colloqui separati.'],
        ['Allo stesso tavolo', 'Una negoziazione strutturata e moderata – basata sugli interessi, non sulle posizioni.'],
        ['Ricerca di soluzioni', 'Compromessi creativi e concreti.'],
        ['Accordo', 'Una conclusione scritta, sostenibile per entrambe le parti.'],
      ],
    },
    'valasi-mediacio': {
      label: 'Mediazione per il divorzio',
      tagline: 'Con dignità, per i figli',
      short:
        'Tenendo conto delle esigenze dei figli, le parti ricevono anche per iscritto l’accordo raggiunto in mediazione, così in tribunale non ci saranno sorprese.',
      intro: [
        'Avendo vissuto io stessa un divorzio, so bene quanto sia complesso e gravoso, sul piano psicologico ed economico, il percorso che le parti affrontano. È possibile una consulenza individuale oppure, naturalmente, una mediazione insieme al partner. Se ci sono figli, il coniuge resta un co-genitore anche dopo il divorzio: per questo la collaborazione e la gestione dei conflitti durante la separazione sono particolarmente importanti – non solo per un clima più sereno in futuro, ma per il benessere dei figli e delle parti.',
        'Oltre all’aspetto emotivo, un’attenzione particolare va agli aspetti economici del divorzio, che grazie alla mia esperienza professionale so analizzare e gestire.',
        'Prepariamo insieme il vostro piano finanziario e di divorzio, così il percorso non riserverà sorprese – chiamate per fissare un appuntamento: +36 70 638 9702',
      ],
      forWhom: [
        'Coppie prima o durante il divorzio – divisione dei beni, spese comuni.',
        'Genitori a cui sta a cuore che i figli restino fuori dal conflitto.',
        'Coppie che vogliono chiudere la questione con un accordo scritto e prevedibile.',
      ],
      steps: [
        ['Un contesto sicuro', 'Regole chiare, clima neutrale, riservatezza totale.'],
        ['Le esigenze dei figli', 'Delineiamo tutti i temi su cui è necessario un accordo.'],
        ['Questioni pratiche', 'Beni, spese comuni, aspetti economici legati ai figli – punto per punto.'],
        ['Accordo scritto', 'Le parti ricevono l’accordo per iscritto – nessuna sorpresa in tribunale.'],
      ],
    },
    'valas-utokovetes-mediacio': {
      label: 'Mediazione post-divorzio',
      tagline: 'Co-genitori anche dopo il divorzio',
      short: 'Elaborare le sfide emotive del divorzio.',
      intro: [
        'Le sfide emotive legate al divorzio possono influire sulle nostre relazioni future, per questo è fondamentale elaborarle.',
        'Gli ex coniugi con figli in comune restano co-genitori anche dopo la pronuncia del divorzio: gestire eventuali conflitti futuri è quindi nell’interesse dei figli e delle parti.',
      ],
      forWhom: [
        'Ex partner che desiderano elaborare le sfide emotive del divorzio.',
        'Co-genitori che devono continuare a collaborare per i figli dopo il divorzio.',
        'Ex coniugi tra cui sono sorti nuovi conflitti dopo il divorzio.',
      ],
      steps: [
        ['Un contesto sicuro', 'Regole chiare, clima neutrale, riservatezza totale.'],
        ['Elaborazione', 'Diamo spazio alle sfide emotive del divorzio.'],
        ['Co-genitorialità', 'Con al centro l’interesse dei figli, chiariamo le questioni comuni.'],
        ['Gestione dei conflitti', 'Anche i disaccordi futuri vengono risolti in modo pacifico.'],
      ],
    },
    'penzugyi-atvilagitas-szervezeti-mediacio': {
      label: 'Revisione finanziaria e mediazione organizzativa',
      tagline: 'Far emergere i costi nascosti',
      short:
        'Durante la revisione finanziaria dell’azienda monitoriamo l’intera organizzazione. Individuiamo la causa di un ammanco o di un blocco e accompagniamo l’organizzazione, in modo pacifico, fino alla soluzione.',
      intro:
        'Quanto costa a un’azienda se due dei suoi dirigenti o dipendenti chiave da mesi non si parlano davvero? Questa voce non compare in nessun bilancio, eppure può essere il costo nascosto più caro. Il legame tra i numeri e le persone – ad esempio come il conflitto brucia il profitto – viene misurato raramente. Non ci limitiamo a individuare la causa di un ammanco o di un blocco: accompagniamo l’organizzazione, in modo pacifico, fino alla soluzione, gestendo i conflitti con gli strumenti della mediazione.',
      forWhom: [
        'Dirigenti che vogliono vedere con chiarezza il reale funzionamento finanziario della propria azienda.',
        'Organizzazioni in cui un conflitto irrisolto tra persone chiave brucia il profitto.',
        'Imprese che cercano la vera causa di un ammanco o di un blocco.',
      ],
      steps: [
        ['Revisione', 'Durante la revisione finanziaria monitoriamo l’intera organizzazione.'],
        ['Il costo nascosto', 'Indichiamo dove il conflitto irrisolto brucia il profitto.'],
        ['Individuare la causa', 'Facciamo emergere la vera causa di un ammanco o di un blocco.'],
        ['Una soluzione pacifica', 'Con gli strumenti della mediazione accompagniamo l’organizzazione fino alla soluzione.'],
      ],
    },
    'csapatepito-faultetes': {
      label: 'Team building con piantumazione di alberi',
      tagline: 'Team building nella natura',
      short:
        'Una missione di team building piantando alberi, per avvicinarci alla natura: attraverso il radicamento, la connessione e l’accettazione, ampliamo i punti di vista con gli strumenti della mediazione.',
      intro:
        'La missione del team building con piantumazione di alberi è avvicinarci alla natura: attraverso il radicamento, la connessione e l’accettazione, ampliamo i punti di vista con gli strumenti della mediazione. Dopo aver piantato insieme un bosco o degli alberi, i colleghi tornano a casa come persone diverse.',
      forWhom: [
        'Squadre che desiderano ricaricarsi e affiatarsi a contatto con la natura.',
        'Organizzazioni che vogliono ampliare i punti di vista con un team building esperienziale.',
        'Chiunque voglia sperimentare la forza del radicamento e del creare insieme.',
      ],
      steps: [
        ['Radicamento', 'Riportiamo consapevolmente l’attenzione al momento presente, al «qui e ora», attraverso le sensazioni del corpo.'],
        ['Connessione', 'Il lavoro e l’esperienza condivisi uniscono la squadra.'],
        ['Ampliare i punti di vista', 'Con gli strumenti della mediazione lavoriamo sull’accettazione e sulla consapevolezza.'],
        ['Ritorno a casa', 'Dopo una piantumazione, i colleghi tornano a casa come persone diverse.'],
      ],
    },
  },
}

// Áraink – a Szolgáltatások oldalon jelenik meg.
const pricing = {
  hu: [
    ['Válási, válás utókövetés mediáció', '15.000 Ft / fő / óra'],
    ['Pénzügyi, gazdasági mediáció', '20.000 Ft / fő / óra'],
    ['Cégátvilágítás és faültető mediáció', 'egyedi igény alapján'],
  ],
  en: [
    ['Divorce and post-divorce follow-up mediation', 'HUF 15,000 / person / hour'],
    ['Financial / commercial mediation', 'HUF 20,000 / person / hour'],
    ['Company review and tree-planting mediation', 'on individual request'],
  ],
  it: [
    ['Mediazione per il divorzio e post-divorzio', '15.000 HUF / persona / ora'],
    ['Mediazione finanziaria / commerciale', '20.000 HUF / persona / ora'],
    ['Revisione aziendale e mediazione con piantumazione', 'su richiesta individuale'],
  ],
}

export const getServices = (lang) => base.map((b) => ({ ...b, ...text[lang][b.slug] }))
export const getService = (slug, lang) => getServices(lang).find((s) => s.slug === slug)
export const getPricing = (lang) => pricing[lang]

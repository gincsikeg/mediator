// A mediációs szolgáltatások. A "slug" adja az URL-t: /szolgaltatasok/<slug>
export const services = [
  {
    slug: 'penzugyi-gazdasagi-mediacio',
    label: 'Pénzügyi / gazdasági mediáció',
    tagline: 'Konfliktus helyett közös megoldás',
    symbol: '⚖',
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
    image: 'gina-meeting.png',
  },
  {
    slug: 'parkapcsolati-mediacio',
    label: 'Párkapcsolati mediáció',
    tagline: 'Kapcsolódás és tisztánlátás',
    symbol: '♡',
    short:
      'Szeretnél pároddal igazán mélyen, játszmák nélkül kapcsolódni? Az őszinteség a kulcs, mediátorként olyan biztonságos teret teremtek, melyben új szempontok, megoldások születhetnek.',
    intro:
      'Az az érzésed, hogy nem tudtok egymáshoz kapcsolódni pároddal? A pénzügyek, vagy egy-egy program átbeszélése folyamatos vitákat szül? Visszatérő konfliktusaitok vannak? Hiszem, hogy a pillérek lefektetése és az őszinte, tisztázó mediációs ülések elvezetnek a tisztánlátáshoz, és a kapcsolat fejlődhet.',
    forWhom: [
      'Párok, akik veszekedés nélkül szeretnének a pénzről és a közös döntésekről beszélni.',
      'Párok, akiknél egy-egy program vagy közös terv átbeszélése rendre vitába torkollik.',
      'Bárki, aki szeretné megérteni, mi rejtőzik a visszatérő konfliktusok hátterében.',
    ],
    steps: [
      ['Biztonságos keret', 'Világos szabályok, semleges légkör, teljes titoktartás.'],
      ['A háttér feltárása', 'Ránézünk arra, mi rejtőzik a visszatérő viták mögött.'],
      ['A pillérek lefektetése', 'Közösen tesszük tisztába a kapcsolat alapjait.'],
      ['Fellélegzés', 'A tisztánlátás után mindkét fél megkönnyebbül, a kapcsolat fejlődni kezd.'],
    ],
    image: 'gina-parkapcsolat.jpg',
  },
  {
    slug: 'valasi-mediacio',
    label: 'Válási mediáció',
    tagline: 'Méltósággal, a gyermekekért',
    symbol: '◈',
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
    image: null,
  },
  {
    slug: 'penzugyi-atvilagitas-szervezeti-mediacio',
    label: 'Pénzügyi átvilágítás és szervezeti mediáció',
    tagline: 'A rejtett költségek feltárása',
    symbol: '◔',
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
    image: 'gina-meeting.png',
  },
  {
    slug: 'alternativ-mediacio',
    label: 'Alternatív mediáció',
    tagline: 'Faültető csapatépítés a természetben',
    symbol: '❦',
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
    image: 'faultetes.jpeg',
  },
]

// Áraink – a Szolgáltatások oldalon és a részletező kártyákban jelenik meg.
export const pricing = [
  ['Válási, párkapcsolati mediáció', '20.000 Ft / fő / óra'],
  ['Pénzügyi, gazdasági mediáció', '50.000 Ft / óra'],
  ['Cégátvilágítás és faültető mediáció', 'egyedi igény alapján'],
]

export const getService = (slug) => services.find((s) => s.slug === slug)

# Kis Georgina – pénzügyi mediátor · weboldal

React + Vite + React Router (BrowserRouter) alapú, statikusan (pl. **GitHub Pages**) hostolható weboldal.

## Mit tartalmaz?

- **Kezdőlap** – a sötét, prémium („1b”) megjelenés az eredeti fotóval
- **Rólam**
- **Szolgáltatások** + három aloldal:
  - Pénzügyi átvilágítás
  - Pénzügyi mediáció
  - Párkapcsolati, válási mediáció
- **Blog** (2 cikkel) + cikk-oldalak
- **Kapcsolat** időpontfoglaló űrlappal
- Reszponzív (mobil menüvel), egyedi 404 oldal

---

## 1. Helyi futtatás

Szükséges: [Node.js](https://nodejs.org) 18+ (tartalmazza az `npm`-et).

```bash
npm install        # függőségek telepítése (egyszer)
npm run dev        # fejlesztői szerver -> http://localhost:5173
```

A `npm run build` a kész oldalt a `dist/` mappába építi, a `npm run preview` pedig helyben megnyitja a legyártott változatot.

---

## 2. Közzététel GitHub Pages-re

### a) Állítsd be a repo nevét a `vite.config.js`-ben

Ha a GitHub repository neve pl. `kis-georgina-mediator`, akkor az oldal címe
`https://<felhasznalonev>.github.io/kis-georgina-mediator/` lesz. A `vite.config.js`
tetején a `base` értéke **pontosan** ezzel egyezzen (perjelek között):

```js
const base = '/kis-georgina-mediator/'
```

> Ha saját domainre (pl. `www.kisgeorgina.hu`) vagy a `<felhasznalonev>.github.io`
> gyökerére teszed, akkor `const base = '/'`.

### b) Automatikus feltöltés (a legegyszerűbb)

```bash
npm install          # ha még nem tetted meg
npm run deploy       # legyártja a dist/-et és felrakja a gh-pages ágra
```

Ezután a GitHubon: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / `root`**.

### c) Kézi feltöltés

`npm run build`, majd a `dist/` mappa tartalmát töltsd fel a hosting szolgáltatásra.

---

## Miért működnek az aloldalak GitHub Pages-en? (BrowserRouter)

A GitHub Pages statikus, ezért a `/szolgaltatasok/...` típusú útvonalak frissítéskor
alapból 404-et adnának. Ezt a `public/404.html` + `index.html` páros oldja meg
(a jól bevált *spa-github-pages* trükk): a 404 átirányít, az `index.html` pedig
visszaállítja az eredeti útvonalat. Neked ezzel nincs teendőd, csak a `base` legyen jó.

---

## Testreszabás

- **Szövegek / szolgáltatások:** `src/data/services.js`
- **Blogcikkek:** `src/data/posts.js`
- **Színek, betűk:** `src/styles.css` teteje (`:root` változók)
- **Képek:** `public/images/` (cseréld le ugyanazokra a fájlnevekre)
- **Kapcsolati űrlap e-mail címe:** `src/pages/Contact.jsx` – az `EMAIL` konstans.
  Valódi beküldéshez ingyenes megoldás pl. a [Formspree](https://formspree.io):
  a `<form>` `action`-jét a Formspree URL-jére állítod, és `method="POST"`-ot használsz.

---

## Kapcsolat

**Kis Georgina** · pénzügyi mediátor · Budapest · +36 70 638 9702 · H–P 8:00–18:00

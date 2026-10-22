import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ FONTOS – GitHub Pages beállítás:
// Ha a repository neve pl. "kis-georgina-mediator", akkor az oldal címe
// https://<felhasznalonev>.github.io/kis-georgina-mediator/ lesz.
// Ilyenkor a "base" értékének PONTOSAN a repo nevével kell egyeznie, perjelek között.
// Ha saját domainre (pl. www.kisgeorgina.hu) vagy a <felhasznalonev>.github.io
// gyökerére teszed, akkor a base legyen egyszerűen '/'.
const base = '/mediator/'

export default defineConfig({
  base,
  plugins: [react()],
})

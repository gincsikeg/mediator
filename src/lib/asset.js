// A képek a public/images mappában vannak. A Vite "base" beállítást tiszteletben
// tartva építjük fel az elérési utat, hogy GitHub Pages alkönyvtárban is működjön.
export const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

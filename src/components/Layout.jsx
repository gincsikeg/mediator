import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { LangProvider } from '../lib/i18n.jsx'

export default function Layout({ lang }) {
  return (
    <LangProvider lang={lang}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LangProvider>
  )
}

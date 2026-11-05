import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// A nyelvenként közös oldalak. A blog csak magyarul érhető el.
const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="rolam" element={<About />} />
    <Route path="szolgaltatasok" element={<Services />} />
    <Route path="szolgaltatasok/:slug" element={<ServiceDetail />} />
    <Route path="kapcsolat" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </>
)

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout lang="hu" />}>
          {pages}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
        <Route path="/en" element={<Layout lang="en" />}>{pages}</Route>
        <Route path="/it" element={<Layout lang="it" />}>{pages}</Route>
      </Routes>
    </>
  )
}

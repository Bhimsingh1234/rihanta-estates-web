import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Directors from './pages/Directors.jsx'
import Privacy from './pages/Privacy.jsx'

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<section className="wrap pad"><h1>Page not found</h1></section>} />
      </Routes>
    </main>
    <Footer />
  </>)
}

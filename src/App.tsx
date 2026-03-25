import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteScrollProvider } from './context/SiteScrollContext'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './components/SiteLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <SiteScrollProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </SiteScrollProvider>
    </BrowserRouter>
  )
}

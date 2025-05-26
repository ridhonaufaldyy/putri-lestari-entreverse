import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSlider from './components/HeroSlider'
import ProfilPage from './pages/ProfilPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import BisnisJourney from './pages/BisnisJourney'
import PerjalananKuliah from './pages/PerjalananKuliah'
import Teknologi from './pages/Teknologi'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSlider />
            <HomePage />
          </>
        } />
        <Route path="/perjalanan-kuliah" element={<PerjalananKuliah />} />
        <Route path="/bisnis-journey" element={<BisnisJourney />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/perjalanan-kuliah" element={<PerjalananKuliah />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

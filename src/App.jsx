import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import SocialBanner from './Components/SocialBanner/SocialBanner'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
    <SocialBanner />
    <Footer />
    </BrowserRouter>
  )
}

export default App

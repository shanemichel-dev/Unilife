import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import SocialBanner from './Components/SocialBanner/SocialBanner'
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities'
import CityDetails from './Pages/CityDetails/CityDetails';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/see-all-cities' element={<SeeAllCities />} />
      <Route path='/city-details/:cityId' element={<CityDetails />} />
      <Route path='/property-details/:propertyId' element={<PropertyDetails />} />
      <Route path='*' element={<Homepage />} />
    </Routes>
    <SocialBanner />
    <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import SocialBanner from './Components/SocialBanner/SocialBanner'
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities'
import CityDetails from './Pages/CityDetails/CityDetails';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Shortlist from './Pages/Shortlist/Shortlist'
import ShortlistContextProvider from './Context/ShortlistContext'

function App() {

  return (
    <BrowserRouter>
    <ShortlistContextProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/see-all-cities' element={<SeeAllCities />} />
      <Route path='/city-details/:cityId' element={<CityDetails />} />
      <Route path='/property-details/:propertyId' element={<PropertyDetails />} />
      <Route path='/shortlist' element={<Shortlist />} />
      <Route path='*' element={<Homepage />} />
    </Routes>
    <SocialBanner />
    <Footer />
    </ShortlistContextProvider>
    </BrowserRouter>
  )
}

export default App

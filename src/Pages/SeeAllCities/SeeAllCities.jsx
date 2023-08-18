import { useEffect, useState } from 'react'
import CityButton from '../../Components/CityButton/CityButton'
import Slider from '../../Components/Slider/Slider'
import './SeeAllCities.css'
import axios from 'axios';

function SeeAllCities() {

    const [cities, setCities] = useState([]);

    useEffect(
        () => {
          axios.get(`https://unilife-server.herokuapp.com/cities?limit=50`)
          .then(res=>{
            setCities(res.data.response)
            
          })
          .catch(err=>console.log(err))
        }, []
      );

  return (
    <div className='see-all-cities-container'>
        <Slider 
            h1='Student Accomodation'
            p="UniLife have student accomodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you."
        />
        <h2>Search by City</h2>
        <div className='cities-box'>
            {cities.map((city, index) => (<CityButton key={index} city={city}/>))}
        </div>
    </div>
  )
}

export default SeeAllCities
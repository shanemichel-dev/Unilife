import { useEffect, useState } from 'react';
import './CitySearchBar.css'
import axios from 'axios';

function CitySearchBar() {

    const [allCities, setAllCities] = useState([]);

    useEffect(
        () => {
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=50`)
        .then(res=>{
            setAllCities(res.data.response);
            
        })
        .catch(err=>console.log(err))
        },[]
    );

  return (
    <div className='city-searchBar-container'>
        <select name="city-search" id="city-search">
            <option value="">Search by city</option>
            {allCities.map((city, index) => (
                <option key={index} value={city?.name}>{city?.name}</option>
            ))}
        </select>
        <button>Find Homes</button>
    </div>
  )
}

export default CitySearchBar
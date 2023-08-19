import { useEffect, useState } from 'react';
import './CitySearchBar.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CitySearchBar() {

    const [allCities, setAllCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    const navigate = useNavigate();

    useEffect(
        () => {
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=50`)
        .then(res=>{
            setAllCities(res.data.response);
            
        })
        .catch(err=>console.log(err))
        },[]
    );

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleFindHomesBtn = () => {
        if (selectedCity) {
            navigate(selectedCity);
        }
    };

  return (
    <div className='city-searchBar-container'>
        <select name="city-search" id="city-search" onChange={handleCityChange}>
            <option value="">Search by city</option>
            {allCities.map((city, index) => (
                <option key={index} value={`/city-details/${city?._id}`}>{city?.name}</option>
            ))}
        </select>
        <button onClick={handleFindHomesBtn}>Find Homes</button>
    </div>
  )
}

export default CitySearchBar
import Slider from '../../Components/Slider/Slider'
import './Homepage.css'
import CityCard from './../../Components/CityCard/CityCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import searchIcon from '../../assets/search-icon.png'
import compareIcon from '../../assets/compare-icon.png'
import billIcon from '../../assets/bill-icon.png'
import realEstate from '../../assets/real-estate.png'
import favoriteHeart from '../../assets/favorite-heart.png'
import person from '../../assets/person.png'

function Homepage() {

  const [topCities, setTopCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res=>{
        setTopCities(res.data.response.slice(0,9))
        
      })
      .catch(err=>console.log(err))

      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res=>{
        setAllCities(res.data.response)
        
      })
      .catch(err=>console.log(err))
    }, []
  );

  const handleAllCitiesBtn = () => {
    setTopCities(allCities);
  };

  return (
    <div className='homepage-container'>
      <Slider />
      <h2>Student accommodations in our top cities</h2>
      <div className='city-card-container'>
        {topCities.map((city, index) => <CityCard key={index} city={city}/>)}
      </div>
      <button className='allCitiesBtn' onClick={handleAllCitiesBtn}>See All Cites</button>
      <div className='compare-banner'>
        <h3>Compare all inclusive student homes.</h3>
        <div className='compare-info-container'>
          <div className='compare-icon-container'>
            <img src={searchIcon} alt="icon" />
            <h4 className='compare-icon-title'>Search</h4>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className='compare-icon-container'>
            <img src={compareIcon} alt="icon" />
            <h4 className='compare-icon-title'>Compare</h4>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className='compare-icon-container'>
            <img src={billIcon} alt="icon" />
            <h4 className='compare-icon-title'>Bills Included</h4>
            <p>Bills are included in all rent prices.  No Hidden fees.</p>
          </div>
        </div>
      </div>
      <div className='search-compare-info-section'>
        <div className='search-compare-info-container'>
          <div className='search-compare-icon-container'>
            <img src={realEstate} alt="" />
            <div>
              <h5>Best Selection</h5>
              <p>Best selection of student accommodations. Never been easier to find a home that&apos;s right for you.</p>
            </div>
          </div>
          <div className='search-compare-icon-container'>
            <img src={favoriteHeart} alt="" />
            <div>
              <h5>Your Favorite</h5>
              <p>Shortlist your Favorite properties and send enquiries in one click.</p>
              <button className='searchCompareBtn'>Search & Compare</button>
            </div>
          </div>
        </div>
        <img src={person} alt="" />
      </div>
    </div>
  )
}

export default Homepage
import { useParams } from 'react-router-dom'
import './CityDetails.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from '../../Components/Slider/Slider';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';

function CityDetails() {

  const {cityId} = useParams('');
  const [cityDetails, setCityDetails] = useState([]);
  const [cityProperties, setCityProperties] = useState([]);

  useEffect(
    () => {
      axios(`https://unilife-server.herokuapp.com/cities/${cityId}`)
      .then(res => {
        setCityDetails(res.data.data[0]);
      })
      .catch(err=>console.log(err))

      axios(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
        setCityProperties(res.data.response);
      })
      .catch(err=>console.log(err))
    }, []
  );

  return (
    <div className='city-details-container'>
      <Slider 
          h1='Search Accomodation'
          p="Whatever you're after. we can help you find the right student accommodation for you."
      />
      <h2>{`${cityDetails?.property_count} homes in ${cityDetails?.name}`}</h2>
      <div className='property-cards-container'>
        {cityProperties.map((property) => <PropertyCard key={property?._id} property={property} />)}
      </div>
    </div>
  )
}

export default CityDetails
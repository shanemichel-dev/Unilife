import { Link, useParams } from 'react-router-dom'
import './PropertyDetails.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineBathtub, MdOutlineBed, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineCheck, AiOutlineHeart } from 'react-icons/ai';
import BedroomPrices from '../../Components/BedroomPrices/BedroomPrices';

function PropertyDetails() {

  const {propertyId} = useParams('');
  const [property, setProperty] = useState([]);

  useEffect(
    () => {
      axios(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then(res => {
        console.log(res.data);
        setProperty(res.data);
      })
      .catch(err=>console.log(err))
    }, []
  );

  function formatBedroomString(str) {
    const splitStr = str.split('_');
    const numberMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
    };
    return `${splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1)} ${numberMap[splitStr[1]]}`;
  }


  return (
    <div className='property-details-container'>
      <Link className='back-to-search' to={`/city-details/${property?.city_id && property?.city_id._id}`}><MdOutlineKeyboardArrowLeft />&nbsp;Back to Search</Link>
      <div className='property-details-section'>
        <div className='property-images-container'>
          <img className='top-property-image' src={property?.images && property?.images[0]} alt="property image" />
          <div className='bottom-property-images-container'>
            <img className='bottom-property-images' src={property?.images && property?.images[1]} alt="property image" />
            <img className='bottom-property-images' src={property?.images && property?.images[2]} alt="property image" />
            <img className='bottom-property-images' src={property?.images && property?.images[3]} alt="property image" />
          </div>
        </div>
        <div className='property-location-details-container'>
          <div className='property-address-details-container'>
            <div className='property-address'>
              <p>{property?.address && property?.address.street},&nbsp;{property?.address && property?.address.city},&nbsp;{property?.address && property?.address.postcode}</p>
            </div>
            <div className='property-address-line'></div>
            <div className='property-address-details'>
              <div className='property-address-details-icon-container'>
                <p>Bedrooms</p>
                <div className='property-address-icon-details-container'>
                  <MdOutlineBed className='property-address-details-icon'/>
                  <p className='property-icon-count'>{property?.bedroom_count}</p>
                </div>
              </div>
              <div className='property-address-details-icon-container'>
                <p>Bathrooms</p>
                <div className='property-address-icon-details-container'>
                  <MdOutlineBathtub className='property-address-details-icon'/>
                  <p className='property-icon-count'>{property?.bathroom_count}</p>
                </div>
              </div>
              <div className='property-address-details-icon-container'>
                <p>Property Type</p>
                <div className='property-address-icon-details-container'>
                  <p className='property-address-details-type'>{property?.property_type}</p>
                </div>
              </div>
              <div className='property-address-details-icon-container'>
                <p>Price</p>
                <div className='property-address-icon-details-container'>
                  <p className='property-icon-count'>${property?.rent}</p>
                </div>
              </div>
              <div className='property-address-details-icon-container'>
                <p>Furnished Type</p>
                <div className='property-address-icon-details-container'>
                  <p className='property-address-details-type'>{property?.furnished}</p>
                </div>
              </div>
              <div className='property-address-details-icon-container'>
                <p>Available from</p>
                <div className='property-address-icon-details-container'>
                  <p className='property-address-details-type'>{property?.availability}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='property-location-details-buttons-container'>
            <button className='shortlist-button'><AiOutlineHeart className='shortlist-button-icon'/>Shortlist</button>
            <button className='book-viewing-button'>Book Viewing</button>
          </div>
        </div>
      </div>
      <div className='property-details-section'>
        <div className='property-description-container'>
          <p className='property-description-title'>Description</p>
          <p className='property-description'>{property?.property_description}</p>
        </div>
        <div className='property-prices-container'>
          <p className='property-prices-title'>Bedroom Prices</p>
          <div className='bedroom-prices-container'>
          {property?.bedroom_prices && Object.entries(property?.bedroom_prices).map(([bedroomNum, price], index) => 
            <BedroomPrices key={index} bedroomNum={formatBedroomString(bedroomNum)} price={price} />
          )}
          </div>
        </div>
      </div>
      <div className='key-features-container'>
        <p className='key-features-title'>Key Features</p>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{property?.key_features && property?.key_features[0]}</p>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{property?.key_features && property?.key_features[1]}</p>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{property?.key_features && property?.key_features[2]}</p>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{property?.key_features && property?.key_features[3]}</p>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{property?.key_features && property?.key_features[4]}</p>
      </div>
    </div>
  )
}

export default PropertyDetails
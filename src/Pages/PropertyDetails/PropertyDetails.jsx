import { Link, useParams } from 'react-router-dom'
import './PropertyDetails.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineAddHomeWork, MdOutlineBathtub, MdOutlineBed, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import BedroomPrices from '../../Components/BedroomPrices/BedroomPrices';
import KeyFeatures from '../../Components/KeyFeatures/KeyFeatures';
import Modal from 'react-modal';
import { ShortlistContext } from '../../Context/ShortlistContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'auto',
    borderRadius: '1.5rem',
  },
};

Modal.setAppElement(document.getElementById('root'));

function PropertyDetails() {

  const {shortlist, addProperty, removeProperty} = useContext(ShortlistContext);
  const [isShortlist, setIsShortlist] = useState(false);

  const {propertyId} = useParams('');
  const [property, setProperty] = useState([]);

  useEffect(
    ()=> {
      setIsShortlist(shortlist.find(item => item._id == property._id))
    }, [shortlist, property._id]
  )

  useEffect(
    () => {
      axios(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
      .then(res => {
        setProperty(res.data);
      })
      .catch(err=>console.log(err))
    }, [propertyId]
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

  const totalItems = property?.bedroom_prices ? Object.entries(property.bedroom_prices).length : 0;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    if (index > 0 && index < property.images.length) {
      const newSelectedImage = property.images[index];
      const newTopImage = property.images[0];
  
      const newImageOrder = [
        newSelectedImage,
        ...property.images.slice(1, index),
        newTopImage,
        ...property.images.slice(index + 1)
      ];
  
      setSelectedImageIndex(0);
      setProperty({
        ...property,
        images: newImageOrder
      });
    }
  };  

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toggleShortlist = () => {
    setIsShortlist(!isShortlist);
    if (isShortlist) {
      removeProperty(property?._id);
    } else {
      addProperty(property);
    }
  };

  return (
    <div className='property-details-container'>
      <Link className='back-to-search' to={`/city-details/${property?.city_id && property?.city_id._id}`}><MdOutlineKeyboardArrowLeft />&nbsp;Back to Search</Link>
      <div className='property-details-section'>
        <div className='property-images-container'>
          <img
            className='top-property-image'
            src={property?.images && property?.images[selectedImageIndex]}
            alt="property image"
          />
          <div className='bottom-property-images-container'>
            {property?.images &&
              property.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  className='bottom-property-images'
                  src={image}
                  alt="property image"
                  onClick={() => handleImageClick(index + 1)}
                />
              ))}
          </div>
        </div>
        <div className='property-location-details-container'>
          <div className='property-address-details-container'>
            <div className='property-address'>
              <p>{property?.address && property?.address.street}<br />{property?.address && property?.address.city},&nbsp;{property?.address && property?.address.postcode}</p>
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
            <button className='shortlist-button' onClick={toggleShortlist}>
              {
                isShortlist?
                <AiFillHeart className='shortlist-button-icon' />
                :
                <AiOutlineHeart className='shortlist-button-icon' />
              }
              Shortlist
            </button>
            <button className='book-viewing-button' onClick={openModal}>Book Viewing</button>
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
            <BedroomPrices key={index} bedroomNum={formatBedroomString(bedroomNum)} price={price} index={index} totalItems={totalItems}/>
          )}
          </div>
        </div>
      </div>
      <div className='key-features-container'>
        <p className='key-features-title'>Key Features</p>
        {property?.key_features && property?.key_features.map((feature, index) => <KeyFeatures key={index} feature={feature}/>)}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Viewing"
      >
        <div className='book-viewing-modal-header-container'>
          <div className='book-viewing-modal-header-title-container'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Book A Viewing</h2>
            <p>{property?.address && property?.address.street}<br />
              {property?.address && property?.address.city},&nbsp;
              {property?.address && property?.address.postcode}
            </p>
          </div>
          <MdOutlineAddHomeWork className='book-viewing-modal-icon'/>
        </div>
        <form className='book-viewing-modal-form'>
          <div className='book-viewing-modal-form-left'>
            <label htmlFor="" className='book-viewing-modal-form-label'>Name</label>
            <input type="text" name="" id="" placeholder='Enter your name' className='book-viewing-modal-form-input'/>
            <label htmlFor="" className='book-viewing-modal-form-label'>Email</label>
            <input type="email" name="" id="" placeholder='Enter your email address' className='book-viewing-modal-form-input'/>
            <label htmlFor="" className='book-viewing-modal-form-label'>Phone Number</label>
            <input type="number" name="" id="" placeholder='Enter your phone number' className='book-viewing-modal-form-input'/>
          </div>
          <div className='book-viewing-modal-form-right'>
            <label htmlFor="" className='book-viewing-modal-form-label'>Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message' className='book-viewing-modal-form-textArea'></textarea>
            <button className='book-viewing-modal-submit-btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default PropertyDetails
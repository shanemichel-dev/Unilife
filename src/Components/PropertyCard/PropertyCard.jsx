import { MdOutlineBathtub, MdOutlineBed, MdOutlineLocationOn } from 'react-icons/md'
import { PiHouseBold } from 'react-icons/pi'
import './PropertyCard.css'
import { Link } from 'react-router-dom'

function PropertyCard({property}) {

  return (
    <div className='property-card-container'>
        <img src={property?.images[0]} alt="property-image" />
        <div className='blue-banner'>
            <div className='price-container'>
                <p className='price'>${property?.rent}</p>
                <p>pppw including bills</p>
            </div>
            <div className='bed-bath-details'>
                <div className='property-bed-bath-icons'>
                    <MdOutlineBed className='property-bed-bath-icon'/>
                    <p>{property?.bedroom_count}</p>
                </div>
                <div className='property-bed-bath-icons'>
                    <MdOutlineBathtub className='property-bed-bath-icon'/>
                    <p>{property?.bathroom_count}</p>
                </div>
            </div>
        </div>
        <div className='white-banner'>
            <div className='property-type-details'>
                <p>{property?.property_type}</p>
                <p>{property?.furnished}</p>
            </div>
            <div className='property-location'>
                <MdOutlineLocationOn className='location-icon'/>
                <p>{property?.address.street},&nbsp;</p>
                <p>{property?.address.city},&nbsp;</p>
                <p>{property?.address.postcode}</p>
            </div>
        </div>
        <div className='view-home-banner'>
            <PiHouseBold className='property-icon' />
            <Link className='property-link' to={`/property-details/${property?._id}`}>View Home</Link>
        </div>
    </div>
  )
}

export default PropertyCard
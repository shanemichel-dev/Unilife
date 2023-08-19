import { Link } from 'react-router-dom'
import './CityCard.css'

function CityCard(city) {



  return (
    <div className='cityCard-container'>
      <img src={city?.city.image_url} alt="city" />
      <Link to={`/city-details/${city?.city._id}`} className='city-card-name-link'><p className='city-name'>{city?.city.name}</p></Link>
      <p>{city?.city.property_count} &nbsp; properties</p>
    </div>
  )
}

export default CityCard
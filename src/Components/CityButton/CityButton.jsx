import { Link } from 'react-router-dom'
import './CityButton.css'

function CityButton({city}) {

  return (
    <div className='city-button-container'>
        <Link className='city-button' to={`/city-details/${city?._id}`}>{city?.name}</Link>
    </div>
  )
}

export default CityButton
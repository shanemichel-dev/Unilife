import './CityCard.css'

function CityCard(city) {



  return (
    <div className='cityCard-container'>
      <img src={city?.city.image_url} alt="city" />
      <p className='city-name'>{city?.city.name}</p>
      <p>{city?.city.property_count} &nbsp; properties</p>
    </div>
  )
}

export default CityCard
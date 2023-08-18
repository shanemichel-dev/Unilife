
import './Slider.css'

function Slider({h1, p}) {
  return (
    <div className='slider-container'>
      <div className='slider-overlay'></div>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  )
}

export default Slider
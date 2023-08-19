import './BedroomPrices.css'

function BedroomPrices({bedroomNum, price, index, totalItems}) {

  return (
    <div className='bedroom-prices-componet-container'>
        <div className={`bedroom-price-container ${index !== totalItems - 1 ? 'bedroom-prices-container-border' : ''}`}>
            <p>{bedroomNum}</p>
            <p>${price}&nbsp;per week</p>
        </div>
    </div>
  )
}

export default BedroomPrices
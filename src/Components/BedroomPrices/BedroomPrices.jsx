import './BedroomPrices.css'

function BedroomPrices({bedroomNum, price}) {

    console.log(price);
    console.log(bedroomNum);

  return (
    <div className='bedroom-prices-componet-container'>
        <div className='bedroom-price-container bedroom-prices-container-border'>
            <p>{bedroomNum}</p>
            <p>${price}&nbsp;per week</p>
        </div>
    </div>
  )
}

export default BedroomPrices
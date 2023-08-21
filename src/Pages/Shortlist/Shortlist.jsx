import { useContext } from 'react'
import './Shortlist.css'
import { ShortlistContext } from '../../Context/ShortlistContext';
import PropertyCard from './../../Components/PropertyCard/PropertyCard';

function Shortlist() {

    const {shortlist} = useContext(ShortlistContext);

  return (
    <div className='shortlistPage'>
        <h1 className='shortlist-h1-p'>My Shortlist</h1>
        <div className='shortlistPage-container'>
            {
                shortlist.length > 0?
                shortlist.map(item => <PropertyCard key={item._id} property={item} />)
                : <p className='shortlist-h1-p'>No properties selected</p>
            }
        </div>
    </div>
  )
}

export default Shortlist
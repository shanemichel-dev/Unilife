import { AiOutlineCheck } from 'react-icons/ai'
import './KeyFeatures.css'

function KeyFeatures({feature}) {
  return (
    <div>
        <p className='key-feature'><AiOutlineCheck className='key-features-icon'/>&nbsp;{feature}</p>
    </div>
  )
}

export default KeyFeatures
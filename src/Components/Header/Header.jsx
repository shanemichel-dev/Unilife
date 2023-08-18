import { AiOutlineHeart } from 'react-icons/ai'
import './Header.css'
import { MdOutlineHolidayVillage } from 'react-icons/md'
import { BiEnvelope } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <MdOutlineHolidayVillage className='village-icon'/>
        <Link className='logo-link' to={'/'}><p>UniLife</p></Link>
      </div>
      <div className='header-btns-container'>
        <div className='shortlist-container'>
          <AiOutlineHeart className='heart-icon'/>
          <p>Shortlist</p>
        </div>
        <div className='contact-container'>
          <BiEnvelope className='envelope-icon'/>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Header
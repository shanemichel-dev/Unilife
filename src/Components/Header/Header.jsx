import { AiOutlineHeart } from 'react-icons/ai'
import './Header.css'
import { MdOutlineHolidayVillage } from 'react-icons/md'
import { BiEnvelope } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { useState } from 'react'
import postOffice from '../../assets/post-office.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'auto',
    borderRadius: '1.5rem',
    zIndex: 9999,
  },
};

Modal.setAppElement(document.getElementById('root'));

function Header() {

  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  function handleMenuItemClick() {
    setMenuActive(false); // Close the menu when a menu item is clicked
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='header-container'>
      <div className='header-logo-container'>
        <MdOutlineHolidayVillage className='village-icon'/>
        <Link className='logo-link' to={'/'}><p>UniLife</p></Link>
      </div>
      <div className='header-btns-container'>
        <button className='menu-toggle-btn' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </button>
        <div className={`menu-items ${menuActive ? 'active' : ''}`}>
          <Link to={'/shortlist'} className='shorlist-page-link' onClick={handleMenuItemClick}>
            <div className='shortlist-container'>
              <AiOutlineHeart className='heart-icon'/>
              <p>Shortlist</p>
            </div>
          </Link>
          <div className='contact-container' onClick={handleMenuItemClick}>
            <BiEnvelope className='envelope-icon'/>
            <p onClick={openModal}>Contact Us</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Viewing"
      >
        <div className='book-viewing-modal-header-container'>
          <div className='book-viewing-modal-header-title-container'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Us</h2>
            <p>Feel free to contact us if you have any questions.<br />Looking forword to hear from you.</p>
          </div>
          <img src={postOffice} className='book-viewing-modal-icon'/>
        </div>
        <form className='book-viewing-modal-form'>
          <div className='book-viewing-modal-form-left'>
            <label htmlFor="name" className='book-viewing-modal-form-label'>Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' className='book-viewing-modal-form-input'/>
            <label htmlFor="select" className='select'>Are you a...</label>
            <select name="select" id="select">
              <option value="student">Student</option>
            </select>
            <label htmlFor="number" className='book-viewing-modal-form-label'>Phone Number</label>
            <input type="number" name="number" id="phoneNumber" placeholder='Enter your phone number' className='book-viewing-modal-form-input'/>
          </div>
          <div className='book-viewing-modal-form-right'>
            <label htmlFor="email" className='book-viewing-modal-form-label'>Email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email address' className='book-viewing-modal-form-input'/>
            <label htmlFor="message" className='book-viewing-modal-form-label'>Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' className='book-viewing-modal-form-textArea'></textarea>
            <button className='book-viewing-modal-submit-btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Header
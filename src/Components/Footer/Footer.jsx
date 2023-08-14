import './Footer.css'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <div className='footer-info-container'>
        <p className='space1'>About Us</p>
        <p className='space1'>Terms & Conditions</p>
        <p> Privacy & Cookie Policies</p>
      </div>
      <div className='copyright-container'>
        <p className='space1'>{currentYear}</p>
        <p>&copy;UniLife</p>
      </div>
    </div>
  )
}

export default Footer
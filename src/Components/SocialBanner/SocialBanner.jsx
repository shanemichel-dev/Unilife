import { useState } from 'react'
import './SocialBanner.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function SocialBanner() {

   const [email, setEmail] = useState('');
   const [messageVisible, setMessageVisible] = useState(false);

   const handleInputChange = (e) => {
        setEmail(e.target.value);

    }

    const handleSubscription = (e) => {
        e.preventDefault();
        setMessageVisible(true);
        document.querySelector('.sub-input').value = '';
    }

  return (
    <div className='social-banner-container'>
        <div className='subscribe-container'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <form onSubmit={handleSubscription}>
                <input 
                    className='sub-input'
                    type="text" 
                    placeholder='Your email'
                    onChange={handleInputChange}
                />
            </form>
            {messageVisible && <p style={{color: 'green'}}>{`Done! "${email}" Thanks for subscribing to our newsletter.`}</p>}
        </div>
        <div className='social-icons-container'>
            <h3>Let&apos;s Socialize</h3>
            <div className='social-icon'>
                <BsFacebook className='space' />
                <p>Facebook</p>
            </div>
            <div className='social-icon'>
                <BsTwitter className='space' />
                <p>Twitter</p>
            </div>
            <div className='social-icon'>
                <BsInstagram className='space' />
                <p>Instagram</p>
            </div>
        </div>
    </div>
  )
}

export default SocialBanner
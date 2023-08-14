import './SocialBanner.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function SocialBanner() {
  return (
    <div className='social-banner-container'>
        <div className='subscribe-container'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type="text" placeholder='Your email' />
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
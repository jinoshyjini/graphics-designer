import React from 'react';
import '../Assets/Css/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Developer from '../Assets/Images/developer.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-content'>
                {/* <div className='footer-txt'>© 2024 Jetly Johnson All Rights Reserved</div> */}
                <div className='footer-txt'>Contact with me
                    <div className='footer-line'></div>
                    <div className='footer-social mt-1'>
                        <InstagramIcon className='footer-icon' />
                        <WhatsAppIcon className='footer-icon' />
                        <LinkedInIcon className='footer-icon' />
                    </div>
                </div>
                <div className='footer-txt'>Designed By
                    <div className='footer-dev-line'></div>
                    <div>
                        <img src={Developer} alt="Jino Shyjini" className="dev-name" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;

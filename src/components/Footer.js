import React from 'react'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import '../Css/FooterStyle.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='container container-flex'>
                <div>
                    <h5>Contact Information</h5>
                    <p>Mail to: info@pfactorial.com</p>
                    <p>Address: B14, CYBER PARK (Sahya), Nellikode,</p>
                    <p>Kozhikode, Kerala 673016</p>
                </div>
                <div className='icons'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
                {/* <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1011117040143!2d75.83496041437517!3d11.253971891998559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659526e33b51b%3A0x2152f99d9026de23!2sPfactorial%20technologies%20private%20ltd!5e0!3m2!1sen!2sin!4v1675652969212!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
            </div>
        </footer>
    </div>
  )
}

export default Footer
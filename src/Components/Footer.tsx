import React from 'react'
import FooterLogo from "../Images/FooterLogo.svg";
import '../styles/footer.css';
import Imagefooter from "../Images/footer.png"
import {FaTelegram} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {BiLogoInstagramAlt} from "react-icons/bi"

function Footer() {
  return (
    <footer className='px footer-container '>
      <img src={FooterLogo} alt="logo" className='footer-logo'/>
    <ul className='items'>
        <h2>On the logo</h2>
        <li > <a href='#'>Create an account</a></li>
        <li> <a href='#'>Become a partener</a></li>
        <li> <a href='#'>Affliate programs</a></li>
    </ul>
    <ul className='items'>
        <h2>On the logo</h2>
        <li > <a href='#'>Create an account</a></li>
        <li> <a href='#'>Become a partener</a></li>
        <li> <a href='#'>Affliate programs</a></li>
    </ul>
    <ul className='items last'>
        <h2>Contact us</h2>
        <li > <a href='#'>Intravel@gmail.com</a></li>
        <li > <a href='#'>Intravel@gmail.com</a></li>
        <FaTelegram className='telegram' />
        <FaWhatsappSquare className="tsap"/>
        <BiLogoFacebookCircle className="facebook" />
        <BiLogoInstagramAlt className="insta" />
    </ul>
    <img src={Imagefooter} alt="footer" className='logo-footer'/>
    </footer>
  )
}

export default Footer

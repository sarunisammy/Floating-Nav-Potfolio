import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li> <a href='#'/>Home</li>
        <li> <a href='#About'/>About</li>
        <li> <a href='#Experience'/>Experience</li>
        <li> <a href='# services'/>Service</li>
        <li> <a href='# portfolio'/>Portfolio</li>
        <li> <a href='# testimonials'/>Testimonials</li>
        <li> <a href='#contact'/>Contact</li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Saruni Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../Assets/me.png'
import Socials from './Socials'




const Header = () => {
  return (
    <header>
       <div className='container header__container'>
      
      <h5>hello im</h5>
      <h1>Hajia Bintu</h1>
      <h5 className='text-light'>Fullstack developer</h5>
      <CTA/>
      <Socials/>
      
      <div className='me'>
        <img src={Me} alt='me'/>
      </div>
      <a href='#contact' className='scroll__bar'>Scroll Down</a>
{/* //add social networks */}


    </div>
    </header> 
   
  )
}

export default Header
import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAdd} from 'react-icons/bi'

const Nav = () => {

  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#About' onClick={()=> setActiveNav('#About')}  className={activeNav ==='#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')}  className={activeNav ==='#experience' ? 'active' : ''}><BiBookAlt/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')}  className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')}  className={activeNav ==='#contact' ? 'active' : ''}><BiMessageAdd/></a>
    </nav>
)
}

export default Nav
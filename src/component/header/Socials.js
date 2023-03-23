import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
// import {AiOutlineInstagram} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='header__socials'>

<a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com' target="_blank"> <BsGithub/></a>
    <a href='https://dribble.com' target="_blank"> <FiDribbble/></a>
    {/* <a href='https://instagram.com' target="_blank">< AiOutlineInstagram/></a> */}
    </div>
   
  )
}

export default Socials
import React from 'react'
import './About.css'
import Me from '../../Assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img  src={Me} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className=' about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In eleifend lorem malesuada, ultrices nisl in, blandit urna. 
          Morbi sed ante felis. Integer iaculis ac metus vitae semper.
         
          </p>
          <a href='#contact' className='btn btn-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
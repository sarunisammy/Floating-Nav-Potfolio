import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'> 
    <h5>What i offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
      <article className='services'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
        </ul>

      </article>
      {/* end of ui/ux  */}

      <article className='services'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
        </ul>

      </article>
      {/* end of web development */}

      <article className='services'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur elit</p>
          </li>
        </ul>

      </article>
      {/* end of Content creation */}
    </div>
    </section>
  )
}

export default Services
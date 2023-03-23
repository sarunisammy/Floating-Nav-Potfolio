import React from 'react'
import './Contact.css'
import {AiOutlineMail} from  'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w2mkuis', 'template_a8pdg5v', form.current, 'user_ioL5jrOjyphhA02Ft')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samwelsaruni99@gmail.com</h5>
            <a href='mailto:samwelsaruni99@gmail.com' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>my portfolia app</h5>
            <a href='https:m.me//www.facebook.com' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254710243762</h5>
            <a href='https://api.whatsapp.com/send?phone +254710243762' target={'_blank'}>Send a message</a>
          </article>
          {/* <article className='contact__option'>
          <BsInstagram  className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>+254710243762</h5>
            <a href='https://www.instagram.com/'>Send a message</a>
          </article> */}

        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input placeholder='Your Full Names' type="text" name='name' required />
          <input placeholder='Your Email' type="email" name='email' required />
          <textarea name='message' rows="7" placeholder='Your  message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
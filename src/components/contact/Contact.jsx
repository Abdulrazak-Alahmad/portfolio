import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2teere', 'template_mmn2x4n', form.current, 'ud8DWtRERIOm8Jj5I')
    e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Alahmad.abdulrazak.nl@gmail.com</h5>
            <a href='mailto:Alahmad.abdlrazak.nl@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Abdulrazak Alahmad</h5>
            <a href='https://m.me/abed.ahmed.3.14' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+31686316623</h5>
            <a href="https://api.whatsapp.com/send?phone=31686316623" target='_blank' >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-praimary '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

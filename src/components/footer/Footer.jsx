import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
<a href='#' className='footer__logo'>A.ALAHMAD</a>
<ul>
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experience'>Experience</a></li>
<li><a href='#services'>Services</a></li>
<li><a href='#portofolio'>Portfolio</a></li>
<li><a href='#testimonials'>Testimonials</a></li>
<li><a href='#contact'>Contact</a></li>

</ul>
<div className='footer__socials'>

<a href='https://www.facebook.com/abed.ahmed.3.14/' target='_blank'><BsFacebook/></a>
<a href='https://www.instagram.com/alahmad.abdulrazak/' target='_blank'><AiOutlineInstagram></AiOutlineInstagram></a>
<a href='https://twitter.com/alahmadabdul96' target='_blank'><BsTwitter></BsTwitter></a>

</div>
<div className='footer__copyright'>
<small>
  &copy; Alahmad.
</small>
</div>

    </footer>
  )
}

import React from 'react'
import './about.css'
import ME from '../../assets/IMG_0004.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Abdulrazak ' className='about__image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Months Training</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>+10 Completed</small>
            </article>
          </div>
          <p> I am a web designer and developer who specializes in creating dynamic and beautiful web pages. I have been in the field for nearly 4 months, and have been loving every minute of it. I am a blogger, entrepreneur, designer, developer, and overall thinker. Check out some of the links below to see what I’ve been up to lately.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './experience.css'
import { FaCalendarCheck } from 'react-icons/fa'
export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>Experience</h2>

      <div className='container experience__container '>

        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>CSS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>React</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>


          <h3>Back-end Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>Node JS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article><article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>Python</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>MySQl</h4>
                <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <FaCalendarCheck className='experience__details-icon' />
              <div><h4>C++</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

          </div>

        </div>







      </div>










    </section>
  )
}

import React from 'react'
import './services.css'
import { RiCheckFill } from 'react-icons/ri'
export default function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>


        {/* Network and System */}
        <article className='service'>
          <div className='service__head'>
            <h3>Network and System</h3>

          </div>
          <ul className='service__list'>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Installation and management network technologies</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Configuring LAN, WAN and Wireless equipment</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Build a complex systems</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Ability to create and deliver solutions</p>
            </li>
           
          </ul>




        </article>
        {/* Network and System */}


        {/* Start second part */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development </h3>

          </div>
          <ul className='service__list'>
            <li >
              <RiCheckFill className='service__list-icon' />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Website Redesign</p>
            </li>
            <li >
              <RiCheckFill className='service__list-icon' />
              <p>Template and Theme development</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Maintenance and Enhancement</p>
            </li>
            
          </ul>




        </article>
        {/* End second part */}


        {/* Start third part */}
        <article className='service'>
          <div className='service__head'>
            <h3>Telecommunication</h3>

          </div>
          <ul className='service__list'>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Planning and optimizing mobile network</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Planning and optimization microwave's network</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Build RADAR system from the scratch</p>
            </li>
            <li>
              <RiCheckFill className='service__list-icon' />
              <p>Control and maintenance load traffic </p>
            </li>
          </ul>




        </article>
        {/* End third part */}



      </div>


    </section>
  )
}

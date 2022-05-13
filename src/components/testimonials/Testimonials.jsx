import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/IMG_0004.jpeg'
import Mohammed from '../../assets/mohamed.jpeg'
import Girl from '../../assets/girl.webp'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: Mohammed,
    name: 'Muhammed Rajab',
    review: 'It was pleasure to work with you throw this project, you have a flow of idea each time we faced a problem and amazing skill to fix it',
  },
  {
    avatar:Girl,
    name: 'Mirna',
    review: 'I do not know him personally, but I dealt with him in the course of programming, very polite person and helps everyone. It also motivates us when we feel the despair of exercise,I feel he has a great future in programming.',
  },
  {
    avatar: Girl,
    name: 'Lina',
    review: "You are an intelligent person, loves to help others and deserve success because you're always working hard I wish you more success.",
  },
  {
    avatar: Girl,
    name: 'Fatima',
    review: "Positive and loves to help others, has a critical thinking and can spot mistakes quickly.",
  }

]
export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviow for colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
      {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='hi hi' />

              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'> {review}</small>

            </SwiperSlide>
          )
        })
      }
</Swiper>

    </section>
  )
}



import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/5.jpeg'
import IMG2 from '../../assets/2.webp'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/1.jpg'
const data =[

{
  id:1,
  image:IMG2,
  title:"Quotes Generator",
  github:'https://github.com/Abdulrazak-Alahmad/Quotes-Generator',
  demo:'https://abdulrazak-alahmad.github.io/Quotes-Generator/',
},{
  id:2,
  image:IMG4,
  title:"Countdown Timer",
  github:'https://github.com/Abdulrazak-Alahmad/CountdownTimer',
  demo:'https://abdulrazak-alahmad.github.io/CountdownTimer/',
},
{
  id:3,
  image:IMG1,
  title:"From Turing to Gates",
  github:'https://github.com/Abdulrazak-Alahmad/J.Quary',
  demo:'https://abdulrazak-alahmad.github.io/J.Quary/',
},
{
  id:4,
  image:IMG3,
  title:"Pomodoro Timer",
  github:'https://github.com/Abdulrazak-Alahmad/Pomodoro-timer',
  demo:'https://abdulrazak-alahmad.github.io/Pomodoro-timer/',
},
{
  id:5,
  image:IMG5,
  title:"microfinance_Institution",
  github:'https://github.com/Abdulrazak-Alahmad/microfinance_Institution',
  demo:'https://abdulrazak-alahmad.github.io/microfinance_Institution/',
}
]
export default function Portofolio() {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item' id='portfolio__item'>
                <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn btnwheat ' target='_blank'>Github</a>
          <a href={demo} className='btn btn-praimary' >Live Demo</a>
          </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
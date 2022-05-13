import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/5.jpeg'
import IMG2 from '../../assets/2.webp'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
const data =[
{
  id:1,
  image:IMG1,
  title:"Fetch Data github-Api",
  github:'https://github.com/Abdulrazak-Alahmad/Github-Api',
  demo:'https://Abdulrazak-Alahmad.io/Github-Api',
},
{
  id:2,
  image:IMG2,
  title:"Quotes Generator",
  github:'https://github.com/Abdulrazak-Alahmad/Quotes-Generator',
  demo:'https://Abdulrazak-Alahmad.io/Quotes-Generator',
},{
  id:3,
  image:IMG4,
  title:"Countdown Timer",
  github:'https://github.com/Abdulrazak-Alahmad/CountdownTimer',
  demo:'https://Abdulrazak-Alahmad.io/CountdownTimer',
},
{
  id:4,
  image:IMG3,
  title:"Pomodoro Timer",
  github:'https://github.com/Abdulrazak-Alahmad/Pomodoro-timer',
  demo:'https://Abdulrazak-Alahmad.io/Pomodoro-timer',
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

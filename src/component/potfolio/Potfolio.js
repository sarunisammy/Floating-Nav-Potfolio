import React from 'react'
import './Potfolio.css'
import  IMG1 from '../../Assets/portfolio1.jpg'
import  IMG2 from '../../Assets/portfolio2.jpg'
import  IMG3 from '../../Assets/portfolio3.jpg'
import  IMG4 from '../../Assets/portfolio4.jpg'
import  IMG5 from '../../Assets/portfolio5.png'
import  IMG6 from '../../Assets/portfolio6.jpg'


const data =[
  {
    id:1,
    image:IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://dribble.com/shots/1667371-Crypto-currenct-dashboards-and-financial-data-visualization',
  },
  
  {
    id:2,
    image:IMG2,
    title: 'Chats templetes & inforgraphics in Figma',
    github:'https://github.com',
    demo:'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id:3,
    image:IMG3,
    title: 'Figma dashboardnUi kit for data  design web apps',
    github:'https://github.com',
    demo:'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:4,
    image:IMG4,
    title: 'Maintaining tasks and tracking progress',
    github:'https://github.com',
    demo:'https://dribble.com/shots/16955822-Mainting-tasks-and-tracking-progress',
  },
  {
    id:5,
    image:IMG5,
    title: 'Chats templetes & inforgraphics in Figma',
    github:'https://github.com',
    demo:'https://dribble.com/shots/169541289-Orion-UI-kit-Charts-templetes-inforgraphic-in-Figma',
  },
  {
    id:6,
    image:IMG6,
    title: 'Chats templetes & inforgraphics in Figma',
    github:'https://github.com',
    demo:'https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templetes-inforgraphic-in-Figma',
  },
]

const Potfolio = () => {
  return (
    <section id='potfolio'>
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id,image, title, github, demo})=>{
          return(
            
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
          )

        })
       }
          
      
      </div>
    </section>
  )
}

export default Potfolio
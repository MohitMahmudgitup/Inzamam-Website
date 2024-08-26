import React from 'react'
import { allImage } from '../../Images/image'
import "./Skill.css"

function Skill() {
  return (
    <div className='flex py-96 '>
      <div className='w-[40%] pl-20 '>
        <h1 className='f1  text-[10vw] -mt-10'>Skill</h1>
      </div>
      <div className='w-[60%] flex flex-wrap gap-5'>
      <a href="https://react.dev/" target="_blank">
        <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl w-[240px] h-[120px]'>
          <img className = 'skill-img ' src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png"  />
        </div>
      </a>
       <a href="https://expressjs.com/" target='_blank'>
       <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl w-[240px] h-[120px]'>
            <img className = 'skill-img ' src={allImage.pic9}  />
        </div>
       </a>

        <a href='https://www.w3schools.com/html/' target='_blank'>
        <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl w-[240px] h-[120px]'>
            <img className = 'skill-img ' src={allImage.pic10} alt="" />
        </div>
        </a>
        <a href="https://www.w3schools.com/js/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl w-[240px] h-[120px]'>
            <img className = 'skill-img ' src={allImage.pic11} alt="" />
          </div>
        </a>
        <a href="https://nodejs.org/en" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="" />
          </div>
        </a>
        <a href="https://www.w3schools.com/css/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img rounded-xl ' src={allImage.pic13} alt="" />
          </div>
        </a>
        <a href="https://redux.js.org/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://w7.pngwing.com/pngs/724/234/png-transparent-redux-react-javascript-vue-js-single-page-application-others-thumbnail.png" alt="" />
          </div>
        </a>
        <a href="https://nextjs.org/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png" alt="" />
          </div>
        </a>
        <a href="https://tailwindcss.com/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="" />
          </div>
        </a>
        <a href="https://getbootstrap.com/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png" alt="" />
          </div>
        </a>
        
        <a href="https://www.mongodb.com/" target='_blank'>
          <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl  w-[240px] h-[120px]'>
            <img className = 'skill-img ' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
          </div>
        </a>

        
      </div>
    </div>
  )
}

export default Skill

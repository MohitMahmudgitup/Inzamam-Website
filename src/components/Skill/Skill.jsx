import React from 'react';
import { allImage } from '../../Images/image';
import './Skill.css';

const skills = [
  { name: 'React', url: 'https://react.dev/', img: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png' },
  { name: 'Express', url: 'https://expressjs.com/', img: allImage.pic9 },
  { name: 'HTML', url: 'https://www.w3schools.com/html/', img: allImage.pic10 },
  { name: 'JavaScript', url: 'https://www.w3schools.com/js/', img: allImage.pic11 },
  { name: 'Node.js', url: 'https://nodejs.org/en', img: 'https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png' },
  { name: 'CSS', url: 'https://www.w3schools.com/css/', img: allImage.pic13 },
  { name: 'Redux', url: 'https://redux.js.org/', img: 'https://w7.pngwing.com/pngs/724/234/png-transparent-redux-react-javascript-vue-js-single-page-application-others-thumbnail.png' },
  { name: 'Next.js', url: 'https://nextjs.org/', img: 'https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', img: 'https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', img: 'https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png' },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', img: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
  { name: 'Git', url: 'https://git-scm.com/', img: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' },
];

function Skill() {
  return (
    <div className='skill-section py-20  text-white sm:flex  items-center justify-around'>
      <div>
      <h1 className='text-7xl sm:text-8xl -mt-10 f1 text-center  '>Skills</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3  gap-6 px-10 pt-6 sm:pt-0'>
        {skills.map((skill, index) => (
          <a key={index} href={skill.url} target='_blank' rel='noopener noreferrer' className='group'>
            <div className='castom-skill-item flex justify-center items-center bg-zinc-800 rounded-xl sm:w-[240px] h-[120px]'>
              <img className='skill-img' src={skill.img} alt={skill.name} />
              {/* <p className='text-lg font-semibold'>{skill.name}</p> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skill;
import { allImage } from '../../../Images/image'
import './Skill.css'
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import { useMemo } from 'react'

const skills = [
  { name: 'React', url: 'https://react.dev/', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png' },
  { name: 'Express', url: 'https://expressjs.com/', img: allImage.pic9 },
  { name: 'HTML', url: 'https://www.w3schools.com/html/', img: allImage.pic10 },
  { name: 'JavaScript', url: 'https://www.w3schools.com/js/', img: "https://static.vecteezy.com/system/resources/previews/051/336/397/non_2x/javascript-transparent-logo-free-png.png" },
  { name: 'Node.js', url: 'https://nodejs.org/en', img: 'https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png' },
  { name: 'CSS', url: 'https://www.w3schools.com/css/', img: "https://cdn-icons-png.freepik.com/256/5968/5968242.png?semt=ais_white_label" },
  { name: 'Redux', url: 'https://redux.js.org/', img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png' },
  { name: 'Next.js', url: 'https://nextjs.org/', img: 'https://img.icons8.com/fluent-systems-filled/512w/FFFFFF/nextjs.png' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', img: 'https://static.cdnlogo.com/logos/t/34/tailwind-css.svg' },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', img: 'https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png' },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', img: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
  { name: 'Git', url: 'https://git-scm.com/', img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png' },
]

function Skill({ reverseDirection = false, speed = 3000 }) {
  const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}
  const shuffledSkills = useMemo(() => shuffleArray(skills), [])
  return (
    <div className="skill-section py-5 text-white justify-around">
      <div className="w-full  px-6 ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={speed}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: reverseDirection,
          }}
          breakpoints={{
            0: {
              slidesPerView: 6, // small mobile
            },
            480: {
              slidesPerView: 6, // mobile
            },
            640: {
              slidesPerView: 8, // large mobile / small tablet
            },
            768: {
              slidesPerView: 8, // tablet
            },
            1024: {
              slidesPerView: 10, // laptop
            },
            1280: {
              slidesPerView: 11, // large screen
            },
          }}
          grabCursor={true}
          allowTouchMove={false}
          className="skill-swiper"
        >
          {shuffledSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className=" flex justify-center items-center  2xl:w-20 md:w-18 2xl:h-20 md:h-18 w-10 h-10 ">
                  <img
                    className="w-full h-full object-contain grayscale"
                    src={skill.img}
                    alt={skill.name}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default Skill

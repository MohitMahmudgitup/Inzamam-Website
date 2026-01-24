
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { allImage } from "../../../Images/image";
const Hero = () => {
      function Amination() {
    let mm = gsap.matchMedia()
    mm.add("(min-width:1350px)", () => {
      useGSAP(() => {
        let tl = gsap.timeline()
          .to(".box-image .image", {
            direction: 2,
            delay: 3,
            transform: "translatey(-68%)",
            scrollTrigger:
            {
              scroll: ".box-image .image",
              trigger: ".box-image",
              start: "top 0% ",
              end: "bottom 150%",
              scrub: 5,
              pin: true,
              // markers:true
            }
          })
      })
    })
    mm.add("(max-width:999px)", () => {
      useGSAP(() => {
        let tl = gsap.timeline()
          .to(".box-image .image", {
            direction: 2,
            delay: 3,
            transform: "translatey(-85%)",
            scrollTrigger:
            {
              scroll: ".box-image .image",
              trigger: ".box-image",
              start: "top 0% ",
              end: "bottom 200%",
              scrub: 5,
              pin: true,
            }
          })

      })
    })

  }

  Amination()
    return (
        <section className=' box-image py-28 px-0 md:h-[170vh] h-[200vh]  flex justify-between items-center flex-col  '>
            <div className=' w-full   md:w-[50%] flex justify-center items-center flex-col mb-3 md:mb-0  px-5 md:px-0'>
                <h1 className='f1 capitalize cursor-default  z-40 text-center mt-16 text-6xl md:text-9xl 2xl:text-[180px] md:text-[130px] sm:text-[180px] text-[90px] '>FullStack </h1>
                <h1 className='f1 capitalize cursor-default  z-40 text-center text-6xl md:text-9xl 2xl:text-[180px] md:text-[130px] sm:text-[180px] text-[90px] '>web</h1>
                <h1 className='f1 capitalize cursor-default  text-center text-6xl md:text-9xl 2xl:text-[180px] md:text-[130px] sm:text-[180px] text-[90px]  '>developer</h1>
                <div className="castom-display-img-box w-full h-full md:h-[80vh] image  flex justify-center  ">
                    <div className='castom-display-img md:w-96  md:p-0 rounded-xl md:translate-y-1/4 '>
                        <img className='rounded-xl bottom-0' src={allImage.pic3} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

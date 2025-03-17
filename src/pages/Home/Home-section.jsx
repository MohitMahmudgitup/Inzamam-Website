
import "../../App.css"
import { allImage } from "../../Images/image";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Home-section.css"
import Amt from "../../components/Home-Animation-Pic/Amt";
import Skill from "../../components/Skill/Skill";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


function Homesection() {




function section1() {
  let mm = gsap.matchMedia()
    mm.add("(min-width:1000px)",()=>{
      useGSAP(()=>{
        let tl = gsap.timeline()
        .to(".box-image .image",{
          direction:2,
          delay:3,
          transform: "translatey(-85%)",
          scrollTrigger:
          {
            scroll:".box-image .image",
            trigger:".box-image",
            start: "top 0% ",
            end: "bottom 150%",
            scrub: 5,
            pin: true, 
            // markers:true
    
          }
          })  
        .to('.bigtextbox h1',{
            transform:"translatex(-410%)", 
                direction:2,
                delay:3,
                scrollTrigger:
                {
                  scroll:".bigtextbox h1",
                  trigger:".bigtextbox",
                  start:"top 0%",
                  end:"bottom -250%",
                  scrub:2,
                  pin:true
                }
          })
        })
    })
  
}

section1()

  return (<>


  
  <main className="main scroll-container text-blue-50" >
    <section className=' box-image py-28 px-0 md:h-[170vh]  flex justify-between items-center flex-col  '>
      <div className='castom-display-text w-full   md:w-[50%] flex justify-center items-center flex-col mb-3 md:mb-0  px-5 md:px-0'>
        <h1  className='f1 castom-text capitalize cursor-default leading-[3vw] z-40 text-center mt-16 text-6xl md:text-9xl '>FullStack </h1>
        <h1  className='f1 castom-text capitalize cursor-default leading-[3vw] z-40 text-center text-6xl md:text-9xl '>web</h1>
        <h1 className='f1 castom-text capitalize cursor-default leading-[3vw] text-center text-6xl md:text-9xl  '>developer</h1>
        <div className="castom-display-img-box w-full h-full md:h-[80vh] image  flex justify-center  ">
          <div className='castom-display-img md:w-96    md:p-0 rounded-xl md:translate-y-1/4 '>
            <img className='rounded-xl bottom-0' src={allImage.pic3}/>
          </div>
        </div>
      </div>
    </section>
    <section className="">
   <Amt/>
    <hr />
    <div className="w-full md:px-32 pt-10 md:pt-28  sm:h-[180vh] ">
      <div className="castom-221 flex ">
        <div className="castom-22 flex md:w-[50%] flex-col  ">
          <h1 className="text-7xl f1  pb-10 cursor-default">Let's create</h1>
          <h1 className="f1 text-7xl -mt-10   pb-10 cursor-default"><span className="text-violet-400">beautiful</span> things.</h1>
          <img className=" w-[90%] md:w-[80%]  rounded-[10px]" src={allImage.pic14} alt=""/>
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center ">
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0 pt-10 md:pt-0 mb-5  cursor-default">This photo is taken from a unique perspective, where the blurred piece of wood in the foreground symbolizes life's obstacles, while the smiling face in the background reflects the confidence to overcome them. The pink shirt, open sky, and the relaxed posture on the rooftop create a perfect blend of freedom, tranquility, and self-assurance. The image seems to say— "Life's path is never smooth, but with a smile and confidence, every hurdle can be overcome." 😊✨</h5>
        </div>
      </div>
    </div>
  </section>
  <section className="row-text">
    <div className="bigtextbox w-full h-[100vh] ">
      <h1 className="f1 text-[40vw] cursor-default text-nowrap -mt-10 ">SYED MOHIT MAHMUD INZAMAM</h1>
    </div>
  </section>
  <hr />
    <Skill/>
  </main>
  
  </>
  )
}

export default Homesection
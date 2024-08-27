
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
        <h1  className='f1 castom-text capitalize cursor-default leading-[3vw] z-40 text-center mt-16 text-6xl md:text-9xl castom-font'>FullStack </h1>
        <h1  className='f1 castom-text capitalize cursor-default leading-[3vw] z-40 text-center text-6xl md:text-9xl castom-font '>web</h1>
        <h1 className='f1 castom-text capitalize cursor-default leading-[3vw] text-center text-6xl md:text-9xl castom-font '>developer</h1>
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
    <div className="w-full md:px-32 pt-10 md:pt-28  h-[100%] ">
      <div className="castom-221 flex ">
        <div className="castom-22 flex md:w-[50%] flex-col  ">
          <h1 className="text-7xl f1  pb-10">Let's create</h1>
          <h1 className="f1 text-7xl -mt-10   pb-10">beautiful things.</h1>
          <img className=" w-[90%] md:w-[80%]  rounded-[10px]" src={allImage.pic3} alt=""/>
        </div>
        <div className="md:w-[50%] flex flex-col items-center">
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0 pt-10 md:pt-0 mb-5 ">The unique culture, impressive and almost imposing mountains masked by an open field paved the way for my creative upbringing. This environment allowed my visual sensations to blossom and gave free rein to my artistic inclinations.</h5>
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0  mb-5 ">I have always been drawn to artistic mediums that can evoke feelings. So when I picked up a camera for the first time, it truly felt like magic.</h5>
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0  mb-5 ">I shared how I perceive my everyday life with others – colorful, calm, yet ever-moving. I never liked to sit there, trying to explain. Instead, I want to show it, visually.</h5>
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0  mb-5 ">The hunt for impactful moments sparked my curiosity to venture beyond the horizons and chase it to the edge of the world. As a result, my creative appetite has spread over to other mediums such as filmmaking, film photography, design, podcasting, music, and going on the hunt for the best pancakes on the planet.</h5>
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0  mb-5 ">I discovered that extreme conditions and sleepless nights are an inseparable part of capturing striking images. I've learned to adapt and deal with difficult situations. I've lost sleep while laying on cold floors, changed flat tires while baking under the sun, and broke my wallet spending way too much on film rolls. But, I also learned when to hit the brakes and sip a Margarita by the pool.</h5>
          <h5 className="text-lg font-medium md:text-left px-3 md:px-0  ">Life never stops being interesting. There is always something that catches my attention, and I never stop freezing moments in time. Perhaps, I thought I would have seen it all one day, but the reality is far from it. More adventures await, and I would love you to venture with me on this journey.</h5>
        </div>
      </div>
    </div>
  </section>
  <section className="row-text">
    <div className="bigtextbox w-full h-[100vh] ">
      <h1 className="f1 text-[40vw] cursor-default text-nowrap -mt-10">SYED MOHIT MAHMUD INZAMAM</h1>
    </div>
  </section>
  
    <Skill/>
  </main>
  
  </>
  )
}

export default Homesection
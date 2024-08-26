import React from 'react'
import "./Amt.css"
import { allImage } from '../../Images/image'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
export default function Amt() {
    function section1() {
        let mm = gsap.matchMedia()
          mm.add("(min-width:800px)",()=>{
            useGSAP(()=>{
              let tl = gsap.timeline() 
              .to(" .longImage",{
                  x:-2020,
                  direction:1,
                  scrollTrigger: {
                    scroll: ".longImage ",
                    trigger: ".longImage",
                    start: "top 100%",
                    scrub:5,
                    end:"bottom 0%",
                    // markers:true
                  }
                })
             
              })
          })
        
      
          // mobile
      
    
      }
      
      section1()



  return (
    <div className="longImageBox hidden md:flex w-full md:h-96 mt-40   items-center ">
    <div className="longImage flex  w-[100%] h-72 -rotate-6 ">
        <img className="Animition-img rounded-md m-1" src={allImage.pic1} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic2} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic4} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic5} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic6} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic7} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic1} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic2} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic4} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic5} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic6} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic7} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic1} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic2} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic4} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic5} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic6} alt="" srcset="" />
        <img className="Animition-img rounded-md m-1" src={allImage.pic7} alt="" srcset="" />   
    </div>
  </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineViewList } from "react-icons/hi";
import "../App.css"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import About from '../pages/About/About';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


function Header() {
  const Logo = "</> "




  useGSAP(()=>{
    let tl = gsap.timeline()
    // .to(".fast-icon-text",{
    //   y:-1500,
    //     duration:2,
    //     delay:5,
    //     opacity:0    
    // })
    .from("#Logo",{
        y:-30,
        duration:.40,
        delay:1,
        opacity:0     
    })
    .from(".navIcon",{
      y:-30,
      duration:.2,
      opacity:0     
  })

  })

  const rightX = -560
  const leftX = 560
  const [onClickNav,setOnClickNav] = useState()
  const navMove = useRef()
  useGSAP(()=>{
    gsap.timeline()
    .to(navMove.current,{
      x:onClickNav,
      direction:.47,
    })
  },[onClickNav])
  

  return (
    <>
      {/* <div className='mouse-ponter w-6 h-6 fixed z-50 rounded-full  bg-white'></div>
      <div className='fast-icon-text absolute w-full h-[100vh] bg-black text-white flex justify-center items-center'>
        <div className='icon-box'>
          <h1 className='text-4xl md:text-8xl '>Hello World</h1>
        </div>
      </div>  */}
    <header className="">
            <div ref={navMove} className='castom-bg-111  fixed z-50 -right-[90vh] w-[100%] md:w-[35%] justify-center h-[100vh]  pr:0 md:pr-14 flex items-center'>
            <IoClose  onClick={()=>{setOnClickNav(leftX)}}  className='text-white cursor-pointer text-5xl absolute top-3 right-[8.9vw]'/>
              <div className=' h-80 '>
                <ul className='w-full h-full flex justify-between flex-col'>
                  <NavLink to={""} className='f1 py-3 px-5 md:px-5  w-full hover:bg-zinc-900 md:py-2 rounded-3xl castom-c-a3a3a3 castom-bg-262626 text-5xl md:text-7xl'>Home</NavLink>
                  <NavLink to={"/about"} className='f1 py-3 px-5  hover:bg-zinc-900 md:px-5 w-full md:py-2 rounded-3xl castom-c-a3a3a3 castom-bg-262626 text-5xl md:text-7xl'>About</NavLink>
                  <NavLink to={"/contectUs"} className='f1 py-3 px-5  hover:bg-zinc-900 md:px-5 w-full md:py-2 rounded-3xl castom-c-a3a3a3 castom-bg-262626 text-5xl md:text-7xl'>Contact Us</NavLink>
                </ul>
              </div>
            </div>

          <div className='w-full h-16 glassColor fixed z-40  flex px-2 md:px-28 py-5 justify-between items-center'>
            <div className='flex justify-center items-center'>
              <h2 id='Logo' className='text-white px-5 text-xl  md:text-2xl cursor-pointer f1 '>{Logo} Mohit Mahmud</h2>
            </div>
            <div className='navIcon'>
              <HiOutlineViewList onClick={()=>{setOnClickNav(rightX)}} className='text-white cursor-pointer w-9 h-9'/>
            </div>
          </div>
      
    </header>
    </>
  )
}

export default Header
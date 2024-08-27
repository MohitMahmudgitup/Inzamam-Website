import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineViewList } from "react-icons/hi";
import "../../App.css"
import gsap from "gsap"
import "./Header.css"
import { useGSAP } from '@gsap/react';
import {Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { SiCodersrank } from "react-icons/si";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import pdf from "../../pdf/MohitMahmud.pdf"

function Header() {



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

  const rightX = -400
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
    <header className=" text-blue-50">  
          <div className='castom-header fixed h-16 glassColor  z-40  flex px-2 md:px-20 py-5 justify-between items-center'>
            <div className='castom-navlogo flex justify-center items-center'>
              
              <Link to={"/"} id='Logo' className=' px-5 text-xl flex justify-center items-center md:text-2xl cursor-pointer f1 gap-2'><SiCodersrank /> Mohit Mahmud</Link>
            </div>
            <div className='castom-nav-items-box hidden md:block w-[25vw] '>
                <ul className=' flex justify-evenly items-center'>
                  <Link to={""}           className='f3 px-[13px] py-[6px]  font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>HOME</Link>
                  <Link to={"/about"}     className='f3 px-[13px] py-[6px]  font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>ABOUT</Link>
                  <Link to={"/contectUs"} className='f3 px-[13px] py-[6px]  font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>CONTECT US</Link>
                  <a download="MohitMahmud" href={pdf} >
                    <div className='f3 p-[10px]  font-medium rounded-full border-[1px] text-[12px]  castom-nav-item'>
                    <IoCloudDownloadSharp />
                    </div>
                  </a>
                  <a href='https://github.com/MohitMahmudgitup' target='_blank' >
                    <div className='f3 p-[8px]  font-medium rounded-full border-[1px] text-[12px]  castom-nav-item'>
                    <FaGithub className='w-4 h-4 '/>
                    </div>
                  </a>
                </ul>
              </div>
            <div className='navIcon'>
              <HiOutlineViewList onClick={()=>{setOnClickNav(rightX)}} className=' cursor-pointer w-9 h-9'/>
            </div>
          </div>
           


{/* castom-bg-111 */}
          <div ref={navMove} className='mobile-nav-box left-[540px] md:hidden fixed z-50 justify-center   pr:0  flex items-center'>
            <IoClose  onClick={()=>{setOnClickNav(leftX)}}  className=' cursor-pointer text-5xl absolute top-3 right-[8.9vw]'/>
              <div className=' h-[30vh]  '>
                <ul className='w-full h-full flex justify-between flex-col text-center'>
                  <NavLink to={""}           className='navkink f1 py-2 px-10    rounded-3xl castom-c-a3a3a3 text-5xl '>Home</NavLink>
                  <NavLink to={"/about"}     className='navkink f1 py-2 px-10    rounded-3xl castom-c-a3a3a3 text-5xl '>About</NavLink>
                  <NavLink to={"/contectUs"} className='navkink f1 py-2 px-10    rounded-3xl castom-c-a3a3a3 text-5xl '>Contact Us</NavLink>
                  <div className=' flex absolute bottom-4 right-3 gap-4 justify-center'>
                  <a download="MohitMahmud" href={pdf} >
                    <div  className='f3 p-[10px]  font-medium rounded-full border-[1px] text-[12px]  castom-nav-item'>
                    <IoCloudDownloadSharp className='w-6 h-6 ' />
                    </div>
                  </a>
                  <a href='https://github.com/MohitMahmudgitup' target='_blank' >
                    <div className='f3 p-[10px]  font-medium rounded-full border-[1px] text-[12px]  castom-nav-item'>
                    <FaGithub className='w-6 h-6 '/>
                    </div>
                  </a>
                  </div>
                </ul>
              </div>
            </div>

              

    </header>
    </>
  )
}

export default Header
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineViewList } from "react-icons/hi";
import "../../App.css";
import gsap from "gsap";
import "./Header.css";
import { useGSAP } from '@gsap/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { SiCodersrank } from "react-icons/si";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

function Header() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useGSAP(() => {
    gsap.from("#Logo", { y: -30, duration: 0.4, delay: 1, opacity: 0 });
    gsap.from(".navIcon", { y: -30, duration: 0.2, opacity: 0 });
  });

  useGSAP(() => {
    gsap.to(navRef.current, {
      x: navOpen ? 0 : "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [navOpen]);

  return (
    <header className="text-blue-50">
      {/* Desktop Navbar */}
      <div className='fixed w-full h-16 glassColor z-40 flex px-4 md:px-20 py-5 justify-between items-center'>
        <div className='flex items-center'>
          <Link to="/" id='Logo' className='f1 text-xl md:text-2xl flex items-center gap-2 '>
            <SiCodersrank /> Mohit Mahmud <span className='font-bold text-xs flex f4  bg-yellow-400 rounded-full text-black px-2 absolute -right-[80px] bottom-0 transition-transform duration-300 ease-out hover:translate-x-1  '>developer</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-2'>
          <NavLink to="/" className=' px-[13px] py-[6px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>HOME</NavLink>
          <NavLink to="/about" className=' px-[13px] py-[6px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>ABOUT</NavLink>
          <NavLink to="/project" className=' px-[13px] py-[6px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>PROJECT</NavLink>
          <NavLink to="/contactUs" className=' px-[13px] py-[6px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>CONTACT</NavLink>
          <a href="https://mohitmahmud.tiiny.site/" className='nav-icon'>  <div className='f3 p-[10px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>
                  <IoCloudDownloadSharp />
                </div></a>
          <a href="https://github.com/MohitMahmudgitup" target='_blank' className='nav-icon'><div className='f3 p-[8px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>
                  <FaGithub className='w-4 h-4 ' />
                </div></a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <HiOutlineViewList onClick={() => setNavOpen(true)} className='cursor-pointer w-9 h-9' />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div ref={navRef} className="fixed top-0 right-0 w-full md:w-[60%] h-screen z-50 bg-black text-white flex flex-col items-center justify-center transform translate-x-full">
        <IoClose onClick={() => setNavOpen(false)} className='absolute top-5 right-5 text-4xl cursor-pointer' />
        <nav className="flex flex-col gap-6 text-2xl">
          <NavLink to="/" className="navkink f1 py-1 px-10 rounded-3xl castom-c-a3a3a3 text-5xl text-center" onClick={() => setNavOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="navkink f1 py-1 px-10 rounded-3xl castom-c-a3a3a3 text-5xl text-center" onClick={() => setNavOpen(false)}>About</NavLink>
          <NavLink to="/project" className="navkink f1 py-1 px-10 rounded-3xl castom-c-a3a3a3 text-5xl text-center" onClick={() => setNavOpen(false)}>Project</NavLink>
          <NavLink to="/contactUs" className="navkink f1 py-1 px-10 rounded-3xl castom-c-a3a3a3 text-5xl text-center" onClick={() => setNavOpen(false)}>Contact</NavLink>
        </nav>
        <div className='flex gap-6 mt-8'>
          <a href="https://mohitmahmud.tiiny.site/" className='nav-icon'> <div className='f3 p-[10px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>
                  <IoCloudDownloadSharp />
                </div></a>
          <a href="https://github.com/MohitMahmudgitup" target='_blank' className='nav-icon'><div className='f3 p-[8px] font-medium rounded-full border-[1px] text-[12px] castom-nav-item'>
                  <FaGithub className='w-4 h-4 ' />
                </div></a>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react'
import "../../App.css"
import { SiCodersrank } from "react-icons/si";
function Footer() {
  return (
    <footer className='text-white flex justify-between items-center py-16 px-20'>
      <div className='flex justify-center items-center'>   
        <h2 id='Logo' className='px-5 text-xl flex justify-center items-center md:text-2xl cursor-pointer f1 gap-2'><SiCodersrank /> Mohit Mahmud</h2>
      </div>
      <div className=''>
        <a href='https://www.facebook.com/mohitmahmud253200' target='_blank'  className='m-1 px-[13px] py-[6px]   font-semibold  rounded-full border-[1px] text-[12px] castom-nav-item uppercase'>Facebook</a>
        <a href='https://www.instagram.com/mohit._.mahmud/' target='_blank'  className='m-1 px-[13px] py-[6px]   font-semibold rounded-full border-[1px] text-[12px] castom-nav-item uppercase'>Instagram</a>
        <a href='https://x.com/mohit_mahmud' target='_blank'  className='m-1 px-[13px] py-[6px]   font-semibold rounded-full border-[1px] text-[12px] castom-nav-item uppercase'>Twitter</a>
        <a href='https://www.linkedin.com/in/syed-mohit-mahmud-inzamam/' target='_blank'  className='m-1 px-[13px] py-[6px]   font-semibold rounded-full border-[1px] text-[12px] castom-nav-item uppercase'>Linkedin</a>
      </div>
      <div className='w-40 '>
        <h5 className='text-xs'>@ Mohit Mahmud</h5>
      </div>
    </footer>
  )
}

export default Footer
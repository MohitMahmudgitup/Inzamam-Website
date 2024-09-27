import React from 'react'
import "../../App.css"
import video1 from "../../videos/WhatsApp Video 2024-08-13 at 1.01.24 PM.mp4"
import "./About.css"
function About() {
  let a = ")"
  return (
    <main className='text-white'>
      <section className='w-[100%] md:h-[100vh] flex justify-center md:items-center'>
        <div className='castom-about  flex justify-center items-center h-[65vh] rounded-2xl overflow-hidden'>
          <h2 className="f1 text-[10vw] absolute">About</h2>
        <video className='video w-[90vw] h-[80vh] object-cover' autoPlay loop muted src={video1}></video>
        </div>
        </section>
      <section className='w-[100%]  pt-10 h-[100vh] flex flex-col items-center'>
        {/* <h1 className='f1 text-8xl'>A tiny mountain </h1> */}
        {/* <h1 className='f1 text-8xl'>village where it all </h1> */}
        <h1 className='f1 text-[10vw]'>No Update..:{a} </h1>
      </section>
    </main>
  )
}

export default About
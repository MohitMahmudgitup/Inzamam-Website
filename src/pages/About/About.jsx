import React from 'react'
import "../../App.css"
import video1 from "../../videos/WhatsApp Video 2024-08-13 at 1.01.24 PM.mp4"
function About() {
  return (
    <main className='text-white'>
      <section className='w-[100%] h-[100vh] flex justify-center items-center'>
        <div className='w-[90vw] flex justify-center items-center h-[75vh] rounded-2xl overflow-hidden bg-slate-100'>
          <h2 className="f1 text-[10vw] absolute">About</h2>
        <video className='w-[90vw] h-[80vh] object-cover' autoPlay loop muted src={video1}></video>
        </div>
        </section>
      <section className='w-[100%] bg-slate-500 pt-10 h-[100vh] flex flex-col items-center'>
        <h1 className='f1 text-8xl'>A tiny mountain </h1>
        <h1 className='f1 text-8xl'>village where it all </h1>
        <h1 className='f1 text-8xl'>began... </h1>
      </section>
    </main>
  )
}

export default About
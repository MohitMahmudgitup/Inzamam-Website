import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../../App.css";
import video1 from "../../videos/WhatsApp Video 2024-08-13 at 1.01.24 PM.mp4";
import "./About.css";

function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRefs = useRef([]);

  // Function to animate elements
  const animateElements = () => {
    gsap.fromTo(aboutRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5 }
    );

    gsap.fromTo(titleRef.current, 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 }
    );

    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
      );
    });
  };

  // useEffect to trigger animations when the component mounts
  useEffect(() => {
    animateElements();
  }, []);

  return (
    <main className='text-white pt-10 sm:pt-0' ref={aboutRef}>
      <section className='w-full md:h-screen flex justify-center md:items-center'>
        <div className='relative flex justify-center items-center h-[65vh] rounded-2xl overflow-hidden'>
          {/* Video background */}
          <video 
            className='w-[90vw] h-[80vh] object-cover' 
            autoPlay 
            loop 
            muted 
            src={video1}
            aria-label="Background video about the developer"
          />
          {/* Overlay for better text visibility */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          {/* Heading */}
          <h2 ref={titleRef} className="f1 text-[15vw] md:text-[10vw] absolute z-10">About</h2>
        </div>
      </section>

      {/* About Me Section */}
      <section className='w-full py-16 flex flex-col items-center' ref={el => sectionRefs.current[0] = el}>
        <h1 className='f1 text-[8vw] md:text-[8xl] mb-8'>Who I Am</h1>
        <p className='text-lg md:text-2xl text-center max-w-[70vw]'>
          I'm a passionate full-stack developer specializing in React and Node.js. 
          I enjoy building responsive, user-friendly applications and solving complex problems.
        </p>
      </section>

      {/* Contact Section */}
      <section className='w-full py-16 flex flex-col items-center' ref={el => sectionRefs.current[1] = el}>
        <h1 className='f1 text-[8vw] md:text-[8xl] mb-8'>Get In Touch</h1>
        <p className='text-lg md:text-2xl text-center max-w-[70vw]'>
          Have a project in mind? I'd love to collaborate with you! Reach out via email at 
          <a href="mailto:mohitmahmud25@gmail.com" className='text-blue-400 underline'> mohitmahmud25@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}

export default About;

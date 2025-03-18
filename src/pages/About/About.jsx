import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../App.css";
import video1 from "../../videos/Dummy_Video_For_Website(2160p).mp4";
import "./About.css";
import { GoArrowDown } from "react-icons/go";
function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const animateElements = () => {
    gsap.fromTo(aboutRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5 }
    );

    gsap.fromTo(titleRef.current, 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 }
    );
  };

  useEffect(() => {
    animateElements();
  }, []);

  return (
    <main className='text-white pt-10 sm:pt-0' ref={aboutRef}>
<section className="w-full h-screen flex justify-center items-center bg-black px-4 sm:px-0">
  <div className="relative w-full  h-[75vh] sm:h-[85vh] flex justify-center items-center overflow-hidden rounded-3xl shadow-2xl">

    {/* Video Background */}
    <video 
      className="absolute w-full h-full object-cover brightness-75" 
      autoPlay 
      loop 
      muted 
      src={video1} 
      aria-label="Background video about the developer"
    />

    {/* Glassmorphism Effect for Text */}
    <div className="absolute z-10   px-8 py-6 rounded-xl   shadow-lg text-center">
      <h2 
        // ref={titleRef} 
        className="f1 text-5xl sm:text-9xl md:text-[30vw] font-extrabold text-white  "
      >
        About us
      </h2>
    </div>
  </div>
</section>






      {/* Swiper with custom navigation */}
      <section className=''>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full "
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {/* About Me Slide */}
        <SwiperSlide
          onClick={() => setActiveSlide(0)}
          className={` transition-all duration-500 ease-out  ${
            activeSlide === 0 ? " scale-105 " : "bg-transparent"
          }`}
        >
          <section className='w-full px-6 sm:px-16 py-16 flex flex-col   '>
            <h1 className='f1  text-5xl md:text-4xl mb-8 cursor-default text-green-400  sm:text-end text-center '>Who I Am</h1>
            <p className='text-lg md:text-6xl sm:text-start text-center   cursor-default'>
              I'm a passionate full-stack developer specializing in <span className=' text-blue-500'>React</span> and <span className=' text-green-800'>Node.js</span>. 
              I enjoy building responsive, user-friendly applications and solving complex problems.
            </p>
          </section>
        </SwiperSlide>

        {/* Contact Slide */}
        <SwiperSlide
          onClick={() => setActiveSlide(1)}
          className={`transition-all duration-500 ease-out  ${
            activeSlide === 1 ? "scale-105 " : "bg-transparent"
          }`}
        >
          <section className='w-full px-6 sm:px-16 py-16 flex flex-col   '>
            <h1 className='f1  text-5xl md:text-4xl mb-8 cursor-default text-fuchsia-400 sm:text-end  text-center  '>Get In Touch</h1>
            <p className='text-lg md:text-6xl sm:text-start text-center    cursor-default'>
              Have a project in mind? I'd love to collaborate with you! Reach out via email at  <div className='flex justify-center mt-10 animate-bounce'><GoArrowDown color="red"/> </div>
            </p>
            
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="  mt-12 bg-slate-200 mr-20">
        <button className="text-xl font-bold custom-prev absolute  right-36 sm:right-80 transform -translate-y-1/2 bg-zinc-900 text-white px-5 py-3   sm:px-7 sm:py-5 rounded-full shadow-md hover:bg-white hover:text-black transition-all border">
          ❮
        </button>
        <button className="text-xl font-bold custom-next absolute  right-20 sm:right-60 transform -translate-y-1/2 bg-zinc-900 text-white px-5 py-3   sm:px-7 sm:py-5 rounded-full shadow-md hover:bg-white hover:text-black transition-all border">
          ❯
        </button>
      </div>
      
      </section>
      <section className="w-full py-16 flex flex-col items-center">
      <p className="mt-10 rounded-xl bg-zinc-950 px-4 py-4 border border-zinc-700 border-dashed">
              <a
                href="mailto:mohitmahmud25@gmail.com"
                className="f1 md:text-4xl text-center max-w-[70vw] inline-block
                          transition-all duration-500 ease-out hover:scale-95 "
              >
                mohitmahmud25@gmail.com
              </a>
            </p>
      </section>
    </main>
  );
}

export default About;

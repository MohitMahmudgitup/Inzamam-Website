import React, { useRef } from "react"
import "./Amt.css"
import { allImage } from "../../../Images/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Amt() {
  const containerRef = useRef(null)
  const imageRowRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1000px)", () => {
      gsap.to(imageRowRef.current, {
        x: -2020,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          // markers: true
        },
      })
    })

    return () => mm.revert()
  }, [])

  const images = [
    allImage.pic1,
    allImage.pic2,
    allImage.pic4,
    allImage.pic5,
    allImage.pic6,
    allImage.pic7,
  ]

  return (
    <div
      ref={containerRef}
      className="longImageBox flex w-full  md:h-96 2xl:h-[550px] mt-40 items-center "
    >
      <div
        ref={imageRowRef}
        className="longImage flex w-full h-72 2xl:h-80 -rotate-6"
      >
        {[...images, ...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="Animition-img rounded-md m-1"
          />
        ))}
      </div>
    </div>
  )
}

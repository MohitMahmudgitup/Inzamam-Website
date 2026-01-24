
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Slide = () => {
    function Amination() {
        let mm = gsap.matchMedia()
        mm.add("(min-width:1350px)", () => {
            useGSAP(() => {
                let tl = gsap.timeline()
                    .to('.bigtextbox h1', {
                        transform: "translatex(-410%)",
                        direction: 2,
                        delay: 3,
                        scrollTrigger:
                        {
                            scroll: ".bigtextbox h1",
                            trigger: ".bigtextbox",
                            start: "top 0%",
                            end: "bottom -250%",
                            scrub: 2,
                            pin: true
                        }
                    })
            })
        })

    }

    Amination()
    return (
        <section className="row-text">
            <div className="bigtextbox w-full h-[100vh] ">
                <h1 className="f1 text-[40vw] cursor-default text-nowrap -mt-10 ">SYED MOHIT MAHMUD INZAMAM</h1>
            </div>
        </section>
    )
}

export default Slide

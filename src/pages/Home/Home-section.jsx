// import React, { useRef } from 'react'
import "../../App.css"
import Image from "../../image/image1.jpg";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Homesection() {

  
function section1() {
  useGSAP(()=>{
    let tl = gsap.timeline()
    .to(".box-image .image",{
      direction:2,
      delay:3,
      transform: "translatey(-100%)",
      scrollTrigger:
      {
        scroll:".box-image .image",
        trigger:".box-image",
        start: "top 0% ",
        end: "bottom 100%",
        scrub: 5,
        pin: true, 
        // markers:true

      }
    })  
    .to(" .longImage",{
        x:-620,
        direction:1,
        // delay:.1,
        scrollTrigger: {
          scroll: ".longImage ",
          trigger: ".longImage",
          start: "top 70%",
          scrub:3,
          end:"bottom 30%",
          // markers:true
        }
      })
      .to('.bigtextbox h1',{
        transform:"translatex(-410%)", 
            direction:2,
            delay:3,
            scrollTrigger:
            {
              scroll:".bigtextbox h1",
              trigger:".bigtextbox",
              start:"top 0%",
              end:"bottom -250%",
              scrub:2,
          // markers:true,
              pin:true
            }}
          )
    })
}
// function section2() {
 
// }

section1()
// section2()


// function bigText() {
//   gsap
// }
// bigText()

  return (<>


  
  <main className="main text-white">
    <section className='box-image  py-28 md:px-28 h-full flex justify-between items-center flex-col  '>
      <div className='w-full   md:w-[50%] flex justify-center items-center flex-col mb-3 md:mb-0  px-5 md:px-0'>
        <h1  className='f1 capitalize leading-[3vw] z-40 text-center mt-16 text-6xl md:text-9xl castom-font'>FullStack </h1>
        <h1  className='f1 capitalize leading-[3vw] z-40 text-center text-6xl md:text-9xl castom-font '>web</h1>
        <h1 className='f1 capitalize leading-[3vw] text-center text-6xl md:text-9xl castom-font '>developer</h1>
        <div className=" w-full h-full md:h-96 image py-4 flex justify-center items-center">
          <div className=' w-96  p-2  md:p-0 rounded-xl translate-y-1/4'>
            <img className='rounded-xl bottom-0' src={Image}/>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="longImageBox w-full md:h-96 flex  items-center ">
      <div className="longImage flex  w-[100vw] h-72 -rotate-3 ">
          {/* <img className="rounded-md" src="https://data.terabox.com/thumbnail/2c0e7c858qc3a56d9d7f08ce43fdf100?fid=4401765754200-250528-714923071265811&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-9Dt70%2fbvznORSdQF%2fy%2bo7I85lgk%3d&expires=8h&chkbd=0&chkv=0&dp-logid=559523408526769855&dp-callid=0&time=1723302000&size=c200_u200&quality=100&vuk=4401765754200&ft=image" alt="" srcset="" /> */}
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/296368077_1075157810066859_8326025953264331840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF92TcyfWQqsA7eSuuS4bHuwgZOGOwakbLCBk4Y7BqRsiz6YnsmZhKt1AST1e8qd-9IutlrsmoUKnFI70A_kowl&_nc_ohc=e35pIOWyf3YQ7kNvgEebBnx&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYC7RIwldngZ66_TNESmvrMAPWupaEiWSMUyKJ0qmhpLRw&oe=66C00AF9" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/453511877_1514884659427503_966726914622282592_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEAf6umPbcI4iiUqjh3ndeKJgjoOAjrOSkmCOg4COs5KUhzDdb84pW6C2jr1SdE9jbKez0-1hJpIO99MqRXHn7K&_nc_ohc=GyV2u4WHtWQQ7kNvgHQ2jUl&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYAhmJRc1DzrICtdMhuDVPd-9chzWLe1BndX8Kg9ZA-z4w&oe=66BD60D3" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/349158330_196577376672987_7261409865566386667_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEMGuOBzlYpMWeBFyqxHeW7BWvIOfcP09YFa8g59w_T1oOkwEuIrfS-fu1GXupuOs3E4S2JNKmb92BX_weLX6Jd&_nc_ohc=1CwRcw2R6EwQ7kNvgG9HYLf&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYCtpvKwbaCnBRMNrP6OW8zP9AEZ8rebLcNaF548d9rsEg&oe=66BD6DBC" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/328834865_1307110069857959_6380175188725475115_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFoupaSJ9YTpheBgW7dAqf5bWQxBzivcmptZDEHOK9yas_h8oZszb9xG4vIJ9XLbSj7KwYzrvXmZDw2jue7mmRa&_nc_ohc=xAXEjVpq4NsQ7kNvgGu8fxU&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYB3SA4yry1hWADv1eK3ccH6EBc61TYafG2LDlVYJ9GK3g&oe=66BD5FCD" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/329852593_1251342645795432_7359638495809636777_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGxOAwWoVONIr0uzyodEY9Dgp1S_83B2d2CnVL_zcHZ3TImzxvEbc9Qm-x66LtvZztTxsmj-Ur644G_QZ-WNNIQ&_nc_ohc=Oewfo9TCfoAQ7kNvgHn2Lsf&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYDSVrUgPK8Q2PijJu8Bf9OFmCM4zWGXNsHA05xp5eT1VQ&oe=66BD583A" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/450461373_1503547990561170_4955078433520610432_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE9LpiDL0IixF0vDW7QR1LHHbFE_IeCNYsdsUT8h4I1iyzeTlSY3sLcrwH-MDd9uUOn60lE458jyOfSvAJykqV2&_nc_ohc=r2rmPX1MbIAQ7kNvgEIXUNR&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYBuUkhDXjNhpVgKEs-K6zaW96SSa_Vu2I3BgRQBt9qQFw&oe=66BD3D81" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/411119920_1380733359509301_6710448582218082349_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_LZJHLuBva43pZzuXZaeiLxRvobIUtBcvFG-hshS0F3NEIWmVgWt8JSE1Hse1WXJyeXu_k3fWR56bzLjLCWrY&_nc_ohc=8nKYINTyb1QQ7kNvgEwxIQ9&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYBTGheaNKMZYqSEHNHfeSxoEl1renr1o6-99T7FkWBczQ&oe=66BD5E7C" alt="" srcset="" />
          <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/450124467_1503890443860258_7709261036947806545_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEQIlcXjPSQcC3ydBUN2Tq5uN2Z3Ee2IaS43ZncR7YhpPeQCT3ph8s149p9Kw52lGQKGxUKREH77DZAcL36WuDS&_nc_ohc=6WG-IwsqpGsQ7kNvgFDTk6_&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYCJhiV0mKW6Q0WncopuSVUjvxXzCdlW19AXw6AUeQjPqg&oe=66BF9D87" alt="" srcset="" />
          {/* <img className="rounded-md m-1" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/450124467_1503890443860258_7709261036947806545_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEQIlcXjPSQcC3ydBUN2Tq5uN2Z3Ee2IaS43ZncR7YhpPeQCT3ph8s149p9Kw52lGQKGxUKREH77DZAcL36WuDS&_nc_ohc=6WG-IwsqpGsQ7kNvgFDTk6_&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYCJhiV0mKW6Q0WncopuSVUjvxXzCdlW19AXw6AUeQjPqg&oe=66BF9D87" alt="" srcset="" /> */}
      </div>
    </div>
    <div className="w-full px-32 pt-28 h-[100%] ">
      <div className="flex">
        <div className="flex w-[50%] flex-col  ">
          <h1 className="text-7xl f1  pb-10">Let's create</h1>
          <h1 className="text-7xl -mt-10 f1  pb-10">beautiful things.</h1>
          <img className="w-[80%]  rounded-[10px]" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/450124467_1503890443860258_7709261036947806545_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEQIlcXjPSQcC3ydBUN2Tq5uN2Z3Ee2IaS43ZncR7YhpPeQCT3ph8s149p9Kw52lGQKGxUKREH77DZAcL36WuDS&_nc_ohc=6WG-IwsqpGsQ7kNvgFDTk6_&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYCJhiV0mKW6Q0WncopuSVUjvxXzCdlW19AXw6AUeQjPqg&oe=66BF9D87" alt="" srcset="" />
        </div>
      <div className="w-[50%] flex flex-col items-center">
        <h5 className="f2 text-lg font-semibold  mb-5 ">The unique culture, impressive and almost imposing mountains masked by an open field paved the way for my creative upbringing. This environment allowed my visual sensations to blossom and gave free rein to my artistic inclinations.</h5>
        <h5 className="f2 text-lg font-semibold  mb-5 ">I have always been drawn to artistic mediums that can evoke feelings. So when I picked up a camera for the first time, it truly felt like magic.</h5>
        <h5 className="f2 text-lg font-semibold  mb-5 ">I shared how I perceive my everyday life with others – colorful, calm, yet ever-moving. I never liked to sit there, trying to explain. Instead, I want to show it, visually.</h5>
        <h5 className="f2 text-lg font-semibold  mb-5 ">The hunt for impactful moments sparked my curiosity to venture beyond the horizons and chase it to the edge of the world. As a result, my creative appetite has spread over to other mediums such as filmmaking, film photography, design, podcasting, music, and going on the hunt for the best pancakes on the planet.</h5>
        <h5 className="f2 text-lg font-semibold  mb-5 ">I discovered that extreme conditions and sleepless nights are an inseparable part of capturing striking images. I've learned to adapt and deal with difficult situations. I've lost sleep while laying on cold floors, changed flat tires while baking under the sun, and broke my wallet spending way too much on film rolls. But, I also learned when to hit the brakes and sip a Margarita by the pool.</h5>
        <h5 className="f2 text-lg font-semibold  ">Life never stops being interesting. There is always something that catches my attention, and I never stop freezing moments in time. Perhaps, I thought I would have seen it all one day, but the reality is far from it. More adventures await, and I would love you to venture with me on this journey.</h5>
      </div>
      </div>
    </div>
  </section>
  <section>
    <div className="bigtextbox w-full h-[100vh] ">
      <h1 className="f1 text-[40vw]  text-nowrap -mt-10">SYED MOHIT MAHMUD INZAMAM</h1>
    </div>
    <div className="w-full h-[100vh] ">

    </div>
  </section>
  </main>
  
  </>
  )
}

export default Homesection
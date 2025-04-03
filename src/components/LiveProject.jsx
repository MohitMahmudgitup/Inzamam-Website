import React from 'react'
import LiveCart from './LiveCart'
import { liveAPN } from '../jsFile'

function LiveProject({live, title, image}) {
  return (
    <section className='pt-10 text-white grid grid-cols-1  w-full gap-6'>
        {liveAPN.map((project) =>
          project.gits.map((item, LiveIndex) => (
          <LiveCart image={item.img} key={LiveIndex} live={item.links} title={item.title} />
        ))
      )}
    </section>
  )
}

export default LiveProject

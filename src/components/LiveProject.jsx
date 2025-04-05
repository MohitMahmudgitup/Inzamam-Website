import React from 'react'
import LiveCart from './LiveCart'
import { liveAPN } from '../jsFile'
import { allImage } from '../Images/image'

function LiveProject() {
  return (
    <section className='pt-10 text-white grid grid-cols-1 w-full gap-6'>
      {liveAPN.map((project) =>
        project.gits.map((item, LiveIndex) => {
          // Remove ".png" to match the key in allImage
          const imageKey = item.img.split('.')[0];
          return (
            <LiveCart
              key={LiveIndex}
              live={item.links}
              title={item.title}
              image={allImage[imageKey]}
            />
          );
        })
      )}
    </section>
  );
}

export default LiveProject;

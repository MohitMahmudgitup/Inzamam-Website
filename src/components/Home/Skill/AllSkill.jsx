import React from 'react'
import Skill from './Skill'

const AllSkill = () => {
  return (
    <div className='all-skill-section flex flex-col 2xl:gap-10 md:gap-8 gap-3 my-10 '>
        <Skill  speed={10000}/>
        <Skill reverseDirection={true} speed={12000} />
        <Skill speed={8000} />
        <Skill reverseDirection={true} speed={19000} />
        <Skill speed={15000} />
        <Skill reverseDirection={true} speed={13000} />
        <Skill speed={17000} />
      
    </div>
  )
}

export default AllSkill

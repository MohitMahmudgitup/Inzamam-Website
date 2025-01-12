import React from 'react';
import { components } from "../../jsFile/index.js"; // Ensure components are imported correctly

const GitCard = () => {
  return (
    <div className="w-full   px-6 py-5 sm:py-16 rounded-2xl  flex flex-1 items-center">
      <div className="flex w-full flex-col justify-between items-center gap-4 ">
        {components.map((item, index) => (
          // If item.gits is an array, loop through it as well
          item.gits.map((git, gitIndex) => (
            <div className="w-full p-6 rounded-2xl bg-zinc-950 shadow-lg flex justify-between sm:flex-row flex-col sm:gap-0 gap-8  ">
            <div className='w-80 flex justify-start items-start '>
            <h1 className="text-lg font-bold text-white">{git.title}</h1>

            </div>
            <div className='w-96 flex justify-start items-start '>
            <p className="text-sm text-gray-100 mt-2">{git.description}</p>
            </div>
            <div className='sm:w-40  flex justify-end items-center  '>

            <a
              href={git.links}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 px-5 py-2 rounded-full"
            >
              View Project
            </a>
          </div>
          </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default GitCard;

import React from 'react';
import { components } from "../../jsFile/index.js"; // Ensure components are imported correctly

const GitCard = () => {
  return (
    <div className="w-full py-5 sm:py-16 rounded-2xl flex flex-1 items-center">
      <div className="flex w-full flex-col justify-between items-center gap-6">
        {components.map((item, index) =>
          item.gits.map((git, gitIndex) => (
            <div
              key={`${index}-${gitIndex}`}
              className="w-full p-6 rounded-2xl bg-zinc-950 shadow-lg flex justify-between sm:flex-row flex-col sm:gap-0 gap-8 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Title Section */}
              <div className="sm:w-80 flex justify-start items-start">
                <h1 className="text-lg font-bold text-white">{git.title}</h1>
              </div>

              {/* Description Section */}
              <div className="sm:w-96 sm:h-full h-40">
                <p className="text-sm font-normal text-gray-400">
                  {git.description}
                </p>
              </div>

              {/* Button Section */}
              <div className="sm:w-40 flex justify-end items-center">
                <a
                  href={git.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-full 
                  hover:bg-zinc-800 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  View Project
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GitCard;

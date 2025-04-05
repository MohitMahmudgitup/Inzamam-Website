import React from "react";

function LiveCart({ live, title, image }) {
  return (
    <div className="relative w-full max-w-[750px] h-[400px] bg-zinc-900 rounded-3xl overflow-hidden shadow-lg group ">

      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-90"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Live badge */}
      <div className="absolute top-5 left-5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
        🔴 Live
      </div>

      {/* Bottom content */}
      <div className="absolute z-0 bottom-0 w-full p-6 flex flex-col sm:flex-row sm:items-end sm:justify-between text-white z-10">
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-0 inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2 rounded-md text-sm font-medium transition"
        >
          🚀 View Live Project
        </a>
      </div>
    </div>
  );
}

export default LiveCart;

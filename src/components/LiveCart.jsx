import React from "react";

function LiveCart({ live, title, image }) {
  return (
    <div className="relative w-full sm:w-[500px] lg:w-[750px] h-[300px] sm:h-[400px] bg-white rounded-2xl overflow-hidden">
      {/* Product Image */}
      <img
        src={`/src/Images/${image}`}
        alt="Augmented Reality"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text Box */}
      <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white px-4 py-3 rounded-tl-xl shadow-md">
        <h1 className="text-sm sm:text-base font-bold">{title}</h1>
      </div>

      {/* Live Button */}
      <div className="absolute cursor-pointer top-0 right-0 bg-black bg-opacity-70 text-white px-4 py-3 rounded-bl-xl shadow-md">
        <a href={live} target="_blank" rel="noopener noreferrer">
          <p className="text-sm text-red-600">LIVE</p>
          <p className="">Click now</p>
        </a>
      </div>
    </div>
  );
}

export default LiveCart;

import React from "react";
import GitCard from "../../components/gitcard/GitCard";
import LiveProject from "../../components/LiveProject";

const Project = () => {
  return (
    <section className=" w-full pt-20">
      <div className="sm:px-16   px-6  overflow-y-scroll  scroll-smooth w-full h-[80vh] scrollbar-hide">
        <h1 className="text-white text-2xl"> Githup Projects</h1>
        <GitCard />
      </div>
      <div className="sm:px-16   px-6  w-full">
        <h1 className="text-white text-2xl">Live Project</h1>
        <div className="w-full  flex ">
          <LiveProject />
        </div>
      </div>
    </section>
  );
};

export default Project;

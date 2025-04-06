import React from "react";
import GitCard from "../../components/gitcard/GitCard";
import LiveProject from "../../components/LiveProject";
import { Helmet } from "react-helmet";

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Mohit Mahmud - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Explore Mohit Mahmud's projects — GitHub repositories and live deployed apps built using MERN stack, React, Node.js, and more."
        />
      </Helmet>

      <section className="w-full pt-20 ">
        {/* GitHub Projects Section */}
        <div className="sm:px-16 px-6 pb-16">
          <h1 className="text-white text-3xl font-semibold mb-6">
            🛠 GitHub Projects
          </h1>
          <div className="max-h-[70vh] overflow-y-auto pr-2 scrollbar-hide">
            <GitCard />
          </div>
        </div>

        {/* Live Projects Section */}
        <div className="sm:px-16 px-6 pb-16">
          <h1 className="text-white text-3xl font-semibold mb-6">
            🚀 Live Projects
          </h1>
          <LiveProject />
        </div>
      </section>
    </>
  );
};

export default Project;

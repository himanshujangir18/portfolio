import React from "react";
import ProjectItems from "./ProjectItems";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-2">
        <p className="text-x; tracking-widest uppercae text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-3xl sm:text-4xl">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Property Finder"
            bgImage={"/assets/projects/property.jpg"}
            ProjectUrl="/property"
          />
          <ProjectItems
            title="Crypto App"
            bgImage={"/assets/projects/crypto.jpg"}
            ProjectUrl="/Crypto"
          />
          <ProjectItems
            title="Netflix Clone"
            bgImage={"/assets/projects/netflix.jpg"}
            ProjectUrl="/Netflix"
          />
          <ProjectItems
            title="Twitch Clone"
            bgImage={"/assets/projects/twitch.jpg"}
            ProjectUrl="/Twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

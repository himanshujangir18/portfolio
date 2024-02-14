import Image from "next/image";
import React from "react";
import PropertyImg from "../pages/assets/Projects/property.jpg";
import CryptoImg from "../pages/assets/Projects/crypto.jpg";
import NetflixImg from "../pages/assets/Projects/netflix.jpg";
import TwitchImg from "../pages/assets/Projects/twitch.jpg";
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
            bgImage={PropertyImg}
            ProjectUrl="/property"
          />
          <ProjectItems
            title="Crypto App"
            bgImage={CryptoImg}
            ProjectUrl="/Crypto"
          />
          <ProjectItems
            title="Netflix Clone"
            bgImage={NetflixImg}
            ProjectUrl="/Netflix"
          />
          <ProjectItems
            title="Twitch Clone"
            bgImage={TwitchImg}
            ProjectUrl="/Twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

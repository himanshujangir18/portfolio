import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build Something together
          </p>
          <h1 className="text-gray-700 py-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm
            <span className="text-[#5651e5] font-[Gill-Sans] pl-2">
              Himanshu
            </span>
          </h1>
          <h1 className="py-2 text-gray-700 text-4xl sm:text-5xl md:text-6xl font-bold">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building (and
            ocasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaInstagram />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150">
              <MdEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

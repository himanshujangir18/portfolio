import Image from "next/image";
import React from "react";

const AboutSec = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w[1240px] m-auto md:grid grid-cols-3 gap-8 p-10">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-3xl sm:text-4xl font-bold">Who I Am</h2>
          <p className="text-gray-600 py-2">
            // I am not your normal developer
          </p>
          <p className="text-gray-600 py-2 max-w-[90%]">
            I have always had a knack for technology and working with computers.
            In 2022 i started working on HTML & CSS to make some minor edits on
            a small website. What i thought was just a few small edits turned
            into a love for programming.
          </p>
          <p className="text-gray-600 py-2 max-w-[90%]">
            Fascinated with how intricate programming can be i was quickly drwan
            to learn more.I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with React JS, Next JS and learning new
            technologies.
          </p>
          <p className="text-gray=600 py-2 underline cursor-pointer">
            Checkout some of my lastest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-5 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/about.jpg"
            width={400}
            height={10}
            alt="About Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSec;

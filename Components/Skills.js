import Image from "next/image";
import React from "react";

const Skills = () => {
  const isDevelopment = process.env.NODE_ENV !== "development";

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-3xl sm:text-4xl font-bold">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${
                    isDevelopment ? imgBasePath : ""
                  }/assets/skills/html.png`}
                  alt="HTML"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${
                    isDevelopment ? imgBasePath : ""
                  }/assets/skills/css.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${
                    isDevelopment ? imgBasePath : ""
                  }/assets/skills/bootstrap.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">BootStrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${
                    isDevelopment ? imgBasePath : ""
                  }/assets/skills/tailwind.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${
                    isDevelopment ? imgBasePath : ""
                  }/assets/skills/javascript.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${isDevelopment ? imgBasePath : ""}/assets/skills/ts.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${isDevelopment ? imgBasePath : ""}/assets/skills/react.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">React.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${isDevelopment ? imgBasePath : ""}/assets/skills/nextjs.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">Next.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={`${isDevelopment ? imgBasePath : ""}/assets/skills/github.png`}
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { motion } from "motion/react";
import React from "react";

const About = () => {
  const scroll = [
    "/react.svg",
    "/nextjs.svg",
    "/nodejs.svg",
    "/express.svg",
    "/mongodb.svg",

    "/tailwindcss.svg",

    "/python.svg",
    "/js.svg",
    "/java.svg",
    "/html.svg",
    "/css.svg",
    "/mysql.svg",
  ];
  // about section
  return (
    <>
      <div className="w-screen min-h-screen xl:h-screen bg-neutral-100 relative p-2 xl:p-6 pb-9 overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-center bg-neutral-900 rounded-2xl p-4 overflow-hidden">
          <h1 className="text-2xl font-dx uppercase tracking-wider text-lime-50">
            About
          </h1>

          <div className="h-11/12 w-full pt-2 xl:pt-6 xl:p-6 xl:px-20 xl:grid xl:grid-cols-5 flex grid-rows-[repeat(5,_1fr)] gap-2 overflow-hidden flex-col">
            {/* Large Hero Block */}
            <div className="bg-lime-50 col-span-3 row-span-2 rounded-xl text-green-900  flex-col items-center justify-center p-2 text-center hidden xl:flex">
              <h1 className="text-4xl font-clash px-8">
                "Simplicity is the soul of intelligent design — and nothing
                more."
              </h1>
            </div>

            {/* TLDR Block */}
            <div className="bg-emerald-900 col-span-2 row-span-2 rounded-xl overflow-hidden text-white p-4 min-h-50">
              <h2 className="bg-lime-50 text-neutral-900 font-ling w-fit rounded-lg px-3 py-1 mb-2 font-extrabold text-sm ">
                TL ; DR
              </h2>
              <p className="xl:text-md font-clash2  p-4 tracking-wide text-sm">
                Hi, I'm Koushik Yerraguntla. A passionate Frontend Developer,
                currently evolving into a Full-Stack Developer. I enjoy creating
                intuitive, high-performing interfaces and am equally driven by
                the challenge of building complete, scalable solutions.
              </p>
            </div>

            {/* Grid Elements */}
            <div className="bg-lime-50 rounded-2xl col-span-1 row-span-2 flex items-center justify-center  gap-2 flex-col text-emerald-900 p-4 py-8">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/koushik-yerraguntla/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="flex items-center gap-2 bg-lime-50 rounded-2xl w-full p-2 cursor-pointer hover:bg-emerald-900 hover:text-lime-50 h-1/3"
              >
                <img
                  src="/linkedin.svg"
                  alt=""
                  className="h-5 w-5 cursor-pointer relative bottom-1"
                  loading="lazy"
                />
                <h2 className="text-center font-ling  font-extrabold tracking-widest text-lg">
                  linkedin/koushik-yerra...
                </h2>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/KY-max07/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="flex items-center gap-2 bg-lime-50 rounded-2xl w-full p-2 cursor-pointer hover:bg-emerald-900 hover:text-lime-50 h-1/3"
              >
                <img
                  src="/github.svg"
                  alt=""
                  className="h-6 w-6 cursor-pointer"
                  loading="lazy"
                />
                <h2 className="text-center font-ling  font-extrabold tracking-widest text-lg">
                  github/ky-max07
                </h2>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://leetcode.com/u/Koushik-Yerraguntla/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="flex items-center gap-2 bg-lime-50  rounded-2xl w-full p-2 cursor-pointer  hover:bg-emerald-900 hover:text-lime-50 h-1/3"
              >
                <img
                  src="/leetcode.svg"
                  alt=""
                  className="h-6 w-6 cursor-pointer"
                  loading="lazy"
                />
                <h2 className="text-center font-ling  font-extrabold tracking-widest text-lg">
                  leetcode/koushik-yerra...
                </h2>
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.geeksforgeeks.org/user/koushikyerr456m/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="xl:flex items-center gap-3 bg-lime-50  rounded-2xl w-full p-2 cursor-pointer  hover:bg-emerald-900 hover:text-lime-50 h-1/3 hidden"
              >
                <img
                  src="/geeksforgeeks.svg"
                  alt=""
                  className="h-5 w-5  cursor-pointer"
                  loading="lazy"
                />
                <h2 className="text-center font-ling  font-extrabold tracking-widest text-lg">
                  gfg/koushikyerr456m
                </h2>
              </div>
            </div>
            <div className="bg-lime-50 row-span-3 rounded-3xl overflow-hidden hidden xl:block">
              <h1 className="text-3xl font-ling tracking-widest text-emerald-900 font-extrabold text-center w-full p-8">
                let,s bring your ideas to life
              </h1>
              <img
                src="/young-boy.png"
                alt=""
                className="relative scale-120"
                loading="lazy"
              />
            </div>

            <div className="bg-neutral-900 col-span-3 rounded-2xl border border-neutral-700 flex items-center gap-10 overflow-hidden min-h-25">
              <div className="relative w-full h-full flex items-center">
                <motion.div
                  className="flex gap-10 absolute "
                  style={{ width: "max-content" }}
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...scroll, ...scroll].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      className="h-20 w-20"
                      draggable={false}
                      loading="lazy"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="bg-emerald-900 row-span-2 rounded-2xl xl:flex justify-center items-center hidden">
              <div className="bg-lime-50 h-9/12 w-9/12 rounded-2xl p-2">
                <div className="flex items-center justify-between text-emerald-900 font-clash2 font-bold h-1/4 text-xs">
                  <p>17 jul</p>
                  <p>09 : 00 : 69 IST</p>
                </div>
                <div className="flex items-center justify-between text-emerald-900 font-clash2 font-bold h-2/4">
                  <h1 className="text-4xl font-dx font-extrabold uppercase tracking-widest">
                    Tick Track
                  </h1>
                </div>
                <div className="flex items-center justify-between text-emerald-900 font-clash2 font-bold h-1/4">
                  <p className="text-xs ">Task Manager project </p>
                </div>
              </div>
            </div>

            <div className="bg-lime-50 col-span-2 row-span-2 rounded-2xl xl:flex items-center text-center justify-center gap- hidden">
              <img src="/R-logo.svg" alt="" className="h-16 w-16" />
              loading="lazy"
              <h1 className="text-5xl font-dx relative top-1 tracking-wider  text-emerald-900 font-extrabold">
                Champ/RoundBex
              </h1>
            </div>

            <div className=" rounded-2xl xl:bg-lime-50 flex justify-center items-center gap-2 font-clash2 text-emerald-900 p-2">
              <div className="bg-lime-50  rounded-xl h-full w-1/3 py-5 px-2 text-sm flex flex-col  justify-center">
                <span className="text-5xl  font-extrabold flex flex-row">
                  5
                </span>
                <br /> Projects
              </div>
              <div className="bg-lime-50  rounded-xl w-1/3 py-5 px-2 h-full text-sm flex flex-col  justify-center relative xl:right-1">
                <span className="text-5xl w-1/3 font-extrabold">3+</span>{" "}
                <br></br>
                AI-Agents
              </div>
              <div className="bg-lime-50 rounded-xl w-1/3 py-5 px-2 h-full text-sm flex flex-col  justify-center">
                <span className="text-5xl   font-extrabold">7+</span>
                <br /> Mini
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

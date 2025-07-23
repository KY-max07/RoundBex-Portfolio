import { ArrowRight, CircleDot, Dot, MoveVertical } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className=" w-screen h-screen absolute -bottom-10 md:-bottom-25 lg:-bottom-50 lg:grid lg:grid-cols-4 lg:gap-2 flex flex-col items-center justify-center p-2 gap-2">
      <div className="xl:h-80 h-30 w-screen xl:w-[73vw]   col-span-3 flex flex-col gap-2 lg:hidden z-80 bg-neutral-950">
        <div className="h-3/8 w-full bg-red-900"></div>
        <div className="h-2/8 w-full bg-yellow-700 flex">
          <div className="h-full w-2/4 bg-amber-800"></div>
          <div className="h-full p-1 bg-neutral-950 flex items-center justify-center ">
            <h2 className="font-ling text-[3vw] md:text-[2vw] lg:text-[3vw]  no-select relative top-0.5 font-extrabold tracking-widest capitalize">
              Koushik Yerraguntla
            </h2>
          </div>
          <div></div>
        </div>
        <div className="h-1/8 w-full bg-green-800"></div>
        <div className="h-2/8 w-full bg-blue-800"></div>
      </div>
      <div className="lg:h-80 h-60 lg:w-90 w-80 bg-neutral-300 md:bg-neutral-800 rounded-2xl  m-4  relative lg:top-3 z-20 mt-10 md:mt-0">
        <div>
          <div className="p-3">
            <img
              src="/tick-track-web.png"
              alt=""
              className="h-60 w-full rounded"
              loading="lazy"
            />
          </div>
          <div className="w-full md:h-35 h-30 rounded-b-2xl bg-neutral-300 md:bg-neutral-800 z-10 relative bottom-25  font-clash2 font-extrabold  tracking-wide  md:p-4 p-2">
            <div className="flex flex-col items-center justify-center gap-3 md:mt-2 mt-1 px-2">
              <h1
                onClick={() =>
                  window.open(
                    "https://tick-track-rho.vercel.app/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="flex items-center justify-center gap-2 text-md p-3 bg-neutral-900 rounded-full cursor-pointer hover:bg-neutral-950  text-sm no-select hover:text-neutral-400 scale-100 hover:scale-105 transition-all duration-300"
              >
                {" "}
                <div className="bg-red-700 h-3 w-3 rounded-full no-select font-extrabold"></div>
                Checkout Tick-Track{" "}
                <span>
                  <ArrowRight className="h-4" />
                </span>
              </h1>
              <h3 className="text-center text-neutral-500 font-clash2 font-extrabold md:text-sm no-select text-xs px-3 md:px-0">
                Organize and manage your task with drag and drop features and be
                productive.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-80 relative h-30 w-screen lg:left-25 2xl:left-0 lg:w-[65vw] 2xl:w-[73vw] col-span-3 flex-col gap-2 hidden lg:flex ">
        <div className=" ">
          <h1 className="h-full w-full text-pretty font-dx text-[2vw] tracking-wide flex items-center justify-center text-neutral-600">
            BRING YOUR IDEAS TO LIFE . FULL-STACK--UI/UX DESIGN--{" "}
            <span className="flex text-green-700 items-center px-4 relative left-2">
              SCROLL
              <MoveVertical className="text-[3vw] relative bottom-1.5" />
            </span>
            --AI-AGENTS--SEO OPTIMIZATION--LANDING PAGES{" "}
          </h1>
        </div>
        <div className="h-3/8 w-full bg-neutral-800"></div>
        <div className="h-2/8 w-full bg-neutral-800 flex"></div>
        <div className="h-1/8 w-full bg-neutral-800/80"></div>
        <div className="h-2/8 w-full bg-neutral-800/60"></div>
      </div>
    </div>
  );
};

export default Card;

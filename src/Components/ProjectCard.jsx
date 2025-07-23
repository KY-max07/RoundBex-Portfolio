import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  src,
  index,
  p,
  r,
  t,
  color,
  tools,
  link,
}) => {
  const container = useRef(null);
  // Y position for upward stacking effect
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const divScale = useTransform(p, r, [1, t]);
  return (
    <div
      ref={container}
      style={{ top: `calc(${index * 30}px)` }}
      className="h-screen w-screen flex items-center justify-center sticky top-7 overflow-x-hidden z-80 "
    >
      <motion.div
        style={{ scale: divScale, background: color }}
        className={` w-11/12 h-4/5  rounded-xl lg:flex items-center justify-center p-3 lg:py-15 lg:pr-15 gap-2`}
      >
        <div className=" lg:h-full h-3/5 lg:w-2/5  w-full flex flex-col items-center justify-around text-neutral-900 p-4 py-15">
          <div className="flex items-center justify-between w-full lg:px-6">
            <h1 className=" text-2xl font-dx tracking-widest uppercase">
              {title}
            </h1>
            <button
              onClick={() =>
                window.open(`${link}`, "_blank", "noopener,noreferrer")
              }
              className="bg-neutral-900 text-neutral-100 p-3  rounded-full hover:bg-neutral-800 transition-colors duration-300"
            >
              <span className="text-sm">
                <ArrowUpRight className="h-4 text-neutral-500 hover:text-neutral-100 transition-colors duration-300" />
              </span>
            </button>
          </div>
          <p className=" w-full wrap-break-word  lg:p-6 font-clash2 text-wrap text-xs md:text-sm  lg:text-md text-center">
            {description}
          </p>
          <div className="flex items-center justify-center w-full gap-2 font-clash2 font-bold uppercase tracking-wider">
            {tools.map((tool, index) => (
              <span key={index} className="text-xs text-neutral-800">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className=" lg:h-full h-2/5 lg:w-3/5  w-full overflow-hidden z-80 rounded-xl ">
          <motion.div
            style={{ scale: scale }}
            className="h-full w-full overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className=" h-full w-full rounded object-fill z-40"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

import React, { useRef } from "react";
import { projects } from "../Constants/ProjectsData";
import ProjectCard from "./ProjectCard";
import { motion, useScroll } from "motion/react";
import { MoveVertical } from "lucide-react";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div
        ref={container}
        className="w-screen relative bg-neutral-100"
        style={{ minHeight: `${projects.length * 100}vh` }}
      >
        <div className="h-23 w-full sticky top-0 flex items-center justify-center font-dx text-neutral-900">
          <h2 className=" tracking-widest text-xl uppercase flex">
            Featured Work{" "}
            <span>
              <MoveVertical />
            </span>
          </h2>
        </div>
        {projects.map((project, index) => {
          const t = 1 - (projects.length - index) * 0.05;
          return (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              p={scrollYProgress}
              t={t}
              r={[index * 0.25, 1]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;

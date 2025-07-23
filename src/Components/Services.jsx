import React from "react";
import { motion } from "motion/react";

const serviceList = [
  "Custom Landing pages",
  "UI/UX Design to code",
  "Baas Integration",
  "Payment or Auth features",
  "Mobile-First Development",
  "Performance & SEO",
  "Speed Optimization",
];

const Services = () => {
  // services section
  return (
    <>
      <div className="bg-neutral-100 w-screen  relative lg:p-10 p-2 ">
        <h1 className="h-20 w-full flex items-center justify-center text-neutral-800 font-dx text-2xl  tracking-wider uppercase relative bottom-5 ">
          Services{" "}
        </h1>
        <div className="text-neutral-800 lg:mt-6 border-t relative bottom-5">
          {serviceList.map((service, idx) => (
            <motion.h2
              key={idx}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl border-b-1 font-clash2 p-2"
              whileHover={{
                backgroundColor: "#262626",
                color: "#e5e5e5",
                scale: 1.03,
                x: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 0.2 }}
              style={{ cursor: "pointer" }}
            >
              {service}
            </motion.h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

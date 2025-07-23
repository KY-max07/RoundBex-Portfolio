import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-[35vh] md:h-[25vh] w-screen bg-neutral-950 sticky bottom-0  z-50 ">
      <div className="  flex justify-center items-center h-full w-full  px-6 overflow-hidden">
        <h2 className="text-9xl xl:text-[13vw] text-neutral-600 font-extrabold font-dx hidden md:flex w-3/5  tracking-wide items-center justify-center h-full  relative top-6 uppercase right-15">
          Champ-ion ky
        </h2>
        <div className="flex md:1/4 items-start text-neutral-500">
        <div className=" w-1/2 md:w-1/2 flex flex-col justify-center items-start relative ">
          <div className="relative">
            <h2 className="text-xl font-clash">Quick links</h2>
            <div className="font-clash2 px-1">
              <h3
               onClick={() => scrollToSection("home")}
               className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
               >Home</h3>
              <h3
               onClick={() => scrollToSection("featured-work")}
               className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
               >Featured work</h3>
              <h3
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >About</h3>
              <h3
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >Services</h3>
              <h3
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300">Contact</h3>
            </div>
          </div>
        </div>
        <div className=" w-1/2  md:w-1/2 flex flex-col justify-center items-start relative ">
          <div className="relative  ">
            <h2 className="text-xl font-clash">Social Links</h2>
            <div className="font-clash2 px-1">
              <h3 
              onClick={() =>
                window.open(
                  "https://github.com/KY-max07/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >GitHub</h3>
              <h3
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/koushik-yerraguntla/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >LinkedIn</h3>
              <h3
              onClick={() =>
                window.open(
                  "https://www.instagram.com/withonly_koushik/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >Instagram</h3>
              <h3
              onClick={() =>
                window.open(
                  "/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer hover:text-neutral-200 transition-colors duration-300"
              >Twitter - x</h3>
              <h3 className="text-xs md:text-sm relative ">koushikyerraguntla@gmail.com</h3>
              <h3 className="text-xs">HYD, INDIA</h3>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};
export default Footer;

import React from "react";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const MenuList = () => {
  return (
    <div className="justify-center items-center relative md:left-[18vw] lg:left-[23vw] top-5 font-ling md:text-xl lg:text-2xl font-bold text-neutral-600 tracking-widest hidden md:block z-100">
      <span
        className="hover:text-neutral-400 cursor-pointer transition-colors duration-300"
        onClick={() => scrollToSection("home")}
      >
        home,
      </span>
      <span
        className="hover:text-neutral-400 cursor-pointer transition-colors duration-300"
        onClick={() => scrollToSection("featured-work")}
      >
        {" "}
        featured work,
      </span>
      <div className="relative bottom-2">
        <span
          className="hover:text-neutral-400 cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("about")}
        >
          about,{" "}
        </span>
        <span
          className="hover:text-neutral-400 cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("services")}
        >
          {" "}
          services,{" "}
        </span>
        <span
          className="hover:text-neutral-400 cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("contact")}
        >
          contact.
        </span>
      </div>
    </div>
  );
};

export default MenuList;

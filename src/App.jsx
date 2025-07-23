import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence, easeOut } from "motion/react";
import { MoveUpRight } from "lucide-react";
import Card from "./Components/Card";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import Lenis from "lenis";
import Header from "./Components/Header";
import LetsTalk from "./Components/LetsTalk";





const App = () => {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [cursor, setCursor] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = () => {
      setCursor(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mouse.x - 16, // Center the cursor (half of element width)
      y: mouse.y - 16, // Center the cursor (half of element height)
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        mass: 0.5,
      },
    },
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of counting

    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(counterInterval);
      clearTimeout(timer);
    };
  }, []);

  // Manage body class for scroll prevention during loading
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("loading");
    };
  }, [isLoading]);
  return (
    <div id="home" className="min-h-screen relative no-select">
      {/* Global Custom Cursor */}
      <motion.div
        variants={variants}
        animate="default"
        className={`${
          cursor
            ? "fixed top-0 left-0 w-8 h-8 md:border-2 border-neutral-400  rounded-full pointer-events-none z-[9999] mix-blend-difference"
            : "hidden"
        } `}
      />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.0, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-neutral-500 mb-4 font-ling tracking-widest "
              >
                {count}
                <h1 className="text-[2vh] tracking-widest text-neutral-600">
                  koushik - portfolio
                </h1>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${count * 5}px`, h: `100px` }}
                exit={{ width: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="h-0 bg-neutral-600 mx-auto rounded-md"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LetsTalk />
          </Suspense>
        </motion.div>
      )}
      {/* Blank Screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen sticky top-0 container"
      >
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            className="min-h-screen relative h-screen "
          >
            <div className="w-screen min-h-screen xl:h-screen relative border-0 border-b-1 border-dashed border-neutral-800">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Header />
                </Suspense>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="xl:text-[30vw] text-[30vw] font-clash font-extrabold text-neutral-100/90 md:text-neutral-100/80 relative xl:bottom-[17vw] lg:bottom-[9vw] md:bottom-20 bottom-5 no-select  w-full text-center flex justify-center items-center z-10"
              >
                c<span className="xl:text-[32vw]">h</span>amp{" "}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                className=" relative xl:bottom-[30vw] container mx-auto p-6 lg:bottom-[14vw] "
              >
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                  className="font-ling lg:text-2xl font-semibold text-neutral-600 tracking-widest hidden xl:flex"
                >
                  <span className="text-[1vw] text-center relative top-2">
                    {" "}
                    2025 &copy;
                  </span>{" "}
                  = portfolio - koushik yerraguntla{" "}
                  <span className="px-3 rotate-90"> {" ;) "} </span>
                </motion.h1>
              </motion.div>
              <Suspense fallback={<div>Loading...</div>}>
                <Card />
              </Suspense>

              {/* <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    className="text-[3vw] uppercase font-dx font-extrabold tracking-widest text-neutral-300/90 p-2 text-center no-select "
                  >
                   
                      <span className="text-green-800">
                        let's bring your Ideas to live.
                      </span>{" "}
                      Ready to evaluate your brand ?
                  
                  
                      Drop a message, and lets start building something amazing
                      together{" "}
                      
                       
                      
                  </motion.h1> */}

              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                className="h-8 w-8 rounded-full bg-neutral-300 absolute right-[2vw] top-22"
              ></motion.div> */}

              {/* <div className="w-full  flex flex-col items-center justify-start relative lg:bottom-68">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="text-[30vw] font-clash font-extrabold text-neutral-300/90"
                >
                  c<span className="text-[32vw]">h</span>amp
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-start justify-self-center absolute left-[5vw] bottom-20"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
                    className="font-ling text-xl font-semibold text-neutral-600 tracking-widest flex"
                  >
                    <span className="text-xs text-center relative top-2">
                      {" "}
                      2025 &copy;
                    </span>{" "}
                    roundbex - koushik yerraguntla | full-stack developer
                  </motion.h1>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    className="text-[3vw] font-dx font-bold tracking-wider text-neutral-300/90 capitalize flex flex-col"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                      className="relative left-[27vw] top-10"
                    >
                      <span className="text-green-800">
                        let's bring your Ideas to live.
                      </span>{" "}
                      Ready to evaluate your brand ?
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.9,
                        ease: "easeOut",
                      }}
                      className="relative top-10 flex"
                    >
                      Drop a message, and lets start building something amazing
                      together{" "}
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.0,
                          ease: "easeOut",
                        }}
                        className="h-10 w-10"
                      >
                        <MoveUpRight className="h-7" />
                      </motion.span>
                    </motion.div>
                  </motion.h1>
                </motion.div>
              </div> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                className="w-screen h-70 absolute bottom-0 z-100 flex gap-2 px-6 mt-8"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                  src="./src/assets/tick-track.jpg"
                  alt="img"
                  className="h-full w-[25vw]"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
                  src="./src/assets/tick-track.jpg"
                  alt="img"
                  className="h-full w-full"
                />
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <MenuList />
                </Suspense>
              </motion.div> */}
            </div>
            {/* <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            >
              <LetsTalk />
            </motion.div> */}
          </motion.div>
        )}
      </motion.div>
      <div id="featured-work">
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </div>
      <div id="about">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </div>
      <div id="services">
        <Suspense fallback={<div>Loading...</div>}>
          <Services />
        </Suspense>
      </div>
      <div id="contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Contacts />
        </Suspense>
      </div>
    </div>
  );
};

export default App;

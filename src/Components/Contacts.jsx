// Contacts.jsx
import React from "react";
import Footer from "./Footer";

const Contacts = () => {
  // contact section
  return (
    <>
      <div className="min-h-screen flex flex-col z-[100000]">
        {/* Main content */}
        <div className="flex-1 bg-neutral-950 w-full text-white  h-full z-90 ">
          <div className="text-3xl font-bold h-[65vh] md:h-[75vh] w-full border-b-1 border-dashed border-neutral-600 flex flex-col items-center justify-between p-3 pt-10">
            <h2 className="text-[6vw] md:text-[3vw] text-center font-dx tracking-widest uppercase text-neutral-400 leading-[9vw] md:leading-[5vw]">
              <span className=" uppercase text-green-600 ">
                Bring your ideas to life.
              </span>{" "}
              Drop a message and we'll work together to build something amazing
              together{" "}
            </h2>

            <div className=" h-[45vh] md:h-[55vh] w-full flex items-center justify-center flex-col md:gap-6 gap-3">

                <button
                onClick={() =>
                  window.open(
                    "https://tally.so/r/w5a86v",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="font-dx rounded-2xl border-2  border-neutral-500 bg-neutral-900 px-6 py-3 font-semibold  text-neutral-400 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none tracking-widest cursor-pointer text-sm md:text-2xl uppercase"
                ><span className="text-green-600 relative top-1">Lets Connect</span></button>
                <h2 className="font-ling font-bold tracking-wider text-xs md:text-xl text-neutral-600 ">Click to give your feedback / Checkout for any service</h2>

            </div>
          </div>
          {/* Your contact content here */}
        </div>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Contacts;

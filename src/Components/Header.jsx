



import MenuList from "./MenuList";


const Header = () => {
  

  return (
    <>
      <div className="w-screen h-20 md:p-6 p-2 flex items-center justify-between">
        <div
          onClick={() => {
            window.location.reload();
          }}
          className="md:h-15 h-12.5 w-12 md:w-15 bg-neutral-300 rounded-2xl flex justify-center items-center cursor-pointer"
        >
          <img src='/R-logo.svg' alt="R" className="md:h-10 h-7 z-100 " />
        </div>
        <MenuList />
        <div className="md:h-15 h-12 bg-neutral-300 rounded-2xl flex justify-around items-center cursor-pointer gap-2">
          
          <button
          onClick={() =>
            window.open(
              "https://github.com/KY-max07/",
              "_blank",
              "noopener,noreferrer"
            )
          }
           
            className="font-dx text-neutral-800 text-lg md:text-2xl pl-1 cursor-pointer z-100  tracking-widest font-extrabold rounded-4xl"
          >
            <h2 className="relative ">
              <img src="/github.svg" alt=""  className="h-10 md:h-13"/>
            </h2>
          </button>
          <button
           onClick={() =>
            window.open(
              "https://www.linkedin.com/in/koushik-yerraguntla/",
              "_blank",
              "noopener,noreferrer"
            )
          }
            className="font-dx text-neutral-800 text-lg md:text-2xl pr-3 cursor-pointer z-100 hover:text-orange-800 transition-colors duration-300 tracking-widest font-extrabold"
          >
            <h2 className="relative bottom-0.5">
              <img src="/linkedin.svg" alt=""  className="h-8 md:h-10"/>
            </h2>
          </button>
        </div>
      </div>

      
    </>
  );
};

export default Header;

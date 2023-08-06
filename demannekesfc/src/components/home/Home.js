import Button from "../Button.js";

import Fade from "react-reveal/Fade";

export default function Home() {
  const handleScrollTo = (to) => {
    const element = document.getElementById(to);
    if (element) {
      const yOffset = -58;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth", duration: 500 });
    }
  };

  return (
    <div
      id="home"
      className="bg-background dark:bg-dark-background text-text dark:text-dark-text h-screen flex flex-row justify-center"
    >
      <Fade duration={1500}>
        <div className="flex row justify-start items-center gap-4 sm:gap-6 w-7/12 h-full ">
          <div className="text-left lg:w-7/12">
            <p className="text-lg sm:text-xl md:text-2xl py-3">
              Hi, We are Insiter
            </p>

            <h1 className="leading-tight text-3xl md:text-4xl text-primary font-black">
              Full-Stack Developers
            </h1>

            <h1 className="leading-tight text-3xl md:text-4xl text-primary font-black ">
              From Belgium.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl py-3">
              We help people and brands by designing and building digital
              products that are optimized for your clients experience.
            </p>

            <div className="flex flex-row gap-4 items-center py-2">
              <Button
                text={"View our work"}
                fontSize={"font-semibold"}
                onClick={() => handleScrollTo("projects")}
              />

              <button
                onClick={() => handleScrollTo("about")}
                className="text-base font-semibold text-primary hover:underline cursor-pointer"
              >
                More about us <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <img
            src="assets/images/Michel.webp"
            className="hidden lg:block w-5/12 overflow-hidden"
          ></img>
        </div>
      </Fade>
    </div>
  );
}

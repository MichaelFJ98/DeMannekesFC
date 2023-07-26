import Button from "../Button.js";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-blue-50 text-white h-screen flex flex-row justify-center"
    >
      <div className="flex row justify-start items-center gap-4 sm:gap-6 w-7/12 h-full ">
        <div className="text-left lg:w-7/12">

          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 py-3">
            Hi, We are Insiter 
          </p>

          <h1 className="leading-tight text-3xl md:text-4xl text-blue-950 font-black">
            Full-Stack Developers
          </h1>

          <h1 className="leading-tight text-3xl md:text-4xl text-blue-950  font-black ">
            From Belgium.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 py-3">
            We help people and brands by designing and building digital products 
            that are optimized for your clients experience.
          </p>

          <div className="flex flex-row gap-4 items-center py-2">
            <Button text={"View our work"} fontSize={"font-semibold"} />

            <a
              href="#"
              className="text-base font-semibold text-blue-500 hover:underline hover:scale-110"
            >
              More about us <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>

        <img src="assets/images/Michel.png" className="w-5/12 overflow-hidden "></img>
      </div>
    </div>
  );
}

import Button from "../Button.js";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-gray-900 text-white flex flex-row items-center h-screen"
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full h-full">
        <div className="text-center">
          <p className="text-xs md:text-sm font-sans font-medium italic lg:leading-6 text-gray-400">
            Bringing your dream website to life, one pixel at a time.
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-6xl">
            Hi, We are Insiter
          </h1>
          <h1 className="inline-block overflow-hidden whitespace-nowrap font-mono font-bold text-3xl md:py-2 tracking-tight text-blue-500 md:text-6xl animate-typing border-r-2 border-black">
            Full-Stack Developers
          </h1>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-6xl">
            Based in Belgium.
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button text={"Hire us"} fontSize={"font-semibold"} />
          <a href="#" className="text-base font-semibold text-white hover:underline hover:text-blue-500">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:w-full">
        <div className="bg-gray-800 rounded-lg w-72 h-72 overflow-hidden shadow-xl">
          <img
            src="./assets/images/Michel.png"
            className="object-cover w-full h-full"
            alt="Team Member"
          />
        </div>
      </div>
    </div>
  );
}

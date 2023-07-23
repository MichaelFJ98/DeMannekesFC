import Button from "../Button.js";

export default function Home() {
  return (
    <div id="home" className="flex flex-row items-center h-screen">
      <div
        
        className="flex flex-col items-center justify-center  gap-4 sm:gap-6  w-full  h-full"
      >
        <div className="text-center">
          <p className=" text-xs md:text-sm font-sans font-medium italic lg:leading-6 text-gray-400 ">
            Bringing your dream website to life, one pixel at a time.
          </p>
          <h1 className=" text-3xl font-bold tracking-tight text-stone-950 md:text-6xl ">
            Hi, We are Insiter
          </h1>
          <h1 className="inline-block overflow-hidden whitespace-nowrap font-mono font-bold text-3xl md:py-2 tracking-tight text-blue-500 md:text-6xl animate-typing border-r-2 border-black">
            Full-Stack Developers
          </h1>
          <h1 className="text-3xl font-bold tracking-tight  text-stone-950 md:text-6xl">
            Based in Belgium.
          </h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button text={"Hire us"} fontSize={"font-semibold"} />
          <a href="#" class="text-base font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hidden lg:w-full lg:flex lg:items-center lg:justify-center ">
        <div className="rounded-lg border-black border-2 w-80">
          <img src="./assets/images/Michel.png" className="object-fill "></img>
        </div>
      </div>
    </div>
  );
}

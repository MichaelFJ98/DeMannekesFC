import Button from "../Button.js";

export default function Home() {

  return (
    <div id="home" className="flex h-screen flex-col items-center justify-center gap-6">
      <div className='text-center'>
        
        <p className='text-sm font-sans font-medium italic leading-6 text-gray-400 '>Bringing your dream website to life, one pixel at a time.</p>
        <h1 className=' text-2xl font-bold tracking-tight text-stone-950 sm:text-6xl '>Hi, We are InSiter</h1>
        <h1 className='inline-block overflow-hidden whitespace-nowrap font-mono font-bold text-2xl py-2 tracking-tight text-blue-500 sm:text-6xl animate-typing border-r-2 border-black'>Full-Stack Developers</h1>
        <h1 className='text-2xl font-bold tracking-tight  text-stone-950 sm:text-6xl'>Based in Belgium.</h1>
      </div> 
      <div className='flex flex-row gap-4 items-center'>
        <Button text={"Hire us"} fontSize={"font-semibold"}/>
        <a href="#" class="text-base font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
  )
}

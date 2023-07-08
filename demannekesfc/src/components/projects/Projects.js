export default function Projects() {
    return (
      <div id="projects" className="  bg-blue-50 space-y-6 p-12">
        
        <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-6xl pb-6 text-center">Our Projects</h1>

        <div id="portfolios" className="flex flex-row justify-around">

          <div id="pf1" className="drop-shadow-lg ">
            <div id="circleImg" className='w-96 h-112 rounded-t-lg overflow-hidden'>
              <img src='./assets/images/template1.jpg' className=''></img>
            </div>
            <div id="textArea" className=" bg-blue-950 w-96 p-4" >
              <h3 className='text-blue-300'>Template 1</h3>
              <p className='text-sm font-sans font-medium leading-6 text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
              <a href="#" class="text-base font-semibold text-gray-50 underline hover:text-blue-300 hover:no-underline">See more <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div id="pf2" className="drop-shadow-lg">
            <div id="circleImg" className='w-96 h-112 rounded-t-lg overflow-hidden'>
              <img src='./assets/images/template1.jpg' className=''></img>
            </div>
            <div id="textArea" className=" bg-blue-950 w-96 p-4" >
              <h3 className='text-blue-300'>Template 2</h3>
              <p className='text-sm font-sans font-medium leading-6 text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
              <a href="#" class="text-base font-semibold text-gray-50 underline hover:text-blue-300 hover:no-underline">See more <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div id="pf3" className="drop-shadow-lg">
            <div id="circleImg" className='w-96 h-112 rounded-t-lg overflow-hidden'>
              <img src='./assets/images/template1.jpg' className=''></img>
            </div>
            <div id="textArea" className=" bg-blue-950 w-96 p-4" >
              <h3 className='text-blue-300'>Template 3</h3>
              <p className='text-sm font-sans font-medium leading-6 text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
              <a href="#" class="text-base font-semibold text-gray-50 underline hover:text-blue-300 hover:no-underline">See more <span aria-hidden="true">→</span></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
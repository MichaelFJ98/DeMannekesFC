export default function Home() {
  return (
    <div class="bg-gray-800 container xl:max-w-6xl mx-auto px-4 pt-16 lg:px-8 lg:pt-32">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Full-stack developers from Belgium
        </h2>
        <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400 lg:w-2/3 mx-auto">
          We help people and brands by designing and building digital products
          that are optimized for your experience.
        </h3>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 pt-10 pb-16">
        <button
          type="button"
          class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded-full border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
        >
          <span>Get Started</span>
        </button>
        <button
          type="button"
          class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded-full border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
        >
          <span>Live Demo</span>
        </button>
      </div>
      <div class="relative mx-5 lg:mx-32 p-2 rounded-xl bg-white -mb-40 shadow-lg">
        <img
          src="https://source.unsplash.com/C6T6vr1sQI0/1280x800"
          alt="Hero Image"
          class="relative rounded-lg mx-auto"
        ></img>
      </div>
    </div>
  );
}

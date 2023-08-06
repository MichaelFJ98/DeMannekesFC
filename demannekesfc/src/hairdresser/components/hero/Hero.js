function Hero() {
  return (
    <div
      id="hero"
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/assets/images/hairdresser/herobg.webp')",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold mb-4">
            Welcome to Hair Majesty
          </h1>
          <p className="text-lg text-white mb-8">
            Your hair deserves the best care and styling.
          </p>
          <button className="px-8 py-4 bg-temp-secondary text-white font-semibold text-lg rounded-full shadow-lg hover:bg-temp-accent transition-colors duration-300 ease-in-out">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

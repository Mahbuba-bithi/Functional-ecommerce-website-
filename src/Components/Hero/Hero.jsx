import { FaArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
              Explore the World’s
              <span className="text-gray-300"> Countries</span>
              <br />
              & Their Amazing Facts
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
              Discover interesting facts, capitals, populations, and cultures
              of different countries around the world. Learn geography in a
              simple and beautiful way using React and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">

              <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2">
                Explore Countries <FaArrowAltCircleRight />
              </button>

              <button className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                Learn Facts
              </button>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
              alt="World Map"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
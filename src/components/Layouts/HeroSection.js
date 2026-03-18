import heroImage from "../../assets/montainhill.jpeg";


export default function HeroSection() {

    return (

      <section className="bg-black flex flex-col md:flex-row items-center min-h-[85vh] px-6 md:px-16 pt-28">

        {/* Text */}
        <div className="flex-1 space-y-6 py-10 md:py-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-gray-300 font-light leading-tight max-w-xl">
            We Capture Stories That Outlive Moments.
          </h2>

          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Modern photography that elevates your brand, preserves your moments, and inspires your audience.
          </p>

          <button className="text-gray-300 border border-white px-6 py-2 hover:bg-teal-500 hover:text-black transition duration-300">
            View Our Work
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] overflow-hidden rounded-full shadow-2xl ring-2 ring-teal-500/30">
          <img
            src={heroImage}
            alt="Photography portrait"
            className="w-full h-full object-cover"
          />
          </div>
        </div>

      </section>

    );
};
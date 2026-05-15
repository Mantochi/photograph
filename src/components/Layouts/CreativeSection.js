import { useEffect, useRef } from "react";

const images = [
  "/creative1.jpg",
  "/creative2.jpg",
  "/creative3.jpg",
];

export default function CreativeSection() {
  const scrollRef = useRef(null);

  // AUTO SLIDE
  useEffect(() => {
    const container = scrollRef.current;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 260;

      // RESET TO START
      if (
        scrollAmount >=
        container.scrollWidth - container.clientWidth
      ) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f5f1] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="uppercase tracking-[0.2em] text-sm text-[#c89b5c] font-semibold mb-4">
            Behind The Lens
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6">
            When I’m not shooting,
            <br />
            I’m{" "}
            <span className="text-[#c89b5c] italic">
              creating.
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            I love exploring creativity in different forms —
            design, tech, fashion and travel.
          </p>

          <button className="bg-[#c89b5c] hover:bg-[#b98949] transition text-white px-8 py-4 rounded-xl shadow-lg">
            Let’s Work Together
          </button>
        </div>

        {/* MOBILE AUTO SLIDER */}
        <div
          ref={scrollRef}
          className="
            flex gap-4 overflow-x-auto scrollbar-hide
            lg:grid lg:grid-cols-3 mb-4
          "
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="
                min-w-[250px]
                lg:min-w-0
                overflow-hidden rounded-3xl shadow-xl group
              "
            >
              <img
                src={img}
                alt=""
                className="
                  w-full h-[350px]
                  object-cover
                  group-hover:scale-105
                  transition duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
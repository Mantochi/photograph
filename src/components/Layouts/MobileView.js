import React, { useState, useEffect } from "react";

const Mobileview = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [peek, setPeek] = useState(100);

  // Update peek based on screen width
  const updatePeek = () => {
    if (window.innerWidth < 400) setPeek(60);
    else if (window.innerWidth < 600) setPeek(80);
    else setPeek(100);
  };

  

  useEffect(() => {
    updatePeek();
    window.addEventListener("resize", updatePeek);
    return () => window.removeEventListener("resize", updatePeek);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e) => { 
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextSlide();  //swipe left
    } else if (diff < -50) {
      prevSlide();  //swipe right
    }
    setTouchStartX(null);
  };

  return (
    <section className="md:hidden py-10 bg-gray-900 text-white">
      <div className="md:w-1/2 mb-16 md:mb-0">
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              OUR WORK
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Services Designed For Impactful Visual Storytelling.
            </h2>

            <div className="w-32 h-[1px] bg-gray-600 ml-5 mt-8" />
          </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: "24rem" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;
         
          // Hide everything else
          if (!isActive && !isPrev && !isNext) return null;
          
          // Determine transform, scale, opacity, zIndex
          let translateX = "-50%";
          let scale = 1;
          let opacity = 1;
          let zIndex = 20;
          let width = "16rem";

          if (isPrev) {
            translateX = `calc(-50% - ${peek}px)`; // move left
            scale = 0.9;
            opacity = 0.5;
            zIndex = 10;
          } else if (isNext) {
            translateX = `calc(-50% + ${peek}px)`; // move right
            scale = 0.9;
            opacity = 0.5;
            zIndex = 10;
          }

          if (isActive) {
            scale = 1.1; // increase center image
            width = "20rem";
            zIndex = 20;
          }

          return (
            <img
              key={index}
              src={img.src}
              alt={img.alt}

              /* VIEW ANIMATION */
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, 
                scale: scale,
               y: isActive ? -6 : 0, }}
              transition={{
              duration: 0.8,
              ease: "easeOut",
               }}
              
               style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                width: width,
                height: "24rem",
                objectFit: "cover",
                borderRadius: "0.75rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                transition: "all 0.7s ease-in-out",
                userSelect: "none",
                touchAction: "pan-y",
              }}
            />
          );
        })}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30
                     bg-gray-800 text-teal-400 p-2 rounded-full hover:bg-teal-600"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30
                     bg-gray-800 p-2 rounded-full hover:bg-teal-600"
        >
          ▶
        </button>
      </div>

      {/* SEE MORE Button */}
      <div className="text-center mt-6">
        <a
          href={images[currentIndex].link || "#"}
          className="px-6 py-2 bg-teal-500 rounded hover:bg-teal-700 transition-colors"
        >
          SEE MORE
        </a>
      </div>
    </section>
  );
};

export default Mobileview;

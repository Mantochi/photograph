import React, { useRef } from "react";
import { motion } from "framer-motion";

const ImageShowcase = ({ images }) => {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-full mx-auto my-auto px-6">
        <div className="text-center mb-16 md:mb-0">
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              OUR WORK
            </p>

            <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight mb-6">
              Services Designed For Impactful <br /> 
              Visual Storytelling.
            </h2>

            <div className="w-40 h-[1px] bg-gray-500 ml-72 mb-14 mt-8" />
          </div>

        {/* DRAG SCROLL AREA */}
        <motion.div
          ref={scrollRef}
          className="
            overflow-x-auto 
             overflow-y-hidden 
           scrollbar-visible pb-8
          cursor-grab active:cursor-grabbing"
        >
          <motion.div
            dragConstraints={scrollRef}
            dragElastic={0.08}
            className="flex gap-8 w-max"
          >
          
          {images.map((img, index) => (
          
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden 
                         hover:shadow-xl transition-shadow duration-500 
                         animate-fadeIn
                         min-w-[280px] md:min-w-[360px] lg:min-w-[400px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
              
               {/* IMAGE */}
                <motion.div
                  className="relative group overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >

                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 lg:h-80 object-cover"
                />
          

              {/* Hover Overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-t 
               from-black/80 via-black/40 to-transparent
               opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  />
              <div className=" absolute bottom-0 left-0 w-full
               p-6 translate-y-6
               opacity-0 group-hover:opacity-100
               group-hover:translate-y-0
               transition-all duration-500 ease-out">

                <h3 className="text-lg text-white text-left font-semibold mb-2">{img.place}</h3>
                
                {img.role && (
      <p className="text-gray-200 text-sm mt-1 text-left">
        {img.role}
      </p>
    )}

    {img.link && (
                <a
                href={img.link}
                  className="inline-block px-4 py-2 text-sm font-medium 
                             text-white bg-teal-500 rounded 
                             hover:bg-teal-700 transition-colors"
                >
                  See Detail
                </a>
    )}
              </div>
              </motion.div>
              </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageShowcase;

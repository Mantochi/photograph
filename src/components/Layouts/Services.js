import React from "react";
import {
  Camera,
  VideoCamera,
  Printer,
  Palette,
  MagicWand,
  Aperture,
} from "phosphor-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Shooting",
    text: "Expert photography for events, portraits, and campaigns.",
    icon: Camera,
  },
  {
    title: "Recording",
    text: "Capturing high-quality video for your events and productions.",
    icon: VideoCamera,
  },
  {
    title: "Printing",
    text: "High-quality prints that bring your photos to life.",
    icon: Printer,
  },
  {
    title: "Editing",
    text: "Professional photo editing to enhance and perfect your images.",
    icon: Palette,
  },
  {
    title: "Styling",
    text: "Creative direction and aesthetic guidance for every session.",
    icon: MagicWand,
  },
  {
    title: "Studio",
    text: "Professional studio sessions for high-quality photography.",

    icon: Aperture,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-gray-400 mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            What We Can Offer You
          </h2>
          <div className="w-40 h-[1px] bg-gray-600 ml-52 md:ml-auto md:mr-[30%] mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
               <motion.div
                key={index}
                className="flex items-start gap-4 p-4 border border-gray-600 rounded-md cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                
                  <Icon className="w-14 h-14 text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.35)]" />
                

                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 text-left">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed text-left">
                    {service.text}
                  </p>
                </div>
                </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

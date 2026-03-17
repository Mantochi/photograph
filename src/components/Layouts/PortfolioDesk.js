import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";



export default function PortfolioDesk({ images }) {
  const { category } = useParams();
  console.log(category);
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = images[category?.toLowerCase()] || [];
  console.log(gallery);

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (selectedImage - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <section className="bg-[#0f172a] min-h-screen py-20 px-6 text-white">

      <h1 className="text-3xl font-semibold capitalize mb-10">
        {category} Photography
      </h1>
       
       {gallery.length === 0 && (
          <p className="text-gray-400 text-lg">
          No images available for this category.
        </p>
         )}

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-4">

        {gallery.map((img, index) => (

          <motion.div
            key={index}
            className="break-inside-avoid overflow-hidden cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              className="w-full rounded-xl hover:scale-105 transition duration-500"
            />
          </motion.div>
          
        ))}

      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        
        {/* close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-teal-300"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path   
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

           {/* previous */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl"
          >
            ‹
          </button>

          <img
            src={gallery[selectedImage]}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />

          {/* next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl"
          >
            ›
          </button>

        </div>
      )}

    </section>
  );
}
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { galleryData } from "../../data/galleryData";



export default function PortfolioDesk() {
  
  const { category } = useParams();
  
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = 
    category === "all"
   ? Object.values(galleryData).flat()
    : galleryData[category?.toLowerCase()] || [];

  console.log(gallery);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <section className="bg-[#0f172a] min-h-screen py-20 px-6 text-white pt-28">

     
      <h1 className="text-4xl md:text-5xl font-semibold capitalize mb-10">
        {category === "all"
        ? "Gallery"
         : `${category.charAt(0).toUpperCase() + category.slice(1)} Photography`}
      </h1>

        <div className="flex gap-4 justify-center flex-wrap mt-8">
        
     {["all", "portrait", "landscape", "wedding", "commercial"].map((cat) => (
       <Link
        key={cat}
        to={`/portfolio/${cat}`}
        className={`px-5 py-2 rounded-full text-lg uppercase tracking-[0.2em] transition-all duration-300
          
          ${
             category === cat
           ? "bg-[#c89b5c] text-white"
            : "bg-white/40 backdrop-blur-md border border-black/20 text-neutral-700 hover:bg-[#c89b5c] hover:text-white"
             }`}>
      {cat}
      </Link>
         ))}
      </div>
       
       {gallery.length === 0 && (
          <p className="text-gray-400 text-lg">
          No images available for this category.
        </p>
         )}

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-4">

        {gallery.map((item, index) => (

          <motion.div
            key={index}
            className="group relative break-inside-avoid overflow-hidden cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="w-full rounded-xl hover:scale-105 transition duration-500"
            />
             
             {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
            <div>
              <p className="text-sm text-gray-300">Photography</p>
              <h3 className="text-lg font-semibold">Captured Moment</h3>
            </div>
             </div>
          </motion.div>
          
        ))}

      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>


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

          <motion.img
            src={gallery[selectedImage]?.image}
            alt={gallery[selectedImage]?.alt}
            className="max-w-[90%] max-h-[90%] rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl"
          >
            ›
          </button>

        </motion.div>
      )}

    </section>
  );
}
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";



export default function PortfolioDesk({ images }) {
  
  const { category } = useParams();

  console.log(category);
  
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = images[category?.toLowerCase()] || [];
  console.log(gallery);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <section className="bg-[#0f172a] min-h-screen py-20 px-6 text-white">

      <h1 className="text-4xl md:text-5xl font-semibold capitalize mb-10">
        {category} Photography
      </h1>

    <div className="flex gap-4 mb-10 backdrop-blur-md bg-white/5 p-2 rounded-xl w-fit border border-white/10">
          {["portrait", "landscape"].map((cat) => (
       <Link
        key={cat}
        to={`/portfolio/${cat}`}
        className={`px-5 py-2 rounded-lg text-sm capitalize transition ${
        category === cat
          ? "bg-teal-500 text-white shadow-lg"
          : "text-gray-400 hover:text-white"
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

        {gallery.map((img, index) => (

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
              src={img}
              alt=""
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
            src={gallery[selectedImage]}
            alt=""
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
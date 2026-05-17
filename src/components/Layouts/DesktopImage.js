import { useState, useRef } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Landscapes",
  "Portraits",
  "Weddings",
  "Lifestyle",
  "Commercial",
];

const galleryItems = [
  {
    id: 1,
    title: "Mountain Lake",
    category: "Landscapes",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    className: "w-[500px] h-[600px]",
  },
  {
    id: 2,
    title: "Portrait Beauty",
    category: "Portraits",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    className: "w-[420px] h-[300px]",
  },
  {
    id: 3,
    title: "Wedding Story",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    className: "w-[420px] h-[260px]",
  },
  {
    id: 4,
    title: "Van Lifestyle",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    className: "w-[420px] h-[300px]",
  },
  {
    id: 5,
    title: "Lake Cabin",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    className: "w-[500px] h-[600px]",
  },
];

export default function DesktopImage() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeTab
        );

  return (
    <section className="bg-[#f7f4ef] py-20 overflow-hidden">
      <div className="px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase font-semibold tracking-[0.3em] text-lg text-[#c89b5c] mb-4">
            Explore My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900">
            Services Designed For Impactful <br /> 
              Visual Storytelling.
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm uppercase tracking-[0.2em] transition-all duration-300
                  
                  ${
                    activeTab === tab
                      ? "bg-[#c89b5c] text-white"
                      : "bg-white/40 backdrop-blur-md border border-black/20 text-neutral-700 hover:bg-[#c89b5c] hover:text-white"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Bento */}
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
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`
                ${item.className}
                relative flex-shrink-0
                overflow-hidden rounded-[32px]
                group
              `}
            >
              {/* Image */}
              <img
                src={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

              {/* Glass Overlay */}
              <div
                className="
                  absolute bottom-5 left-5 right-5
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  rounded-2xl
                  p-5
                  text-white
                  opacity-0
                  translate-y-8
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition duration-500
                "
              >
                <p className="uppercase tracking-[0.25em] text-xs mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-serif">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
          </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
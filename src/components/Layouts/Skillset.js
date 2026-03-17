import React from "react";
import { Link } from "react-router-dom";


import {
  UserCircle,
  Image,
  Briefcase,
  Heartbeat,
} from "phosphor-react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Portraits",
    icon: UserCircle,
    path: "/portfolio/portraits",
  },
  {
    title: "Landscapes",
    icon: Image,
    path: "/portfolio/landscapes",
  },
  {
    title: "Commercial / Corporate",
    icon: Briefcase,
    path: "/portfolio/commercial",
  },
  {
    title: "Weddings",
    icon: Heartbeat,
    path: "/portfolio/weddings",
  },
];

const Skillset = () => {
  return (
    <section id="skillset" 
     className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-20">

          {/* Left Text */}
          <div className="md:w-1/2 mb-16 md:mb-0">
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              MY SKILLSET
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Photography Skills  <br />
              That Elevate Every Project!
            </h2>

            <div className="w-32 h-[1px] bg-gray-600 mx-auto mt-4" />
          </div>

          {/* Right Skills */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Link to={skill.path} key={index}>
                  <motion.div
                    className="group flex flex-col items-center text-center
                            gap-6 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                              >
                  
                  
                    <Icon
                    size={160}
                     className="text-teal-400 transition duration-500 drop-shadow-[0_0_15px_rgba(45,212,191,0.35)]
                                group-hover:drop-shadow-[0_0_30px_rgba(45,212,191,1,0.7)] group-hover:-translate-y-2"
                            aria-label={skill.title}
                             role="img"
                            title={skill.title} />
                  

                  <div>
                    <h3 className="text-xl font-semibold mb-3 transition group-hover:text-teal-400">
                      {skill.title}
                    </h3>
                  </div>

                </motion.div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skillset;

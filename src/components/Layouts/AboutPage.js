import React from "react"; 
import { motion } from "framer-motion";
import { Camera, Heart, Users, MagnifyingGlass, } from "phosphor-react";

export default function AboutPage() { 


   const values = [
    {
      icon: Camera,
      title: "Natural & Authentic",
      text: "I capture real moments as they unfold, creating images that feel natural and alive"
    },
    {
      icon: Heart,
      title: "Emotion Focused",
      text: "I focus on emotions and connections that make every story unique and beautiful."
    },
    {
      icon: MagnifyingGlass,
      title: "Attention to Detail",
      text: "From the smallest details to the biggest moments, I ensure everything s captured perfectly."
    },
    {
      icon: Users,
      title: "Client Experience",
      text: "I create a relaxed environment where you can be yourself and enjoy the moment."
    },
   ];
    
  const fadeUp = { 
        hidden: { opacity: 0, y: 40 },
         show: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" }, 
        }

    return (
         <div className="font-sans text-gray-800"> 
    

       {/* Glass Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          >
          
      
    </motion.div>

  {/* ABOUT SECTION */}

  
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className=" px-6 md:px-12 py-10 overflow-hidden bg-gray-50"
   >
     <div className="flex flex-col md:flex-row items-center gap-8">
       
       <div className="flex-1 space-y-4">

       <span className="inline-flex items-center gap-2 text-base text-gray-300 uppercase px-8 py-2 bg-[#c89b5c] tracking-widest mb-5">
               More
           </span>
        <h2 className="text-3xl md:text-4xl text-gray-700 font-bold mb-4"> More Than A Photographer, <br />
          I'm a <span className="text-[#c89b5c]"> Storyteller </span> </h2> 

     {/* Mobile image Position */}
       <div className="block md:hidden w-full">
          <img
           src="/profile.jpg"
           alt="Photographer"
           className="h-[300px] object-cover rounded-2xl shadow-lg"
         />
          </div>
    

      
      <div className="text-gray-700 text-lg md:text-xl">

        <p className="mt-10">
           My journey into photography began with a simple curiosity,
             a desire to freeze moments that wordscouldn't fully express.
      </p>
      <p className="mt-6">
        Over the years, that curiosity turned into a passion for 
          capturing genuine emotions, connections, and stories. 
      </p>
      <p className="mt-6">
        I specialize in Potrait, Landscape, Wedding, and Event
          photography, with a focus on natural light,
           candid moments, and timeless imagery. 
      </p>
    

      <button className="px-6 py-3 mt-10 border border-black/30 rounded-xl hover:bg-[#c89b5c] hover:text-black transition">
          Download My CV
        </button>
      </div>  
    </div>

    {/* Desktop image position */}

    <div className="hidden md:block flex-1">
      <img
       src=""
       alt=""
       className="w-full h-[450px] object-cover rounded-2xl" 
       />
    </div>
    </div>
  </motion.section>
  {/* STYLE SECTION */}


  <section className="py-16 px-4 md:px-12 bg-gray-800">
    <div className="text-center max-w-2xl mx-auto mb-12">
       <span className="text-[#c89b5c] tracking-widest text-lg uppercase">
         What Drives My Work
       </span>
         <h2 className="text-3xl md:text-5xl text-gray-300 font-bold mb-10">
          The Values Behind Every Shoot
           </h2>
       </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      
      
        {values.map((item, index) => {
            
            const Icon = item.icon;

            return (
        
            
              
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="max-w-[320px] md:max-w-none backdrop-blur-xl bg-white/5 border border-white/30
                   rounded-2xl p-6 shadow-lg hover:bg-white/10 transition "
                >

                  {/* Icon */} 

                  <div className="text-[#c89b5c] mb-4">
                    <Icon size={50}
                       weight="duotone" />
                  </div>  

                  {/* Title */}
              <h3 className="font-semibold text-2xl mb-2 text-gray-200">{item.title}</h3>

              {/* TEXT */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                 {item.text} </p>
            </motion.div>
          )
        
        })}

    </motion.div>
  </section>

</div>

)
 };
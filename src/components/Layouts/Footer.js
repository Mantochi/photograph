
import { motion } from "framer-motion";
import footImg from "../../assets/imgfoot.jpg";
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  EnvelopeSimple,
  TwitterLogo,
} from "phosphor-react";

export default function Contact() {
  

  return (
    <section id="contact">
      <div className="px-6 py-4 relative overflow-hidden">
 

       <img 
         src={footImg}
             alt="camera"
           className="absolute inset-0 w-full h-full object-cover" />

           <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-left md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-none mb-8">
            Let’s Create Something Amazingly Timeless.
          </h2>

          <p className="text-gray-300 text-xl mb-10">
            Share your story, your vision, your moment.
            Ready to capture your special moments? i'd Love to hear from you.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-left flex-wrap">
             <button className="px-6 py-3 bg-teal-600 text-black rounded-xl font-medium hover:bg-teal-400 transition">
             Book a Session
            </button>

           <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
              Send a Message
            </button>
        </div>
        </motion.div>

             {/* SOCIALS */}
          <div className="flex gap-6">
            {[
              { icon: InstagramLogo , link: "#" },
              { icon: FacebookLogo , link: "#" },
              { icon: WhatsappLogo , link: "#" },
              { icon: TwitterLogo , link: "#" },
              { icon: EnvelopeSimple , link: "mailto:hello@yourstudio.com" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=" inline-flex items-center justify-center 
                text-teal-400 drop-shadow-[0_0_14px_rgba(45,212,191,0.75)]
                 md:text-gray-500 md:hover:text-teal-400 text-xl transition-all duration-300
                 leading-none mt-7"
              >
                <Icon size={40} weight="regular"
                aria-label={item.icon.name}
                  role="img" />
              </motion.a>

            );
            })}
          </div>
          
          </div>

          <div className="relative mt-5 border-t border-gray-800 pt-3 text-center">
             <p className="text-lg text-gray-500">
                © 2026 eXposure Studio. All rights reserved.
             </p>
          </div>
          </div>
     
  </section>
  );
}



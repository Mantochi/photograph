import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  EnvelopeSimple,
  TwitterLogo,
} from "phosphor-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 2000);
  };

  return (
    <section className="bg-black text-white pt-20 pb-8 px-6 md:pt-24 md:pb-10 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto my-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-none mb-8">
            Let’s Create Something Timeless.
          </h2>

          <p className="text-gray-300 text-xl mb-10">
            Share your story, your vision, your moment.
            I’m currently booking premium sessions for 2026.
          </p>

          <div className="space-y-3 text-lg text-gray-300">
            <p>Abuja, Nigeria</p>
            <p>hello@yourstudio.com</p>
            <p>Response within 24 hours</p>

             {/* SOCIALS */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-20">
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
        </motion.div>
     
        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 relative"
        >
          {/* Floating Input Component */}
          {["Name", "Email"].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field === "Email" ? "email" : "text"}
                required
                className="peer w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-all"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 text-gray-500 transition-all 
                peer-placeholder-shown:top-3 
                peer-placeholder-shown:text-gray-500 
                peer-focus:-top-3 
                peer-focus:text-base
                peer-focus:text-white
               peer-[:not(:placeholder-shown)]:-top-3
               peer-[:not(:placeholder-shown)]:text-sm">
                {field}
              </label>
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-all resize-none"
            ></textarea>
            <label className="absolute left-0 top-3 text-gray-400 transition-all 
              peer-placeholder-shown:top-3 
              peer-placeholder-shown:text-gray-500 
              peer-focus:-top-3 
              peer-focus:text-sm 
              peer-focus:text-white
               peer-[:not(:placeholder-shown)]:-top-3
               peer-[:not(:placeholder-shown)]:text-sm">
              Tell me about your project
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full md:none mt-6 bg-teal-400 text-black px-10 py-3 rounded-full font-medium transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </motion.button>

          {/* Success Message */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-16 left-0 text-green-400 text-sm"
                role="status"
                aria-live="polite"
              >
                ✔ Your message has been sent successfully.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
       
      </div>
      <div className="mt-14 border-t border-gray-800 pt-5 text-center">
  <p className="text-lg text-gray-500">
    © 2026 eXposure Studio. All rights reserved.
  </p>
</div>
    </section>
  );
}



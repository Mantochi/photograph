import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

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
              <label className="absolute left-0 top-3 text-gray-300 transition-all 
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
            <label className="absolute left-0 top-3 text-gray-300 transition-all 
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
) }
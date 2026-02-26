import { useState, useEffect, useRef } from "react"
import heroImage from "../../assets/montainhill.jpeg"
import Dropdown from "./Dropdown"
import { AnimatePresence, motion } from "framer-motion"
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [showNav, setShowNav] = useState(true);
      const lastScrollY = useRef(0);



// Close dropdown on outside click
useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
      // scrolling down
      setShowNav(false);
    } else {
      // scrolling up
      setShowNav(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header className="w-full bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 bg-black flex items-center justify-between
                    px-6 py-4 md:px-16 transition-transform duration-300
                    ${showNav ? "translate-y-0" : "-translate-y-full"}`}>

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-widest">
          eXposure
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-base tracking-wide">
          <li className="hover:text-teal-400 cursor-pointer">Home</li>
          <li className="hover:text-teal-400 cursor-pointer">About</li>
          <li className="hover:text-teal-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-teal-400 cursor-pointer">Services</li>
          <li className="hover:text-teal-400 cursor-pointer">Contact</li>
        </ul>

        {/* CTA + Mobile Menu Button */}

          {/* Hamburger */}
          <div
             ref={dropdownRef}
  
             className="flex items-center space-x-4 relative">
          
          
          <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 text-base rounded transition duration-300">
            Book Now
          </button>
          <button
          type="button"
             aria-haspopup="menu"
             aria-expanded={menuOpen}
             onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

      {/* Mobile Menu */}
      <AnimatePresence>
                             {menuOpen && (
                             <motion.ul
                               key="mobile-menu"
                               initial={{ opacity: 0, y: -10 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -10 }}
                               transition={{ duration: 0.15 }}
                               className="absolute right-0 top-full mt-3 w-64 rounded-xl bg-white shadow-xl py-3 text-base border border-gray-400 font-medium">
                                <Dropdown label="Home" />

                                <Dropdown  label="About" to="/about" />

                                <Dropdown  label="Portfolio" to="/portfolio" />
                                <Dropdown  label="Services" to="/services" />
                                <Dropdown  label="Contact" to="/contact" />
                                
                              </motion.ul>
                              )}
                             </AnimatePresence>

                    </div>
                    </nav>
        

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row items-center min-h-[85vh] px-6 md:px-16 pt-28">

        {/* Text */}
        <div className="flex-1 space-y-6 py-10 md:py-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight max-w-xl">
            We Capture Stories That Outlive Moments.
          </h2>

          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Modern photography that elevates your brand, preserves your moments, and inspires your audience.
          </p>

          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
            View Our Work
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] overflow-hidden rounded-full shadow-2xl ring-2 ring-teal-500/30">
          <img
            src={heroImage}
            alt="Photography portrait"
            className="w-full h-full object-cover"
          />
          </div>
        </div>

      </section>

    </header>
  )
}

export default Header

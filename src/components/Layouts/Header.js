import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";



const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [showNav, setShowNav] = useState(true);
      const lastScrollY = useRef(0);

      
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "gallery", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



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
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 bg-black flex items-center justify-between
                     py-4 md:px-16 transition-transform duration-300
                    ${showNav ? "translate-y-0" : "-translate-y-full"}`}>

        {/* Logo */}
        <h1 className="text-xl font-semibold md:tracking-widest pr-4">
          eXposure
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-base tracking-wide">
          <Link to="/" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "home" ? "text-teal-400" : ""}`}>
                  Home</Link>
          <Link to="#skillset" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "skillset" ? "text-teal-400" : ""}`}>
                  About</Link>
          <Link to="/portfolio" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "gallery" ? "text-teal-400" : ""}`}>
                  Portfolio</Link>
          <Link to="#services" 
             className={`hover:text-teal-400 cursor-pointer ${activeSection === "services" ? "text-teal-400" : ""}`}>
              Services</Link>
          <Link to="#contact" 
             className={`hover:text-teal-400 cursor-pointer ${activeSection === "contact" ? "text-teal-400" : ""}`}>
              Contact</Link>
        </ul>

        {/* CTA + Mobile Menu Button */}

          {/* Hamburger */}
          <div
             ref={dropdownRef}
  
             className="flex items-center space-x-4 relative pl-4">
          
          
          <a 
          href="#contact"
          className="bg-teal-700 hover:bg-teal-500 px-4 py-2 text-base rounded transition duration-300">
            Book Now
          </a>
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
                                
                                
                                <Dropdown label="Home" to="/" 
                                onClick={() => setMenuOpen(false)} />
                                   
                                <Dropdown  label="About" to="#skillset" 
                                onClick={() => setMenuOpen(false)} />

                                <Dropdown  label="Portfolio" to="/portfolio" 
                                onClick={() => setMenuOpen(false)} />
                                <Dropdown  label="Services" to="#services" 
                                onClick={() => setMenuOpen(false)} />
                                <Dropdown  label="Contact" to="#contact" 
                                onClick={() => setMenuOpen(false)} />
                                
                              </motion.ul>
                              )}
                             </AnimatePresence>

                    </div>
                    </nav>
        

    </header>
  )
}

export default Header

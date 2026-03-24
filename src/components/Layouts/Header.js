import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";



const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [showNav, setShowNav] = useState(true);
      const lastScrollY = useRef(0);

      
  const [activeSection, setActiveSection] = useState("home");

  const scrollSec = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };


  useEffect(() => {
    const sections =
     document.querySelectorAll("section");


    const handleScroll = () => {
      let current = ["home"];


      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

            setActiveSection(current);
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
          <NavLink to="/" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "home" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-teal-500" : ""}`}>
                  Home</NavLink>
          <NavLink to="#skillset" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "skillset" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-teal-500" : ""}`}>
                  About Me</NavLink>
          <NavLink to="/portfolio/portrait" 
                 className={`hover:text-teal-400 cursor-pointer ${activeSection === "gallery" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-teal-500" : ""}`}>
                  Gallery</NavLink>
          <a href="#contact"
             onClick={(e) => {
              e.preventDefault()
              scrollSec("contact");
             }}
             className={`hover:text-teal-400 cursor-pointer ${activeSection === "contact" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-teal-500" : ""}`}>
              Contact</a>
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
                                   
                                <Dropdown  label="About Me" to="#skillset" 
                                onClick={() => setMenuOpen(false)} />

                                <Dropdown  label="Gallery" to="/portfolio/portrait" 
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

import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { House, UserCircle, Image } from "phosphor-react";



const Header = () => {


  const location = useLocation();

    const isHome = location.pathname === "/";
      const isPortfolio = location.pathname.includes("/portfolio");
    

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
    <header className=" text-white p-3">

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 flex items-center justify-between
                     bg-gradient-to-r from-teal-500/20 via-white/10 to-teal-500/20
                     backdrop-blur-xl border-b border-white/20 rounded-xl
                      shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_30px_rgba(20,184,166,0.25)]
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

    <div className="flex items-center gap-4">

          {/* ICONS */}
    <div className="flex md:hidden items-center gap-4 text-xl 
                    ">

    {!isHome && (
      <NavLink to="/"> 
        <House size={40} className="hover:text-teal-400 transition transform hover:scale-110 active:scale-95" />
        
      </NavLink>
    )}

    {isHome && (
      <a href="#skillset">
        <UserCircle size={40} className="hover:text-teal-400" />
        
      </a>
    )}

    {!isPortfolio && (
      <NavLink to="/portfolio/portrait">
        <Image size={40} className="hover:text-teal-400" />

      </NavLink>
    )}


  </div>

  {/* CTA LAST */}
  <a
    href="#contact"
    className="bg-teal-700 hover:bg-teal-500 px-4 py-2 text-base rounded transition duration-300"
  >
    Book Me
  </a>

</div>
          
    
      
                    </nav>
        

    </header>
  )
}

export default Header

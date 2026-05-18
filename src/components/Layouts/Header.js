import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { House, UserCircle, Image } from "phosphor-react";



const Header = () => {


  const location = useLocation();

    const isHome = location.pathname === "/";
     const isAbout = location.pathname.includes("/about");
      const isPortfolio = location.pathname.includes("/portfolio");
    

      const [showNav, setShowNav] = useState(true);
        const lastScrollY = useRef(0);

      
  const [ activeSection ] = useState("home");


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
    <header className="text-white fixed top-0 left-0 right-0 z-50 p-3">

      {/* ================= NAVBAR ================= */}
      <nav className={`w-full flex items-center justify-between
                     bg-gradient-to-r from-teal-500/20 via-white/10 to-teal-500/20
                     backdrop-blur-xl border-b border-white/20 rounded-2xl
                      shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_30px_rgba(20,184,166,0.25)]
                     py-4 px-4 md:px-16 transition-transform duration-300
                    ${showNav ? "translate-y-0" : "-translate-y-full"}`}>

        {/* Logo */}
        <h1 className="text-xl font-semibold md:tracking-widest pr-4">
          eXposure
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg tracking-wide">
          <NavLink to="/" 
                 className={`hover:text-[#c89b5c] cursor-pointer ${activeSection === "home" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-[#c89b5c]" : ""}`}>
                  Home</NavLink>
          <NavLink to="/about" 
                 className={`hover:text-[#c89b5c] cursor-pointer ${activeSection === "skillset" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-[#c89b5c]" : ""}`}>
                  About Me</NavLink>
          <NavLink to="/portfolio/all" 
                 className={`hover:text-[#c89b5c] cursor-pointer ${activeSection === "gallery" ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:text-[#c89b5c]" : ""}`}>
                  Gallery</NavLink>
  
        </ul>

        {/* CTA + Mobile Menu Button */}

    <div className="flex items-center gap-4">

          {/* ICONS */}
    <div className="flex md:hidden items-center gap-4 text-xl 
                    ">

    {!isHome && (
      <NavLink to="/"> 
        <House size={32} className="hover:text-[#c89b5c] transition transform hover:scale-110 active:scale-95" />
        
      </NavLink>
    )}

    {!isAbout && (
      <NavLink to="/about">
        <UserCircle size={32} className="hover:text-[#c89b5c]" />
        
      </NavLink>
    )}

    {!isPortfolio && (
      <NavLink to="/portfolio/all">
        <Image size={32} className="hover:text-[#c89b5c]" />

      </NavLink>
    )}


  </div>

  {/* CTA LAST */}
  <NavLink to="/contact"
    className="bg-[#c89b5c] hover:bg-[#db8f23] px-4 py-2 text-lg rounded transition duration-300"
  >
    Book Me
  </NavLink>

</div>
          
    
      
                    </nav>
        

    </header>
  )
}

export default Header

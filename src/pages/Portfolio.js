import Header from '../components/Layouts/Header';
import PortfolioDesk from '../components/Layouts/PortfolioDesk';
import Footer from "../components/Layouts/Footer";
import { useEffect } from "react";
import GalleryHero from '../components/Layouts/hero/GalleryHero';




export default function Portfolio() {


  useEffect(() => {
     window.scrollTo(0, 0);
  }, []);

  return (
    <section id='portfolio' 
    className="bg-gray-600 overflow-x-hidden">
      <Header />
      <GalleryHero />
      <PortfolioDesk />
      <Footer />

    </section>
  )
}
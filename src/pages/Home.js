import Header from '../components/Layouts/Header';
import HomeHero from '../components/Layouts/hero/HomeHero';
import Gallery from "../components/hero/Gallery";
import ServicesBentoGrid from "../components/Layouts/ServicesBentoGrid";
import TestimonialsSection from "../components/Layouts/TestimonialsSection";
import Footer from "../components/Layouts/Footer";

import banner from "../assets/banner.png";
import london from "../assets/london.png";
import newyork from "../assets/newyork.png";
import user2 from "../assets/user2.jpg";
import washington from "../assets/washington.png";


function Home() {
  const images = [ 
    { 
      src: banner, 
      alt: "Portrait in leafy background", 
      place: "uk"
    }, 
    { 
      src: london, 
      alt: "Studio portrait on stool", 
      place: "italy", 
    }, 
    { 
      src: newyork, 
      alt: "Smiling portrait plain background", 
      place: "nigeria", 
    }, 
     { 
      src: user2, 
      alt: "Smiling portrait plain background", 
      place: "nigeria", 
    },
     { 
      src: washington, 
      alt: "Smiling portrait plain background", 
      place: "nigeria", 
    },
  ];
  return (
    <section id='home'
       className="App overflow-x-hidden">

        <Header />
        <HomeHero />
        <Gallery images={images} />
        <ServicesBentoGrid />
        <TestimonialsSection />
        <Footer />
    </section>
  );
}

export default Home;

import Header from '../components/Layouts/Header';
import Gallery from "../components/Layouts/Gallery";
import Skillset from "../components/Layouts/Skillset";
import Services from "../components/Layouts/Services";
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
    <div className="App">
      <header className="bg-gray-600">
        <Header />
        <Gallery images={images} />
        <Skillset />
        <Services />
        <Footer />
      </header>
    </div>
  );
}

export default Home;

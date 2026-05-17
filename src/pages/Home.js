import Header from '../components/Layouts/Header';
import HomeHero from '../components/Layouts/hero/HomeHero';
import Gallery from "../components/hero/Gallery";
import ServicesBentoGrid from "../components/Layouts/ServicesBentoGrid";
import TestimonialsSection from "../components/Layouts/TestimonialsSection";
import Footer from "../components/Layouts/Footer";


function Home() {
  return (
    <section id='home'
       className="App overflow-x-hidden">

        <Header />
        <HomeHero />
        <Gallery />
        <ServicesBentoGrid />
        <TestimonialsSection />
        <Footer />
    </section>
  );
}

export default Home;

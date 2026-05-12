
import Header from '../components/Layouts/Header.js';
import AboutPage from '../components/Layouts/AboutPage.js';
import AboutHero from '../components/Layouts/hero/AboutHero.js';
import CreativeSection from '../components/Layouts/CreativeSection.js';
import Footer from '../components/Layouts/Footer.js';









export default function About() {
    return (

    <section id='about' 
             className=" overflow-x-hidden">
         
         <Header />
         <AboutHero />
        <AboutPage /> 
        <CreativeSection />
        <Footer />
      
    </section>
    )
}
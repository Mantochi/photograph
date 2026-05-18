import Header from '../components/Layouts/Header';
import ContactHero from '../components/Layouts/hero/ContactHero';
import Footer from "../components/Layouts/Footer";
import ContactPage from "../components/Layouts/ContactLayout";




function Home() {
  return (
    <section id='home'
       className="App overflow-x-hidden">

        <Header />
        <ContactHero />
        <ContactPage />
        <Footer />
    </section>
  );
}

export default Home;
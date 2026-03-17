import Header from '../components/Layouts/Header';
import PortfolioDesk from '../components/Layouts/PortfolioDesk';
import Footer from "../components/Layouts/Footer";


import banner from "../assets/banner.png";
import london from "../assets/london.png";
import newyork from "../assets/newyork.png";
import user2 from "../assets/user2.jpg";
import washington from "../assets/washington.png";


const images = {
  portrait: [
    banner,
    london,
    user2,
  ],
  landscape: [
    newyork,
    washington,
  ],
};

export default function Portfolio() {

  return (
    <section id='portfolio' className="bg-gray-600 overflow-x-hidden">
      <Header />
      <PortfolioDesk images={images} />
      <Footer />

    </section>
  )
}
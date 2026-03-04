import ImageShowcase from "./ImageShowcase";
import Mobileview from "./MobileView";

const GallerySection = ({ images }) => {
  return (
    <section id="gallery">
      {/* Desktop grid showcase */}
      <div className="hidden md:block">
        <ImageShowcase images={images} />
      </div>

      {/* Mobile carousel */}
      <div className="block md:hidden">
        <Mobileview images={images} />
      </div>
    </section>
  );
};

export default GallerySection;

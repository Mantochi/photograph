import DesktopImage from "../Layouts/DesktopImage";
import Mobileview from "../Layouts/MobileView";

const GallerySection = ({ images }) => {
  return (
    <section id="gallery">
      {/* Desktop grid showcase */}
      <div className="hidden md:block">
        <DesktopImage images={images} />
      </div>

      {/* Mobile carousel */}
      <div className="block md:hidden">
        <Mobileview images={images} />
      </div>
    </section>
  );
};

export default GallerySection;

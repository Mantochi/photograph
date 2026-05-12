import HeroWrapper from "./HeroWrapper"
import heroImage from "../../../assets/imgback.jpg";


const GalleryHero = () => {

    return (
        <HeroWrapper bgImage={heroImage}>
            <div className="min-h-screen flex items-center">
              <div className="w-full max-w-7xl px-6 mt-16">
                 <div className="text-left">
                <p className="text-2xl text-teal-400 uppercase tracking-widest"> 
                    My Work
                  </p>
                <h1 className="text-3xl md:text-500 font-bold mt-4"> 
                    Moments Captured.</h1>

            <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-teal-400 transition mt-10">
               Explore Gallery
              </button>     
            </div>
            </div>
            </div>
        </HeroWrapper>
    );
};

export default GalleryHero;
import HeroWrapper from "./HeroWrapper"
import heroImage from "../../../assets/imgback.jpg";


const GalleryHero = () => {

    return (
        <HeroWrapper bgImage={heroImage}>
            <div className="min-h-screen flex items-center">
              <div className="w-full max-w-7xl px-6 mt-16">
                 <div className="text-left">
                <p className="text-2xl text-[#c89b5c] uppercase tracking-widest"> 
                    My Work
                  </p>
                <h1 className="text-7xl font-bold mt-4"> 
                    Moments <br /> Captured.</h1>

                    <p className="text-xl font-bold md:text-2xl text-gray-300 tracking-widest mt-10"> 
                    A collection of stories, emotions, & memories captured through my lens
                  </p>  

            <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-[#c89b5c] transition mt-10">
               Explore Gallery
              </button>     
            </div>
            </div>
            </div>
        </HeroWrapper>
    );
};

export default GalleryHero;
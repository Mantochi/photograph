import HeroWrapper from "./HeroWrapper"
import heroImage from "../../../assets/home.jpg";


const HomeHero = () => {

    return (
        <HeroWrapper bgImage={heroImage}>
            <div className="min-h-screen flex items-center">
              <div className="w-full max-w-7xl px-6 mt-16">
                 <div className="text-left">
                <p className="text-xl md:text-2xl text-teal-400 uppercase tracking-widest"> 
                    PHOTOGRAPHS THAT TELL YOUR STORY
                  </p>
                <h1 className="text-4xl md:text-6xl tracking-widest mt-5"> 
                    Capturing <br /> Life Beautifully</h1>

                  <p className="text-xl font-bold md:text-2xl text-neutral-900 tracking-widest mt-10"> 
                    Timeless photographs. Real moments. <br /> True emotions.
                  </p>  

            <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-teal-400 transition mt-16">
               Book A Session
              </button>     
            </div>
            </div>
            </div>
        </HeroWrapper>
    );
};

export default HomeHero;
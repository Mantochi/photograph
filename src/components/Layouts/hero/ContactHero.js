import HeroWrapper from "./HeroWrapper"
import footImg from "../../../assets/imgfoot.jpg";



const ContactHero = () => {

    return (
        <HeroWrapper bgImage={footImg}>
             
         <div className="min-h-screen px-6 lg:px-10 flex items-center">
           <div className="max-w-xl text-white text-left">
              <h2 className="text-5xl md:text-9xl leading-tight font-bold">
                 Let’s Work
                <br />
              Together
            </h2>

            <div className="w-16 h-[1px] bg-[#c9a57d] my-8" />

            <p className="text-white/80 text-lg md:text-3xl leading-8">
              Have a project in mind or want to learn more about my work? <br />
              I’d love to hear from you.
            </p>
          </div>
        </div>
        </HeroWrapper>
    );
};

export default ContactHero;
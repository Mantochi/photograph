import HeroWrapper from "./HeroWrapper"
import heroImg from "../../../assets/background.jpg";
import { Camera, Users, Medal, MapPin } from "phosphor-react";


const AboutHero = () => {

    return (
        <HeroWrapper bgImage={heroImg}>

            <div className="max-w-5xl pt-40 md:pt-40">
                 {/*Left glass card*/}

       <div className="relative backdrop-blur-xl bg-white/10 border border-white/20
              p-6 md:p-10 rounded-3xl text-left shadow-2xl w-[85%] ">
           
           {/* about tag */}

        <div className="max-w-xl">

           <span className="inline-flex items-center gap-2 text-sm uppercase px-8 py-2 bg-white/20 tracking-widest mb-5 text-gray-200">
               About Me
           </span>

      <h1 className="text-5xl font-bold mb-4">
        Hi, I’m <span className="text-teal-500">Tochi</span>
      </h1>

      <p className="text-2xl mt-4 text-gray-200 mb-6">
        Photographer | Storyteller | Dreamer
      </p>

      {/* Line */}

       <div className="w-12 h-[2px] bg-teal-500 my-6" />

      <p className="text-gray-300 text-xl mb-8">
        I capture real moments and turn them into timeless <br /> memories.
        My goal is simple to tell your story <br /> beautifully, through my lens.
      </p>

      <div className="flex gap-4 justify-left flex-wrap">
        <button className="px-6 py-3 bg-teal-600 text-black rounded-xl font-medium hover:bg-teal-400 transition">
          View My Work
        </button>

        <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
          Contact Me
        </button>
        </div>
        </div>

         {/* Floating Right Card Desktop Design */}
        <div
           className="hidden lg:block w-64 absolute top-0 right-0
            backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl">

      <ul className="space-y-8 text-white">

        <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Medal className="text-teal-500" size={40} />
          </div>
          <div className="flex flex-col">
          <p className="text-xl font-bold">3+ </p>
            <p className="text-base text-gray-300">Years Experience</p>
          </div>
         </li>   

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Camera className="text-teal-500" size={40} />
          </div>   
          <div className="flex flex-col">
             <p className="text-xl font-bold">150+</p>
             <p className="text-base text-gray-300">Shoot Completed</p>
          </div>
         </li>

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Users className="text-teal-500" size={40} />
          </div>   
          <div className="flex flex-col">
          <p className="text-xl font-bold">100+</p>
            <p className="text-base text-gray-300">Happy Clients</p>
          </div>
         </li>  

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <MapPin className="text-teal-500" size={40} />
          </div>
          <div className="flex flex-col">   
          <p className="text-xl font-bold">Abuja,Nigeria</p>
            <p className="text-base text-gray-300">Base in</p>
         </div>
         </li>   
         </ul>
      </div>

      </div>

      {/* Mobile Version */}
        
        <div
           className="lg:hidden mt-2 w-[70%] mb-2
            backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl">

      <ul className="space-y-8 text-white">

        <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Medal className="text-teal-500" size={40} />
          </div>
          <div className="flex flex-col">
          <p className="text-xl font-bold">3+ </p>
            <p className="text-base text-gray-300">Years Experience</p>
          </div>
         </li>   

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Camera className="text-teal-500" size={40} />
          </div>   
          <div className="flex flex-col">
             <p className="text-xl font-bold">150+</p>
             <p className="text-base text-gray-300">Shoot Completed</p>
          </div>
         </li>

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <Users className="text-teal-500" size={40} />
          </div>   
          <div className="flex flex-col">
          <p className="text-xl font-bold">100+</p>
            <p className="text-base text-gray-300">Happy Clients</p>
          </div>
         </li>  

         
          <li className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg group-hover:bg-amber-400/20 transition">
           <MapPin className="text-teal-500" size={40} />
          </div>
          <div className="flex flex-col">   
          <p className="text-xl font-bold">Abuja,Nigeria</p>
            <p className="text-base text-gray-300">Base in</p>
         </div>
         </li>   
      </ul>

            </div>
            </div>
        </HeroWrapper>
    );
};

export default AboutHero;
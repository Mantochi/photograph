import React from "react";
import {
  Camera,
  VideoCamera,
  Printer,
  Palette,
  MagicWand,
  Image,
  ArrowUpRight,
} from "phosphor-react";


export default function ServicesBentoGrid() {

  const services = [
{
title: "Photography",
desc: "Studio, outdoor and event photography with cinematic quality.",
icon: Camera,
className: "col-span-2 md:col-span-2 md:row-span-2",
},
{
title: "Videography",
desc: "Professional video production for brands and events.",
icon: VideoCamera,
className:"md:col-span-1 md:row-span-2",
},
{
title: "Editing",
desc: "High-end retouching, color grading and enhancement.",
icon: Image,
className: "md:col-span-1 md:row-span-2",
},
{
title: "Styling",
desc: "Creative direction, wardrobe styling and set preparation.",
icon: Palette,
className: "md:col-span-2",
},
{
title: "Printing",
desc: "Creative direction, wardrobe styling and set preparation.Premium prints, frames and album production.",
icon: Printer,
className: "col-span-2 md:col-span-2",
},
{
title: "Recording",
desc: "Audio recording, podcast sessions and live production.",
icon: MagicWand,
className: "md:col-span-4",
},
];


return (
<section className="relative bg-black text-white py-24 px-6 overflow-hidden">
{/* Background Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

<div className="max-w-7xl mx-auto relative z-10">  
    {/* Heading */}  
    <div className="mb-14 text-left">  
      <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-3">  
        Studio Services  
      </p>  

      <h2 className="text-4xl md:text-6xl  font-serif leading-tight max-w-3xl">  
       What We Can Offer You  
      </h2>  
    </div>  

    {/* Bento Grid */}  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[350px] md:auto-rows-[200px] grid-flow-dense">  
      {services.map((service, index) => {  
        const Icon = service.icon;  

        return (  
          <div  
            key={index}  
            className={`  
              group  
              relative  
              overflow-hidden  
              rounded-2xl 
              border border-white/10  
              bg-white/5  
              backdrop-blur-xl  
              p-4
              transition-all  
              duration-500  
              hover:-translate-y-2  
              hover:bg-white/10  
              hover:border-white/20  
              ${service.className}  
            `}  
          >  
            {/* Glow Effect */}  
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">  
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />  
            </div>  

            {/* Content */}  
            <div className="relative z-10 flex flex-col justify-between">  
              

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">  
                  <Icon className="w-6 h-6" />  
                  </div>

                   {/* Arrow */}  
            
                
              

                <h3 className="text-2xl font-semibold mb-3 text-left">  
                  {service.title}  
                </h3>  

                <p className="text-white/60 leading-relaxed max-w-sm text-left">  
                  {service.desc}  
                </p>  
              </div> 

               {/* Arrow */}  
                <div className="flex justify-end mt-10">  
                <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">  
                   <ArrowUpRight className="w-5 h-5" />  
                 </div>  
                </div>   

              
            {/* Noise Overlay */}  
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />  
          </div>  
        );  
      })}  
    </div>  
  </div>  
</section>

);
}
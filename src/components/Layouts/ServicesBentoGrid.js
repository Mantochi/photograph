import React from "react";
import {
  Camera,
  VideoCamera,
  Printer,
  Palette,
  Microphone,
  Image,
  ArrowUpRight,
} from "phosphor-react";


export default function ServicesBentoGrid() {

  const services = [
{
title: "PHOTOGRAPHY",
desc: "Studio, outdoor & event photography with cinematic quality.",
icon: Camera,
className: "col-span-2 md:col-span-2 md:row-span-2",
iconSize: 150,
iconColor: "text-amber-600"
},
{
title: "VIDEOGRAPHY",
desc: "Professional video production for brands & events.",
icon: VideoCamera,
className:"md:col-span-1 md:row-span-2",
iconSize: 120,
iconColor: "text-yellow-500"
},
{
title: "EDITING",
desc: "Highend retouching, color grading & enhancement.",
icon: Image,
className: "md:col-span-1 md:row-span-2",
iconSize: 120,
iconColor: "text-yellow-500"
},
{
title: "STYLING",
desc: "Creative direction, wardrobe styling & set preparation.",
icon: Palette,
className: "md:col-span-2",
iconSize: 100,
iconColor: "text-yellow-500"
},
{
title: "PRINTING",
desc: "Premium prints, frames & album production.",
icon: Printer,
className: "col-span-2 md:col-span-2",
iconSize: 100,
iconColor: "text-yellow-500"
},
{
title: "RECORDING",
desc: "Audio recording, podcast sessions & live production.",
icon: Microphone,
className: "md:col-span-4",
iconSize: 100,
iconColor: "text-yellow-500"
},
];


return (
<section className="relative bg-black text-white py-24 px-6 overflow-hidden">
{/* Background Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

<div className="max-w-7xl mx-auto relative z-10">  
    {/* Heading */}  
    <div className="mb-14 text-left">  
      <p className="uppercase font-semibold tracking-[0.3em] text-lg text-[#c89b5c] mb-3">  
        Studio Services  
      </p>  

      <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl">  
       What We Can Offer You  
      </h2>  
    </div>  

    {/* Bento Grid */}  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[350px] md:auto-rows-[200px] grid-flow-dense">  
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
              border border-white/40 
              bg-white/5  
              backdrop-blur-xl  
              p-3
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
            <div className="relative z-10 flex justify-between h-full mb-4">  
              

                <div className=" absolute top-0 right-0 opacity-50">  
                  <Icon size={service.iconSize} 
                    className={service.iconColor} />  
                  </div>

                   {/* Arrow */}  
                <div className="w-11 h-11 absolute bottom-0 right-0 flex items-center justify-center rounded-full border border-white/15  transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">  
                   <ArrowUpRight className="w-5 h-5" />  
                  
                </div>   
                
              
                <div className="flex flex-col md:px-5 mt-5 justify-center">
                
                <h3 className="text-2xl font-serif mb-2 pt-5 text-left">  
                  {service.title}  
                </h3>  

                <p className="text-white/60 leading-relaxed max-w-sm text-left text-lg">  
                  {service.desc}  
                </p>  

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


const HeroWrapper = ({ bgImage, children }) => {

    return (
        <section className="relative min-h-screen overflow-hidden text-white">

            {/* Background */}

            <img
              src={bgImage}
               alt=""
                className="absolute inset-0 w-full h-full object-cover object-[60%_10%] md:object-[center_10%]" />

                {/* Overlay */}

              <div className="absolute inset-0 bg-black/60" />

              {/* content */}

              <div className="relative z-10 px-4 md:px-20 ">
                 {children}

                </div>  
        </section>
    );
};

export default HeroWrapper
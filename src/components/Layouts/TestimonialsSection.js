import { Quotes } from "phosphor-react";


export default function TestimonialsSection() {

  const testimonials = [
  {
    id: 1,
    text: "Alex is incredibly talented and professional. The photos exceeded our expectations and captured every special moment beautifully.",
    name: "Jessica & Mark",
  },
  {
    id: 2,
    text: "Working with Alex was such a great experience. They made us feel comfortable and the results were simply stunning.",
    name: "Sophia L.",
  },
  {
    id: 3,
    text: "Alex has an amazing eye for detail and light. Our photos turned out magical. Highly recommend!",
    name: "David R.",
  },
];


  return (
    <section className="relative bg-white text-black py-24 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 md:max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-400 mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-light">
            What My Clients Say
          </h2>

          {/* Divider */}
          <div className="w-20 h-[1px] bg-black/40 mx-auto mt-6" />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative px-10
                ${index !== 2 ? "border-r border-black/30" : ""}
              `}
            >
              {/* Quote Icon */}
              <Quotes
                size={38}
                strokeWidth={2.5}
                className="text-black mb-8 opacity-90"
              />

              {/* Testimonial */}
              <p className="text-lg leading-[2] text-black mb-10">
                {item.text}
              </p>

              {/* Name */}
              <p className="text-lg font-semibold tracking-wide">
                — {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[65%]
                bg-white/5
                backdrop-blur-lg
                border border-black/30
                rounded-2xl
                p-4
              "
            >
              {/* Quote */}
              <Quotes
                size={34}
                strokeWidth={2.5}
                className="text-black mb-6"
              />

              {/* Text */}
              <p className="text-base leading-8 text-black mb-8">
                {item.text}
              </p>

              {/* Client */}
              <p className="font-semibold text-lg">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
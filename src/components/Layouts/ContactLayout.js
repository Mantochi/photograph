import {
  Camera,
  EnvelopeSimple,
  Phone,
  MapPin,
  InstagramLogo,
} from "phosphor-react";

export default function ContactPage() {
  return (
    <div className="bg-[#f8f6f2] text-[#1a1a1a]">

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* LEFT */}
        <div className="bg-[#f7f5f1] px-8 md:px-14 py-16 border-r border-black/5">
          <p className="uppercase tracking-[0.3em] text-xs text-black/60">
            Get In Touch
          </p>

          <div className="w-12 h-[1px] bg-[#c9a57d] mt-5 mb-12" />

          <div className="space-y-10">
            {/* Email */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                <EnvelopeSimple size={22} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="uppercase tracking-[0.2em] text-xs mb-2 font-medium">
                  Email
                </h3>

                <p className="text-black/60">
                  hello@alexmorganphoto.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                <Phone size={22} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="uppercase tracking-[0.2em] text-xs mb-2 font-medium">
                  Phone
                </h3>

                <p className="text-black/60">(555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                <MapPin size={22} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="uppercase tracking-[0.2em] text-xs mb-2 font-medium">
                  Location
                </h3>

                <p className="text-black/60 leading-7">
                  San Diego, California
                  <br />
                  Available for travel worldwide
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                <InstagramLogo size={22} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="uppercase tracking-[0.2em] text-xs mb-2 font-medium">
                  Instagram
                </h3>

                <p className="text-black/60">@alexmorgan.photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white px-8 md:px-14 py-16">
          <p className="uppercase tracking-[0.3em] text-xs text-black/60">
            Send A Message
          </p>

          <div className="w-12 h-[1px] bg-[#c9a57d] mt-5 mb-12" />

          <form className="space-y-6">
            {/* Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-black/10 h-14 px-5 outline-none focus:border-black transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-black/10 h-14 px-5 outline-none focus:border-black transition"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="border border-black/10 h-14 px-5 w-full outline-none focus:border-black transition"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={7}
              className="border border-black/10 p-5 w-full outline-none focus:border-black transition resize-none"
            />

            {/* Button */}
            <button className="bg-black text-white px-10 h-14 uppercase tracking-[0.25em] text-xs hover:bg-black/90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= RESPONSE SECTION ================= */}
      <section className="bg-[#f8f6f2] py-20 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="w-16 h-16 rounded-full border border-black/10 mx-auto flex items-center justify-center mb-8">
            <Camera size={26} strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl md:text-4xl font-light mb-5">
            I typically respond within 24–48 hours.
          </h3>

          <p className="text-black/60 text-lg">
            Thank you for reaching out!
          </p>
        </div>
      </section>
      </div>
)}
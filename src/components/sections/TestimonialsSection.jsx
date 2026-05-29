import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../../assets/hc1.jpg";
import img2 from "../../assets/hc2.jpg";

const testimonials = [
  {
    name: "Jacqueline Wright",
    role: "Customer",
    image:
      img1,
    text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
  },
  {
    name: "Jacqueline Wright",
    role: "Customer",
    image:
      img2,
    text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#262626]">
            Our happy clients
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-10 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6">

          {/* Left Arrow */}
          <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#F5F5F5] flex-shrink-0 items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-4 sm:p-6 lg:p-8 w-full max-w-[499px] min-h-[232px]"
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-[#262626]">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden lg:flex w-10 h-10 rounded-full bg-[#F5F5F5] flex-shrink-0 items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
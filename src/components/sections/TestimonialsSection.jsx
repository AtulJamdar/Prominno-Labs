import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Jacqueline Wright",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
  },
  {
    name: "Jacqueline Wright",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[40px] font-semibold text-[#262626]">
            Our happy clients
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-20 flex items-center justify-center gap-6">

          {/* Left Arrow */}
          <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-8 max-w-[499px] min-h-[232px]"
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
          <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
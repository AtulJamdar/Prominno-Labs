import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[466px] h-[466px] bg-[#D9D9D9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px] font-semibold text-[#262626]">
              Frequently asked questions
            </h2>

            <div className="mt-10 space-y-5">

              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium text-[#262626]">
                      {faq.question}
                    </span>

                    {active === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
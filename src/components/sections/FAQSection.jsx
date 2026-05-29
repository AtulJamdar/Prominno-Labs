import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import img1 from "../../assets/question.jpg";

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
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[466px] aspect-square lg:h-[466px] bg-[#D9D9D9] overflow-hidden">
              <img
                src={img1}
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
            <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-semibold text-[#262626]">
              Frequently asked questions
            </h2>

            <div className="mt-6 sm:mt-8 lg:mt-10 space-y-4 sm:space-y-5">

              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left"
                  >
                    <span className="font-medium text-[14px] sm:text-[16px] text-[#262626]">
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
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
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
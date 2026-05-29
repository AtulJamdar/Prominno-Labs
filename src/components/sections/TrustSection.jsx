import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import img1 from "../../assets/ct1.jpg";
import img2 from "../../assets/ct2.jpg";
import img3 from "../../assets/ct3.jpg";

const features = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Elementum nisl duis tortor sed.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Elementum nisl duis tortor sed.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Elementum nisl duis tortor sed.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    text: "Elementum nisl duis tortor sed.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[913px] mx-auto text-center"
        >
          <h2 className="text-[40px] font-semibold leading-[140%] text-[#262626]">
            Why our clients trust us
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
            sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id.
            Urna posuere consequat velit vulputate faucibus pretium arcu
            accumsan sit. Vel venenatis sapien.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-12 sm:mt-16 lg:mt-20">

          {/* LEFT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-[463px] aspect-square lg:h-[452px]">

              {/* Main Image - Scale + Rotate Effect */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block absolute top-0 left-0 w-[288px] h-[245px] overflow-hidden border border-gray-300"
              >
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </motion.div>

              {/* Side Image - Scale + Shadow Effect */}
              <motion.div
                whileHover={{ scale: 1.12, y: -5 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block absolute top-[46px] right-0 w-[154px] h-[205px] overflow-hidden border border-gray-300 hover:shadow-2xl"
              >
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </motion.div>

              {/* Bottom Image - Scale + Skew Effect */}
              <motion.div
                whileHover={{ scale: 1.1, skewY: -2 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block absolute bottom-0 left-[90px] w-[245px] h-[186px] overflow-hidden border border-gray-300"
              >
                <img
                  src={img3}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </motion.div>

              {/* Mobile Single Image */}
              <div className="lg:hidden w-full h-full overflow-hidden border border-gray-300">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[565px]"
          >
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="mt-1">
                    <CheckCircle2
                      size={22}
                      className="text-black"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#262626]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10">
              <Button variant="primary" size="md">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const stats = [
  {
    title: "Clients",
    value: "12K",
  },
  {
    title: "Annual growth",
    value: "55%",
  },
  {
    title: "No of projects",
    value: "5K",
  },
  {
    title: "Positive ratings",
    value: "80%",
  },
];

export default function BusinessStrategy() {
  return (
    <section className="bg-[#F8F8F8] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[100%] text-[#262626]">
            Our business strategy has helped many businesses across the globe
          </h2>

          {/* Paragraph */}
          <p className="mt-6 sm:mt-8 lg:mt-10 text-[16px] sm:text-[20px] lg:text-[24px] font-semibold leading-[160%] text-[#606060]">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
            sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id.
          </p>
        </motion.div>

        {/* Stats Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 max-w-[1065px] mx-auto bg-white rounded-[10px] px-4 sm:px-6 lg:px-[40px] py-4 sm:py-6 lg:py-[20px]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-0">

            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-4 sm:py-6"
              >

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold text-[#262626]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-black">
                    {item.value}
                  </p>
                </div>

                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block w-[1px] h-[40px] bg-[#B9B9B9] ml-14" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="w-full max-w-[1160px] h-[250px] sm:h-[400px] lg:h-[645px] mx-auto overflow-hidden bg-[#D9D9D9]">

            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Business"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
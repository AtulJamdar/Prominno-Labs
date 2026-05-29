import { motion } from "framer-motion";
import Button from "../ui/Button";

const blogs = [
  {
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[40px] font-semibold leading-[100%] text-[#262626]">
            Latest blog
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="mt-[60px] flex flex-wrap justify-center gap-[30px]">

          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group w-[367px] h-[433px] border border-[#858585] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >

              {/* Image */}
              <div className="w-full h-[220px] bg-[#D9D9D9] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[213px]">

                <div>
                  <h3 className="text-[24px] font-semibold leading-[130%] text-[#262626]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[160%] text-[#606060]">
                    {blog.desc}
                  </p>
                </div>

                <button className="mt-6 text-[15px] font-semibold text-black w-fit hover:underline">
                  Learn More
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-[60px]">
          <Button
            variant="primary"
            size="md"
            className="w-[162px] h-[60px]"
          >
            View All
          </Button>
        </div>

      </div>
    </section>
  );
}
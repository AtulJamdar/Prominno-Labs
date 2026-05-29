import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#F8F8F8] pt-[50px] sm:pt-[70px] lg:pt-[110px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-h-[400px] sm:min-h-[500px] lg:h-[628px] flex items-center justify-center px-4 sm:px-6"
          >
            {/* Inner Content Box */}
            <div className="max-w-[472px] flex flex-col gap-6 sm:gap-10">

              {/* Small Label */}
              <p className="uppercase tracking-[0.2em] text-sm text-gray-500">
                Modern Design Agency
              </p>

              {/* Heading */}
              <h1 className="text-[32px] sm:text-[42px] lg:text-[64px] font-black leading-[1.05] text-black">
                Great design is invisible
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We craft beautiful digital experiences with modern UI,
                smooth interactions, and scalable frontend architecture.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <Button variant="primary" size="sm">
  Get Started
</Button>

                <Button variant="primary" size="sm">
  Learn More
</Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE / CROSS AREA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-[300px] sm:min-h-[400px] lg:h-[628px] bg-[#C8C8C8] relative overflow-hidden"
          >
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Hero"
              className="w-full h-full object-cover"
            />

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
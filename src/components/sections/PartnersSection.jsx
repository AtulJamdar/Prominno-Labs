import { motion } from "framer-motion";
import partnerLogo from "../../assets/partner.png";

const partners = [
  {
    name: "Partner 1",
    logo: partnerLogo,
  },
  {
    name: "Partner 2",
    logo: partnerLogo,
  },
  {
    name: "Partner 3",
    logo: partnerLogo,
  },
  {
    name: "Partner 4",
    logo: partnerLogo,
  },
];

export default function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[100%] text-[#262626]">
            Our Partners
          </h2>
        </motion.div>

        {/* Partners Row */}
        {/* Partners Row */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.4 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-10 sm:mt-14 lg:mt-[60px] max-w-[1042px] mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 lg:gap-[70px]"
>

  {partners.map((partner, index) => (
    <div
      key={index}
      className="w-[140px] sm:w-[180px] lg:w-[208px] h-[45px] sm:h-[55px] lg:h-[61px] flex items-center justify-center"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  ))}

</motion.div>
      </div>
    </section>
  );
}
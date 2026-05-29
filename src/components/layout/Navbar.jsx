import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const navLinks = [
  "Home",
  "Services",
  "About",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[70px] bg-white border-b border-gray-200 flex items-center">

      {/* Main Navbar */}
      <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center flex-shrink-0"
        >
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold">
            <img 
              src={logo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[60px]">

          {/* Links */}
          <nav className="hidden lg:flex items-center gap-[40px] xl:gap-[60px]">

            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href="/"
                whileHover={{ opacity: 0.7 }}
                className={`text-[14px] xl:text-[16px] font-semibold transition-colors duration-300 ${
                  index === 0
                    ? "text-black"
                    : "text-[#262626] hover:text-black"
                }`}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block w-[140px] xl:w-[162px] h-[45px] xl:h-[49px] bg-black text-white text-xs xl:text-sm font-semibold rounded-md hover:bg-gray-800 transition-all duration-300">
            Button
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-5">

              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="/"
                  className="text-[#262626] font-medium text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}

              <button className="mt-2 w-full h-[45px] sm:h-[49px] bg-black text-white text-sm sm:text-base font-semibold rounded-md">
                Button
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
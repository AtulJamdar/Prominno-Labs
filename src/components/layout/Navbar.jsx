import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="sticky top-0 z-50 w-full h-[70px] bg-white border-b border-gray-200">

      {/* Main Navbar */}
      <div className="max-w-[1160px] h-full mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
            S
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[60px]">

          {/* Links */}
          <nav className="flex items-center gap-[60px]">

            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href="/"
                whileHover={{ opacity: 0.7 }}
                className={`text-[16px] font-semibold transition-colors duration-300 ${
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
          <button className="w-[162px] h-[49px] bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-all duration-300">
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
            <div className="flex flex-col p-6 gap-5">

              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="/"
                  className="text-[#262626] font-medium"
                >
                  {link}
                </a>
              ))}

              <button className="mt-2 w-full h-[49px] bg-black text-white font-semibold rounded-md">
                Button
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
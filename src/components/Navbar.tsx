import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(30,58,138,0.08)] border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-[#1e3a8a]/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 3.5 4.5 2 2 2C2 7 5 10 7 12C8 13 9 14 9 16C9 18 8 20 7 22H17C16 20 15 18 15 16C15 14 16 13 17 12C19 10 22 7 22 2C19.5 2 17.5 3.5 17 5.5C16.5 3.5 14.5 2 12 2Z" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold text-[#1e3a8a] leading-tight tracking-tight">
                SmileCare
              </span>
              <span className="text-[10px] font-medium text-gray-400 tracking-[0.2em] uppercase leading-tight">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-[#1e3a8a]/8 text-[#1e3a8a] font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1e3a8a] transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+92-300-1234567</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#1e3a8a] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#172554] transition-all duration-300 shadow-sm hover:shadow-md shadow-[#1e3a8a]/15"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#1e3a8a]" />
                  +92-300-1234567
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-[#1e3a8a] text-white px-4 py-3.5 rounded-xl text-sm font-semibold mt-3"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

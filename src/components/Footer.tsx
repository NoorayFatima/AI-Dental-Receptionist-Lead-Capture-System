import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6" onClick={scrollToTop}>
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 3.5 4.5 2 2 2C2 7 5 10 7 12C8 13 9 14 9 16C9 18 8 20 7 22H17C16 20 15 18 15 16C15 14 16 13 17 12C19 10 22 7 22 2C19.5 2 17.5 3.5 17 5.5C16.5 3.5 14.5 2 12 2Z" fill="currentColor" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-semibold tracking-tight">SmileCare</span>
                <span className="block text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase">Dental Clinic</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Providing exceptional dental care in Faisalabad for over 10 years. Your healthy smile is our top priority.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase text-gray-400">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-0.5 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4">
              {[
                "General Dentistry",
                "Teeth Whitening",
                "Dental Implants",
                "Orthodontics",
                "Root Canal Treatment",
                "Cosmetic Dentistry",
              ].map((service) => (
                <li key={service}>
                  <span className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-default">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-200"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wide">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">123 Main Boulevard, D-Ground, Faisalabad, Punjab 38000</p>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <a href="tel:+923001234567" className="text-gray-400 text-sm hover:text-white transition-colors">+92-300-1234567</a>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <a href="mailto:info@smilecare.pk" className="text-gray-400 text-sm hover:text-white transition-colors">info@smilecare.pk</a>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  <p>Mon-Fri: 9AM - 9PM</p>
                  <p>Sat: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SmileCare Dental Clinic. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
            Back to top
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Users,
  Star,
  Clock,
  CheckCircle,
  Award,
  ChevronRight,
} from "lucide-react";

const stats = [
  { icon: Users, value: "2,000+", label: "Happy Patients", accent: "bg-[#1e3a8a]" },
  { icon: Award, value: "10+", label: "Years Experience", accent: "bg-amber-500" },
  { icon: Star, value: "4.9/5", label: "Patient Rating", accent: "bg-[#1e3a8a]" },
  { icon: Shield, value: "100%", label: "Safe & Hygienic", accent: "bg-emerald-600" },
];

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventive care for the whole family.",
    tag: "Most Popular",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
    tag: "Premium",
  },
  {
    icon: "🔬",
    title: "Dental Implants",
    description: "Permanent tooth replacement using the latest implant technology.",
    tag: "Advanced",
  },
  {
    icon: "😁",
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers for your perfect look.",
    tag: "Popular",
  },
];

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Patient since 2020",
    text: "SmileCare transformed my smile! The team is incredibly professional and caring. I can't recommend them enough.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Sara Ali",
    role: "Patient since 2021",
    text: "Best dental clinic in Faisalabad! The AI booking system is so convenient and the staff makes you feel right at home.",
    rating: 5,
    initials: "SA",
  },
  {
    name: "Usman Tariq",
    role: "Patient since 2019",
    text: "Got my dental implants done here. The procedure was painless and the results are amazing. Thank you SmileCare!",
    rating: 5,
    initials: "UT",
  },
];

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section — top padding accounts for fixed 72px navbar */}
      <section className="relative min-h-screen flex items-center pt-[72px] bg-gradient-to-br from-[#f0f4ff] via-white to-[#e8f5e9]">
        {/* Subtle dot-grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
          backgroundSize: "36px 36px"
        }} />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1e3a8a]/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full border border-gray-200/80 shadow-sm mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Now with AI-Powered Appointments</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-serif font-semibold text-gray-900 leading-[1.08] mb-7 tracking-tight">
                Your Healthy{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#1e3a8a]">Smile</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#1e3a8a]/12 -z-0 rounded-sm" />
                </span>{" "}
                Starts Here
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10 font-light">
                Experience world-class dental care with the convenience of AI-powered appointment booking. Your journey to a perfect smile is just a click away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl text-base font-semibold hover:bg-[#172554] transition-all duration-300 shadow-lg shadow-[#1e3a8a]/20 hover:shadow-xl hover:shadow-[#1e3a8a]/25 hover:-translate-y-0.5"
                >
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-2xl text-base font-semibold border border-gray-200 hover:border-[#1e3a8a]/30 hover:bg-[#1e3a8a]/[0.02] transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {[
                  { icon: Shield, text: "Fully Licensed & Certified" },
                  { icon: Clock, text: "Same-Day Appointments" },
                  { icon: CheckCircle, text: "2,000+ 5-Star Reviews" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-sm text-gray-500 font-medium">
                    <item.icon className="w-4.5 h-4.5 text-[#1e3a8a] shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image — constrained so it never overlaps nav */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main image — fixed aspect ratio so it stays contained */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1e3a8a]/12 aspect-[5/6] max-h-[560px]">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop"
                    alt="Modern dental clinic interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent" />
                </div>

                {/* Floating card - Patients */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-[28%] bg-white rounded-2xl shadow-xl shadow-gray-300/40 p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 bg-[#1e3a8a]/8 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#1e3a8a]" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">2,000+</p>
                      <p className="text-xs text-gray-500 font-medium">Happy Patients</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card - Rating */}
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-8 bottom-[28%] bg-white rounded-2xl shadow-xl shadow-gray-300/40 p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-900">4.9 Rating</p>
                  <p className="text-xs text-gray-400">342+ Reviews</p>
                </motion.div>

                {/* Floating card - Experience */}
                <motion.div
                  animate={{ y: [-6, 10, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute right-6 top-6 bg-white rounded-2xl shadow-xl shadow-gray-300/40 px-4 py-3 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Award className="w-4.5 h-4.5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">10+ Years</p>
                      <p className="text-xs text-gray-500 font-medium">Of Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1e3a8a] py-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "28px 28px"
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-11 h-11 ${stat.accent} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-3xl font-bold text-white mb-0.5 font-serif">{stat.value}</p>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#1e3a8a]/6 text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              OUR SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
              Comprehensive Dental{" "}
              <span className="text-[#1e3a8a]">Care</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              From routine checkups to advanced cosmetic procedures, we offer a full range of dental services under one roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl border border-gray-200/70 p-8 hover:shadow-xl hover:shadow-[#1e3a8a]/6 hover:border-[#1e3a8a]/15 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#1e3a8a]/[0.025] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:w-44 group-hover:h-44 group-hover:bg-[#1e3a8a]/[0.04] transition-all duration-700" />

                <div className="relative flex items-start gap-6">
                  <div className="text-4xl shrink-0 leading-none">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#1e3a8a] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1e3a8a]/6 text-[#1e3a8a] px-3 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a] group/link"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl text-base font-semibold hover:bg-[#1e3a8a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#1e3a8a]/6 text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
              What Our Patients{" "}
              <span className="text-[#1e3a8a]">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-sm shadow-gray-200/60 border border-gray-100 hover:shadow-xl hover:shadow-[#1e3a8a]/6 hover:border-[#1e3a8a]/10 transition-all duration-500"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 italic font-light text-[15px]">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#1e3a8a] to-[#2d55c7] rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs font-medium mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8] rounded-[2rem] p-14 lg:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "22px 22px"
            }} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/[0.04] rounded-full translate-y-1/3 -translate-x-1/4" />

            <div className="relative">
              <div className="text-5xl mb-7">🦷</div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white mb-6 tracking-tight">
                Ready for Your Best Smile?
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Book your appointment today and experience the SmileCare difference. Our AI assistant is available 24/7 to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5 group"
                >
                  Book Now — It's Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Call: +92-300-1234567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

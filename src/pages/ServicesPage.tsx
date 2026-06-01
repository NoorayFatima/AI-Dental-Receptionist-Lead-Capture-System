import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Award, Target, Eye } from "lucide-react";
import { PageHero } from "../components/PageHero";

const allServices = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description: "Comprehensive dental checkups, professional cleanings, fillings, and preventive care to maintain your oral health.",
    features: ["Routine Checkups", "Dental Cleanings", "Fillings & Repairs", "Oral Health Education"],
    color: "bg-[#1e3a8a]/5",
    borderColor: "border-[#1e3a8a]/10",
    price: "From PKR 2,000",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    description: "Professional whitening treatments that safely brighten your smile by several shades in just one visit.",
    features: ["Laser Whitening", "Take-Home Kits", "Sensitivity-Free Formula", "Long-Lasting Results"],
    color: "bg-amber-50",
    borderColor: "border-amber-100",
    price: "From PKR 15,000",
  },
  {
    icon: "🔬",
    title: "Dental Implants",
    description: "State-of-the-art titanium implants that look, feel, and function like natural teeth. Permanent solution for missing teeth.",
    features: ["Single/Multiple Implants", "Immediate Loading", "Bone Grafting", "Lifetime Warranty"],
    color: "bg-emerald-50",
    borderColor: "border-emerald-100",
    price: "From PKR 80,000",
  },
  {
    icon: "😁",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, smile makeovers, and complete smile design.",
    features: ["Porcelain Veneers", "Dental Bonding", "Smile Design", "Gum Contouring"],
    color: "bg-purple-50",
    borderColor: "border-purple-100",
    price: "From PKR 25,000",
  },
  {
    icon: "🔧",
    title: "Root Canal Treatment",
    description: "Painless root canal therapy to save infected teeth. We use the latest rotary systems for maximum comfort.",
    features: ["Painless Procedure", "Single Visit", "Microscopic Precision", "95% Success Rate"],
    color: "bg-red-50",
    borderColor: "border-red-100",
    price: "From PKR 15,000",
  },
  {
    icon: "📐",
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces, clear aligners, and advanced orthodontic treatments.",
    features: ["Metal Braces", "Clear Aligners", "Lingual Braces", "Retainers"],
    color: "bg-blue-50",
    borderColor: "border-blue-100",
    price: "From PKR 50,000",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description: "Gentle, fun dental care for children. We make dental visits enjoyable for kids of all ages.",
    features: ["Child-Friendly Environment", "Sealants", "Fluoride Treatment", "Habit Counseling"],
    color: "bg-pink-50",
    borderColor: "border-pink-100",
    price: "From PKR 1,500",
  },
  {
    icon: "🚨",
    title: "Emergency Dental Care",
    description: "Immediate relief for dental emergencies. We're available for urgent cases with same-day appointments.",
    features: ["Same-Day Service", "Pain Relief", "Trauma Care", "24/7 Helpline"],
    color: "bg-orange-50",
    borderColor: "border-orange-100",
    price: "From PKR 5,000",
  },
];


export function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge="Our Services"
        title={<>Dental Services <span className="text-blue-200">Tailored for You</span></>}
        description="We offer a comprehensive range of dental services using the latest technology and techniques. Every treatment plan is personalized to meet your unique needs."
        variant="teal"
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group bg-white rounded-3xl ${service.borderColor} border p-8 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#1e3a8a] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-sm font-bold text-[#1e3a8a] bg-[#1e3a8a]/5 px-4 py-1.5 rounded-xl whitespace-nowrap shrink-0">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 font-light">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#1e3a8a]/5 text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              WHY SMILECARE?
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
              The SmileCare{" "}
              <span className="text-[#1e3a8a]">Advantage</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Technology",
                description: "We use the latest dental technology including digital X-rays, intraoral cameras, and laser treatments.",
                color: "bg-[#1e3a8a]/5 text-[#1e3a8a]",
              },
              {
                icon: Clock,
                title: "Same-Day Appointments",
                description: "No waiting weeks for your appointment. We offer same-day and next-day booking through our AI system.",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: Award,
                title: "Expert Team",
                description: "Our team of experienced dental professionals includes specialists in every field of dentistry.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: Target,
                title: "Affordable Care",
                description: "Quality dental care shouldn't break the bank. We offer competitive pricing and flexible payment plans.",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm shadow-gray-200/40 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F8FAFC] rounded-3xl p-14 lg:p-16 border border-gray-100">
              <Eye className="w-12 h-12 text-[#1e3a8a] mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Chat with our AI assistant for a free consultation. It will help you identify the right treatment and book your appointment instantly.
              </p>
              <button
                onClick={() => {
                  const chatEvent = new CustomEvent("openChat");
                  window.dispatchEvent(chatEvent);
                }}
                className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#172554] transition-all duration-300 shadow-lg shadow-[#1e3a8a]/15 group"
              >
                Chat with AI Assistant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

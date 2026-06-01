import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Award, Target, Eye, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";

const team = [
  {
    name: "Dr. Ahmad Raza",
    role: "Founder & Lead Dentist",
    experience: "15+ years",
    specialty: "Cosmetic Dentistry & Implants",
    initials: "AR",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Dr. Fatima Hassan",
    role: "Orthodontist",
    experience: "12+ years",
    specialty: "Braces & Aligners",
    initials: "FH",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Dr. Bilal Ahmed",
    role: "Oral Surgeon",
    experience: "10+ years",
    specialty: "Implants & Surgery",
    initials: "BA",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Dr. Ayesha Malik",
    role: "Pediatric Dentist",
    experience: "8+ years",
    specialty: "Children's Dentistry",
    initials: "AM",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=300&q=80&auto=format&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient like family, ensuring comfort and care throughout their dental journey.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest diagnoses and transparent pricing. We only recommend treatments you truly need.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in dental care, continuously updating our skills and technology.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Embracing the latest dental technology and AI-powered systems for better patient experiences.",
    color: "bg-purple-50 text-purple-600",
  },
];


export function AboutPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        badge="About Us"
        title={<>Dedicated to Your <span className="text-blue-200">Perfect Smile</span></>}
        description="For over a decade, SmileCare Dental Clinic has been Faisalabad's trusted destination for exceptional dental care. We combine expertise with empathy to create beautiful, healthy smiles."
        variant="blue"
      />

      {/* Story with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-gray-300/30">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                    alt="SmileCare Dental Clinic interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay stats card */}
                <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-[#1e3a8a]">10+</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Years of Service</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-[#1e3a8a]">2,000+</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Happy Patients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-[#1e3a8a]">15+</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Dental Experts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-[#1e3a8a]">4.9</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">Star Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 mb-8 tracking-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
                <p>
                  SmileCare Dental Clinic was founded in 2014 with a simple mission: to make world-class dental care accessible to everyone in Faisalabad. What started as a single-chair practice has grown into a full-service dental clinic serving over 2,000 patients.
                </p>
                <p>
                  Our founder, Dr. Ahmad Raza, envisioned a clinic where technology meets compassion. Today, we're proud to offer AI-powered appointment booking, digital dentistry, and a full range of cosmetic and restorative treatments — all while maintaining the personal touch that makes our patients feel at home.
                </p>
                <p>
                  We believe that a healthy smile is the foundation of overall well-being. That's why we go beyond treating teeth — we educate, prevent, and empower our patients to take charge of their oral health.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  { icon: Award, text: "Licensed & Accredited" },
                  { icon: Shield, text: "Sterilized & Hygienic" },
                  { icon: Users, text: "Family Friendly" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                    <item.icon className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#1e3a8a]/5 text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              OUR VALUES
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
              What We{" "}
              <span className="text-[#1e3a8a]">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm shadow-gray-200/40 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-[#1e3a8a]/5 text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
              OUR TEAM
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900 mb-6 tracking-tight">
              Meet Our{" "}
              <span className="text-[#1e3a8a]">Experts</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Our team of highly qualified dental professionals is dedicated to providing you with the best possible care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#F8FAFC] rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-24 h-24 bg-[#1e3a8a] rounded-3xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-[#1e3a8a]/15 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-3xl" onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.textContent = member.initials;
                  }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#1e3a8a] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#1e3a8a] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs mb-4 font-medium">{member.experience} experience</p>
                <div className="bg-white rounded-xl px-4 py-2.5 shadow-sm">
                  <p className="text-sm text-gray-700 font-medium">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white mb-8 tracking-tight">
              Ready to Meet Our Team?
            </h2>
            <p className="text-blue-200 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Book your appointment today and experience the difference that expertise, compassion, and modern technology can make.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl group"
            >
              Book Your Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

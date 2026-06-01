import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        badge="Get in Touch"
        title={<>We'd Love to <span className="text-blue-200">Hear From You</span></>}
        description="Ready to book your appointment or have questions? Reach out through any of the channels below. We'd love to hear from you!"
        variant="blue"
      />


      {/* Contact Info Cards */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+92-300-1234567",
                sub: "Mon-Sat, 9AM-9PM",
                bgColor: "bg-[#1e3a8a]/5",
                iconColor: "text-[#1e3a8a]",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@smilecare.pk",
                sub: "We reply within 24 hours",
                bgColor: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Main Boulevard, D-Ground",
                sub: "Faisalabad, Punjab 38000",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600",
              },
              {
                icon: Clock,
                title: "Working Hours",
                info: "Mon-Fri: 9AM-9PM",
                sub: "Sat: 10AM-6PM",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm shadow-gray-100/60 border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5">{item.title}</h3>
                <p className={`${item.iconColor} font-semibold text-sm mb-1.5`}>{item.info}</p>
                <p className="text-gray-400 text-sm font-medium">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/30 border border-gray-100/80 p-10 lg:p-12">
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 mb-3 tracking-tight">
                    Book an Appointment
                  </h2>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Fill out the form below and we'll confirm your appointment within 2 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 tracking-tight">
                      Appointment Requested!
                    </h3>
                    <p className="text-gray-500 mb-10 font-light text-lg leading-relaxed max-w-md mx-auto">
                      Thank you, <strong className="text-gray-700 font-semibold">{formData.name}</strong>! We'll confirm your appointment via WhatsApp or phone call within 2 hours.
                    </p>
                    <div className="bg-[#F8FAFC] rounded-3xl p-8 max-w-sm mx-auto border border-gray-100">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-medium">Service</span>
                          <span className="text-gray-800 font-semibold">{formData.service || "General Checkup"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-medium">Date</span>
                          <span className="text-gray-800 font-semibold">{formData.date || "Flexible"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-medium">Time</span>
                          <span className="text-gray-800 font-semibold">{formData.time || "Flexible"}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 placeholder:text-gray-400 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 placeholder:text-gray-400 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+92-300-1234567"
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 placeholder:text-gray-400 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Service Needed *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 text-gray-700 font-medium appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="general">General Checkup</option>
                          <option value="whitening">Teeth Whitening</option>
                          <option value="implants">Dental Implants</option>
                          <option value="cosmetic">Cosmetic Dentistry</option>
                          <option value="rootcanal">Root Canal Treatment</option>
                          <option value="orthodontics">Orthodontics</option>
                          <option value="pediatric">Pediatric Dentistry</option>
                          <option value="emergency">Emergency Care</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Preferred Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 text-gray-700 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Preferred Time</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 text-gray-700 font-medium appearance-none"
                        >
                          <option value="">Select a time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2.5">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your dental concerns or any special requirements..."
                        className="w-full px-5 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a]/40 transition-all duration-200 resize-none placeholder:text-gray-400 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1e3a8a] text-white py-4.5 rounded-2xl text-base font-semibold hover:bg-[#172554] transition-all duration-300 shadow-xl shadow-[#1e3a8a]/15 hover:shadow-2xl hover:shadow-[#1e3a8a]/20 flex items-center justify-center gap-3 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Request Appointment
                    </button>

                    <div className="flex items-start gap-3 pt-2">
                      <AlertCircle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-[#F8FAFC] rounded-3xl p-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&auto=format&fit=crop"
                    alt="Faisalabad city map area"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-[#1e3a8a] rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900">SmileCare Dental Clinic</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">123 Main Boulevard, D-Ground, Faisalabad</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact via WhatsApp */}
              <div className="bg-[#1e3a8a] rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
                <div className="relative">
                  <MessageCircle className="w-12 h-12 text-blue-200 mb-6" />
                  <h3 className="text-xl font-serif font-semibold mb-3 tracking-tight">Quick Contact via WhatsApp</h3>
                  <p className="text-blue-200 text-sm mb-8 font-light leading-relaxed">
                    Get instant responses by messaging us on WhatsApp. It's the fastest way to reach us!
                  </p>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-[#25D366] py-4 rounded-2xl text-center font-semibold hover:bg-green-50 transition-colors text-base"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/40 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-red-800 tracking-tight">Dental Emergency?</h3>
                      <p className="text-red-600 text-sm font-medium">Call us now for immediate help</p>
                    </div>
                  </div>
                  <a
                    href="tel:+923001234567"
                    className="block w-full bg-red-600 text-white py-4 rounded-2xl text-center font-semibold hover:bg-red-700 transition-colors text-base shadow-lg shadow-red-200"
                  >
                    🚨 Call Emergency Line
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        question: "What are your clinic hours?",
        answer: "We're open Monday to Friday from 9:00 AM to 9:00 PM, and Saturday from 10:00 AM to 6:00 PM. We're closed on Sundays and public holidays. For emergencies, you can reach us via WhatsApp.",
      },
      {
        question: "Where is SmileCare Dental Clinic located?",
        answer: "We're located at 123 Main Boulevard, D-Ground, Faisalabad, Punjab 38000. We're easily accessible from all major areas of Faisalabad with ample parking available.",
      },
      {
        question: "Do you accept walk-in patients?",
        answer: "Yes, we do accept walk-in patients! However, we recommend booking an appointment through our AI chatbot or website to avoid waiting times. Walk-ins are served on a first-come, first-served basis.",
      },
    ],
  },
  {
    category: "Services & Treatments",
    faqs: [
      {
        question: "What dental services do you offer?",
        answer: "We offer a comprehensive range of services including General Dentistry, Teeth Whitening, Dental Implants, Cosmetic Dentistry, Root Canal Treatment, Orthodontics, Pediatric Dentistry, and Emergency Dental Care.",
      },
      {
        question: "Is teeth whitening safe?",
        answer: "Absolutely! Our professional whitening treatments are completely safe and performed by licensed dental professionals. We use FDA-approved whitening agents that are gentle on your enamel while delivering dramatic results.",
      },
      {
        question: "How long does a dental implant procedure take?",
        answer: "The implant placement procedure typically takes 1-2 hours. However, the complete process — including healing and crown placement — can take 3-6 months. We offer immediate loading options for eligible patients.",
      },
      {
        question: "Do you treat children?",
        answer: "Yes! We have a dedicated pediatric dentistry department. Our child-friendly environment and gentle approach make dental visits fun and stress-free for kids of all ages.",
      },
    ],
  },
  {
    category: "Appointments & Booking",
    faqs: [
      {
        question: "How do I book an appointment?",
        answer: "You can book an appointment in three ways: 1) Chat with our AI assistant (click the chat bubble on this page), 2) Fill out the contact form on our Contact page, or 3) Call us directly at +92-300-1234567.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time. Please contact us via phone, WhatsApp, or our AI chatbot to make changes.",
      },
      {
        question: "What should I bring to my first visit?",
        answer: "Please bring a valid ID, your medical/dental history records (if any), and a list of current medications. If you have dental insurance, bring your insurance card as well. Arrive 10 minutes early to complete paperwork.",
      },
    ],
  },
  {
    category: "Payment & Insurance",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, bank transfers, credit/debit cards, and mobile payment methods (JazzCash, EasyPaisa). We also offer flexible payment plans for major treatments.",
      },
      {
        question: "Do you accept dental insurance?",
        answer: "Yes, we accept most major dental insurance plans. Please contact us with your insurance details and we'll verify your coverage before your appointment.",
      },
      {
        question: "Are your prices competitive?",
        answer: "Yes! We believe quality dental care should be affordable. Our prices are competitive with other leading clinics in Faisalabad, and we offer free consultations for all new patients.",
      },
    ],
  },
];


export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      <PageHero
        badge="FAQ"
        title={<>Frequently Asked <span className="text-purple-200">Questions</span></>}
        description="Find answers to the most common questions about our services, appointments, and more. Can't find what you're looking for? Chat with our AI assistant!"
        variant="purple"
      />


      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={key}
                      className={`bg-[#F8FAFC] rounded-2xl border-2 transition-all duration-400 overflow-hidden ${
                        isOpen
                          ? "border-[#1e3a8a]/15 shadow-lg shadow-[#1e3a8a]/5"
                          : "border-transparent hover:border-gray-200/80"
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full px-7 py-6 flex items-center justify-between text-left gap-4"
                      >
                        <span className={`text-base font-semibold pr-4 transition-colors duration-300 ${
                          isOpen ? "text-[#1e3a8a]" : "text-gray-800"
                        }`}>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-gray-400 transition-all duration-400 ${
                            isOpen ? "rotate-180 text-[#1e3a8a]" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <div className="px-7 pb-7">
                              <p className="text-gray-600 leading-relaxed font-light text-[15px]">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1e3a8a] rounded-3xl p-12 text-center mt-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px"
            }}></div>
            <div className="relative">
              <MessageCircle className="w-12 h-12 text-blue-200 mx-auto mb-5" />
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4 tracking-tight">
                Still Have Questions?
              </h3>
              <p className="text-blue-200 mb-10 max-w-lg mx-auto font-light leading-relaxed text-base">
                Our AI assistant is available 24/7 to answer your questions and help you book an appointment instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button
                  onClick={() => {
                    const chatEvent = new CustomEvent("openChat");
                    window.dispatchEvent(chatEvent);
                  }}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Chat with AI Assistant
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  variant?: "blue" | "teal" | "purple" | "amber";
}

const variants = {
  blue: {
    bg: "from-[#1e3a8a] to-[#1d4ed8]",
    blob1: "bg-white/10",
    blob2: "bg-[#60a5fa]/20",
    blob3: "bg-white/5",
    badge: "bg-white/15 text-white border border-white/20",
    title: "text-white",
    accent: "text-blue-200",
    desc: "text-blue-100",
  },
  teal: {
    bg: "from-[#0f4c75] to-[#1b6ca8]",
    blob1: "bg-white/10",
    blob2: "bg-cyan-300/15",
    blob3: "bg-white/5",
    badge: "bg-white/15 text-white border border-white/20",
    title: "text-white",
    accent: "text-cyan-200",
    desc: "text-blue-100",
  },
  purple: {
    bg: "from-[#312e81] to-[#4338ca]",
    blob1: "bg-white/10",
    blob2: "bg-purple-300/20",
    blob3: "bg-indigo-400/15",
    badge: "bg-white/15 text-white border border-white/20",
    title: "text-white",
    accent: "text-purple-200",
    desc: "text-purple-100",
  },
  amber: {
    bg: "from-[#92400e] to-[#b45309]",
    blob1: "bg-white/10",
    blob2: "bg-amber-300/20",
    blob3: "bg-white/5",
    badge: "bg-white/15 text-white border border-white/20",
    title: "text-white",
    accent: "text-amber-200",
    desc: "text-amber-100",
  },
};

export function PageHero({ badge, title, description, variant = "blue" }: PageHeroProps) {
  const v = variants[variant];

  return (
    <section className={`relative pt-[72px] bg-gradient-to-br ${v.bg} overflow-hidden`}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative blobs */}
      <div className={`absolute top-0 right-0 w-[420px] h-[420px] ${v.blob1} rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-[350px] h-[350px] ${v.blob2} rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none`} />
      <div className={`absolute top-1/2 left-1/2 w-[250px] h-[250px] ${v.blob3} rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none`} />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 64L60 56C120 48 240 32 360 26.7C480 21 600 26.3 720 29.3C840 32.3 960 32 1080 28C1200 24 1320 16 1380 12L1440 8V64H0Z" fill="white"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className={`inline-block ${v.badge} px-5 py-2 rounded-full text-sm font-semibold mb-7 tracking-widest uppercase`}>
            {badge}
          </span>
          <h1 className={`text-4xl sm:text-5xl lg:text-[58px] font-serif font-semibold ${v.title} mb-6 tracking-tight leading-[1.1]`}>
            {title}
          </h1>
          <p className={`${v.desc} text-lg leading-relaxed font-light max-w-2xl mx-auto`}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

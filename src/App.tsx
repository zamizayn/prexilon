import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUp, ArrowDownLeft, Check, Building2, HeartPulse, Globe, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroBanner from "./assets/hero-banner.png";
import logo from "./assets/logo.png";
import diagnosticImg from "./assets/diagnostic_solutions.png";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="relative bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col bg-black">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* DNA Helix Background */}
          <motion.div
            style={{ y: y1, scale }}
            className="absolute -right-20 -top-20 w-[80%] h-[120%] opacity-40"
          >
            <img
              src={heroBanner}
              alt="Hero Banner"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Glowing Cells/Viruses */}
          <motion.div
            style={{ y: y2 }}
            className="absolute left-[10%] top-[15%] w-48 h-48 opacity-60 filter blur-[2px]"
          >
            {/* <img 
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800" 
              alt="Cell"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            /> */}
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="absolute left-[45%] top-[35%] w-64 h-64 opacity-80"
          >
            {/* <img
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
              alt="Cell"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            /> */}
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            className="absolute right-[5%] bottom-[20%] w-56 h-56 opacity-50 filter blur-[1px]"
          >
            {/* <img
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
              alt="Cell"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            /> */}
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
          <div className="absolute inset-0 bg-radial-gradient from-teal-500/5 via-transparent to-transparent opacity-20" />
        </div>

        {/* Header */}
        <nav className="relative z-20 flex justify-between items-start p-8 md:p-12">
          <div className="flex flex-col">
            <img src={logo} alt="PREXILON" className="h-16 w-auto object-contain -ml-2" />
          </div>

          <button className="flex items-center gap-3 bg-black border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-all group">
            <ArrowDownLeft className="w-5 h-5 text-white stroke-[1.5] group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            <span className="font-display text-xl font-light tracking-tight text-white">Menu</span>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end h-full">
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-8 mb-12 lg:mb-0"
            >
              <h2 className="text-sm md:text-base font-display font-semibold tracking-[0.3em] text-gray-300 uppercase mb-8">
                Precision Diagnostics Powered By
              </h2>
              <h3 className="text-5xl md:text-8xl font-display leading-[1] tracking-tight uppercase text-white">
                Next-Generation <br />
                <span className="bg-gradient-to-r from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                  Point-Of-Care
                </span>
                <br />
                And AI Diagnostics
              </h3>
            </motion.div>

            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-4 lg:ml-auto max-w-sm"
            >
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Building rapid, scalable diagnostic platforms across molecular testing and AI-enabled healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 bg-white text-black py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.00] tracking-tight text-[#2d3a3a]">
                Engineering <span className="text-[#5a9191]">scalable</span> <br />
                <span className="text-[#2d3a3a]">diagnostics</span> <span className="text-slate-500">for a</span> <br />
                <span className="text-slate-500">world that needs</span> <br />
                <span className="text-slate-500">precision</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 lg:pt-16"
            >
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-sm ml-auto">
                Combining artificial intelligence with advanced bioscience to enable fast, accurate diagnostics at the point of care
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Building2 className="w-6 h-6 text-teal-600" />,
                title: "Urban & Rural",
                desc: "Bridging healthcare gaps everywhere"
              },
              {
                icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
                title: "Lives transformed",
                desc: "Early detection saves millions"
              },
              {
                icon: <Globe className="w-6 h-6 text-teal-600" />,
                title: "Global Reach",
                desc: "Accessible healthcare solutions worldwide"
              },
              {
                icon: <Globe className="w-6 h-6 text-teal-600" />,
                title: "Global Reach",
                desc: "Accessible healthcare solutions worldwide"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-teal-600 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Image Section */}
      <section className="relative z-20 w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={diagnosticImg}
          alt="Team Celebrating"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Diagnostic Solutions Content Section */}
      <section className="relative z-20 bg-[#004d55] text-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-teal-200 mb-6 block">
              Services
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight">
              Diagnostic <br />
              Solutions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:pt-20"
          >
            <h3 className="text-xl font-display font-bold mb-8">
              Advanced Diagnostics for a Healthier World
            </h3>
            <p className="text-xl md:text-2xl text-teal-50/80 font-light leading-relaxed">
              Prexilon develops and commercializes next-generation diagnostic platforms — from molecular point-of-care testing to AI-powered screening technologies — while partnering with global innovators to bring the world's best diagnostic solutions to the Indian healthcare market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proprietary Platforms Section */}
      <section className="relative z-20 bg-[#f8f9fa] text-black py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-display font-light leading-none tracking-tight text-slate-800">
              Proprietary <br />
              <span className="font-bold text-slate-900">Platforms</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                id: "01",
                title: "Advanced Molecular Point-of-Care Diagnostics",
                subtitle: "Bringing the Lab to the Patient",
                image: "https://images.unsplash.com/photo-1579154273801-e91e35495566?auto=format&fit=crop&q=80&w=1200"
              },
              {
                id: "02",
                title: "AI-Powered Retinal Screening Technology",
                subtitle: "See the Unseen. Screen the Unscreened.",
                image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1200"
              }
            ].map((platform, i) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={platform.image}
                    alt={platform.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-5xl md:text-6xl font-display font-light text-slate-900 mb-8 block">
                    {platform.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-900 mb-4 leading-tight">
                    {platform.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide">
                    {platform.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Platform Section 01 */}
      <section className="relative z-20 bg-black text-white py-24 md:py-32 px-8 md:px-16 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-display text-2xl tracking-tighter">
              <span className="text-teal-400 font-bold">01</span>
              <span className="text-gray-600">/02</span>
            </span>
          </motion.div>

          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-light leading-tight tracking-tight text-teal-50 max-w-4xl mb-16"
            >
              Advanced Molecular <br />
              Point-of-Care <br />
              Diagnostics
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-2xl aspect-video overflow-hidden rounded-lg shadow-2xl shadow-teal-900/20"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                alt="Molecular Diagnostics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Platform Section 02 - Full Width */}
      <section className="relative z-20 bg-black text-white h-screen w-full overflow-hidden border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Retinal Screening Full Width"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* ModaPlex Platform Section */}
      <section className="relative z-20 min-h-screen w-full overflow-hidden flex items-center px-8 md:px-16 py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Hospital Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2rem] relative overflow-visible"
          >
            {/* Device Image Floating */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-24 right-0 md:-right-12 w-48 md:w-64 z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                alt="ModaPlex Device"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(45,212,191,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="inline-block bg-white text-teal-600 px-4 py-1.5 rounded-full text-sm font-display font-bold mb-8">
              ModaPlex™ Platform
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-white">
              Advanced Molecular <br />
              Point-of-Care <br />
              Diagnostics
            </h2>

            <p className="text-xl font-display font-medium text-teal-50 mb-8 italic">
              Bringing the Lab to the Patient
            </p>

            <p className="text-lg text-gray-300 font-light leading-relaxed mb-12 max-w-xl">
              Laboratory-grade accuracy, ultrafast results, works in real-world urban and rural healthcare environments without specialized infrastructure
            </p>

            <ul className="space-y-6">
              {[
                "Laboratory-grade accuracy in point-of-care settings",
                "Ultrafast results without specialized infrastructure",
                "Accessible in urban and rural healthcare environments"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-200 font-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right side remains empty to show background image as per design */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Detailed Platform Section 02 - AI Retinal Screening */}
      <section className="relative z-20 bg-black text-white min-h-screen w-full overflow-hidden flex flex-col p-8 md:p-16 border-t border-white/5">
        <div className="flex flex-col h-full">
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-display text-2xl tracking-tighter">
              <span className="text-teal-400 font-bold">02</span>
              <span className="text-gray-600">/02</span>
            </span>
          </motion.div>

          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-light leading-tight tracking-tight text-teal-50 max-w-4xl mb-16"
            >
              AI-Powered Retinal <br />
              Screening <br />
              Technology
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl shadow-teal-900/40"
            >
              <img
                src="https://images.unsplash.com/photo-1579154273801-e91e35495566?auto=format&fit=crop&q=80&w=800"
                alt="Retinal Screening"
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Eye pupil overlay effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[12px] border-black/80 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immersive Medical Visual - Full Width */}
      <section className="relative z-20 h-screen w-full overflow-hidden border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Immersive Medical Technology"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay to tie it to the theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </motion.div>
      </section>

      {/* AI Retinal Screening Detailed Section */}
      <section className="relative z-20 min-h-screen w-full overflow-hidden flex items-center px-8 md:px-16 py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Retinal Screening Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2rem] max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-white">
              AI-Powered Retinal <br />
              Screening Technology
            </h2>

            <p className="text-xl font-display font-medium text-teal-50 mb-8 italic">
              See the Unseen. Screen the Unscreened.
            </p>

            <p className="text-lg text-gray-200 font-light leading-relaxed mb-12">
              An AI-powered platform for non-invasive early detection of neurodegenerative and metabolic diseases. A 5-minute scan generates clinician-ready risk stratification reports, replacing costly and invasive diagnostic procedures with accessible screening.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                "Scan time is 5 minutes and the procedure is completely non-invasive.",
                "It supports applications including Parkinson's, Alzheimer's, dementia, and diabetic retinopathy.",
                "The technology has been validated through a multi-center clinical study conducted across three hospital sites."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-200 font-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Collaboration Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-4 md:p-6 flex items-center gap-6 w-fit shadow-xl"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Indian_Institute_of_Information_Technology%2C_Kottayam_Logo.png/220px-Indian_Institute_of_Information_Technology%2C_Kottayam_Logo.png"
                  alt="IIITK Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-teal-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Research Partner</p>
                <p className="text-gray-900 font-display font-bold text-base md:text-xl">In collaboration with IIITK</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Let's shape the Future together */}
      <section className="relative z-20 h-[70vh] w-full overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000"
            alt="Scientific Background"
            className="w-full h-full object-cover blur-sm opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            Let's shape the Future together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Schedule a free demo and see our programs in action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-0.5"
          >
            <button className="bg-teal-900/80 hover:bg-teal-800 text-white px-8 py-3 rounded-l-lg font-display font-bold text-sm tracking-wide transition-colors">
              Contact us
            </button>
            <div className="bg-gray-200 hover:bg-white text-black p-3 rounded-r-lg cursor-pointer transition-colors">
              <Globe className="w-4 h-4 rotate-45" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-20 bg-[#1a1a1a] text-white pt-24 pb-12 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="bg-white p-4 inline-block rounded-sm">
              <img src={logo} alt="PREXILON" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering India's future through Prexilon
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Our Programs</h4>
            <ul className="space-y-4">
              {["AI-Powered Diagnostic Devices", "Retinal Screening Technology"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>info@Prexilon.com</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>Kochi, Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-500 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}

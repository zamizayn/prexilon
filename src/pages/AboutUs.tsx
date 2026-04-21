import { Building2, HeartPulse, Globe } from "lucide-react";
import React from "react";
import founderImg from "../assets/founder.png";
import directorImg from "../assets/director.png";
import milestone1Img from "../assets/milestone1.png";
import milestone2Img from "../assets/milestone2.png";
import iitkLogo from "../assets/iitk.png";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.jpeg";
import certificate3 from "../assets/certificate3.png";
import certificate4 from "../assets/certificate4.png";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    image: certificate1,
    title: "DPIIT Certificate of Recognition",
    caption: "Recognized as a startup by the Department for Promotion of Industry and Internal Trade."
  },
  {
    id: 2,
    image: certificate2,
    title: "Startup Certificate",
    caption: "Registered as a Startup company under Kerala Startup Mission, Government of Kerala."
  },
  {
    id: 3,
    image: certificate3,
    title: "Udyam Registration Certificate",
    caption: ""
  },
  {
    id: 4,
    image: certificate4,
    title: "Trademark Registration",
    caption: "Registered trademark for Modaplex — our advanced molecular diagnostic platform."
  }
];

const CertificationsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative flex flex-col items-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center overflow-visible"
      >
        {certificates.map((cert, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex === 0 ? certificates.length - 1 : activeIndex - 1);
          const isNext = index === (activeIndex === certificates.length - 1 ? 0 : activeIndex + 1);

          let positionStyles: React.CSSProperties = {
            perspective: "1000px",
            transformStyle: "preserve-3d",
          };

          let positionClasses = "opacity-0 scale-75 pointer-events-none z-0";

          if (isActive) {
            positionClasses = "opacity-100 scale-100 z-30 translate-x-0";
            positionStyles.transform = "rotateY(0deg) scale(1.1)";
          } else if (isPrev) {
            positionClasses = "opacity-40 scale-75 z-10 cursor-pointer";
            positionStyles.transform = "translateX(-45%) rotateY(25deg)";
            if (window.innerWidth >= 768) {
              positionStyles.transform = "translateX(-100%) rotateY(35deg)";
            }
          } else if (isNext) {
            positionClasses = "opacity-40 scale-75 z-10 cursor-pointer";
            positionStyles.transform = "translateX(45%) rotateY(-25deg)";
            if (window.innerWidth >= 768) {
              positionStyles.transform = "translateX(100%) rotateY(-35deg)";
            }
          }

          return (
            <div
              key={cert.id}
              onClick={() => {
                if (isPrev) handlePrev();
                if (isNext) handleNext();
              }}
              className={`absolute transition-all duration-700 ease-out w-[280px] md:w-[450px] aspect-[4/3] bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20 flex items-center justify-center p-4 ${positionClasses}`}
              style={positionStyles}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
              {isActive && (
                <div className="absolute inset-0 border-[4px] border-teal-500/30 rounded-xl pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Caption & Controls */}
      <div className="mt-12 text-center max-w-2xl px-6">
        <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2">
          {certificates[activeIndex].title}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 font-light mb-8">
          {certificates[activeIndex].caption}
        </p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {certificates.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-teal-500 w-6" : "bg-white/20"}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface AboutUsProps {
  logo: string;
  renderMenuButton: () => React.ReactNode;
}

const AboutUs: React.FC<AboutUsProps> = ({ logo, renderMenuButton }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#004d55] text-white">
      <div className="relative z-10 min-h-[60vh] flex flex-col p-8 md:p-12">
        <nav className="flex items-start justify-between mb-auto">
          <div className="flex flex-col">
            <img src={logo} alt="PREXILON" className="h-20 w-auto object-contain -ml-2 mix-blend-color-dodge" />
          </div>
          {renderMenuButton()}
        </nav>

        <div className="mt-12 md:mt-20">
          <h1 className="text-hero-main font-display font-light leading-[1.05] tracking-tight text-white uppercase max-w-6xl">
            Leading the next <br />
            wave of <span className="bg-gradient-to-r from-[#E8F3F3] to-[#7EBCBE] bg-clip-text text-transparent">diagnostic</span> <br />
            intelligence
          </h1>
        </div>
      </div>

      {/* Know More About Prexilon Section */}
      <div className="relative z-10 bg-[#f5f5f5] px-8 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start">
            <div className="xl:col-span-5">
              <h2 className="text-responsive-h2 font-display font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                <span className="text-[#2a9d8f]">Know More</span> <span className="text-[#1a1a1a]">About</span> <br />
                <span className="text-[#1a1a1a]">Prexilon</span>
              </h2>
            </div>

            <div className="xl:col-span-7 space-y-6">
              <p className="text-[15px] md:text-base text-[#444] font-normal leading-relaxed text-justify">
                Prexilon Private Limited is a DPIIT-recognised deep-tech diagnostics and AI-enabled bioscience company based in Kochi, Kerala, India, with additional recognition under Startup India, Startup Kerala, and MSME. We are focused on building advanced molecular point-of-care diagnostic platforms and AI-powered screening solutions designed for scalable, real-world healthcare deployment.
              </p>
              <p className="text-[15px] md:text-base text-[#444] font-normal leading-relaxed text-justify">
                Prexilon combines strong scientific and technical capability with deep commercial understanding of the healthcare market in India. Our multidisciplinary ecosystem spans molecular diagnostics, assay development, translational biosciences, AI integration, product strategy, regulatory alignment, and commercialization readiness enabling us to build solutions that are not only innovative, but also practical, scalable, and partnership-ready.
              </p>
              <p className="text-[15px] md:text-base text-[#444] font-normal leading-relaxed text-justify">
                Supported by collaborations with reputed academic institutions including IIIT and engagement with broader clinical and research networks, Prexilon is positioned as a high-potential Indian innovation company for strategic investment, collaboration, technology partnerships, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Stats Strip - same as homepage */}
      <div className="relative z-10 bg-white px-8 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
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
                desc: "Accessible healthcare  solutions worldwide"
              }
            ].map((feature, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="relative z-10 bg-[#0a3d44] px-8 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-16">
            Our Team
          </h2>

          {/* Founder & CEO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Founder & CEO
              </h3>
              <h4 className="text-xl md:text-2xl font-display font-normal text-white mb-2">
                Sinto Antony
              </h4>
              <p className="text-sm text-slate-300/70 mb-6">
                MSc Biotechnology{"  "}|{"  "}MBA
              </p>
              <p className="text-sm md:text-[15px] text-slate-300/90 font-light leading-relaxed">
                Brings 14+ years of leadership experience across leading multinational pharmaceutical and medical device companies, with commercial exposure spanning cardiovascular care, diabetes, and ostomy care. His strengths include strategic business development, market access, institutional partnerships, distribution strategy, and navigating the Indian healthcare landscape. He combines deep healthcare industry experience with entrepreneurial vision and ecosystem connectivity.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderImg}
                  alt="Sinto Antony - Founder & CEO"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/15 my-12" />

          {/* Director */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={directorImg}
                  alt="Aswathy Agnes Joseph - Director"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Director
              </h3>
              <h4 className="text-xl md:text-2xl font-display font-normal text-white mb-2">
                Aswathy Agnes Joseph
              </h4>
              <p className="text-sm text-slate-300/70 mb-6">
                MSc Microbiology{"  "}|{"  "}PhD Candidate (Biochemistry)
              </p>
              <p className="text-sm md:text-[15px] text-slate-300/90 font-light leading-relaxed">
                Leads scientific coordination, research execution, and validation alignment across Prexilon's innovation programmes. She ensures scientific integrity, translational relevance, and structured development of diagnostic initiatives through close alignment with research and institutional collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Scientific Depth Section */}
      <div className="relative z-10 bg-[#f5f5f5] px-8 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start mb-20">
            <div className="xl:col-span-5">
              <h2 className="text-responsive-h2 font-display font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                <span className="text-[#2a9d8f]">Global Scientific</span> <br />
                <span className="text-[#1a1a1a]">Depth Behind</span> <br />
                <span className="text-[#1a1a1a]">Prexilon</span>
              </h2>
            </div>

            <div className="xl:col-span-7">
              <p className="text-[15px] md:text-base text-[#444] font-normal leading-relaxed text-justify">
                Prexilon's scientific and advisory ecosystem brings together 8+ experts with doctoral and postdoctoral credentials from leading research institutions and global healthcare companies across India, Germany, Japan, and the United States. Our advisors include former senior principal scientists and scientific directors from world-leading pharmaceutical and medical device corporations, combining deep R&D leadership with translational expertise across molecular diagnostics, AI-powered healthcare, and clinical deployment.
              </p>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-5">
            {/* PhD / Postdoctoral Scientific Base */}
            <div className="rounded-2xl bg-[#0a3d44] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                  PhD / Postdoctoral Scientific Base
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-slate-200/90 font-light leading-relaxed">
                7 PhDs and postdoctoral researchers specialising in molecular biology, biochemistry, neuroscience, retinal sciences, and advanced diagnostic technologies - trained at premier institutions across India, Germany, and the United States.
              </p>
            </div>

            {/* International Research Footprint */}
            <div className="rounded-2xl bg-[#9fb3b3] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#ffffff]" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#ffffff]">
                  International Research Footprint
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-[#ffffff] font-light leading-relaxed">
                Scientific advisors and technical team with research and institutional affiliations spanning India, Germany, Japan, and the United States - across 10+ universities, research centres, and clinical institutions of global standing.
              </p>
            </div>

            {/* Senior Scientific Leadership */}
            <div className="rounded-2xl bg-[#9fb3b3] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ffffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#ffffff]">
                  Senior Scientific Leadership
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-[#ffffff] font-light leading-relaxed">
                Guided by former senior principal scientists and scientific directors from world-leading pharmaceutical and medical device companies -bringing 50+ years of combined R&D leadership in drug development, device innovation, and translational research.
              </p>
            </div>

            {/* AI + Diagnostics Convergence */}
            <div className="rounded-2xl bg-[#9fb3b3] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ffffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#ffffff]">
                  AI + Diagnostics Convergence
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-[#ffffff] font-light leading-relaxed">
                Specialised expertise at the intersection of machine learning, computer vision, retinal imaging, and molecular assay design enabling Prexilon to bridge AI research with real-world diagnostic deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones & Impact Section */}
      <div className="relative z-10 bg-[#EFEEEC] px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-20 items-end mb-16">
            <div className="xl:col-span-7">
              <span className="text-sm font-display font-medium tracking-[0.2em] uppercase text-[#555] block mb-4">
                Achievements
              </span>
              <h2 className="text-responsive-h2 font-display font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                Milestones & Impact
              </h2>
            </div>
            <div className="xl:col-span-5">
              <p className="text-lg md:text-xl text-[#444] font-light leading-relaxed">
                Celebrating Breakthroughs That Shape the Future of Healthcare
              </p>
            </div>
          </div>

          {/* Milestone Card */}
          <div className="rounded-3xl bg-[#ffffff] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Images */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={milestone1Img}
                    alt="Prexilon team milestone event"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={milestone2Img}
                    alt="Prexilon signing ceremony"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm bg-teal-400" />
                    <span className="text-xs font-display font-bold tracking-[0.15em] uppercase text-black">
                      Projects
                    </span>
                  </div>
                  <span className="text-sm text-black/50 font-light">
                    February 13 2026
                  </span>
                </div>

                <div className="mb-8">
                  <img
                    src={iitkLogo}
                    alt="Indian Institute of Information Technology Kottayam"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-6 leading-tight">
                  AI-Powered Healthcare Innovations with IIITK
                </h3>

                <p className="text-sm md:text-[15px] text-black/70 font-light leading-relaxed">
                  In collaboration with Indian Institute of Information Technology, Kottayam (IIIT K), we develop handheld screening devices powered by validated AI algorithms. Our solutions include retinal scanning technology for early detection of neurodegenerative diseases like dementia, enabling scalable, precise, and accessible healthcare diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Certifications & Registrations Section */}
      <div className="relative z-10 bg-[#121212] px-8 md:px-12 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight text-white/90">
              Company certifications & <br /> registrations
            </h2>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[400px] md:min-h-[500px]">
              <CertificationsCarousel />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutUs;

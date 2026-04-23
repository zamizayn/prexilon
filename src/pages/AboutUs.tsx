import { Globe } from "lucide-react";
import React from "react";
import founderImg from "../assets/founder.png";
import directorImg from "../assets/director.png";
import milestone1Img from "../assets/about-us.jpeg";
import milestone2Img from "../assets/milestone2.png";
import iitkLogo from "../assets/iitk.jpeg";
import certificate1 from "../assets/certificate-one-v1.jpg";
import certificate2 from "../assets/certificate-two-v1.jpeg";
import certificate3 from "../assets/certificate-three-v1.png";
import certificate4 from "../assets/certificate-four-v1.png";
import contactBg from "../assets/contact_background.png";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StatsStrip from "../components/StatsStrip";

gsap.registerPlugin(ScrollTrigger);

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef<number>(0);
  const isDragging = useRef(false);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  // Autoplay every 4 seconds, pause on hover/drag
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
    setIsPaused(true);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? handleNext() : handlePrev();
    }
    isDragging.current = false;
    setIsPaused(false);
  };


  return (
    <div
      className="w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Fixed-height stage — cards slide inside */}
      <div className="relative w-full h-[220px] md:h-[380px] overflow-hidden cursor-grab active:cursor-grabbing">
        {certificates.flatMap((cert, index) => {
          const diff = ((index - activeIndex) % 4 + 4) % 4;

          // Each cert can occupy 1 or 2 visual slots
          type SlotDef = { key: string; left: string; transform: string; opacity: number; zIndex: number; clickFn?: () => void };
          const slots: SlotDef[] = [];

          if (diff === 0) slots.push({ key: `${cert.id}-c`, left: "50%", transform: "translateX(-50%) scale(1)", opacity: 1, zIndex: 30 });
          if (diff === 1) slots.push({ key: `${cert.id}-r`, left: "76%", transform: "translateX(-50%) scale(0.82)", opacity: 0.6, zIndex: 20, clickFn: handleNext });
          if (diff === 3) slots.push({ key: `${cert.id}-l`, left: "24%", transform: "translateX(-50%) scale(0.82)", opacity: 0.6, zIndex: 20, clickFn: handlePrev });
          if (diff === 2) {
            // Same cert appears on BOTH far sides
            slots.push({ key: `${cert.id}-fr`, left: "93%", transform: "translateX(-50%) scale(0.67)", opacity: 0.3, zIndex: 10 });
            slots.push({ key: `${cert.id}-fl`, left: "7%", transform: "translateX(-50%) scale(0.67)", opacity: 0.3, zIndex: 10 });
          }

          return slots.map(slot => (
            <div
              key={slot.key}
              onClick={slot.clickFn}
              className={`absolute top-1/2 -translate-y-1/2 w-[52vw] md:w-[420px] aspect-[4/3]
                overflow-hidden transition-all duration-700
                ${slot.clickFn ? "cursor-pointer" : "pointer-events-none"}`}
              style={{
                left: slot.left,
                transform: slot.transform,
                opacity: slot.opacity,
                zIndex: slot.zIndex,
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                padding: "16px",
                backgroundColor: "#111111",
                borderRadius: "8px",
                boxShadow: diff === 0
                  ? "0 0 0 2px rgba(255,255,255,0.55), 0 28px 70px rgba(0,0,0,0.9)"
                  : "0 0 0 1.5px rgba(255,255,255,0.2)",
              }}
            >
              <div className="w-full h-full bg-white rounded-[4px] overflow-hidden flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            </div>
          ));
        })}
      </div>


      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm md:text-base text-zinc-400 font-light tracking-wide transition-all duration-500">
          {certificates[activeIndex].title}
        </p>
      </div>
    </div>
  );
};



const expertiseData = [
  {
    id: "phd-base",
    title: "PhD / Postdoctoral Scientific Base",
    desc: "7 PhDs and postdoctoral researchers specialising in molecular biology, biochemistry, neuroscience, retinal sciences, and advanced diagnostic technologies - trained at premier institutions across India, Germany, and the United States.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    id: "international-footprint",
    title: "International Research Footprint",
    desc: "Scientific advisors and technical team with research and institutional affiliations spanning India, Germany, Japan, and the United States - across 10+ universities, research centres, and clinical institutions of global standing.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: "senior-leadership",
    title: "Senior Scientific Leadership",
    desc: "Guided by former senior principal scientists and scientific directors from world-leading pharmaceutical and medical device companies -bringing 50+ years of combined R&D leadership in drug development, device innovation, and translational research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    )
  },
  {
    id: "convergence",
    title: "AI + Diagnostics Convergence",
    desc: "Specialised expertise at the intersection of machine learning, computer vision, retinal imaging, and molecular assay design enabling Prexilon to bridge AI research with real-world diagnostic deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  }
];

const ExpertiseCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; isActive: boolean; id: string }> = ({ title, desc, icon, isActive, id }) => {
  return (
    <div
      id={`expertise-card-${id}`}
      className={`expertise-highlight-card p-8 md:p-10 transition-all duration-500 ease-in-out ${isActive ? "bg-[#0a3d44] scale-[1.02] shadow-xl" : "bg-[#9fb3b3] scale-100 shadow-none opacity-80 md:opacity-100"
        }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${isActive ? "bg-white/10" : "bg-white/20"
          }`}>
          <div className={isActive ? "text-teal-200" : "text-white"}>
            {icon}
          </div>
        </div>
        <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-white"
          }`}>
          {title}
        </h3>
      </div>
      <p className={`text-sm md:text-[15px] font-light leading-relaxed transition-colors duration-500 ${isActive ? "text-slate-200/90" : "text-white"
        }`}>
        {desc}
      </p>
    </div>
  );
};

interface AboutUsProps {
  logo: string;
  renderMenuButton: () => React.ReactNode;
}

const AboutUs: React.FC<AboutUsProps> = ({ logo, renderMenuButton }) => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scope = containerRef.current;
    if (!scope) return;

    // Refresh triggers once layout settles
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // 1. Card Highlight Logic
    expertiseData.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#expertise-card-${expertiseData[index].id}`,
        start: "top 70%",
        end: "bottom 30%",
        onToggle: (self) => {
          if (self.isActive) setActiveExpertise(index);
        },
      });
    });

    // 2. Generic Reveals
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-up").forEach((elem) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    // 3. Suble vertical parallax effect for cards
    gsap.utils.toArray<HTMLElement>(".expertise-highlight-card").forEach((card) => {
      gsap.fromTo(card,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });
    return () => clearTimeout(refreshTimeout);
  }, { scope: containerRef, revertOnUpdate: true });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#004d55] text-white">
      <div className="relative z-10 min-h-[450px] flex flex-col p-8 md:p-12">
        <nav className="flex items-start justify-between">
          <div className="flex flex-col">
            <a href="#/" className="inline-block cursor-pointer">
              <img src={logo} alt="PREXILON" className="h-20 w-auto object-contain -ml-2 mix-blend-color-dodge" />
            </a>
          </div>
          {renderMenuButton()}
        </nav>

        <div className="mt-32">
          <span className="text-md font-display font-light tracking-[0.1em] uppercase text-white block mb-2">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-display font-light leading-[1.05] tracking-tight text-white uppercase max-w-6xl md:pb-10">
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
            <div className="xl:col-span-5 gsap-reveal-up">
              <h2 className="text-responsive-h2 font-display font-semibold leading-[1.1] tracking-tight text-[#1a1a1a]">
                <span className="text-[#1a1a1a]">Know</span> <span className="bg-gradient-to-r from-[#335c5b] to-[#7ebcbe] bg-clip-text text-transparent">More About</span> <br />
                <span className="bg-gradient-to-r from-[#1a1a1a] to-[#335c5b] bg-clip-text text-transparent">Prexilon</span>
              </h2>
            </div>

            <div className="xl:col-span-7 space-y-6 gsap-reveal-up">
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
      <div className="relative z-10 bg-white px-8 md:px-12 py-16 gsap-reveal-up">
        <div className="max-w-7xl mx-auto">
          <StatsStrip />
        </div>
      </div>

      {/* Our Team Section */}
      <div className="relative z-10 bg-[#0a3d44] px-8 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-16 gsap-reveal-up">
            Our Team
          </h2>

          {/* Founder & CEO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8 gsap-reveal-up">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center gsap-reveal-up">
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
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start mb-20 gsap-reveal-up">
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
            {expertiseData.map((exp, index) => (
              <ExpertiseCard
                key={exp.id}
                id={exp.id}
                title={exp.title}
                desc={exp.desc}
                icon={exp.icon}
                isActive={activeExpertise === index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Milestones & Impact Section */}
      <div className="relative z-10 bg-[#EFEEEC] px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-20 items-end mb-16 gsap-reveal-up">
            <div className="xl:col-span-7">
              <span className="text-sm font-display font-medium tracking-[0.2em] uppercase text-[#555] block mb-4">
                Achievements
              </span>
              <h2 className="text-responsive-h2 font-display font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                Milestones & Impact
              </h2>
            </div>
            <div className="xl:col-span-5">
              <p className="text-lg md:text-lg text-[#1a1a1a] font-medium leading-relaxed">
                Celebrating Breakthroughs That Shape the Future of Healthcare
              </p>
            </div>
          </div>

          {/* Milestone Card */}
          <div className="rounded-3xl bg-[#ffffff] overflow-hidden gsap-reveal-up">
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
              <div className="p-8 md:p-12 flex flex-col gap-y-6 md:gap-y-8 justify-start">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 bg-[#26a69a]" />
                    <span className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-black">
                      Projects
                    </span>
                  </div>
                  <span className="text-xs text-black/70 font-normal">
                    February 13 2026
                  </span>
                </div>

                {/* Large Spacer to match design */}
                <div className="h-6 md:h-10" />

                <div className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] flex items-center justify-start">
                  <img
                    src={iitkLogo}
                    width={200}
                    height={200}
                    alt="Indian Institute of Information Technology Kottayam"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl md:text-[32px] font-display font-bold text-black leading-tight">
                  AI-Powered Healthcare Innovations with IIITK
                </h3>

                <p className="text-sm md:text-[15px] text-black/80 font-normal leading-relaxed text-justify">
                  In collaboration with Indian Institute of Information Technology, Kottayam (IIIT K), we develop handheld screening devices powered by validated AI algorithms. Our solutions include retinal scanning technology for early detection of neurodegenerative diseases like dementia, enabling scalable, precise, and accessible healthcare diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Certifications & Registrations Section */}
      <div className="relative z-10 bg-[#121212] px-0 pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight text-[#7ebcbe]/90">
              Company certifications & <br /> registrations
            </h2>
          </div>
        </div>

        {/* Carousel — full width, no inner padding so cards bleed to edges */}
        <div className="w-full">
          <CertificationsCarousel />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutUs;

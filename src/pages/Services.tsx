import React, { useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import platformOneImg from "../assets/platform_1.png";
import posMachineImg from "../assets/pos_machine.png";
import retinaImg from "../assets/retinaImg.png";
import iitk from "../assets/iitk.png";
import services1 from "../assets/services1_clear.png";
import posImgSharp from "../assets/pos_bg_sharp.png";
import ProprietaryPlatforms from "../components/ProprietaryPlatforms";
import Footer from "../components/Footer";

interface ServicesProps {
  logo: string;
  renderMenuButton: () => React.ReactNode;
}

const Services: React.FC<ServicesProps> = ({ logo, renderMenuButton }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // -----------------------------------
    // Molecular Zoom Scroll Animation
    // -----------------------------------
    const molecularTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".molecular-scroll-section",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    const scope = containerRef.current;
    if (!scope) return;

    gsap.set(scope.querySelectorAll(".molecular-image-layer"), { y: "15vh" });
    gsap.set(scope.querySelectorAll(".eye-image-layer"), { y: "15vh" });

    molecularTl.to(".molecular-setup-layer", { opacity: 0, scale: 1.1, duration: 0.2 })
      .to(".molecular-image-layer", {
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        borderRadius: "0px",
        y: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0.1)
      .to(".molecular-inner-img", { opacity: 0.4, duration: 0.4 }, 0.4)
      .to(".molecular-bg-gradient", { opacity: 1, duration: 0.4 }, 0.4)
      .to(".molecular-content-card", { opacity: 1, y: 0, duration: 0.4, pointerEvents: "auto", ease: "power2.out" }, 0.5);

    // -----------------------------------
    // Eye Zoom Scroll Animation
    // -----------------------------------
    const eyeTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".eye-scroll-section",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });


    eyeTl.to(".eye-setup-layer", { opacity: 0, scale: 1.1, duration: 0.2 })
      .to(".eye-image-layer", {
        width: "10800px",
        height: "4500px",
        y: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0.1)
      .to(".eye-main-img", { opacity: 0.4, duration: 0.4 }, 0.5)
      .to(".eye-bg-gradient", { opacity: 1, duration: 0.4 }, 0.4)
      .to(".eye-content-card", { opacity: 1, y: 0, duration: 0.4, pointerEvents: "auto", ease: "power2.out" }, 0.5);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#121212] text-white">
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
            Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-display font-light leading-[1.05] tracking-tight text-white uppercase max-w-7xl md:pb-10">
            Advanced <br />
            <span className="bg-gradient-to-r from-[#E8F3F3] to-[#7EBCBE] bg-clip-text text-transparent">Diagnostics For</span> <br />
            A Healthier World
          </h1>
        </div>
      </div>

      {/* Diagnostic Solutions Content Section (from Homepage) */}
      <section className="relative z-20 bg-[#004d55] text-white py-24 md:py-32 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="gsap-reveal-up">
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-teal-200 mb-6 block">
              Services
            </span>
            <h2 className="text-section-title font-display font-medium leading-none tracking-tight">
              <div className="overflow-hidden pb-4 -mb-2"><div className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #FFFFFF 0%, #5BAAAD 100%)', paddingBottom: '0.1em' }}>Diagnostic</div></div>
              <div className="overflow-hidden pb-4 -mb-2"><div className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #FFFFFF 0%, #5BAAAD 100%)', paddingBottom: '0.1em' }}>Solutions</div></div>
            </h2>
          </div>

          <div className="gsap-reveal-up md:pt-20" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-display font-bold mb-8">
              Advanced Diagnostics for a Healthier World
            </h3>
            <p className="text-xl md:text-2xl text-teal-50/80 font-light leading-relaxed">
              Prexilon develops and commercializes proprietary next-generation diagnostic platforms from molecular point-of-care testing to AI-powered screening - while strategically partnering with global innovators to accelerate deployment across the Indian and other healthcare markets.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietary Platforms Section (from Homepage) */}
      <section className="relative z-20 bg-[#f8f9fa] text-black py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal-up mb-16">
            <h2 className="text-section-title font-display font-light leading-none tracking-tight">
              <div className="overflow-hidden pb-2"><div className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #222222 0%, #5BAAAD 100%)' }}>Proprietary</div></div>
              <div className="overflow-hidden pb-2"><div className="font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #222222 0%, #5BAAAD 100%)' }}>Platforms</div></div>
            </h2>
          </div>

          <ProprietaryPlatforms />
        </div>
      </section>

      {/* Detailed Platform Section 01 - Molecular Zoom Scroll */}
      <section className="molecular-scroll-section relative z-20 bg-black text-white w-full border-t border-white/5 overflow-hidden">
        <div className="molecular-pin-container relative w-full h-screen flex flex-col items-center justify-center">
          {/* Background Image Container */}
          <div className="molecular-image-layer absolute z-0 overflow-hidden w-[90vw] md:w-full max-w-2xl aspect-video rounded-none flex items-center justify-center">
            <img
              src={services1}
              alt="Advanced Molecular Diagnostics"
              className="molecular-inner-img w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="molecular-bg-gradient absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-0 pointer-events-none" />
          </div>

          {/* Content Card */}
          <div className="molecular-content-card absolute inset-0 z-10 opacity-0 pointer-events-none translate-y-8">
            <div className="relative min-h-screen w-full flex items-start lg:items-center px-4 md:px-12 py-24 lg:py-8 max-w-7xl mx-auto">
              <div className="relative z-10 w-full pt-6 md:pt-8 flex justify-start">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-7 md:p-8 lg:p-12 rounded-[2rem] max-w-2xl relative shadow-2xl pointer-events-auto ring-1 ring-white/6 text-white">
                  <div className="inline-block bg-white text-teal-600 px-3 py-1 rounded-full text-sm font-bold mb-6 italic shadow-sm">ModaPlex™ Platform</div>
                  <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-2 md:mb-4 text-white drop-shadow-sm">Advanced Molecular <br /> Point-of-Care Diagnostics</h2>
                  <p className="text-lg md:text-xl text-teal-50 mb-3 md:mb-6 italic font-medium leading-relaxed">Bringing the Lab to the Patient</p>
                  <p className="text-base text-gray-300 font-light leading-relaxed mb-4 md:mb-8 max-w-xl">Laboratory-grade accuracy, ultrafast results, works in real-world urban and rural healthcare environments without specialized infrastructure.</p>
                  <ul className="space-y-4 md:space-y-6">
                    {["Laboratory-grade accuracy in point-of-care settings", "Ultrafast results without specialized infrastructure", "Accessible in urban and rural healthcare environments"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-gray-200 font-light">
                        <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:block" />
              </div>
            </div>
          </div>

          {/* Setup Elements */}
          <div className="molecular-setup-layer absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
              <span className="font-display text-2xl tracking-tighter">
                <span className="text-[#99f6e4] font-bold">01</span>
                <span className="text-zinc-500 font-medium">/02</span>
              </span>
            </div>
            <div className="absolute inset-x-0 top-24 md:top-24 z-20 flex flex-col items-center justify-center text-center w-full px-8">
              <h2 className="text-3xl md:text-5xl 2xl:text-[4.5rem] font-display font-light leading-[1.1] md:leading-[1.15] tracking-[0.02em] pb-2 text-transparent">
                <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 25%, #99f6e4 100%)' }}>Advanced Molecular</span>
                <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Point-of-Care</span>
                <span className="block w-fit mx-auto md:pr-2 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Diagnostics</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Platform Section 02 - Eye Zoom Scroll */}
      <section className="eye-scroll-section relative z-20 bg-black text-white w-full border-t border-white/5 overflow-hidden">
        <div className="eye-pin-container relative w-full h-screen flex flex-col items-center justify-center">
          {/* Background Image Container */}
          <div className="eye-image-layer absolute z-10 overflow-hidden flex items-center justify-center bg-black max-w-none" style={{
            width: 'min(360px, 90vw)',
            height: '150px',
            clipPath: 'url(#eye-clip-services)'
          }}>
            <div className="eye-zoom-wrapper absolute w-[100vw] h-[100vh] max-w-none flex items-center justify-center flex-shrink-0">
              <img
                src={posImgSharp}
                alt="AI Retinal Screening"
                className="eye-main-img absolute inset-0 h-full w-full object-cover object-center opacity-100 pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="eye-bg-gradient absolute inset-0 z-30 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 pointer-events-none" />
          </div>

          {/* Content Card */}
          <div className="eye-content-card absolute inset-0 z-10 opacity-0 pointer-events-none translate-y-8 text-white">
            <div className="relative min-h-screen w-full flex items-start lg:items-center px-4 md:px-12 py-24 lg:py-8 max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-7 md:p-8 lg:p-12 rounded-[2rem] max-w-2xl relative shadow-2xl pointer-events-auto ring-1 ring-white/6 text-white">
                <div className="relative z-10">
                  {/* <div className="absolute -top-6 -right-4 md:-top-24 md:-right-20 w-24 md:w-64 z-20 opacity-40 lg:opacity-100">
                      <img
                        src={retinaImg}
                        alt="Retina Device"
                        className="w-full h-auto drop-shadow-[0_20px_50px_rgba(45,212,191,0.3)]"
                        referrerPolicy="no-referrer"
                      />
                    </div> */}

                  <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-2 md:mb-4 text-white">AI-Powered Retinal <br /> Screening Technology</h2>

                  <p className="text-lg text-teal-50 mb-3 md:mb-6 italic font-medium leading-relaxed">See the Unseen. Screen the Unscreened.</p>

                  <p className="text-base text-gray-200 font-light leading-relaxed mb-4 md:mb-8">
                    An AI-powered platform for non-invasive early detection of neurodegenerative and metabolic diseases. A 5-minute scan generates clinician-ready risk stratification reports.
                  </p>

                  <ul className="space-y-4 md:space-y-6 mb-4 md:mb-8">
                    {[
                      "Scan time is 5 minutes and the procedure is completely non-invasive.",
                      "It supports applications including Parkinson's, Alzheimer's, dementia, and diabetic retinopathy.",
                      "The technology has been validated through a multi-center clinical study conducted across three hospital sites."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-gray-200 font-light">
                        <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5 md:mt-1 shadow-lg">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white rounded-3xl p-5 md:p-8 flex items-center gap-5 md:gap-8 w-fit shadow-xl border border-black/5">
                    <div className="w-24 h-16 md:w-44 md:h-24 flex-shrink-0">
                      <img
                        src={iitk}
                        alt="IIITK Logo"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-[160px] md:min-w-[220px]">
                      <p className="text-[#7ebcbe] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Research Partner</p>
                      <div className="text-[#1a1a1a] font-display font-bold text-lg md:text-2xl leading-snug">
                        In collaboration with <br className="hidden md:block" /> IIITK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Elements */}
          <div className="eye-setup-layer absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
              <span className="font-display text-2xl tracking-tighter">
                <span className="text-[#99f6e4] font-bold">02</span>
                <span className="text-zinc-500 font-medium">/02</span>
              </span>
            </div>
            <div className="absolute inset-x-0 top-24 md:top-24 z-20 flex flex-col items-center justify-center text-center w-full px-8">
              <h2 className="text-3xl md:text-5xl 2xl:text-[4.5rem] font-display font-light leading-[1.1] md:leading-[1.15] tracking-[0.02em] pb-2 text-transparent">
                <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 25%, #99f6e4 100%)' }}>AI-Powered Retinal</span>
                <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Screening</span>
                <span className="block w-fit mx-auto md:pr-2 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Technology</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ✅ REALISTIC EYE SHAPE MASK FOR SERVICES */}
      <svg width="0" height="0" className="fixed -top-[1000px] -left-[1000px] w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <clipPath id="eye-clip-services" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.5
              C 0.2,0.2 0.35,0.05 0.5,0.05
              C 0.65,0.05 0.8,0.2 1,0.5
              C 0.8,0.8 0.65,0.95 0.5,0.95
              C 0.35,0.95 0.2,0.8 0,0.5
              Z
            " />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Services;

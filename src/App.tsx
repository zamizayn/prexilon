import { useRef, useState, useEffect } from "react";
import { ArrowDownLeft, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import logo from "./assets/logo_new.png";
import heroBanner from "./assets/hero-banner-tuned.png";
import heroBannerMobile from "./assets/banner-mobile-v1.jpeg";
import diagnosticImg from "./assets/diagnostic_solutions.png";
import diagnosticImgMobile from "./assets/diagnostic-solution-mobile.png";
import services1 from "./assets/services1_clear.png";
import platformOneImg from "./assets/platform_1.png";
import ProprietaryPlatforms from "./components/ProprietaryPlatforms";
import posMachineImg from "./assets/pos_machine.png";
import posImg from "./assets/pos_bg.png";
import posImgSharp from "./assets/pos_bg_sharp.png";
import retinaImg from "./assets/retinaImg.png";
import iitk from "./assets/iitk.png";
import footerLogo from "./assets/footerLogo.png";
import contactBg from "./assets/contact_background.png";
import SideNav, { defaultNavItems } from "./components/SideNav";
import AboutUs from "./pages/AboutUs";
import StatsStrip from "./components/StatsStrip";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [currentPage, setCurrentPage] = useState<"home" | "about-us" | "services" | "contact-us" | "">("");
  const isInitialMount = useRef(true);

  // -----------------------------------
  // Hash-based Routing Engine
  // -----------------------------------
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");

      // CRITICAL: Robust cleanup for SPAs with pinned elements
      if (typeof window !== "undefined" && !isInitialMount.current) {
        ScrollTrigger.getAll().forEach((t) => {
          t.kill(true); // Kill and revert styles immediately
        });
        gsap.killTweensOf("*");
        ScrollTrigger.clearScrollMemory();
      }

      isInitialMount.current = false;

      if (["about-us", "services", "contact-us"].includes(hash)) {
        setCurrentPage(hash as any);
      } else {
        setCurrentPage("home");
        setActiveSection("top");
      }

      window.scrollTo(0, 0);

      // Delay refresh until React has completed the layout shift
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 250);

      setIsSidebarOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check on load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);



  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const syncViewport = (event?: MediaQueryListEvent) => {
      const matches = event ? event.matches : mediaQuery.matches;
      setIsDesktop(matches);
      if (!matches) {
        setIsSidebarOpen(false);
      }
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (isDesktop || !isSidebarOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDesktop, isSidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useGSAP(() => {
    if (currentPage !== "home") return;

    const scope = containerRef.current;
    if (!scope) return;

    // Hero Parallax Backgrounds
    gsap.to(scope.querySelectorAll(".hero-bg-dna"), {
      y: -200,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: scope.querySelector(".hero-section"),
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hero Content Intro
    gsap.from(scope.querySelectorAll(".hero-content-left"), {
      x: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(scope.querySelectorAll(".hero-content-right"), {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Advanced Title Reveals (Staggered Masked Lines)
    gsap.utils.toArray<HTMLElement>(".gsap-advanced-title").forEach((title) => {
      const lines = title.querySelectorAll(".gsap-title-line");
      if (lines.length > 0) {
        gsap.from(lines, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            once: true,
          },
          yPercent: 100,
          rotation: 4,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        });
      }
    });

    // Generic Reveals
    gsap.utils.toArray<HTMLElement>(".gsap-reveal-up").forEach((elem) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
      });
    });

    // Molecular Zoom Scroll Animation
    const molecularTl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.querySelector(".molecular-scroll-section"),
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    gsap.set(scope.querySelectorAll(".molecular-image-layer"), { y: "15vh" });

    molecularTl.to(scope.querySelector(".molecular-setup-layer"), { opacity: 0, scale: 1.1, duration: 0.2 })
      .to(scope.querySelector(".molecular-image-layer"), {
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        borderRadius: "0px",
        y: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0.1)
      .to(scope.querySelector(".molecular-inner-img"), { opacity: 0.4, duration: 0.4 }, 0.4)
      .to(scope.querySelector(".molecular-bg-gradient"), { opacity: 1, duration: 0.4 }, 0.4)
      .to(scope.querySelector(".molecular-content-card"), { opacity: 1, y: 0, duration: 0.4, pointerEvents: "auto", ease: "power2.out" }, 0.5);

    // AI Retinal Screening (Eye Zoom Scroll)
    const eyeTl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.querySelector(".eye-scroll-section"),
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    gsap.set(scope.querySelectorAll(".eye-image-layer"), { y: "15vh" });

    eyeTl.to(scope.querySelector(".eye-setup-layer"), { opacity: 0, scale: 1.1, duration: 0.2 })
      .to(scope.querySelector(".eye-image-layer"), {
        width: "10800px",
        height: "4500px",
        y: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0.1)
      .to(scope.querySelector(".eye-main-img"), { opacity: 0.4, duration: 0.4 }, 0.5)
      .to(scope.querySelector(".eye-bg-gradient"), { opacity: 1, duration: 0.4 }, 0.4)
      .to(scope.querySelector(".eye-content-card"), { opacity: 1, y: 0, duration: 0.4, pointerEvents: "auto", ease: "power2.out" }, 0.5);

    // Special Device Floating Animation
    gsap.to(scope.querySelectorAll(".modaplex-device"), {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

  }, { scope: containerRef, dependencies: [currentPage], revertOnUpdate: true });

  useEffect(() => {
    if (currentPage !== "home") {
      setActiveSection(currentPage);
      return;
    }

    const sectionIds = ["top", "services", "contact-us"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentPage]);



  const clearScrollAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();
  };

  const navigateFromSidebar = (id: string) => {
    if (id === "top") {
      window.location.hash = "/";
      return;
    }

    if (["about-us", "services", "contact-us"].includes(id)) {
      window.location.hash = `/${id}`;
      return;
    }

    // Handle internal homepage section scrolling
    window.location.hash = "/";
    setActiveSection(id);
    if (!isDesktop) {
      setIsSidebarOpen(false);
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    });
  };

  const renderMenuButton = () => (
    <button
      type="button"
      className="flex items-center gap-3 bg-black border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-all group"
      onClick={() => setIsSidebarOpen((current) => !current)}
      aria-label="Toggle navigation menu"
      aria-expanded={isDesktop ? isSidebarOpen : isSidebarOpen}
      aria-controls="site-sidebar"
    >
      <ArrowDownLeft className="w-5 h-5 text-white stroke-[1.5] group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
      <span className="font-display text-xl font-light tracking-tight text-white">Menu</span>
    </button>
  );

  useGSAP(() => {
    // Global ScrollTrigger Refresh logic
    const handleRefresh = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleRefresh);
    return () => window.removeEventListener("resize", handleRefresh);
  }, { dependencies: [currentPage] });

  return (
    <main id="top" ref={containerRef} className="relative bg-black scroll-smooth">
      <SideNav
        activeId={currentPage === "home" ? activeSection : currentPage}
        isDesktop={isDesktop}
        isOpen={isSidebarOpen}
        items={defaultNavItems}
        logoSrc={logo}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={navigateFromSidebar}
        onToggle={() => setIsSidebarOpen((current) => !current)}
      />

      {currentPage === "about-us" ? (
        <AboutUs logo={logo} renderMenuButton={renderMenuButton} />
      ) : currentPage === "services" ? (
        <Services logo={logo} renderMenuButton={renderMenuButton} />
      ) : currentPage === "contact-us" ? (
        <ContactUs logo={logo} renderMenuButton={renderMenuButton} />
      ) : (
        <div className="relative bg-black w-full overflow-hidden">
          {/* Hero Section */}
          <section className="hero-section relative h-auto min-h-screen md:h-screen w-full overflow-hidden flex flex-col bg-black">
            <div className="absolute inset-0 z-0 hidden md:block">
              <img src={heroBanner} alt="Hero Banner" className="w-full h-full object-cover object-right-top" />
            </div>
            <div className="relative z-0 block md:hidden w-full">
              <img src={heroBannerMobile} alt="Hero Banner Mobile" className="w-full h-auto object-contain bg-black" />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />


            {/* Overlay Content Wrapper */}
            <div className="absolute inset-0 z-10 flex flex-col">
              <nav className="relative z-20 flex justify-between items-start p-8 md:p-12">
                <div className="flex flex-col">
                  <a href="#/" className="inline-block cursor-pointer">
                    <img src={logo} alt="PREXILON" className="h-24 w-auto object-contain -ml-2 mix-blend-color-dodge" />
                  </a>
                </div>
                {renderMenuButton()}
              </nav>

              <div className="hero-content-fade relative z-10 flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full">
                  <div className="hero-content-left lg:col-span-8 mb-8 lg:mb-0">
                    <h2 className="text-sm md:text-base font-display font-semibold tracking-[0.3em] text-gray-300 uppercase mb-8">
                      Precision Diagnostics Powered By
                    </h2>
                    <h3 className="text-hero-main font-display leading-[1.1] tracking-tight uppercase text-white">
                      <span className="block">Next-Generation</span>
                      <span className="block py-1 -my-1 bg-gradient-to-r from-teal-100 to-teal-200 bg-clip-text text-transparent">Point-Of-Care</span>
                      <span className="block">And AI Diagnostics</span>
                    </h3>
                  </div>
                  <div className="hero-content-right lg:col-span-4 lg:ml-auto max-w-sm">
                    <p className="text-lg text-gray-300 font-light leading-relaxed">
                      Building rapid, scalable diagnostic platforms across molecular testing and AI-enabled healthcare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="relative z-20 bg-white text-black py-24 md:py-32 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
                <div className="gsap-reveal-up lg:col-span-7">
                  <h2 className="gsap-advanced-title text-responsive-h1 font-display font-light leading-[1.05] tracking-tight">
                    <div className="overflow-hidden pb-1">
                      <div className="gsap-title-line text-[#5a9191]">
                        Engineering <span className="text-[#5a9191] font-semibold">Scalable</span>
                      </div>
                    </div>
                    <div className="overflow-hidden pb-1">
                      <div className="gsap-title-line text-[#5a9191]">
                        <span className="text-[#1a1a1a] font-semibold">Diagnostics</span> For A
                      </div>
                    </div>
                    <div className="overflow-hidden pb-1">
                      <div className="gsap-title-line text-[#5a9191]">
                        World That Needs
                      </div>
                    </div>
                    <div className="overflow-hidden pb-1">
                      <div className="gsap-title-line text-[#1a1a1a]">
                        Precision
                      </div>
                    </div>
                  </h2>
                </div>
                <div className="gsap-reveal-up lg:col-span-5 lg:pt-20">
                  <p className="text-base md:text-lg text-[#000] font-light leading-relaxed max-w-sm ml-auto">
                    Combining artificial intelligence with advanced bioscience to enable fast, accurate diagnostics at the point of care.
                  </p>
                </div>
              </div>

              <StatsStrip />
            </div>
          </section>

          {/* Services Image Section */}
          <section className="relative z-20 w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <img src={diagnosticImg} alt="Diagnostic Solutions" className="hidden md:block w-full h-full object-cover" />
            <img src={diagnosticImgMobile} alt="Diagnostic Solutions Mobile" className="block md:hidden w-full h-full object-cover" />
          </section>

          {/* Diagnostic Solutions Content Section */}
          <section id="services-anchor" className="relative z-20 bg-[#004d55] text-white py-24 md:py-32 px-8 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="gsap-reveal-up">
                <h2 className="text-section-title font-display font-medium leading-none tracking-tight">
                  <span className="block py-2 -my-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200/50">Diagnostic</span>
                  <span className="block py-2 -my-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200/50">Solutions</span>
                </h2>
              </div>
              <div className="gsap-reveal-up">
                <p className="text-xl md:text-2xl md:mt-2 text-teal-50/80 font-light leading-relaxed">
                  Prexilon develops and commercializes proprietary next-generation diagnostic platforms from molecular point-of-care testing to AI-powered screening - while strategically partnering with global innovators to accelerate deployment across the Indian and other healthcare markets.
                </p>
              </div>
            </div>
          </section>

          {/* Proprietary Platforms Section */}
          <section className="relative z-20 bg-[#f8f9fa] text-black py-24 md:py-32 px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="gsap-reveal-up mb-16">
                <h2 className="text-section-title font-display font-light leading-none tracking-tight">Proprietary <br /><span className="font-bold text-[#5BAAAD]">Platforms</span></h2>
              </div>
              <ProprietaryPlatforms />
            </div>
          </section>

          {/* Detailed Platform Section 01 - Molecular Zoom Scroll */}
          <section className="molecular-scroll-section relative z-20 bg-black text-white w-full border-t border-white/5 overflow-hidden">
            <div className="molecular-pin-container relative w-full h-screen flex flex-col items-center justify-center">
              {/* Background Image Container - Starts as small preview, grows to full screen */}
              <div className="molecular-image-layer absolute z-0 overflow-hidden w-[90vw] md:w-full max-w-2xl aspect-video rounded-none flex items-center justify-center">
                <img src={services1} alt="Molecular Diagnostics" className="molecular-inner-img w-full h-full object-cover" />
                <div className="molecular-bg-gradient absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-0 pointer-events-none" />
              </div>

              {/* The Setup Elements (text, counter) - Active at start, hidden on scroll */}
              <div className="molecular-setup-layer absolute inset-0 z-20 pointer-events-none">
                {/* Counter */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
                  <span className="font-display text-2xl tracking-tighter">
                    <span className="text-[#99f6e4] font-bold">01</span>
                    <span className="text-zinc-500 font-medium">/02</span>
                  </span>
                </div>

                {/* Title */}
                <div className="absolute inset-x-0 top-24 md:top-24 z-20 flex flex-col items-center justify-center text-center w-full px-8">
                  <h2 className="text-3xl md:text-5xl 2xl:text-[4.5rem] font-display font-light leading-[1.1] md:leading-[1.15] tracking-[0.02em] pb-2 text-transparent">
                    <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 25%, #99f6e4 100%)' }}>Advanced Molecular</span>
                    <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Point-of-Care</span>
                    <span className="block w-fit mx-auto md:pr-2 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Diagnostics</span>
                  </h2>
                </div>
              </div>

              {/* Content Card - Fades in as image goes full screen */}
              <div className="molecular-content-card absolute inset-0 z-10 opacity-0 pointer-events-none translate-y-8">
                <div className="relative min-h-screen w-full flex items-start lg:items-center px-4 md:px-12 py-24 lg:py-8 max-w-7xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-7 md:p-8 lg:p-12 rounded-[2rem] max-w-2xl relative shadow-2xl pointer-events-auto ring-1 ring-white/6 text-white">
                    <div className="inline-block bg-white text-teal-600 px-3 py-1 rounded-full text-sm font-bold mb-6 italic shadow-sm">ModaPlex™ Platform</div>
                    <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-2 md:mb-4 text-white drop-shadow-sm">Advanced Molecular <br /> Point-of-Care Diagnostics</h2>
                    <p className="text-lg md:text-xl text-teal-50 mb-3 md:mb-6 italic font-medium leading-relaxed">Bringing the Lab to the Patient</p>
                    <p className="text-base text-gray-300 font-light leading-relaxed mb-4 md:mb-8 max-w-xl">Laboratory-grade accuracy, ultrafast results, works in real-world urban and rural healthcare environments without specialized infrastructure.</p>
                    <ul className="space-y-4 md:space-y-6">
                      {["Laboratory-grade accuracy in point-of-care settings", "Ultrafast results without specialized infrastructure", "Accessible in urban and rural healthcare environments"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-gray-200 font-light">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Platform Section 02 - Eye Zoom Scroll */}
          <section className="eye-scroll-section relative z-20 bg-black text-white w-full border-t border-white/5 overflow-hidden">
            <div className="eye-pin-container relative w-full h-screen flex flex-col items-center justify-center">
              {/* Background Image Container - Circular Eye Look */}
              <div className="eye-image-layer absolute z-10 overflow-hidden flex items-center justify-center bg-black" style={{ width: 'min(360px, 90vw)', height: '150px', clipPath: 'url(#eye-clip-home)' }}>
                {/* Image wrapper to handle internal scaling separate from shape scaling */}
                <div className="eye-zoom-wrapper absolute w-[100vw] h-[100vh] flex items-center justify-center">
                  <img src={posImgSharp} alt="AI Retinal Screening" className="eye-main-img absolute inset-0 h-full w-full object-cover" />
                </div>
                {/* Gradient overlay for text legibility later */}
                <div className="eye-bg-gradient absolute inset-0 z-30 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 pointer-events-none" />
              </div>

              {/* Counter and Intro Title */}
              <div className="eye-setup-layer absolute inset-0 z-20 pointer-events-none">
                {/* Counter */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
                  <span className="font-display text-2xl tracking-tighter">
                    <span className="text-[#99f6e4] font-bold">02</span>
                    <span className="text-zinc-500 font-medium">/02</span>
                  </span>
                </div>

                {/* Title */}
                <div className="absolute inset-x-0 top-24 md:top-24 z-20 flex flex-col items-center justify-center text-center w-full px-8">
                  <h2 className="text-3xl md:text-5xl 2xl:text-[4.5rem] font-display font-light leading-[1.1] md:leading-[1.15] tracking-[0.02em] pb-2 text-transparent">
                    <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 25%, #99f6e4 100%)' }}>AI-Powered Retinal</span>
                    <span className="block w-fit mx-auto md:pr-2 mb-1 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Screening</span>
                    <span className="block w-fit mx-auto md:pr-2 bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 0%, #99f6e4 20%, #99f6e4 100%)' }}>Technology</span>
                  </h2>
                </div>
              </div>

              <div className="eye-content-card absolute inset-0 z-10 opacity-0 pointer-events-none translate-y-8 text-white">
                <div className="relative min-h-screen w-full flex items-start lg:items-center px-4 md:px-12 py-24 lg:py-8 max-w-7xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-7 md:p-8 lg:p-12 rounded-[2rem] max-w-2xl relative shadow-2xl pointer-events-auto ring-1 ring-white/6 text-white">
                    <div className="relative z-10">
                      {/* <div className="absolute -top-10 -right-4 md:-top-24 md:-right-20 w-24 md:w-64 z-20 opacity-40 lg:opacity-100">
                        <img src={retinaImg} alt="Retina Device" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(45,212,191,0.3)]" />
                      </div> */}
                      <h2 className="text-2xl md:text-5xl font-display font-bold leading-tight mb-2 md:mb-4 text-white">AI-Powered Retinal <br /> Screening Technology</h2>
                      <p className="text-lg text-teal-50 mb-3 md:mb-6 italic font-medium leading-relaxed">See the Unseen. Screen the Unscreened.</p>
                      <p className="text-base text-gray-200 font-light leading-relaxed mb-4 md:mb-8">An AI-powered platform for non-invasive early detection of neurodegenerative and metabolic diseases. A 5-minute scan generates clinician-ready risk stratification reports.</p>
                      <ul className="space-y-4 mb-4 md:mb-8">
                        {["Scan time is 5 minutes and is completely non-invasive.", "Supports Parkinson's, Alzheimer's, and Diabetic Retinopathy.", "Validated through multi-center clinical studies."].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm md:text-base text-gray-200"><div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mt-1 flex-shrink-0"><Check className="w-3 h-3 text-white" /></div>{item}</li>
                        ))}
                      </ul>
                      <div className="bg-white rounded-3xl p-5 md:p-8 flex items-center gap-5 md:gap-8 w-fit shadow-xl border border-black/5">
                        <div className="w-24 h-16 md:w-44 md:h-24 flex-shrink-0">
                          <img src={iitk} alt="IITK Logo" className="w-full h-full object-contain" />
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
            </div>
          </section>

          <Footer />

          <svg width="0" height="0" className="fixed -top-[1000px] -left-[1000px] w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
            <defs>
              <clipPath id="eye-clip-home" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.5 C 0.2,0.2 0.35,0.05 0.5,0.05 C 0.65,0.05 0.8,0.2 1,0.5 C 0.8,0.8 0.65,0.95 0.5,0.95 C 0.35,0.95 0.2,0.8 0,0.5 Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </main>
  );
}

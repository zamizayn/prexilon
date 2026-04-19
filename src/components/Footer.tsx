import React, { useState, useEffect } from "react";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import contactBg from "../assets/contact_background.png";
import footerLogo from "../assets/footerLogo.png";

interface FooterProps {
  ctaTitle?: string;
  ctaText?: string;
  showCta?: boolean;
}

const Footer: React.FC<FooterProps> = ({ 
  ctaTitle = "Let's shape the Future together", 
  ctaText = "Schedule a free demo and see our programs in action.",
  showCta = true
}) => {
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

  const handleContactClick = () => {
    window.location.hash = "/contact-us";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* CTA Section */}
      {showCta && (
        <section className="relative z-10 h-[60vh] w-full overflow-hidden flex items-center justify-center border-t border-white/5">
          <div className="absolute inset-0 z-0">
            <img
              src={contactBg}
              alt="Scientific Background"
              className="w-full h-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
              {ctaTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
              {ctaText}
            </p>
            <div
              className="flex items-center justify-center mt-10 group cursor-pointer relative z-10 transition-transform hover:scale-105 duration-300 drop-shadow-xl"
              onClick={handleContactClick}
            >
              {/* Left Button */}
              <button className="relative flex items-center pl-8 pr-12 h-14 focus:outline-none">
                <div className="absolute inset-0 right-8 bg-[#004e5a] rounded-l-xl z-0 transition-colors group-hover:bg-[#003d47]"></div>
                <div className="absolute top-0 bottom-0 right-0 w-14 bg-[#004e5a] rounded-r-xl transform skew-x-[-18deg] origin-bottom z-0 transition-colors group-hover:bg-[#003d47]"></div>
                <span className="relative z-10 text-white font-display font-semibold text-xl tracking-wide">
                  Contact us
                </span>
              </button>

              {/* Right Arrow Button */}
              <button className="relative flex items-center justify-center w-16 h-14 ml-2 focus:outline-none">
                <div className="absolute inset-0 left-8 bg-[#e4e2dd] rounded-r-xl z-0 transition-colors group-hover:bg-[#d5d3ce]"></div>
                <div className="absolute top-0 bottom-0 left-0 w-10 bg-[#e4e2dd] rounded-l-xl transform skew-x-[-18deg] origin-bottom z-0 transition-colors group-hover:bg-[#d5d3ce]"></div>
                <ArrowRight className="relative z-10 w-6 h-6 text-[#004e5a] ml-1.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer Section */}
      <footer className="relative z-20 bg-[#1a1a1a] text-white pt-24 pb-12 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="bg-white p-4 inline-block rounded-sm">
              <img src={footerLogo} alt="PREXILON" className="h-12 w-auto object-contain" />
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
              {[
                { label: "Home", hash: "/" },
                { label: "About", hash: "/about-us" },
                { label: "Services", hash: "/services" },
                { label: "Contact", hash: "/contact-us" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.hash}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
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
          <div className="md:ml-auto text-gray-500 text-[10px] uppercase tracking-widest">
            © 2026 PREXILON. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-500 transition-all duration-500 group ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>
    </>
  );
};

export default Footer;

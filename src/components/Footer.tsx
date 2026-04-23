import React, { useState, useEffect } from "react";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import contactBg from "../assets/contact-background.png";
import footerLogo from "../assets/footerLogo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.2 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

interface FooterProps {
  ctaTitle?: string;
  ctaText?: string;
  showCta?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  ctaTitle = "Engineering The Next Era Of Diagnostics",
  ctaText = "Partner with us in the future of diagnostics",
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
              className="w-full h-full object-cover opacity-80"
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <a href="#/" className="bg-white p-4 inline-block rounded-sm cursor-pointer w-fit">
                <img src={footerLogo} alt="PREXILON" className="h-12 w-auto object-contain" />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Advanced molecular diagnostics and AI-powered screening - engineered in India for the world.
              </p>
            </div>
            <div className="flex items-center gap-6">
              {[
                // { Icon: Facebook, href: "https://facebook.com" },
                // { Icon: Twitter, href: "https://twitter.com" },
                // { Icon: Linkedin, href: "https://linkedin.com" },
                // { Icon: Instagram, href: "https://instagram.com" },
                { Icon: WhatsAppIcon, href: "https://wa.me/919895105814" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-16">
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

          {/* Contact Info */}
          <div className="md:pl-16">
            <h4 className="font-display font-bold text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+919895105814" className="hover:text-white transition-colors">+91 98951 05814</a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:info@prexilon.in" className="hover:text-white transition-colors">info@prexilon.in</a>
              </li>
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-white" />
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
        className={`fixed bottom-8 right-8 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-500 transition-all duration-500 group ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>
    </>
  );
};

export default Footer;

import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Clock, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import mapPlaceholder from "../assets/map-image-desktop.png";
import mapMobile from "../assets/map-image-mobile.png";
import contactBg from "../assets/contact_background.png";
import Footer from "../components/Footer";

interface ContactUsProps {
  logo: string;
  renderMenuButton: () => React.ReactNode;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.2 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const ContactUs: React.FC<ContactUsProps> = ({ logo, renderMenuButton }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      // Replace these with your actual IDs from EmailJS dashboard
      await emailjs.sendForm(
        "service_3lempqq",
        "template_y692w9q",
        formRef.current,
        "tQDK-tIpqcaSl8quh"
      );

      setStatus("success");
      formRef.current.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <div className="relative bg-[#004d55] text-white overflow-hidden min-h-[450px]">
        <div className="relative z-10 min-h-[400px] flex flex-col p-8 md:p-12">
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
              Contact Us
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-display font-light leading-[1.05] tracking-tight text-white uppercase max-w-6xl md:pb-10">
              Let's Collaborate <br />
              <span className="bg-gradient-to-r from-[#E8F3F3] to-[#7EBCBE] bg-clip-text text-transparent">On The Future Of</span> <br />
              Healthcare
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="contact-form" className="relative z-10 px-8 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Side: Form */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <span className="text-[10px] font-display font-bold tracking-[0.2em] uppercase text-slate-400 block mb-4">Contact Us</span>
                <h2 className="text-4xl font-display font-bold text-[#1a1a1a]">
                  Send Us a Message
                </h2>
              </div>

              {status === "success" && (
                <div className="mb-10 p-6 bg-teal-50 border border-teal-100 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  <div>
                    <h4 className="font-display font-bold text-teal-900">Message Sent!</h4>
                    <p className="text-teal-700 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-10 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-display font-bold text-red-900">Submission Failed</h4>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Full name*</label>
                    <input
                      name="user_name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Email address*</label>
                    <input
                      name="user_email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200"
                      placeholder="Your email"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Phone no:</label>
                    <input
                      name="user_phone"
                      type="tel"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* I am a */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">I am a*</label>
                    <select
                      name="user_type"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors appearance-none"
                    >
                      <option value="">Select option</option>
                      <option value="Investor">Investor</option>
                      <option value="Customer">Customer</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Student">Student</option>
                      <option value="Job seeker">Job seeker</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Company name</label>
                    <input
                      name="user_company"
                      type="text"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200"
                      placeholder="Your company"
                    />
                  </div>

                  {/* City */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">City/location*</label>
                    <input
                      name="user_city"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200"
                      placeholder="Your location"
                    />
                  </div>

                  {/* Interested in */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">I am interested in*</label>
                    <select
                      name="interest"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors appearance-none"
                    >
                      <option value="">Select option</option>
                      <option value="Job seeking">Job seeking</option>
                      <option value="Investment">Investment</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Sales">Sales</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Contact Method */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Contact method</label>
                    <select
                      name="contact_method"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors appearance-none"
                    >
                      <option value="">Select option</option>
                      <option value="Email id">Email id</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="Call">Call</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors placeholder:text-slate-200 resize-none"
                    placeholder="Tell us more about your inquiry"
                  />
                </div>

                <div className="pt-4 flex">
                  {/* Skewed Split Button perfectly matching the design */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`flex items-center justify-center group cursor-pointer relative z-10 transition-all duration-300 drop-shadow-xl focus:outline-none ${status === "sending" ? "opacity-70 scale-95" : "hover:scale-105"}`}
                  >
                    {/* Left Part */}
                    <div className="relative flex items-center pl-10 pr-14 h-14 focus:outline-none min-w-[200px] justify-center">
                      <div className="absolute inset-0 right-8 bg-[#004e5a] rounded-l-xl z-0 transition-colors group-hover:bg-[#003d47]"></div>
                      <div className="absolute top-0 bottom-0 right-0 w-14 bg-[#004e5a] rounded-r-xl transform skew-x-[-18deg] origin-bottom z-0 transition-colors group-hover:bg-[#003d47]"></div>
                      <span className="relative z-10 text-white font-display font-bold text-xl tracking-tight flex items-center gap-3">
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : status === "success" ? (
                          "Sent!"
                        ) : (
                          "Submit"
                        )}
                      </span>
                    </div>

                    {/* Right Arrow Part */}
                    <div className="relative flex items-center justify-center w-16 h-14 ml-1 focus:outline-none">
                      <div className="absolute inset-0 left-8 bg-[#e4e2dd] rounded-r-xl z-0 transition-colors group-hover:bg-[#d5d3ce]"></div>
                      <div className="absolute top-0 bottom-0 left-0 w-10 bg-[#e4e2dd] rounded-l-xl transform skew-x-[-18deg] origin-bottom z-0 transition-colors group-hover:bg-[#d5d3ce]"></div>
                      <ArrowRight className={`relative z-10 w-6 h-6 text-[#004e5a] ml-1.5 transition-transform duration-300 ${status === "sending" ? "translate-x-2 opacity-0" : ""}`} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0a3d44] rounded-[2rem] p-8 md:p-12 text-white shadow-2xl">
                <div className="space-y-12">
                  {/* Address */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4">Address</h3>
                    <p className="text-slate-300 leading-relaxed text-sm font-light">
                      Corrazone, Panadans Venture,<br />
                      CUSAT P. O, Kalamassery,<br />
                      Kochi, Kerala, India, 682022
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4">Contact</h3>
                    <div className="space-y-2 text-sm text-slate-300 font-light">
                      <p className="flex items-center gap-2">
                        Phone: <a href="tel:+919895105814" className="hover:text-teal-400 transition-colors">+91 98951 05814</a>
                      </p>
                      <p className="flex items-center gap-2">
                        Email: <a href="mailto:info@prexilon.in" className="hover:text-teal-400 transition-colors">info@prexilon.in</a>
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-3">
                      Office Hours
                    </h3>
                    <p className="text-slate-300 text-sm font-light">
                      Monday - Friday: 09:30 AM - 6:00 PM
                    </p>
                  </div>

                  {/* Stay Connected */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-6">Stay Connected</h3>
                    <div className="flex items-center gap-4">
                      {[
                        // { Icon: Facebook, href: "https://facebook.com" },
                        // { Icon: Twitter, href: "https://twitter.com" },
                        // { Icon: Linkedin, href: "https://linkedin.com" },
                        // { Icon: Instagram, href: "https://instagram.com" },
                        { Icon: WhatsAppIcon, href: "https://wa.me/919895105814" }
                      ].map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-teal-400/50 transition-all"
                        >
                          <item.Icon className="w-5 h-5 text-white" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <a
        href="https://maps.app.goo.gl/wjuDJaEQ4R1UQqvM7?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-[300px] md:h-[450px] overflow-hidden group cursor-pointer"
      >
        {/* Desktop Image */}
        <img
          src={mapPlaceholder}
          alt="Location Map Desktop"
          className="hidden md:block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Mobile Image */}
        <img
          src={mapMobile}
          alt="Location Map Mobile"
          className="block md:hidden w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay to hint interactivity */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-slate-900 font-display font-bold text-sm tracking-wide">View on Google Maps</span>
          </div>
        </div>
      </a>

      <Footer />
    </section>
  );
};

export default ContactUs;

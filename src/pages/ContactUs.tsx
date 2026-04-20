import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Clock, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import mapPlaceholder from "../assets/mapview.png";
import Footer from "../components/Footer";

interface ContactUsProps {
  logo: string;
  renderMenuButton: () => React.ReactNode;
}

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
        "service_aibnid6",
        "template_5c3qu4e",
        formRef.current,
        "Q2liLAwF-DLKYt8oN"
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

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <div className="relative bg-[#004d55] text-white overflow-hidden">
        <div className="relative z-10 min-h-[50vh] flex flex-col p-8 md:p-12">
          <nav className="flex items-start justify-between mb-auto">
            <div className="flex flex-col">
              <img src={logo} alt="PREXILON" className="h-20 w-auto object-contain -ml-2 mix-blend-color-dodge" />
            </div>
            {renderMenuButton()}
          </nav>

          <div className="mt-12 mb-12">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-display font-light leading-[1.05] tracking-tight uppercase max-w-6xl">
              Let's Collaborate <br />
              On The <span className="bg-gradient-to-r from-[#E8F3F3] to-[#7EBCBE] bg-clip-text text-transparent">Future Of</span> <br />
              Healthcare
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 px-8 md:px-12 py-24">
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
                      <option value="doctor">Doctor</option>
                      <option value="partner">Potential Partner</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
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
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">I'm interested in*</label>
                    <select
                      name="interest"
                      required
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors appearance-none"
                    >
                      <option value="">Select option</option>
                      <option value="molecular">Molecular Diagnostics</option>
                      <option value="ai">AI Screening</option>
                      <option value="partnership">General Partnership</option>
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none opacity-40">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Contact Method */}
                  <div className="relative">
                    <label className="text-[11px] font-display font-bold tracking-widest uppercase text-slate-400 block mb-2">Preferred contact method</label>
                    <select
                      name="contact_method"
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-teal-600 transition-colors appearance-none"
                    >
                      <option value="">Select option</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="whatsapp">WhatsApp</option>
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
              <div className="bg-[#0a3d44] rounded-[2rem] p-10 md:p-12 text-white shadow-2xl">
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
                      <p className="flex items-center gap-2">Phone: +91 98951 05814</p>
                      <p className="flex items-center gap-2">Email: info@prexilon.in</p>
                    </div>
                  </div>

                  {/* Open Time */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-3">
                      Open time
                    </h3>
                    <p className="text-slate-300 text-sm font-light">
                      Monday - Friday: 09:30 AM - 6:00 PM
                    </p>
                  </div>

                  {/* Stay Connected */}
                  <div>
                    <h3 className="text-xl font-display font-bold mb-6">Stay Connected</h3>
                    <div className="flex items-center gap-4">
                      {[Facebook, Twitter, Linkedin, Instagram, MessageCircle].map((Icon, i) => (
                        <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-teal-400/50 transition-all">
                          <Icon className="w-5 h-5 text-white" />
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
      <div className="relative w-full h-[450px] overflow-hidden">
        <img
          src={mapPlaceholder}
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;

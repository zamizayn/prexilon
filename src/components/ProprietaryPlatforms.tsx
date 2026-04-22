import React from "react";
import services1 from "../assets/services1_clear.png";
import platformOneImg from "../assets/platform_1.png";

const platforms = [
  {
    id: "01",
    title: "Advanced Molecular Point-of-Care Diagnostics",
    subtitle: "Bringing the Lab to the Patient",
    image: services1
  },
  {
    id: "02",
    title: "AI-Powered Retinal Screening Technology",
    subtitle: "See the Unseen. Screen the Unscreened.",
    image: platformOneImg
  }
];

const ProprietaryPlatforms: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {platforms.map((platform) => (
        <div 
          key={platform.id} 
          className="gsap-reveal-up bg-white group shadow-sm border border-black/5 overflow-hidden"
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
        </div>
      ))}
    </div>
  );
};

export default ProprietaryPlatforms;

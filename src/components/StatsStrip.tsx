import React from "react";
import { Building2, HeartPulse, Globe, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Building2 className="w-8 h-8 text-teal-600" />,
    title: "Urban & Rural",
    desc: "Bridging healthcare gaps everywhere"
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
    title: "Lives transformed",
    desc: "Early detection saves millions"
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    title: "Global Reach",
    desc: "Accessible healthcare solutions worldwide"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-teal-600" />,
    title: "AI driven precision",
    desc: "Pushing context for healthcare"
  },
];

const StatsStrip: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {stats.map((feature, i) => (
        <div key={i} className="gsap-reveal-up flex flex-col gap-6 font-display">
          <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
            {feature.icon}
          </div>
          <div>
            <h4 className="font-bold text-xl md:text-2xl text-teal-600 mb-3">{feature.title}</h4>
            <p className="text-sm text-slate-500 font-medium leading-snug">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;

import { ArrowDownLeft, LucideIcon } from "lucide-react";

interface HeaderProps {
  logo: string;
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
  isDesktop: boolean;
  Icon?: LucideIcon;
}

export default function Header({ logo, onMenuToggle, isSidebarOpen, isDesktop, Icon = ArrowDownLeft }: HeaderProps) {
  return (
    <nav className="relative z-20 flex justify-between items-start p-8 md:p-12">
      <div className="flex flex-col">
        <a href="#/" className="inline-block cursor-pointer">
          <img src={logo} alt="PREXILON" className="h-24 w-auto object-contain -ml-2" />
        </a>
      </div>

      <button
        type="button"
        className="flex items-center gap-3 bg-black border border-white/10 px-8 py-3 rounded-full hover:bg-white/10 transition-all group"
        onClick={onMenuToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isSidebarOpen}
        aria-controls="site-sidebar"
      >
        <Icon className="w-5 h-5 text-white stroke-[1.5] group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        <span className="font-display text-xl font-light tracking-tight text-white">Menu</span>
      </button>
    </nav>
  );
}

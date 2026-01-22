import { useEffect, useState, useRef } from "react";
import { Gamepad2, BarChart3, HelpCircle, MessageSquare } from "lucide-react";

interface AppBannerProps {
  title: string;
  subtitle: string;
  description: string;
  icon: "performance" | "compare" | "matchmaker" | "reviews";
  delay?: number;
}

const iconMap = {
  performance: BarChart3,
  compare: Gamepad2,
  matchmaker: HelpCircle,
  reviews: MessageSquare,
};

const AppBanner = ({ title, subtitle, description, icon, delay = 0 }: AppBannerProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const Icon = iconMap[icon];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 5000);

    // Initial delay offset for staggered effect
    const timeout = setTimeout(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div className="banner-card relative overflow-hidden rounded-lg border border-border bg-card p-6 cursor-pointer group">
      {/* Parallax Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg animate-parallax whitespace-nowrap text-[120px] font-orbitron font-black text-primary/10 leading-none absolute top-1/2 -translate-y-1/2">
          {title} • {title} • {title} • {title} •
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
        {/* Title & Description - 8 columns */}
        <div className="col-span-8">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="banner-icon w-6 h-6 text-primary" />
            <span className="text-xs font-inter uppercase tracking-widest text-muted-foreground">
              {subtitle}
            </span>
          </div>
          
          <h3
            ref={titleRef}
            className={`banner-title font-orbitron font-black text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 transition-all ${
              isGlitching ? "glitch-active" : ""
            }`}
          >
            {title}
          </h3>
          
          <p className="banner-description font-inter text-muted-foreground text-sm md:text-base max-w-xl">
            {description}
          </p>
        </div>

        {/* Device Preview - 4 columns */}
        <div className="col-span-4 flex justify-end">
          <div className="perspective-container">
            <div className="device-preview device-3d w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 border-2 border-primary rounded-xl flex items-center justify-center bg-secondary/50 backdrop-blur-sm">
              <Icon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default AppBanner;

import { useEffect, useState } from "react";

interface ElectricBolt {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
  scale: number;
}

const ElectricShock = () => {
  const [bolts, setBolts] = useState<ElectricBolt[]>([]);

  useEffect(() => {
    const generateBolts = () => {
      const newBolts: ElectricBolt[] = [];
      const boltCount = 8;

      for (let i = 0; i < boltCount; i++) {
        newBolts.push({
          id: i,
          x: Math.random() * 90 + 5,
          y: Math.random() * 80 + 10,
          rotation: Math.random() * 360,
          delay: Math.random() * 4,
          duration: Math.random() * 0.3 + 0.2,
          scale: Math.random() * 0.5 + 0.5,
        });
      }
      setBolts(newBolts);
    };

    generateBolts();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bolts.map((bolt) => (
        <svg
          key={bolt.id}
          className="absolute animate-electric"
          style={{
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            transform: `rotate(${bolt.rotation}deg) scale(${bolt.scale})`,
            animationDelay: `${bolt.delay}s`,
            animationDuration: `${bolt.duration}s`,
          }}
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
        >
          <path
            d="M20 0 L25 15 L35 15 L22 30 L28 30 L15 60 L18 35 L8 35 L18 18 L12 18 Z"
            fill="hsl(145 100% 45%)"
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      ))}

      {/* Additional electric arcs */}
      {bolts.slice(0, 4).map((bolt) => (
        <svg
          key={`arc-${bolt.id}`}
          className="absolute animate-arc"
          style={{
            left: `${(bolt.x + 20) % 100}%`,
            top: `${bolt.y}%`,
            animationDelay: `${bolt.delay + 0.5}s`,
            transform: `scale(${bolt.scale * 0.8})`,
          }}
          width="60"
          height="20"
          viewBox="0 0 60 20"
          fill="none"
        >
          <path
            d="M0 10 L8 5 L16 15 L24 3 L32 17 L40 8 L48 12 L60 10"
            stroke="hsl(145 100% 50%)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            filter="url(#arcGlow)"
          />
          <defs>
            <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      ))}

      {/* Small electric dots */}
      {bolts.map((bolt, i) => (
        <div
          key={`dot-${bolt.id}`}
          className="absolute rounded-full animate-flicker"
          style={{
            left: `${(bolt.x + 10 * i) % 95}%`,
            top: `${(bolt.y + 15) % 90}%`,
            width: "4px",
            height: "4px",
            background: "hsl(145 100% 60%)",
            boxShadow: "0 0 8px hsl(145 100% 50%), 0 0 16px hsl(145 100% 40%)",
            animationDelay: `${bolt.delay * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ElectricShock;

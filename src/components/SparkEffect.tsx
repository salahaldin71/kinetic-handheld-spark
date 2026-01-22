import { useEffect, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "spark" | "firework" | "twinkle";
}

const SparkEffect = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const generateSparks = () => {
      const newSparks: Spark[] = [];
      const sparkCount = 12;

      for (let i = 0; i < sparkCount; i++) {
        const types: ("spark" | "firework" | "twinkle")[] = ["spark", "firework", "twinkle"];
        newSparks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 1.5,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setSparks(newSparks);
    };

    generateSparks();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className={`absolute rounded-full ${
            spark.type === "firework" 
              ? "animate-burst" 
              : spark.type === "twinkle" 
                ? "animate-twinkle" 
                : "animate-spark"
          }`}
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: spark.type === "firework" ? spark.size * 2 : spark.size,
            height: spark.type === "firework" ? spark.size * 2 : spark.size,
            animationDelay: `${spark.delay}s`,
            animationDuration: `${spark.duration}s`,
            background: spark.type === "firework" 
              ? "radial-gradient(circle, hsl(145 100% 50%) 0%, hsl(145 100% 35%) 50%, transparent 70%)"
              : "hsl(145 100% 45%)",
            boxShadow: spark.type === "firework"
              ? "0 0 20px hsl(145 100% 50%), 0 0 40px hsl(145 100% 40%)"
              : `0 0 ${spark.size * 2}px hsl(145 100% 50%)`,
          }}
        />
      ))}
      
      {/* Extra firework rays */}
      {sparks.filter(s => s.type === "firework").map((spark) => (
        <div
          key={`rays-${spark.id}`}
          className="absolute animate-burst"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            animationDelay: `${spark.delay}s`,
            animationDuration: `${spark.duration * 1.2}s`,
          }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute bg-primary"
              style={{
                width: "2px",
                height: spark.size * 1.5,
                transform: `rotate(${angle}deg)`,
                transformOrigin: "bottom center",
                boxShadow: "0 0 6px hsl(145 100% 50%)",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SparkEffect;

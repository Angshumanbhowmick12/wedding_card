import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface HeartParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: HeartParticle[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 8 + Math.random() * 4,
          size: 16 + Math.random() * 24,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary opacity-30"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animation: `heart-float ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            fill: "currentColor",
          }}
        />
      ))}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Orb from "./Orb";

const navItems = [
  { name: "Profile", path: "/profile" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navigation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (path: string, index: number) => {
    setClickedIndex(index);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <motion.div
      className="relative flex w-screen h-screen bg-black p-16 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section background - behind everything */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4.5 + (i % 3),
            repeat: Infinity,
            delay: (i * 0.2) % 3,
          }}
        />
      ))}

      {/* Orb - above background, below nav cards */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          opacity: clickedIndex !== null ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.5 },
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            opacity: 1,
            transition: "all 0.5s ease",
          }}
        >
          <Orb
            hoverIntensity={5}
            rotateOnHover={false}
            hue={325}
            forceHoverState={true}
          />
        </div>
      </motion.div>
      {/* Navigation cards - above everything */}
      <div className="relative flex w-full h-full gap-x-10 z-20">
        <AnimatePresence mode="wait">
          {shouldAnimate &&
            navItems.map((item, index) => (
              <motion.div
                key={`${index}`}
                className="flex-1 relative overflow-hidden rounded-3xl flex items-center justify-center bg-black border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity:
                    clickedIndex !== null && clickedIndex !== index ? 0 : 1,
                  y: 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                  x: clickedIndex === index ? "0%" : "0%",
                  width: clickedIndex === index ? "100%" : "auto",
                  height: clickedIndex === index ? "100%" : "auto",
                  position: clickedIndex === index ? "absolute" : "relative",
                  top: 0,
                  left: 0,
                  zIndex: clickedIndex === index ? 50 : 20,
                }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1 + index * 0.15,
                  },
                  y: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1 + index * 0.15,
                  },
                  scale: { duration: 0.3, type: "spring", stiffness: 300 },
                  width: { duration: 0.5, ease: "easeInOut" },
                  height: { duration: 0.5, ease: "easeInOut" },
                }}
                style={{
                  boxShadow:
                    hoveredIndex === index && clickedIndex === null
                      ? "0 10px 30px rgba(59, 130, 246, 0.3), 0 0 5px #e0d9f6"
                      : "0 0 5px #e0d9f6",
                }}
                onClick={() => handleNavClick(item.path, index)}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                {/* Glare effect overlay */}
                <div
                  key={`shine-${index}-${hoveredIndex}`}
                  className={`absolute inset-0 rounded-3xl pointer-events-none ${
                    hoveredIndex === index ? 'shine-animation' : ''
                  }`}
                  style={{
                    background: `linear-gradient(135deg,
                        transparent 0%,
                        transparent 40%,
                        rgba(255, 255, 255, 0.1) 50%,
                        transparent 60%,
                        transparent 100%)`,
                    backgroundSize: "150% 150%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "-100% -100%",
                  }}
                />
                
                <motion.h1
                  className="font-primary text-white text-3xl tracking-wide uppercase z-10 relative"
                  animate={{
                    scale:
                      hoveredIndex === index && clickedIndex === null
                        ? 1.05
                        : 1,
                    letterSpacing:
                      hoveredIndex === index && clickedIndex === null
                        ? "0.1em"
                        : "0.05em",
                    opacity:
                      clickedIndex !== null && clickedIndex !== index
                        ? 0.85
                        : 1,
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 400, damping: 10 },
                    letterSpacing: { duration: 0.4, ease: "easeOut" },
                    opacity: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {item.name}
                </motion.h1>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navigation;

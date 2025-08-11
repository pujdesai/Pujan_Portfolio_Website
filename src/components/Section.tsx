import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-screen h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section provides: Background gradients, particles, and navigation */}
      
      {/* Animated background */}
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
      {[...Array(40)].map((_, i) => (
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

      {/* Navigation button - X in top right corner */}
      <motion.button
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center z-50"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </motion.button>

      {/* Section content goes here */}
      {children}
    </motion.div>
  );
};

export default Section;

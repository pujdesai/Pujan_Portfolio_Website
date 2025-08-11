import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const Profile: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showEmailCopied, setShowEmailCopied] = useState(false);
  const words = ["Developer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const next = (prev + 1) % words.length;
        console.log('Text changing from', prev, 'to', next, 'words:', words[next]);
        return next;
      });
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('desaip625@gmail.com');
      setShowEmailCopied(true);
      setTimeout(() => setShowEmailCopied(false), 2000);
    } catch (err) {
      // Fallback to mailto if clipboard fails
      window.location.href = 'mailto:desaip625@gmail.com';
    }
  };

  return (
    <>
      <Section>
      <div className="relative z-10 h-full flex items-center justify-center px-8 overflow-hidden">
        <div className="max-w-7xl w-full relative">
          {/* Main content grid */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-16 max-w-4xl w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-center space-y-8 flex flex-col h-full">
                {/* Top row - Logo and Icons */}
                <motion.div
                  className="absolute top-4 left-4 right-4 flex justify-between items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Logo */}
                  <img 
                    src="/assets/logo.png" 
                    alt="Logo" 
                    className="w-14 h-14 drop-shadow-lg"
                  />

                  {/* Icons */}
                  <div className="flex gap-3">
                    <motion.a
                      href="https://www.linkedin.com/in/pujan-desai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src="/assets/linkedin.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8 filter invert brightness-0"
                      />
                    </motion.a>

                    <motion.a
                      href="https://www.github.com/pujdesai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src="/assets/github.png" 
                        alt="GitHub" 
                        className="w-8 h-8 filter invert brightness-0"
                      />
                    </motion.a>

                    <motion.button
                      onClick={handleEmailClick}
                      className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-8 h-8" 
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <mask id="envelope-mask">
                            <rect width="24" height="24" fill="white"/>
                            <g transform="scale(0.75)" style={{ transformOrigin: 'center' }}>
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="black"/>
                            </g>
                          </mask>
                        </defs>
                        <circle cx="12" cy="12" r="12" fill="white" mask="url(#envelope-mask)"/>
                      </svg>
                    </motion.button>
                    
                  </div>
                </motion.div>

                {/* Main Content with Memoji */}
                <div className="flex items-center justify-center gap-16 mt-16 flex-1">
                  {/* Memoji Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <img 
                      src="/assets/image.png" 
                      alt="Pujan Desai Memoji" 
                      className="w-48 h-48 md:w-96 md:h-96 drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center space-y-6">
                    {/* Greeting */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <p className="text-xl text-white/80 font-secondary tracking-wide">
                        Hello, I'm
                      </p>
                    </motion.div>
                
                    {/* Name */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <h1 className="text-6xl font-primary text-white leading-none tracking-tight">
                        PUJAN DESAI
                      </h1>
                    </motion.div>

                    {/* Rolling Text Animation */}
                    <motion.div
                      className="h-16 flex items-center justify-center gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.0 }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentText}
                          className="flex items-center gap-3"
                        >
                          {/* Left side - rolls down */}
                          <div className="relative h-12 overflow-hidden flex items-center w-32">
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]"
                              initial={{ y: "-100%", opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: "100%", opacity: 0 }}
                              transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 300,
                                duration: 1 
                              }}
                            >
                              {words[currentText]}
                            </motion.span>
                          </div>
                          
                          {/* Static slash */}
                          <span className="text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]">/</span>
                          
                          {/* Right side - rolls up */}
                          <div className="relative h-12 overflow-hidden flex items-center w-32">
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]"
                              initial={{ y: "100%", opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: "-100%", opacity: 0 }}
                              transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 300,
                                duration: 1
                              }}
                            >
                              {words[(currentText + 1) % words.length]}
                            </motion.span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>

                    {/* Resume Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <motion.button
                        onClick={() => window.open('/assets/Pujan_Desai_Resume.pdf', '_blank')}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-secondary rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Resume
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </Section>

    {/* Email Copied Pop-up */}
    <AnimatePresence>
      {showEmailCopied && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          className="fixed top-6 inset-x-0 mx-auto w-fit z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 shadow-lg font-secondary text-white"
        >
          Email copied to clipboard!
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Profile;

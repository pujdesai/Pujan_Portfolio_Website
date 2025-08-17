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
      <div className="relative z-10 h-full flex items-center justify-center px-2 2xs:px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="max-w-7xl w-full relative">
          {/* Main content grid */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl xs:rounded-2xl md:rounded-2xl p-4 2xs:p-6 xs:p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-center space-y-4 2xs:space-y-6 xs:space-y-8 sm:space-y-8 md:space-y-8 flex flex-col h-full">
                {/* Top row - Logo and Icons */}
                <motion.div
                  className="absolute top-2 2xs:top-3 xs:top-4 sm:top-4 md:top-4 left-2 2xs:left-3 xs:left-4 sm:left-4 md:left-4 right-2 2xs:right-3 xs:right-4 sm:right-4 md:right-4 flex justify-between items-center hidden lg:flex"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Logo */}
                  <img 
                    src="/assets/logo.png" 
                    alt="Logo" 
                    className="w-8 h-8 2xs:w-10 2xs:h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 drop-shadow-lg"
                  />

                  {/* Icons */}
                  <div className="flex gap-2 2xs:gap-2 xs:gap-3 sm:gap-3">
                    <motion.a
                      href="https://www.linkedin.com/in/pujan-desai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 2xs:w-8 2xs:h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src="/assets/linkedin.png" 
                        alt="LinkedIn" 
                        className="w-6 h-6 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 sm:w-8 sm:h-8 filter invert brightness-0"
                      />
                    </motion.a>

                    <motion.a
                      href="https://www.github.com/pujdesai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 2xs:w-8 2xs:h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src="/assets/github.png" 
                        alt="GitHub" 
                        className="w-6 h-6 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 sm:w-8 sm:h-8 filter invert brightness-0"
                      />
                    </motion.a>

                    <motion.button
                      onClick={handleEmailClick}
                      className="w-8 h-8 2xs:w-8 2xs:h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-6 h-6 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 sm:w-8 sm:h-8" 
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
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 2xs:gap-6 xs:gap-8 sm:gap-12 md:gap-16 lg:gap-16 xl:gap-20 mt-12 2xs:mt-14 xs:mt-16 sm:mt-16 md:mt-16 lg:mt-16 flex-1">
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
                      className="w-32 h-32 2xs:w-36 2xs:h-36 xs:w-40 xs:h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center space-y-3 2xs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-6 lg:space-y-6">
                    {/* Greeting */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <p className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-white/80 font-secondary tracking-wide">
                        Hello, I'm
                      </p>
                    </motion.div>
                
                    {/* Name */}
                    <motion.div
                      className="space-y-1 2xs:space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <h1 className="text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-white leading-none tracking-tight">
                        PUJAN DESAI
                      </h1>
                    </motion.div>

                    {/* Rolling Text Animation */}
                    <motion.div
                      className="h-8 2xs:h-10 xs:h-12 sm:h-14 md:h-16 lg:h-14 xl:h-16 flex items-center justify-center gap-2 2xs:gap-3 xs:gap-3 sm:gap-3 md:gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.0 }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentText}
                          className="flex items-center gap-2 2xs:gap-3 xs:gap-3 sm:gap-3 md:gap-3"
                        >
                          {/* Left side - rolls down */}
                          <div className="relative h-6 2xs:h-8 xs:h-10 sm:h-12 md:h-12 lg:h-10 xl:h-12 overflow-hidden flex items-center w-20 2xs:w-24 xs:w-28 sm:w-32 md:w-32 lg:w-28 xl:w-32">
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]"
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
                          <span className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]">/</span>
                          
                          {/* Right side - rolls up */}
                          <div className="relative h-6 2xs:h-8 xs:h-10 sm:h-12 md:h-12 lg:h-10 xl:h-12 overflow-hidden flex items-center w-20 2xs:w-24 xs:w-28 sm:w-32 md:w-32 lg:w-28 xl:w-32">
                            <motion.span
                              className="absolute inset-0 flex items-center justify-center text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-secondary text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]"
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
                        className="px-4 py-2 2xs:px-5 2xs:py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 xl:px-8 xl:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-secondary rounded-lg transition-all duration-300 text-sm 2xs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base"
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
          className="fixed top-6 inset-x-0 mx-auto w-fit z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 2xs:px-6 xs:px-6 sm:px-6 md:px-6 py-2 2xs:py-3 xs:py-3 sm:py-3 md:py-3 shadow-lg font-secondary text-white text-sm 2xs:text-base xs:text-base sm:text-base md:text-base"
        >
          Email copied to clipboard!
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Profile;

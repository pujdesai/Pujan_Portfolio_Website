import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";

interface LoadingProps {
  onComplete: () => void;
}

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;

        const options: Intl.NumberFormatOptions = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          latest
        );

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, maxDecimals]);

  return <span className={className} ref={ref} />;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [showBar, setShowBar] = useState(false);
  const [fillComplete, setFillComplete] = useState(false);
  const [startBarFadeOut, setStartBarFadeOut] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "WELCOME...",
    "BUILDING PUJAN'S PROFILE...",
    "GATHERING PUJAN'S PROJECTS...",
    "DISPLAYING PUJAN'S SKILLS...",
    "WRAPPING UP! HOLD ON TIGHT..."
  ];

  useEffect(() => {
    const barTimeout = setTimeout(() => {
      setShowBar(true);
    }, 1500);
    return () => clearTimeout(barTimeout);
  }, []);

  useEffect(() => {
    if (showBar) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1.25; // 1.25% every 100ms = 100% in 8s (after 1.5s delay)
          
          // Show last message at 90%
          if (newProgress >= 90 && currentMessage < messages.length - 1) {
            setCurrentMessage(messages.length - 1);
          }
          
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [showBar, currentMessage]);

  useEffect(() => {
    if (showBar) {
      const messageInterval = setInterval(() => {
        setCurrentMessage(prev => {
          if (prev < messages.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 1800); // 1.8s per message for first 4 messages (7.2s total for 0-90%)

      return () => clearInterval(messageInterval);
    }
  }, [showBar]);

  useEffect(() => {
    if (fillComplete) {
      const fadeOutDelay = setTimeout(() => {
        setStartBarFadeOut(true);
      }, 1000);
      return () => clearTimeout(fadeOutDelay);
    }
  }, [fillComplete]);

  useEffect(() => {
    if (startBarFadeOut) {
      const doneTimeout = setTimeout(() => {
        setDone(true);
        onComplete();
      }, 1250);
      return () => clearTimeout(doneTimeout);
    }
  }, [startBarFadeOut, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="relative w-screen h-screen overflow-hidden bg-black"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: startBarFadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
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
          {[...Array(50)].map((_, i) => (
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

          {/* Skip Button - Bottom right corner */}
          <motion.button
            onClick={onComplete}
            className="absolute bottom-4 right-4 px-2 py-1 xs:px-3 xs:py-2 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-primary hover:bg-white/20 transition-all duration-300 z-50 text-xs xs:text-sm sm:text-sm md:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: startBarFadeOut ? 0 : 1, 
              scale: 1 
            }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>

          {showBar && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-20 px-2 xs:px-3 sm:px-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: startBarFadeOut ? 0 : 1,
                y: startBarFadeOut ? 20 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Cycling Text Messages - Responsive text size */}
              <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-primary text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-2 xs:px-3 sm:px-4">
                {messages[currentMessage]}
              </div>

              {/* Progress Bar - Responsive width */}
              <div className="w-64 xs:w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-1.5 xs:h-2 sm:h-2 md:h-3 bg-white/30 rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                <motion.div
                  className="h-full bg-white/90 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    onComplete: () => {
                      // Wait 1 second after reaching 100% before starting fade out
                      setTimeout(() => setFillComplete(true), 1000);
                    },
                  }}
                />
              </div>

              {/* Live Percentage with CountUp - Responsive text size */}
              <div className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-primary text-white">
                <CountUp
                  to={Math.round(progress)}
                  from={0}
                  duration={0.1}
                  startWhen={true}
                  className=""
                />%
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;

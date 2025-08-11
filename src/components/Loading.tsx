import React, { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
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
  const [startRobotFadeOut, setStartRobotFadeOut] = useState(false);
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
      const barFadeOutDelay = setTimeout(() => {
        setStartBarFadeOut(true);
      }, 500);
      return () => clearTimeout(barFadeOutDelay);
    }
  }, [fillComplete]);

  useEffect(() => {
    if (startBarFadeOut) {
      const robotFadeOutDelay = setTimeout(() => {
        setStartRobotFadeOut(true);
      }, 1250);
      return () => clearTimeout(robotFadeOutDelay);
    }
  }, [startBarFadeOut]);

  useEffect(() => {
    if (startRobotFadeOut) {
      const doneTimeout = setTimeout(() => {
        setDone(true);
        onComplete();
      }, 1250);
      return () => clearTimeout(doneTimeout);
    }
  }, [startRobotFadeOut, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="relative w-screen h-screen overflow-hidden bg-black"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: startRobotFadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          <motion.div
            className="relative z-10 flex items-center justify-center w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: startRobotFadeOut ? 0 : 1,
              y: 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Spline scene="https://prod.spline.design/SyN0I65y1uXR4oRs/scene.splinecode" />
            <div className="absolute bottom-4 right-4 w-40 h-14 bg-black z-20" />
          </motion.div>

          {/* Skip Button */}
          <motion.button
            onClick={onComplete}
            className="absolute bottom-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-primary hover:bg-white/20 transition-all duration-300 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>

          {showBar && (
            <motion.div
              className="absolute top-28 left-0 right-0 z-20 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: startBarFadeOut ? 0 : 1,
                y: startBarFadeOut ? 20 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Cycling Text Messages */}
              <div className="text-base text-white font-primary text-center mb-4">
                {messages[currentMessage]}
              </div>

              <div className="w-80 h-2 bg-white/30 rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-4">
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

              {/* Live Percentage with CountUp */}
              <div className="text-lg font-primary text-white">
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

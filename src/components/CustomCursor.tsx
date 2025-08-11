import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (!hoveredElement) return;

      const computedStyle = window.getComputedStyle(hoveredElement);
      const isPointerStyle = computedStyle.cursor === "pointer";

      let element: Element | null = hoveredElement;
      let isClickableElement = false;

      while (element && !isClickableElement) {
        const tagName = element.tagName.toLowerCase();
        isClickableElement = tagName === "a" || tagName === "button";
        element = element.parentElement;
      }

      setIsPointer(isPointerStyle || isClickableElement);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousemove", updateCursorType);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousemove", updateCursorType);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [position.x, position.y]);

  return (
    <>
      <style>
        {`
          .cursor-dot, .cursor-circle {
            pointer-events: none !important;
          }
          a, button, [role="button"] {
            cursor: none;
          }
        `}
      </style>
      <motion.div
        className="fixed cursor-dot z-[9999]"
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          pointerEvents: "none",
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="w-3 h-3 rounded-full relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(157, 78, 221, 0.9), rgba(95, 192, 231, 0.9))",
            boxShadow: "0 0 12px 4px rgba(157, 78, 221, 0.7)",
            pointerEvents: "none",
          }}
        >
          <div
            className="absolute inset-0 rounded-full mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.7), transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed cursor-circle z-50"
        style={{
          transform: `translate(${position.x - 16}px, ${
            position.y - 16
          }px) scale(${isPointer ? 1.2 : 1})`,
          opacity: isVisible ? (isPointer ? 0.9 : 0.6) : 0,
          pointerEvents: "none",
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", damping: 25, stiffness: 300 },
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-purple-300"
          style={{
            borderColor: "rgba(187, 107, 217, 0.8)",
            boxShadow: "0 0 15px 3px rgba(187, 107, 217, 0.5)",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;

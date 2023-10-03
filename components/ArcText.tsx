import React from "react";
import { motion } from "framer-motion";

interface ArcTextProps {
    text: string;
    circleRadius?: number;
  }

const ArcText: React.FC<ArcTextProps> = ({ text, circleRadius = 100 }) => {
  const characters = text.split("");
  const degreesPerLetter = 360 / characters.length;

  return (
    <motion.div
      style={{
        position: "relative",
        fontWeight:700,
        height: 2 * circleRadius,
        width: 2 * circleRadius,
      }}
      initial={{ rotate: 360 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {characters.map((char, index) => {
        const charRotation = index * degreesPerLetter;
        // Adjust by 90 degrees so bottom of character points to circle's center
        const transform = `rotate(${charRotation}deg) translate(${circleRadius}px) rotate(90deg)`;
        return (
          <span
            key={index}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "50%",
              transformOrigin: "0% 0%",
              transform: transform,
              whiteSpace: "nowrap",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
};

export default ArcText;

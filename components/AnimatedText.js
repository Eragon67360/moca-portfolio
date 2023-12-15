import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AnimatedTextCharacter = () => {
  const t = useTranslations("Home");
  const text1 = t("HomeScreen.banner_1");
  const text2 = t("HomeScreen.banner_2");

  const letters1 = Array.from(text1);
  const letters2 = Array.from(text2);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{
          overflow: "hidden",
          display: "flex",
          paddingBottom: 8,
        }}
        className="text-light_ink dark:text-dark_ink"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters1.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        style={{
          overflow: "hidden",
          display: "flex",
          paddingBottom: 8,
        }}
        className="text-light_secondary dark:text-dark_ink"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters2.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedTextCharacter;

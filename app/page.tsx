"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import image_desktop from "@/public/desktop.jpg";
import photo1 from "@/public/photo1.jpg";
import photo2 from "@/public/photo2.jpg";
import photo3 from "@/public/photo3.jpg";

import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useAnimation,
  useTransform,
  MotionValue,
  Variants,
  useInView,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function interpolateColor(
  startColor: string,
  endColor: string,
  factor: number
): string {
  const [r1, g1, b1] = hexToRgb(startColor);
  const [r2, g2, b2] = hexToRgb(endColor);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string): [number, number, number] {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0];

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
}

export default function Home() {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowScroll, setWindowScroll] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    setWindowScroll(window.scrollY);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    console.log("middle");
    const handleScroll = () => {
      const middleOfScreen = windowHeight / 2;
      if (window.scrollY >= middleOfScreen) {
        setIsFixed(true);
        console.log("middle");
      } else {
        setIsFixed(false);
        console.log("not middle");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight, windowScroll]);

  const scrollPercentage = windowHeight
    ? Math.min(scrollY / windowHeight, 1)
    : 0;

  return (
    <div className="relative h-max overflow-clip bg-linen">
      <div className="sticky inset-0 z-10 flex flex-col items-center justify-start radial-bg pb-14">
        <p className="p-40 text-center select-none font-impact font-normal text-8xl bg-transparent text-falured mt-32">
          Crafting Experiences, Shaping Futures: Your UX Design Partner
        </p>
        <Image
          className="mt-10"
          src={image_desktop}
          width={800}
          alt="desktop image"
        />
      </div>

      <motion.div viewport={{ once: false, amount: 0.8 }} className="w-screen bg-blackbean">
        <AnimatePresence>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <div className="h-[60vh] flex justify-center items-center bg-blackbean">
              {isFixed && (
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  }}
                  exit={{
                    x: 200,
                    opacity: 0,
                    transition: {
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false, amount: 0.8 }}
                  className="fixed top-1/2 transform -translate-y-1/2 font-impact text-7xl"
                >
                  Featured work
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <div className=" relative z-10 h-[80vh] flex flex-col justify-start items-center pt-24 bg-blackbean">
            <div className="text-center font-impact text-6xl text-white flex items-stretch space-x-32">
              <motion.div
                className="card-container"
                initial={{ y: 300 }}
                whileInView={{
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.7,
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="splash" />
                <motion.div variants={cardVariants}>
                  <Image
                    className="card"
                    src={photo2}
                    width={400}
                    alt="photo2"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container"
                initial={{ y: 300 }}
                whileInView={{
                  y: -150,
                  transition: {
                    type: "spring",
                    bounce: 0.7,
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="splash" />
                <motion.div variants={cardVariants}>
                  <Image
                    className="card"
                    src={photo1}
                    width={400}
                    alt="photo1"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container"
                initial={{ y: 300 }}
                whileInView={{
                  y: 150,
                  transition: {
                    type: "spring",
                    bounce: 0.7,
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="splash" />
                <motion.div variants={cardVariants}>
                  <Image
                    className="card"
                    src={photo3}
                    width={400}
                    alt="photo3"
                  />
                </motion.div>
              </motion.div>
            </div>
            <Link href="/work" className="bg-linen mt-24 text-falured font-impact text-3xl uppercase px-8 py-4 border border-falured rounded-full">
              <div >
                All work
              </div>
            </Link>
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

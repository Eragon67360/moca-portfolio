"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import image_desktop from "@/public/desktop.jpg";
import photo1 from "@/public/photo1.jpg"
import photo2 from "@/public/photo2.jpg"
import photo3 from "@/public/photo3.jpg"
import {
  motion,
  useScroll,
  useSpring,
  useAnimation,
  useTransform,
  MotionValue,
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
  const [scrollY, setScrollY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (2*window.innerHeight)) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const scrollPercentage = windowHeight
    ? Math.min(scrollY / windowHeight, 1)
    : 0;

  const middleTranslateY = Math.max(100 - scrollPercentage * 100, 0);
  const middleOpacity = scrollPercentage <= 1 ? 1 : 2 - scrollPercentage;

  const bottomOpacity = scrollPercentage > 1.5 ? scrollPercentage - 1.5 : 0;

  return (
    <div className="relative h-screen overflow-y-scroll bg-linen">
      <div className="sticky inset-0 z-10 flex flex-col items-center justify-start radial-bg">
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

      <div className="relative z-10">
        <motion.div
          animate={controls}
          className="relative pt-screen bg-red-300"
        >
          
          <div className="h-screen flex justify-center items-center bg-blackbean">
            <div className="text-center font-impact text-6xl text-white">
              Featured work
            </div>
          </div>
        </motion.div>

        <div className="h-screen flex justify-center items-center bg-blackbean">
          <div className="text-center font-impact text-6xl text-white flex items-stretch space-x-10">
            <Image src={photo1} width={400} alt="photo1"/>
            <Image src={photo2} width={400} alt="photo2"/>
            <Image src={photo3} width={400} alt="photo3"/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

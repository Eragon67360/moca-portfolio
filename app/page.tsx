"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/Laptop";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3, // 2 seconds duration
        delay: 0.5, // 1 second delay
      },
    },
  };

  const router = useRouter();
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setIsZoomed(true);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const laptopVariants: Variants = {
    initial: {
      x: "0%",
      y: "0%",
      scale: 1,
    },
    animate: {
      x: "-50%",
      y: "50%",
      scale: 2,
      transition: {
        stiffness: 260,
        damping: 20,
        duration: 3,
      },
    },
  };

  return (
    <div className="flex h-screen radial-bg">
      <p className="select-none font-impact font-normal text-8xl bg-transparent text-tekhelet w-1/2 ml-28 mt-64">
        Crafting Experiences, Shaping Futures: Your UX Design Partner
      </p>
      <div className="h-full w-1/2">
        <motion.div
          className="h-full"
          variants={laptopVariants}
          initial="initial"
          animate={isZoomed ? "animate" : "initial"}
          // onAnimationComplete={() => {
          //   // Navigate to another page or reveal the hidden section
          //   router.push("/work");
          //   // OR
          //   // Set some state to reveal the hidden section
          // }}
        >
          <Canvas camera={{ fov: 20, position: [0, 2, 0] }}>
            <ambientLight intensity={5} />
            <Model rotation={[-Math.PI / 2, Math.PI, 0]} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}

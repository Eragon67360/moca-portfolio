"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/Laptop";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 3,  // 2 seconds duration
        delay: 0.5      // 1 second delay
      } 
    }
  };

  return (
    <div className="flex flex-col h-screen radial-bg">
      <p className="select-none font-impact font-normal text-5xl bg-transparent text-third w-[771px] ml-28 mt-64">
        Crafting Experiences, Shaping Futures: Your UX Design Partner
      </p>
      <div className="h-full">
        <motion.div className="h-full" initial="hidden" animate="visible" variants={fadeIn}>
          <Canvas camera={{ fov: 20, position: [0, 2, 0] }}>
            <ambientLight intensity={5} />
            <Model rotation={[-Math.PI / 2, Math.PI, 0]} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}

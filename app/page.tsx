"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/Laptop";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex h-screen radial-bg">
      <p className="absolute left-0 w-1/3 select-none font-impact font-normal text-8xl bg-transparent text-tekhelet ml-28 mt-64">
        Crafting Experiences, Shaping Futures: Your UX Design Partner
      </p>
      <div className="h-full absolute right-0 w-full ">
        <motion.div className="h-full flex items-end">
          <Canvas camera={{ fov: 20, position: [0, 2, 0] }}>
            <ambientLight intensity={5} />
            <Model rotation={[-Math.PI / 2, Math.PI, 0]} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/Laptop";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex w-screen h-screen bg-gradient-to-b from-purple to-tekhelet">
      <p className="w-2/3 select-none font-impact font-normal text-8xl bg-transparent text-tekhelet ml-28 mt-64">
        Crafting Experiences, Shaping Futures: Your UX Design Partner
      </p>
      <div className="h-96 w-1/3 mt-64 mr-28 bg-purple rounded-xl">
        <Link href={"/featuredwork"} className="">
          <div className="w-full text-center pr-24 h-full flex items-center justify-center text-2xl">
            Image Placeholder Click Me!
          </div>
        </Link>

        {/* <motion.div className="h-full flex items-end">
          <Canvas camera={{ fov: 20, position: [0, 2, 0] }}>
            <ambientLight intensity={5} />
            <Model rotation={[-Math.PI / 2, Math.PI, 0]} />
          </Canvas>
        </motion.div> */}
      </div>
    </div>
  );
}

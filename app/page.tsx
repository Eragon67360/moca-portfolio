"use client"
import Image from "next/image";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/Laptop";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className="flex flex-col h-screen radial-bg">
      <p className="font-impact font-normal text-5xl text-third w-[771px] ml-28 mt-64">
        Crafting Experiences, Shaping Futures: Your UX Design Partner
      </p>
      <div className="h-full">
        <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
          <ambientLight intensity={5} />
          <OrbitControls enableZoom={true} />
          <Model />
        </Canvas>
      </div>
    </div>
  );
}

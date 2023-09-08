import React from "react";
import Image from "next/image";
import panda from "@/public/panda.jpg";
export default function FeaturedWork() {
  return (
    <div className="h-full w-full">
      <Image src={panda} alt="panda bg" />
    </div>
  );
}

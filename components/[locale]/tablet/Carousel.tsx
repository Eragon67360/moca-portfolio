import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-carousel3";
import tablet_base from "@/public/tablets/tablet_base_transparent.png";

function CarouselComponent({ items }: { items: any }) {
  const images = [tablet_base, tablet_base, tablet_base];

  const style = {
  };
  return (
    <>
      <div className="relative left-12 flex justify-center items-center">
        <Carousel
          height={460}
          width={960}
          autoPlay={false}
        >
          <div key={1} style={style} className="">
            {items[0]}
          </div>
          <div key={2} style={style}>
            {items[1]}
          </div>
          <div key={3} style={style}>
            {items[2]}
          </div>
          <div key={4} style={style}>
            {items[3]}
          </div>
          <div key={5} style={style}>
            {items[4]}
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;

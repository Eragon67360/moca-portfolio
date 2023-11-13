"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Carousel } from "react-carousel3";

function CarouselComponent({ items }: { items: any }) {
  const style = {};

  return (
    <>
      <div className="relative left-12 flex justify-center items-center z-10">
        <Carousel height={460} width={650} autoPlay={true}>
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

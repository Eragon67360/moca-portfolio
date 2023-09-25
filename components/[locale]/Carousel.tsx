"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import data from "@/data/projects/projects.json";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Carousel({
  currentSlide,
  setCurrentSlide,
}: {
  currentSlide: number;
  setCurrentSlide: any;
}) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [carousel]
  );
  const dataArray = Object.values(data);
  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {dataArray.map((item) => (
            <div className="relative z-10 carousel__cell" key={item.id}>
              <Image
                src={`/img/${item.imageName}`}
                alt="img"
                width={400}
                height={200}
                className="shadow-md transition transform duration-200 hover:scale-150"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

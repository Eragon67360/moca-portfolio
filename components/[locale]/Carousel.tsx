"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import data from "@/data/projects/projects.json";
import Link from "next/link";

export default function Carousel({
  currentSlide,
  setCurrentSlide,
}: {
  currentSlide: number;
  setCurrentSlide: any;
}) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const dataArray = Object.values(data);
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center space-y-4">
        <div className="w-full flex flex-col justify-center px-6">
          <div ref={ref} className="keen-slider">
            {dataArray.map((item) => (
              <div
                className="keen-slider__slide flex items-center justify-center"
                key={item.id}
              >
                <Image
                  src={`/img/${item.imageName}`}
                  alt="img"
                  width={250}
                  height={100}
                  className="shadow-md transition transform duration-200 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center px-6">
          <div className="flex space-x-8 justify-center">
            <Link
              href={dataArray[currentSlide].linkPage}
              className="border p-2 dark:hover:bg-light_background dark:hover:text-light_ink rounded-full hover:bg-dark_surface hover:text-dark_ink"
            >
              Learn more
            </Link>
            <a
              href={dataArray[currentSlide].linkOnline}
              target="_blank"
              className="border p-2 dark:hover:bg-light_background dark:hover:text-light_ink rounded-full hover:bg-dark_surface hover:text-dark_ink"
            >
              Link to Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { ProjectComponent } from "./ProjectComponent";
import Image from "next/image";
import computer from "@/public/img/computer.png";
import Link from "next/link";
import Carousel from "@/components/[locale]/Carousel";
import data from "@/data/projects/projects.json";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dataArray = Object.values(data);

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex flex-col h-[50vh] mx-32 items-start justify-end">
          <h1 className="font-bold text-4xl">
            {dataArray[currentSlide].title}
          </h1>
          <h2 className="font-bold text-3xl">
            {dataArray[currentSlide].description}
          </h2>
        </div>

        <div className="flex mx-12 h-[50vh]">
          <Carousel
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
          <Image
            src={`/img/${dataArray[currentSlide].imageName}`}
            alt="image presenter"
            width={540}
            height={300}
            className=" w-1/2"
          />
        </div>
      </div>
    </>
  );
}

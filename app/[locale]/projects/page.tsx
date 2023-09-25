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
      <div className="flex flex-col h-screen">
        <h1 className="font-bold text-2xl text-center py-16">
          Projets
        </h1>
        <Carousel
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <h1 className="font-bold text-2xl text-center py-16">
          {dataArray[currentSlide].title}
        </h1>
        <div className="flex space-x-8 justify-center">
          <Link
            href={dataArray[currentSlide].linkPage}
            className="border p-2 dark:hover:bg-secondary dark:hover:text-third rounded-full hover:bg-falured hover:text-secondary"
          >
            Learn more
          </Link>
          <a
            href={dataArray[currentSlide].linkOnline}
            target="_blank"
            className="border p-2 dark:hover:bg-secondary dark:hover:text-third rounded-full hover:bg-falured hover:text-secondary"
          >
            Link to Project
          </a>
        </div>
      </div>
    </>
  );
}

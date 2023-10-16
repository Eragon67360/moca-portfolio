import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import photo1 from "@/public/home/photo1.jpg";
import photo2 from "@/public/home/photo2.png";
import photo3 from "@/public/home/photo3.png";
import photo4 from "@/public/home/photo4.jpg";


const FeaturedProjects = () => {
  const images = [
    { src: photo3, alt: "placeholder1" },
    { src: photo3, alt: "placeholder2" },
    { src: photo3, alt: "placeholder3" },
    { src: photo3, alt: "placeholder4" },
  ];

  return (
    <>
      <div
        id="featuredprojects"
        className="bg-lightblue dark:bg-darkblue flex flex-col items-center justify-center space-y-24 px-8"
      >
        <div className="flex flex-col text-secondary text-center pt-16">
          <h2 className="font-semibold text-2xl">Featured</h2>
          <h3 className="font-bold text-4xl mt-4">Projects</h3>
          <div className="mt-12">
            <a
              href="https://www.figma.com/proto/YEy2gUHLOPlRRQBLUwXjP5/Sample-Work?type=design&node-id=1-3&t=17PjClufX2rFEgxL-1&scaling=min-zoom&page-id=0%3A1&mode=design"
              aria-label="See projects"
              target="_blank"
              className="bg-secondary text-falured font-bold uppercase px-8 py-3 rounded-full"
            >
              See more
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 justify-evenly w-full">
          {images.map((image, idx) => (
              <div
                key={idx}
                className="bg-secondary flex flex-col w-[300px] relative h-[300px]"
              >
                {" "}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  style={{
                    height: "auto",
                    position: "absolute",
                    top: "50px",
                    left: "30px",
                  }}
                />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  style={{
                    height: "auto",
                    position: "absolute",
                    bottom: "50px",
                    right: "30px",
                    zIndex: 1,
                  }}
                />
              </div>
            ))}
        </div>

        <div className="h-24"></div>
      </div>
    </>
  );
};

export default FeaturedProjects;

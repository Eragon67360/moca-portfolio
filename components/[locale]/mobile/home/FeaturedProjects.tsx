import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const FeaturedProjects = () => {
  return (
    <>
      <div
        id="featuredprojects"
        className="bg-lightblue dark:bg-darkblue flex flex-col items-center justify-center space-y-24 px-8"
      >
        <div className="flex flex-col text-secondary text-center pt-16">
          <h1 className="font-semibold text-2xl">Featured</h1>
          <h1 className="font-bold text-4xl mt-4">Projects</h1>
          <div className="mt-12">
            <button className="bg-secondary text-falured font-bold uppercase px-8 py-3 rounded-full">
              See more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-3  justify-evenly">
          <div className="bg-secondary flex flex-col w-[366px]">
            <Image src={logo} alt="placeholder" width={100} />
            <Image src={logo} alt="placeholder" width={100} />
          </div>
          <div className="bg-secondary flex flex-col w-[366px]">
            <Image src={logo} alt="placeholder" width={100} />
            <Image src={logo} alt="placeholder" width={100} />
          </div>
          <div className="bg-secondary flex flex-col w-[366px]">
            <Image src={logo} alt="placeholder" width={100} />
            <Image src={logo} alt="placeholder" width={100} />
          </div>
          <div className="bg-secondary flex flex-col w-[366px]">
            <Image src={logo} alt="placeholder" width={100} />
            <Image src={logo} alt="placeholder" width={100} />
          </div>
        </div>

        <div className="h-24"></div>
      </div>
    </>
  );
};

export default FeaturedProjects;

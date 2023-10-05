import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const FeaturedProjects = () => {
  return (
    <>
      <div
        id="featuredprojects"
        className="bg-lightblue dark:bg-darkblue flex flex-col items-center justify-center space-y-24"
      >
        <div className="flex flex-col text-secondary text-center pt-16">
          <h1 className="font-bold text-4xl">Featured</h1>
          <h1 className="font-bold text-6xl mt-4">Projects</h1>
          <div className="mt-12">
            <button className="bg-secondary text-falured text-2xl font-bold uppercase px-8 py-3 rounded-full">
              See more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 justify-center">
          <div className="bg-secondary flex flex-col w-[500px]">
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-[500px]">
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-[500px]">
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-[500px]">
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={200} style={{'height':'auto'}}/>
          </div>
        </div>

        <div className="h-24"></div>
      </div>
    </>
  );
};

export default FeaturedProjects;

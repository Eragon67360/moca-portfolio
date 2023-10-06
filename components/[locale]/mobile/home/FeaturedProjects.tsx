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
          <h2 className="font-semibold text-2xl">Featured</h2>
          <h3 className="font-bold text-4xl mt-4">Projects</h3>
          <div className="mt-12">
            <button className="bg-secondary text-falured font-bold uppercase px-8 py-3 rounded-full">
              See more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-3 justify-evenly w-full">
          <div className="bg-secondary flex flex-col w-full p-8">
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-full p-8">
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-full p-8">
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
          </div>
          <div className="bg-secondary flex flex-col w-full p-8">
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
            <Image src={logo} alt="placeholder" width={100} style={{'height':'auto'}}/>
          </div>
        </div>

        <div className="h-24"></div>
      </div>
    </>
  );
};

export default FeaturedProjects;

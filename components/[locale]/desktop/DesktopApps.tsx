import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";

const DesktopApps = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 mt-9  text-blackbean">
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2 ">
            <FiGlobe size={45} />
            <h1 className="text-2xl font-semibold">Websites</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2">
            <AiOutlineMobile size={45} />
            <h1 className="text-2xl font-semibold">Mobile Apps</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2">
            <SiAdobeindesign size={45} />
            <h1 className="text-2xl font-semibold">Design systems</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2">
            <AiOutlineCloudServer size={45} />
            <h1 className="text-2xl font-semibold">SAAS</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2">
            <GiWireframeGlobe size={45} />
            <h1 className="text-2xl font-semibold">Wireframes</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
        <div className="w-1/3 flex justify-center md:w-1/6">
          <div className="bg-linen rounded-xl flex flex-col text-center justify-center items-center p-4 space-y-2">
            <MdAlternateEmail size={45} />
            <h1 className="text-2xl font-semibold">Email graphics</h1>
            <h2>Catchy text blablabla</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopApps;

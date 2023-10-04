import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const UXSolutions = () => {
  return (
    <>
      <div className="">
        <div className="bg-white dark:bg-blackbean flex flex-col h-full pt-40 pb-40 justify-start items-center text-center select-none  space-y-12">
          <p className="font-bold text-5xl text-blackbean dark:text-secondary">
            Our Tailored UX Solutions
          </p>
          <div className="flex justify-evenly pt-14 space-x-10 mx-24">
            <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
              <AiOutlineFundProjectionScreen size={50} />
              <h1 className="font-semibold text-2xl">New Project</h1>
              <p>
                Complete new design from zero, just tell us what you need and we
                will work hard to make it real.
              </p>
            </div>
            <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
              <AiOutlineFundProjectionScreen size={50} />
              <h1 className="font-semibold text-2xl">Redesign</h1>
              <p>
                If you wan to give a more fresh look to your website or mobile
                application this is what you need.
                <br />
                <br />
                We will make sure to give you a website that suits new tendances
                but still follows your brand identity
              </p>
            </div>
            <div className="flex flex-col text-centerjustify-start items-center space-y-4 px-8">
              <AiOutlineFundProjectionScreen size={50} />
              <h1 className="font-semibold text-2xl">Follow-up</h1>
              <p>
                Updates, improvements and changes of an already existing website
                or mobile application.
                <br />
                <br />
                You can ask for an especific change or subscripte to our plans
                to get your website always updated!
              </p>
            </div>
          </div>

          <Image src={logo} alt="tail" />

          <div className="text-blackbean dark:text-white mt-12 w-1/2 flex flex-col rounded-2xl border-4 border-falured dark:border-cinnabar mx-80 p-8 space-y-8 bg-linen dark:bg-falured">
            <h1 className="text-4xl font-bold">
              Design is not just what it looks like;<br/> design is how it works
            </h1>
            <h2 className="text-2xl font-semibold">Steve Jobs</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UXSolutions;

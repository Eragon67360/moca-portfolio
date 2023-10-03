import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";

const Plans = () => {
  return (
    <>
      <div id="pricings" className="pt-24 bg-linen flex flex-col items-center">
        <div className="text-5xl text-blackbean font-bold text-center">
          Plans
        </div>
        <div className="mt-24 flex flex-wrap gap-8 text-blackbean dark:text-secondary">
          <div className="bg-secondary dark:bg-blackbean flex flex-col p-12 rounded-2xl shadow-2xl">
            <h1 className="font-bold text-2xl">Standard</h1>
            <h2 className="font-bold text-5xl mt-8">€500/m</h2>
            <h3 className="text-base">Pause or cancel anytime</h3>
            <div className="flex justify-center mt-8">
              <button className="w-full py-2 rounded-lg bg-blackbean dark:bg-linen text-secondary dark:text-blackbean">
                Get started
              </button>
            </div>
          </div>

          <div className="bg-secondary dark:bg-blackbean flex flex-col p-12 rounded-2xl shadow-2xl">
            <h1 className="font-bold text-2xl">Pro</h1>
            <h2 className="font-bold text-5xl mt-8">€800/m</h2>
            <h3 className="text-base">Pause or cancel anytime</h3>
            <div className="flex justify-center mt-8">
              <button className="w-full py-2 rounded-lg bg-blackbean dark:bg-linen text-secondary dark:text-blackbean">
                Get started
              </button>
            </div>
          </div>

          <div className="bg-secondary dark:bg-blackbean flex flex-col p-12 rounded-2xl shadow-2xl">
            <h1 className="font-bold text-2xl">Personalized</h1>
            <h2 className="font-bold text-5xl mt-8">€~/m</h2>
            <h3 className="text-base">Pause or cancel anytime</h3>
            <h3 className="flex justify-center mt-8">
              Book a call to have more informations
            </h3>
          </div>

          <div className="flex flex-col p-12 rounded-2xl shadow-2xl justify-between">
            <div className="flex flex-col space-y-4 ">
              <div className="flex justify-center text-blackbean">
                <BsCalendarEvent size={50} />
              </div>

              <div className="text-blackbean text-center">Book a call</div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="w-full py-2 rounded-lg bg-blackbean dark:bg-linen text-secondary dark:text-blackbean flex space-x-4 border border-blackbean px-4">
                <span className="font-semibold">Book now</span>
                <MdOutlineOpenInNew size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="h-24" />
      </div>
    </>
  );
};

export default Plans;

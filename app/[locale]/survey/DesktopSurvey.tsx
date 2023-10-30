"use client";
import React, { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "@/components/[locale]/desktop/survey/Dropdown";

const DesktopSurvey = () => {
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSelectionChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  const sales = ["0-10", "11-50", "51-100", "101-500", "500+"];
  const ages = ["18-24", "25-34", "35-44", "45-54", "54-65", "66+"];
  const genders = [
    "Male",
    "Female",
    "Non-binary",
    "Other",
    "I prefer not to say",
  ];

  const educations = [
    "Secondary",
    "High school",
    "Bachelor's degree",
    "Master's degree",
    "Other",
  ];

  const family_status = [
    "Single",
    "Married",
    "Separated",
    "Divorced",
    "Widowed",
    "I prefer not to say",
  ];

  return (
    <>
      <div className="flex w-screen bg-linen py-[124px]  justify-center items-center">
        <div className="w-[810px] h-full rounded-2xl bg-secondary p-8 shadow-lg space-y-4 ">
          <p className="text-center text-5xl font-bold w-full text-third">
            Website Survey
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-full py-[6px] px-[18px] text-third dark:bg-secondary"
                id="fullname"
                name="given-name"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-full py-[6px] px-[18px] text-third dark:bg-secondary"
                id="email"
                name="email"
                type="text"
                placeholder="E-Mail"
              />
            </div>
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-full py-[6px] px-[18px] text-third dark:bg-secondary"
                id="company"
                name="company"
                type="text"
                placeholder="Company"
              />
            </div>

            <p className="text-third">What kind of website do you need?</p>
            <div className="flex space-x-3">
              <button className="appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary">
                Showcase site
              </button>
              <button className="appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary">
                Online shop
              </button>
            </div>

            <p className="text-third">
              If it&apos;s an online shop, how many products do you sell?
            </p>
            <div className="flex space-x-3">
              {sales.map((name) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => handleSelectionChange(name)}
                  className="border border-cinnabar rounded-full transform transition duration-500 hover:scale-110"
                >
                  <div
                    className={`appearance-none hover:bg-cinnabar hover:text-white rounded-full w-full py-0.5 px-3  ${
                      selectedSubject === name
                        ? "bg-cinnabar text-white"
                        : "bg-white text-third"
                    }`}
                  >
                    {name}
                  </div>
                </button>
              ))}
            </div>

            <p className="text-third">
              Are there any specific demographics or user personas to consider?
            </p>
            <div className="flex space-x-3">
              <button
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  isOpenGeneral === true
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenGeneral(true)}
              >
                Yes
              </button>
              <button
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  isOpenGeneral === false
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenGeneral(false)}
              >
                No
              </button>
            </div>
            <AnimatePresence>
              {isOpenGeneral && (
                <div className="flex space-x-3">
                  <Dropdown
                    options={ages}
                    onSelect={handleSelectionChange}
                    placeholder="Age"
                  />
                  <Dropdown
                    options={genders}
                    onSelect={handleSelectionChange}
                    placeholder="Gender"
                  />
                  <Dropdown
                    options={educations}
                    onSelect={handleSelectionChange}
                    placeholder="Education"
                  />
                  <Dropdown
                    options={family_status}
                    onSelect={handleSelectionChange}
                    placeholder="Family status"
                  />
                </div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-start space-x-2">
              <button
                disabled={false}
                className="bg-white border border-falured uppercase disabled:border-gray-400 disabled:text-gray-400 hover:disabled:text-gray-400 hover:disabled:border-gray-400 hover:enabled:text-secondary hover:enabled:bg-falured text-black font-bold py-0.5 px-2 rounded-full"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DesktopSurvey;

"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "@/components/[locale]/desktop/survey/Dropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DesktopSurvey = () => {
  const [isOpenSpecifications, setIsOpenSpecifications] = useState(false);
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleSelectionChangeYN = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectionChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleMultiSelectionChange = (name: string) => {
    if (selectedFeatures.includes(name)) {
      setSelectedFeatures((prevFeatures: any[]) =>
        prevFeatures.filter((lang) => lang !== name)
      );
    } else {
      setSelectedFeatures((prevFeatures: any) => [...prevFeatures, name]);
    }
  };

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const formData = new FormData();

    // Append each file to the form data
    uploadedFiles.forEach((file: string | Blob, index: any) => {
      formData.append(`file${index}`, file);
    });

    console.log(formData);

    // Send the form data to the server
    await fetch("/api/submitSurvey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
  }

  function addFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles && newFiles.length > 0) {
      setUploadedFiles((prevFiles: any) => [
        ...prevFiles,
        ...Array.from(newFiles),
      ]);

      const formData = new FormData();

      for (let i = 0; i < newFiles.length; i++) {
        formData.append("files", newFiles[i]);
      }
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error uploading files:", error);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((prevFiles: any[]) =>
      prevFiles.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

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

  const languages = ["1", "2", "3", "4", "5 or more"];
  const features = ["Contact form", "E-Commerce", "Blog", "User login"];

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
                  isOpenSpecifications === true
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenSpecifications(true)}
              >
                Yes
              </button>
              <button
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  isOpenSpecifications === false
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenSpecifications(false)}
              >
                No
              </button>
            </div>
            <AnimatePresence>
              {isOpenSpecifications && (
                <div className="flex flex-col space-y-4">
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
                  <div className="flex items-center  text-cinnabar">
                    <button onClick={addFiles}>+ Add files</button>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={onFileChange}
                      accept=".pdf, image/png, image/jpeg, image/svg+xml"
                      multiple // Remove this if you want to select only one file at a time
                    />
                  </div>
                  {uploadedFiles.length > 0 && (
                    <ul className="mt-4">
                      {uploadedFiles.map((file, index) => (
                        <li
                          key={index}
                          className="text-cinnabar text-xs flex items-center space-x-2"
                        >
                          <span>{file.name}</span>
                          <button onClick={() => removeFile(index)}>
                            {""}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="14"
                              viewBox="0 0 11 14"
                              fill="none"
                            >
                              <path
                                d="M7.20241 13.2417H3.36151C2.72484 13.2417 2.11424 12.9887 1.66405 12.5385C1.21385 12.0884 0.960938 11.4778 0.960938 10.8411V5.07972C0.960938 4.95239 1.01152 4.83027 1.10156 4.74023C1.1916 4.65019 1.31372 4.59961 1.44105 4.59961C1.56839 4.59961 1.6905 4.65019 1.78054 4.74023C1.87058 4.83027 1.92116 4.95239 1.92116 5.07972V10.8411C1.92116 11.2231 2.07291 11.5894 2.34303 11.8596C2.61315 12.1297 2.9795 12.2814 3.36151 12.2814H7.20241C7.58442 12.2814 7.95077 12.1297 8.22089 11.8596C8.49101 11.5894 8.64276 11.2231 8.64276 10.8411V5.07972C8.64276 4.95239 8.69334 4.83027 8.78338 4.74023C8.87342 4.65019 8.99553 4.59961 9.12287 4.59961C9.2502 4.59961 9.37232 4.65019 9.46236 4.74023C9.5524 4.83027 9.60298 4.95239 9.60298 5.07972V10.8411C9.60298 11.4778 9.35007 12.0884 8.89987 12.5385C8.44968 12.9887 7.83909 13.2417 7.20241 13.2417Z"
                                fill="#DF482B"
                              />
                              <path
                                d="M10.0824 3.63796H0.480114C0.35278 3.63796 0.230661 3.58738 0.140622 3.49734C0.0505833 3.4073 0 3.28518 0 3.15785C0 3.03051 0.0505833 2.9084 0.140622 2.81836C0.230661 2.72832 0.35278 2.67773 0.480114 2.67773H10.0824C10.2097 2.67773 10.3318 2.72832 10.4219 2.81836C10.5119 2.9084 10.5625 3.03051 10.5625 3.15785C10.5625 3.28518 10.5119 3.4073 10.4219 3.49734C10.3318 3.58738 10.2097 3.63796 10.0824 3.63796Z"
                                fill="#DF482B"
                              />
                              <path
                                d="M7.20188 3.63849H3.36097C3.23364 3.63849 3.11152 3.58791 3.02148 3.49787C2.93144 3.40783 2.88086 3.28571 2.88086 3.15838V2.19815C2.88086 1.81615 3.03261 1.44979 3.30273 1.17968C3.57284 0.909562 3.9392 0.757813 4.3212 0.757812H6.24165C6.62366 0.757813 6.99001 0.909562 7.26013 1.17968C7.53025 1.44979 7.682 1.81615 7.682 2.19815V3.15838C7.682 3.28571 7.63141 3.40783 7.54137 3.49787C7.45134 3.58791 7.32922 3.63849 7.20188 3.63849ZM3.84109 2.67827H6.72177V2.19815C6.72177 2.07082 6.67119 1.9487 6.58115 1.85866C6.49111 1.76862 6.36899 1.71804 6.24165 1.71804H4.3212C4.19387 1.71804 4.07175 1.76862 3.98171 1.85866C3.89167 1.9487 3.84109 2.07082 3.84109 2.19815V2.67827Z"
                                fill="#DF482B"
                              />
                              <path
                                d="M4.32191 10.3601C4.19458 10.3601 4.07246 10.3095 3.98242 10.2195C3.89238 10.1294 3.8418 10.0073 3.8418 9.87997V6.51918C3.8418 6.39184 3.89238 6.26972 3.98242 6.17968C4.07246 6.08965 4.19458 6.03906 4.32191 6.03906C4.44924 6.03906 4.57136 6.08965 4.6614 6.17968C4.75144 6.26972 4.80202 6.39184 4.80202 6.51918V9.87997C4.80202 10.0073 4.75144 10.1294 4.6614 10.2195C4.57136 10.3095 4.44924 10.3601 4.32191 10.3601Z"
                                fill="#DF482B"
                              />
                              <path
                                d="M6.24183 10.3601C6.1145 10.3601 5.99238 10.3095 5.90234 10.2195C5.8123 10.1294 5.76172 10.0073 5.76172 9.87997V6.51918C5.76172 6.39184 5.8123 6.26972 5.90234 6.17968C5.99238 6.08965 6.1145 6.03906 6.24183 6.03906C6.36917 6.03906 6.49129 6.08965 6.58132 6.17968C6.67136 6.26972 6.72195 6.39184 6.72195 6.51918V9.87997C6.72195 10.0073 6.67136 10.1294 6.58132 10.2195C6.49129 10.3095 6.36917 10.3601 6.24183 10.3601Z"
                                fill="#DF482B"
                              />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </AnimatePresence>
            <p>
              If you already know the overall look and feel you want for the
              website, you can describe or attach files.{" "}
            </p>

            <input
              className="text-sm placeholder-black appearance-none border border-cinnabar h-[56px] rounded-2xl w-full py-[6px] px-[18px] text-third dark:bg-secondary"
              id="description"
              name="description"
              type="textarea"
            />
            <div className="flex items-center  text-cinnabar">
              <button onClick={addFiles}>+ Add files</button>
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={onFileChange}
                accept=".pdf, image/png, image/jpeg, image/svg+xml"
                multiple
              />
            </div>
            {uploadedFiles.length > 0 && (
              <ul className="mt-4">
                {uploadedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="text-cinnabar text-xs flex items-center space-x-2"
                  >
                    <span>{file.name}</span>
                    <button onClick={() => removeFile(index)}>
                      {""}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          d="M7.20241 13.2417H3.36151C2.72484 13.2417 2.11424 12.9887 1.66405 12.5385C1.21385 12.0884 0.960938 11.4778 0.960938 10.8411V5.07972C0.960938 4.95239 1.01152 4.83027 1.10156 4.74023C1.1916 4.65019 1.31372 4.59961 1.44105 4.59961C1.56839 4.59961 1.6905 4.65019 1.78054 4.74023C1.87058 4.83027 1.92116 4.95239 1.92116 5.07972V10.8411C1.92116 11.2231 2.07291 11.5894 2.34303 11.8596C2.61315 12.1297 2.9795 12.2814 3.36151 12.2814H7.20241C7.58442 12.2814 7.95077 12.1297 8.22089 11.8596C8.49101 11.5894 8.64276 11.2231 8.64276 10.8411V5.07972C8.64276 4.95239 8.69334 4.83027 8.78338 4.74023C8.87342 4.65019 8.99553 4.59961 9.12287 4.59961C9.2502 4.59961 9.37232 4.65019 9.46236 4.74023C9.5524 4.83027 9.60298 4.95239 9.60298 5.07972V10.8411C9.60298 11.4778 9.35007 12.0884 8.89987 12.5385C8.44968 12.9887 7.83909 13.2417 7.20241 13.2417Z"
                          fill="#DF482B"
                        />
                        <path
                          d="M10.0824 3.63796H0.480114C0.35278 3.63796 0.230661 3.58738 0.140622 3.49734C0.0505833 3.4073 0 3.28518 0 3.15785C0 3.03051 0.0505833 2.9084 0.140622 2.81836C0.230661 2.72832 0.35278 2.67773 0.480114 2.67773H10.0824C10.2097 2.67773 10.3318 2.72832 10.4219 2.81836C10.5119 2.9084 10.5625 3.03051 10.5625 3.15785C10.5625 3.28518 10.5119 3.4073 10.4219 3.49734C10.3318 3.58738 10.2097 3.63796 10.0824 3.63796Z"
                          fill="#DF482B"
                        />
                        <path
                          d="M7.20188 3.63849H3.36097C3.23364 3.63849 3.11152 3.58791 3.02148 3.49787C2.93144 3.40783 2.88086 3.28571 2.88086 3.15838V2.19815C2.88086 1.81615 3.03261 1.44979 3.30273 1.17968C3.57284 0.909562 3.9392 0.757813 4.3212 0.757812H6.24165C6.62366 0.757813 6.99001 0.909562 7.26013 1.17968C7.53025 1.44979 7.682 1.81615 7.682 2.19815V3.15838C7.682 3.28571 7.63141 3.40783 7.54137 3.49787C7.45134 3.58791 7.32922 3.63849 7.20188 3.63849ZM3.84109 2.67827H6.72177V2.19815C6.72177 2.07082 6.67119 1.9487 6.58115 1.85866C6.49111 1.76862 6.36899 1.71804 6.24165 1.71804H4.3212C4.19387 1.71804 4.07175 1.76862 3.98171 1.85866C3.89167 1.9487 3.84109 2.07082 3.84109 2.19815V2.67827Z"
                          fill="#DF482B"
                        />
                        <path
                          d="M4.32191 10.3601C4.19458 10.3601 4.07246 10.3095 3.98242 10.2195C3.89238 10.1294 3.8418 10.0073 3.8418 9.87997V6.51918C3.8418 6.39184 3.89238 6.26972 3.98242 6.17968C4.07246 6.08965 4.19458 6.03906 4.32191 6.03906C4.44924 6.03906 4.57136 6.08965 4.6614 6.17968C4.75144 6.26972 4.80202 6.39184 4.80202 6.51918V9.87997C4.80202 10.0073 4.75144 10.1294 4.6614 10.2195C4.57136 10.3095 4.44924 10.3601 4.32191 10.3601Z"
                          fill="#DF482B"
                        />
                        <path
                          d="M6.24183 10.3601C6.1145 10.3601 5.99238 10.3095 5.90234 10.2195C5.8123 10.1294 5.76172 10.0073 5.76172 9.87997V6.51918C5.76172 6.39184 5.8123 6.26972 5.90234 6.17968C5.99238 6.08965 6.1145 6.03906 6.24183 6.03906C6.36917 6.03906 6.49129 6.08965 6.58132 6.17968C6.67136 6.26972 6.72195 6.39184 6.72195 6.51918V9.87997C6.72195 10.0073 6.67136 10.1294 6.58132 10.2195C6.49129 10.3095 6.36917 10.3601 6.24183 10.3601Z"
                          fill="#DF482B"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <p>You can provide examples of other websites you like.</p>

            <input
              className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-full py-[6px] px-[18px] text-third dark:bg-secondary"
              id="link"
              placeholder="Link:"
              type="text"
            />
            <div>
              <button
                type="button"
                className="px-3 border border-cinnabar rounded-full transform transition duration-500 hover:scale-110 uppercase text-cinnabar font-bold hover:bg-cinnabar hover:text-secondary"
              >
                Add link
              </button>
            </div>

            <p>
              List and describe the main pages or sections you want on the
              website (e.g., Home, About Us, Services, Contact).
            </p>

            <input
              className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-1/2 py-[6px] px-[18px] text-third dark:bg-secondary"
              id="pages"
              placeholder="Page:"
              type="text"
            />
            <input
              className="text-sm placeholder-black appearance-none border border-cinnabar rounded-full w-1/2 py-[6px] px-[18px] text-third dark:bg-secondary"
              id="pages"
              placeholder="Page:"
              type="text"
            />

            <div>
              <button
                type="button"
                className="px-3 border border-cinnabar rounded-full transform transition duration-500 hover:scale-110 uppercase text-cinnabar font-bold hover:bg-cinnabar hover:text-secondary"
              >
                Add page
              </button>
            </div>

            <p>Does the site have to be in several languages?</p>

            <div className="flex space-x-3">
              <button
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  isOpenLanguages === true
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenLanguages(true)}
              >
                Yes
              </button>
              <button
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  isOpenLanguages === false
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
                onClick={() => setIsOpenLanguages(false)}
              >
                No
              </button>
            </div>

            <AnimatePresence>
              {isOpenLanguages && (
                <div className="flex space-x-2">
                  {languages.map((name) => (
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
              )}
            </AnimatePresence>

            <p>Describe any specific features or functionalities you want.</p>
            <div className="flex space-x-2">
              <div className="flex space-x-2">
                {features.map((name) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => handleMultiSelectionChange(name)}
                    className="border border-cinnabar rounded-full transform transition duration-500 hover:scale-110"
                  >
                    <div
                      className={`appearance-none hover:bg-cinnabar hover:text-white rounded-full w-full py-0.5 px-3  ${
                        selectedFeatures.includes(name)
                          ? "bg-cinnabar text-white"
                          : "bg-white text-third"
                      }`}
                    >
                      {name}
                    </div>
                  </button>
                ))}
              </div>
              <input
                id="other_features"
                placeholder="Others"
                type="text"
                className=" px-3 border border-cinnabar rounded-full"
              />
            </div>

            <p>Do you already have a logo?</p>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => handleSelectionChangeYN("Yes")}
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  selectedValue === "Yes"
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => handleSelectionChangeYN("No")}
                className={`appearance-none border border-cinnabar rounded-full py-[5px] px-[12px] text-third dark:bg-secondary ${
                  selectedValue === "No"
                    ? "bg-cinnabar text-white"
                    : "bg-white text-third"
                }`}
              >
                No
              </button>
            </div>

            <p>
              Project timeline: When do they need the website to be completed?
            </p>
            <div>
              <DatePicker
                selected={startDate}
                className="px-3 border border-cinnabar rounded-full"
                onChange={(date: Date | [Date, Date] | null) =>
                  date && setStartDate(date as Date)
                }
              />
            </div>

            <div className="flex items-center justify-start space-x-2">
              <button
                disabled={false}
                className="px-3 border border-cinnabar rounded-full transform transition duration-500 hover:scale-110 uppercase text-cinnabar font-bold hover:bg-cinnabar hover:text-secondary"
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

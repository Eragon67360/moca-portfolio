"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "@/components/[locale]/desktop/survey/Dropdown";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DesktopSurvey = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const [emailValue, setEmailValue] = useState("");

  const [isOpenSpecifications, setIsOpenSpecifications] = useState(false);
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSales, setSelectedSales] = useState<string | null>(null);
  const [selectedDemographics, setSelectedDemographics] = useState<
    string | null
  >(null);
  const [selectedDemographicsAge, setSelectedDemographicsAge] = useState<
    string | null
  >(null);
  const [selectedDemographicsGender, setSelectedDemographicsGender] = useState<
    string | null
  >(null);
  const [selectedDemographicsEducation, setSelectedDemographicsEducation] =
    useState<string | null>(null);
  const [
    selectedDemographicsFamilyStatus,
    setSelectedDemographicsFamilyStatus,
  ] = useState<string | null>(null);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const [selectedLanguages, setSelectedLanguages] = useState<string | null>(
    null
  );

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedLinks, setLinks] = useState([""]);
  const [selectedPages, setPages] = useState([""]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputDesignRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadedFilesDesign, setUploadedFilesDesign] = useState<File[]>([]);

  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handleSelectionChangeLogo = (value: string) => {
    setSelectedLogo(value);
  };

  function handleInputChangeLink(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const newLinks = [...selectedLinks];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  }

  function handleInputChangePage(
    event: React.ChangeEvent<HTMLInputElement>,
    indexPages: number
  ) {
    const newPages = [...selectedPages];
    newPages[indexPages] = event.target.value;
    setPages(newPages);
  }

  function addLink() {
    setLinks([...selectedLinks, ""]);
  }

  const removeLink = (indexToRemove: number) => {
    setLinks((prevLink: any[]) =>
      prevLink.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  function addPage() {
    setPages([...selectedPages, ""]);
  }

  const removePage = (indexToRemove: number) => {
    setPages((prevPage: any[]) =>
      prevPage.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  const handleSelectionChangeSubject = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleSelectionChangeSales = (sales: string) => {
    setSelectedSales(sales);
  };

  const handleSelectionChangeDemographicsYN = (demo: string) => {
    setSelectedDemographics(demo);
  };
  const handleSelectionChangeDemographicsAge = (demo_age: string) => {
    setSelectedDemographicsAge(demo_age);
  };
  const handleSelectionChangeDemographicsGender = (demo_gender: string) => {
    setSelectedDemographicsGender(demo_gender);
  };
  const handleSelectionChangeDemographicsEducation = (
    demo_education: string
  ) => {
    setSelectedDemographicsEducation(demo_education);
  };
  const handleSelectionChangeDemographicsFamilyStatus = (
    demo_familystatus: string
  ) => {
    setSelectedDemographicsFamilyStatus(demo_familystatus);
  };

  const handleSelectionChangeLanguages = (languages: string) => {
    setSelectedLanguages(languages);
  };

  const handleSelectionChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
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

  type FormData = {
    fullname: string;
    email: string;
    company: string;
    websiteType: string | null;
    other_website: string;
    sales: string | null;
    demographics: string | null;
    demographicsAge: string | null;
    demographicsGender: string | null;
    demographicsEducation: string | null;
    demographicsFamilyStatus: string | null;
    overall_look: string;
    links: string;
    pages: string;
    language: string | null;
    languages: string | null;
    features: string;
    other_feature: string;
    logo: string | null;
    date: string | null;
    comments: string;
  };

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    setLoading(true);
    const features: string = selectedFeatures.join(", ");
    const links: string = selectedLinks.join(" , ");
    const pages: string = selectedPages.join(" | ");

    const data: FormData = {
      fullname: String(event.target.fullname.value),
      email: String(event.target.email.value),
      company: String(event.target.company.value),
      websiteType: selectedSubject,
      other_website: String(event.target.other_website.value),
      sales: selectedSales,
      demographics: selectedDemographics,
      demographicsAge: selectedDemographicsAge,
      demographicsGender: selectedDemographicsGender,
      demographicsEducation: selectedDemographicsEducation,
      demographicsFamilyStatus: selectedDemographicsFamilyStatus,
      overall_look: String(event.target.description.value),
      links: links,
      pages: pages,
      language: selectedLanguage,
      languages: selectedLanguages,
      features: features,
      other_feature: String(event.target.other_features.value),
      logo: selectedLogo,
      date: startDate.toDateString(),
      comments: String(event.target.comments.value),
    };

    const formDataObj = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== null) {
        formDataObj.append(key, value);
      }
    });

    uploadedFiles.forEach((file: string | Blob, index: any) => {
      formDataObj.append(`file${index}`, file);
    });

    uploadedFilesDesign.forEach((file: string | Blob, index: any) => {
      formDataObj.append(`fileDesign${index}`, file);
    });

    const formDataAsObject = Object.fromEntries(formDataObj.entries());
    console.log(formDataAsObject);

    const response = await fetch("/api/submitSurvey", {
      method: "POST",
      body: formDataObj,
    });

    if (response.ok) {
      console.log("Message sent successfully");
      toast.success("Message sent successfully");
      setLoading(false);
    }
    if (!response.ok) {
      console.log(response.statusText);
      toast.error("Error sending message");
      setLoading(false);
    }

    const form = formRef.current as HTMLFormElement | null;
    if (form) {
      form.reset();
    }
  }

  const addFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFiles(Array.from(event.target.files));
    }
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles((prevFiles: any[]) =>
      prevFiles.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  const addFilesDesign = () => {
    if (fileInputDesignRef.current) {
      fileInputDesignRef.current.click();
    }
  };

  const onFileChangeDesign = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFilesDesign(Array.from(event.target.files));
    }
  };

  const removeFileDesign = (indexToRemove: number) => {
    setUploadedFilesDesign((prevFiles: any[]) =>
      prevFiles.filter((_: any, index: number) => index !== indexToRemove)
    );
  };

  const website_types = ["Showcase site", "Online shop"];
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
      <div className="flex w-screen bg-light_surface py-[124px]  justify-center items-center">
        <div className="w-[810px] h-full rounded-2xl bg-light_background p-8 shadow-lg space-y-4 ">
          <p className="text-center text-5xl font-bold w-full text-light_ink">
            Website Survey
          </p>

          <form
            onSubmit={handleSubmit}
            ref={formRef}
            id="form"
            className="flex flex-col space-y-4"
          >
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-light_primary rounded-full w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
                id="fullname"
                name="given-name"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-light_primary rounded-full w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
                id="email"
                name="email"
                type="text"
                placeholder="E-Mail"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="w-full h-[32px]">
              <input
                className="text-sm placeholder-black appearance-none border border-light_primary rounded-full w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
                id="company"
                name="company"
                type="text"
                placeholder="Company"
              />
            </div>
            <p className="text-light_ink">What kind of website do you need?</p>
            <div className="flex space-x-3">
              {website_types.map((name) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => handleSelectionChangeSubject(name)}
                  className="border border-light_primary rounded-full transform transition duration-500 hover:scale-110"
                >
                  <div
                    className={`appearance-none hover:bg-light_primary hover:text-dark_ink rounded-full w-full py-0.5 px-3  ${
                      selectedSubject === name
                        ? "bg-light_primary text-dark_ink"
                        : "bg-white text-light_ink"
                    }`}
                  >
                    {name}
                  </div>
                </button>
              ))}
              <input
                id="other_website"
                placeholder="Other"
                type="text"
                className="px-3 border border-light_primary rounded-full text-sm placeholder-black appearance-none text-light_ink dark:bg-light_background"
                />
            </div>
            <p className="text-light_ink">
              If it&apos;s an online shop, how many products do you sell?
            </p>
            <div className="flex space-x-3">
              {sales.map((name) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => handleSelectionChangeSales(name)}
                  className="border border-light_primary rounded-full transform transition duration-500 hover:scale-110"
                >
                  <div
                    className={`appearance-none hover:bg-light_primary hover:text-dark_ink rounded-full w-full py-0.5 px-3  ${
                      selectedSales === name
                        ? "bg-light_primary text-dark_ink"
                        : "bg-white text-light_ink"
                    }`}
                  >
                    {name}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-light_ink">
              Are there any specific demographics or user personas to consider?
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink ${
                  isOpenSpecifications === true
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
                onClick={() => {
                  setIsOpenSpecifications(true);
                  handleSelectionChangeDemographicsYN("Yes");
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink ${
                  isOpenSpecifications === false
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
                onClick={() => {
                  setIsOpenSpecifications(false);
                  handleSelectionChangeDemographicsYN("No");
                }}
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
                      onSelect={handleSelectionChangeDemographicsAge}
                      placeholder="Age"
                    />
                    <Dropdown
                      options={genders}
                      onSelect={handleSelectionChangeDemographicsGender}
                      placeholder="Gender"
                    />
                    <Dropdown
                      options={educations}
                      onSelect={handleSelectionChangeDemographicsEducation}
                      placeholder="Education"
                    />
                    <Dropdown
                      options={family_status}
                      onSelect={handleSelectionChangeDemographicsFamilyStatus}
                      placeholder="Family status"
                    />
                  </div>
                  <div className="flex items-center  text-light_primary">
                    <button type="button" onClick={addFiles}>
                      + Add files
                    </button>
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
                          className="text-light_primary text-xs flex items-center space-x-2"
                        >
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                          >
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
            <p className="text-light_ink">
              If you already know the overall look and feel you want for the
              website, you can describe or attach files.{" "}
            </p>

            <textarea
              className="text-sm placeholder-black appearance-none border border-light_primary h-[56px] rounded-2xl w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
              id="description"
              name="description"
              rows={5}
            />
            <div className="flex items-center  text-light_primary">
              <button type="button" onClick={addFilesDesign}>
                + Add files
              </button>
              <input
                type="file"
                className="hidden"
                ref={fileInputDesignRef}
                onChange={onFileChangeDesign}
                accept=".pdf, image/png, image/jpeg, image/svg+xml"
                multiple
              />
            </div>
            {uploadedFilesDesign.length > 0 && (
              <ul className="mt-4">
                {uploadedFilesDesign.map((file, index) => (
                  <li
                    key={index}
                    className="text-light_primary text-xs flex items-center space-x-2"
                  >
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFileDesign(index)}
                    >
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

            <p className="text-light_ink">You can provide examples of other websites you like.</p>

            {selectedLinks.map((link, index) => (
              <div key={index} className="flex space-x-3">
                <input
                  key={index}
                  value={link}
                  onChange={(e) => handleInputChangeLink(e, index)}
                  className="text-sm placeholder-black appearance-none border border-light_primary rounded-full w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
                  id={`link-${index}`}
                  placeholder={`Link ${index + 1}:`}
                  type="text"
                />
                <button type="button" onClick={() => removeLink(index)}>
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
              </div>
            ))}
            <div>
              <button
                type="button"
                onClick={addLink}
                className="px-3 border border-light_primary rounded-full transform transition duration-500 hover:scale-110 uppercase text-light_primary font-bold hover:bg-light_primary hover:text-dark_ink"
              >
                Add link
              </button>
            </div>

            <p className="text-light_ink">
              List and describe the main pages or sections you want on the
              website (e.g., Home, About Us, Services, Contact).
            </p>

            {selectedPages.map((page, index) => (
              <div key={index} className="flex space-x-3">
                <input
                  key={index}
                  value={page}
                  onChange={(e) => handleInputChangePage(e, index)}
                  className="text-sm placeholder-black appearance-none border border-light_primary rounded-full w-full py-[6px] px-[18px] text-light_ink dark:bg-light_background"
                  id={`page-${index}`}
                  placeholder={`Page ${index + 1}:`}
                  type="text"
                />
                <button type="button" onClick={() => removePage(index)}>
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
              </div>
            ))}

            <div>
              <button
                type="button"
                onClick={addPage}
                className="px-3 border border-light_primary rounded-full transform transition duration-500 hover:scale-110 uppercase text-light_primary font-bold hover:bg-light_primary hover:text-dark_ink"
              >
                Add page
              </button>
            </div>

            <p className="text-light_ink">Does the site have to be in several languages?</p>

            <div className="flex space-x-3">
              <button
                type="button"
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink ${
                  isOpenLanguages === true
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
                onClick={() => {
                  setIsOpenLanguages(true);
                  handleSelectionChangeLanguages("Yes");
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink ${
                  isOpenLanguages === false
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
                onClick={() => {
                  setIsOpenLanguages(false);
                  handleSelectionChangeLanguages("No");
                }}
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
                      onClick={() => handleSelectionChangeLanguage(name)}
                      className="border border-light_primary rounded-full transform transition duration-500 hover:scale-110"
                    >
                      <div
                        className={`appearance-none hover:bg-light_primary hover:text-dark_ink rounded-full w-full py-0.5 px-3  ${
                          selectedLanguage === name
                            ? "bg-light_primary text-dark_ink"
                            : "bg-white text-light_ink"
                        }`}
                      >
                        {name}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </AnimatePresence>

            <p className="text-light_ink">Describe any specific features or functionalities you want.</p>
            <div className="flex space-x-2">
              <div className="flex space-x-2">
                {features.map((name) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => handleMultiSelectionChange(name)}
                    className="border border-light_primary rounded-full transform transition duration-500 hover:scale-110"
                  >
                    <div
                      className={`appearance-none hover:bg-light_primary hover:text-dark_ink rounded-full w-full py-0.5 px-3  ${
                        selectedFeatures.includes(name)
                          ? "bg-light_primary text-dark_ink"
                          : "bg-white text-light_ink"
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
                className="px-3 border border-light_primary rounded-full text-sm placeholder-black appearance-none text-light_ink dark:bg-light_background"
                />
            </div>

            <p className="text-light_ink">Do you already have a logo?</p>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => handleSelectionChangeLogo("Yes")}
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink  ${
                  selectedLogo === "Yes"
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => handleSelectionChangeLogo("No")}
                className={`appearance-none border border-light_primary rounded-full py-[5px] px-[12px] text-light_ink ${
                  selectedLogo === "No"
                    ? "bg-light_primary text-dark_ink"
                    : "bg-white text-light_ink"
                }`}
              >
                No
              </button>
            </div>

            <p className="text-light_ink">
              Project timeline: When do they need the website to be completed?
            </p>
            <div>
              <DatePicker
                selected={startDate}
                className="px-3 border border-light_primary rounded-full text-sm appearance-none text-light_ink dark:bg-light_background"
                onChange={(date: Date | [Date, Date] | null) =>
                  date && setStartDate(date as Date)
                }
              />
            </div>

            <p className="text-light_ink">Add any additional comments:</p>
            <textarea
              id="comments"
              name="additional_comments"
              rows={5}
              className="h-14 px-3 py-3 border border-light_primary rounded-2xl appearance-none text-light_ink dark:bg-light_background"
            />

            <p className="text-2xl font-semibold text-light_ink">Legal and Privacy:</p>
            <p className="text-light_ink">
              Include a section to address any legal or privacy requirements,
              such as GDPR compliance or terms of service.
            </p>
            <p className="text-2xl font-semibold text-light_ink">Next Steps:</p>
            <p className="text-light_ink">
              Explain the next steps in the web development process, such as a
              follow-up meeting to discuss the survey responses in detail.
            </p>
            <div className="flex items-center justify-start space-x-2">
              <button
                disabled={!emailValue || loading}
                className="px-3 border border-light_primary rounded-full transform transition duration-500 hover:enabled:scale-110 uppercase text-light_primary font-bold hover:enabled:bg-light_primary hover:disabled:bg-none hover:text-dark_ink disabled:border-gray-400 disabled:text-gray-400 hover:disabled:text-gray-400 hover:disabled:border-gray-400 hover:enabled:text-dark_ink"
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

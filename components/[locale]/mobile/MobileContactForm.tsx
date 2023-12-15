"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "@/components/[locale]/Dropdown";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { useTranslations } from "next-intl";

const MobileContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const t = useTranslations("Contact.ContactForm");

  useEffect(() => {
    if (message.trim() === "") {
      setErrorMessage(t("warning"));
    } else {
      setErrorMessage(null);
    }
  }, [message, t]);

  const handleChange = (event: any) => {
    setEmailValue(event.target.value);
  };

  const handleChangeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSelectionChange = (subject: string) => {
    setSelectedSubject(subject);
  };
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      firstname: String(event.target.firstname.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      country: String(event.target.country.value),
      company: String(event.target.company.value),
      subject: selectedSubject,
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      toast.success(t("toastsuccess"));
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.firstname.value = "";
      setEmailValue("");
      event.target.phone.value = "";
      event.target.company.value = "";
      event.target.country.value = "";
      setMessage("");
    }
    if (!response.ok) {
      console.log("Error sending message");
      toast.error(t("toasterror"));
      setLoading(false);
    }
  }

  const buttonNames = ["UX Design", "Web Design", "App Design", "I'm not sure"];

  return (
    <>
      <div>
        <div className="w-full flex justify-evenly bg-transparent px-8 py-8 rounded-2xl">
          <div className="bg-transparent w-full flex flex-col space-y-[1.92vh]">
            <div className="select-none flex flex-col items-center px-4">
              <div>
                <div className="flex items-center justify-start space-x-2">
                  <h2 className="text-3xl font-bold text-dark_ink">
                    {t("title")}
                  </h2>

                  <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    style={{ height: "auto" }}
                  />
                </div>

                <p className="text-end text-base text-dark_ink w-full">
                  {t("subtitle")}{" "}
                  <span className="text-base text-light_secondary dark:text-dark_ink font-bold">
                    {";)"}
                  </span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-6">
              <div className="flex space-x-2 justify-around">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full px-3 text-light_ink dark:bg-light_background text-xs py-1"
                    id="firstname"
                    name="given-name"
                    type="text"
                    placeholder={t("firstname")}
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full text-xs py-1 px-3 text-light_ink dark:bg-light_background"
                    name="family-name"
                    id="name"
                    type="text"
                    placeholder={t("lastname")}
                  />
                </div>
              </div>
              <div className="flex space-x-2 justify-around ">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full text-xs py-1 px-3 text-light_ink dark:bg-light_background"
                    id="email"
                    type="email"
                    placeholder={t("email")}
                    value={emailValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full text-xs py-1 px-3 text-light_ink dark:bg-light_background"
                    id="phone"
                    type="phone"
                    placeholder={t("phone")}
                  />
                </div>
              </div>

              <div className="flex space-x-2 justify-around ">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full text-xs py-1 px-3 text-light_ink dark:bg-light_background"
                    id="company"
                    type="text"
                    placeholder={t("company")}
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-light_secondary rounded-full w-full text-xs py-1 px-3 text-light_ink dark:bg-light_background"
                    id="country"
                    name="country"
                    type="text"
                    placeholder={t("country")}
                  />
                </div>
              </div>

              <div>
                <Dropdown
                  onSelectionChange={handleSelectionChange}
                  selectedSubject={selectedSubject}
                  text={t("need")}
                  content={buttonNames}
                />
              </div>

              <div>
                <textarea
                  className="placeholder-black appearance-none border border-light_secondary rounded-xl w-full text-xs py-1 px-3 text-light_ink h-[22vh] dark:bg-light_background"
                  id="message"
                  value={message}
                  onChange={handleChangeMessage}
                  placeholder={t("message")}
                />
              </div>
              <div className="flex items-center justify-start space-x-2">
                <button
                  disabled={!emailValue || loading || !message}
                  className="bg-white border border-light_secondary uppercase disabled:border-gray-400 disabled:text-gray-400 hover:disabled:text-gray-400 hover:disabled:border-gray-400 hover:enabled:text-dark_ink hover:enabled:bg-dark_surface text-light_ink font-bold py-0.5 px-2 rounded-full"
                  type="submit"
                >
                  {t("send")}
                </button>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileContactForm;

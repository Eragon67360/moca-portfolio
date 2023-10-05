"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "@/components/[locale]/Dropdown";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

const MobileContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  useEffect(() => {
    if (message.trim() === "") {
      setErrorMessage("Message field has to be filled.");
    } else {
      setErrorMessage(null);
    }
  }, [message]);

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
      toast.success("Email has been successfully sent!");
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
      toast.error("Email has not been sent!");
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <div className="w-full flex justify-evenly bg-transparent px-8 py-8 rounded-2xl">
          <div className="bg-transparent w-full flex flex-col space-y-[1.92vh]">
            <div className="select-none flex flex-col items-center px-4">
              <div>
                <div className="flex items-center justify-start space-x-2">
                  <h2 className="text-3xl font-bold text-falured dark:text-secondary ">
                    Get in touch!
                  </h2>

                  <Image src={logo} alt="logo" width={40} style={{'height':'auto'}}/>
                </div>

                <p className="text-black text-end text-base dark:text-secondary w-full">
                  Let&apos;s talk about everything{" "}
                  <span className="text-base text-falured dark:text-secondary font-bold">
                    {";)"}
                  </span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 mt-6">
              <div className="flex space-x-2 justify-around">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full px-3 text-third dark:bg-secondary text-xs py-1"
                    id="firstname"
                    name="given-name"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full text-xs py-1 px-3 text-third dark:bg-secondary"
                    name="family-name"
                    id="name"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex space-x-2 justify-around ">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full text-xs py-1 px-3 text-third dark:bg-secondary"
                    id="email"
                    type="email"
                    placeholder="E-Mail"
                    value={emailValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full text-xs py-1 px-3 text-third dark:bg-secondary"
                    id="phone"
                    type="phone"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="flex space-x-2 justify-around ">
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full text-xs py-1 px-3 text-third dark:bg-secondary"
                    id="company"
                    type="text"
                    placeholder="Company"
                  />
                </div>
                <div className="w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full text-xs py-1 px-3 text-third dark:bg-secondary"
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div>
                <Dropdown
                  onSelectionChange={handleSelectionChange}
                  selectedSubject={selectedSubject}
                />
              </div>

              <div>
                <textarea
                  className="placeholder-black appearance-none border border-falured rounded-xl w-full text-xs py-1 px-3 text-third h-[22vh] dark:bg-secondary"
                  id="message"
                  value={message}
                  onChange={handleChangeMessage}
                  placeholder="Message"
                />
              </div>
              <div className="flex items-center justify-start space-x-2">
                <button
                  disabled={!emailValue || loading || !message}
                  className="bg-white border border-falured uppercase disabled:border-gray-400 disabled:text-gray-400 hover:disabled:text-gray-400 hover:disabled:border-gray-400 hover:enabled:text-secondary hover:enabled:bg-falured text-black font-bold py-0.5 px-2 rounded-full"
                  type="submit"
                >
                  Send
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

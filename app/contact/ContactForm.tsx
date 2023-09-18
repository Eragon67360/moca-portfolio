"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleChange = (event: any) => {
    setEmailValue(event.target.value);
  };
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      firstname: String(event.target.firstname.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      company: String(event.target.company.value),
      message: String(event.target.message.value),
    };

    console.log(data);

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
      event.target.email.value = "";
      event.target.phone.value = "";
      event.target.company.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      toast.error("Email has not been sent!");
      setLoading(false);
    }
  }

  return (
    <>
      <motion.div
        initial={{ y: 800 }}
        animate={{ y: 400 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <div className="w-[454px] h-[713px] flex justify-evenly bg-secondary contact-shadow p-8 rounded-2xl">
          <div className="bg-secondary w-full flex flex-col space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <h2 className="text-5xl font-sans font-extrabold text-falured">
                  Get in touch!
                </h2>

                <Image src={logo} alt="logo" />
              </div>

              <p className="text-black text-end font-semibold">
                Let&apos;s talk about everything{" "}
                <span className="font-sans text-lg text-falured font-extrabold">
                  {";)"}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4 justify-around">
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    id="firstname"
                    name="given-name"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    name="family-name"
                    id="name"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex space-x-4 justify-around ">
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    id="email"
                    type="email"
                    placeholder="E-Mail"
                    value={emailValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    id="phone"
                    type="phone"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="flex space-x-4 justify-around ">
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    id="company"
                    type="text"
                    placeholder="Company"
                  />
                </div>
                <div className="py-2 w-full h-full">
                  <input
                    className="placeholder-black appearance-none border border-falured rounded-full w-full py-0.5 px-3 text-third"
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="">
                <div className="py-2">
                  <Dropdown />
                </div>
              </div>

              <div className="">
                <div className="py-2">
                  <textarea
                    className="placeholder-black appearance-none border border-falured rounded-xl w-full py-0.5 px-3 text-third h-40"
                    id="message"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={!emailValue || loading}
                  className="bg-white border border-falured uppercase hover:bg-opacity-80 disabled:border-gray-400 disabled:text-gray-400 hover:enabled:text-secondary hover:enabled:bg-falured text-black font-sans font-bold py-0.5 px-2 rounded-full"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}

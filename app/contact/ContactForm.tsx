"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      country: String(event.target.country.value),
      company: String(event.target.company.value),
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
      event.target.email.value = "";
      event.target.phone.value = "";
      event.target.company.value = "";
      event.target.country.value = "";
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
        <ToastContainer/>
        <div className="w-[35.5vw] min-h-[665px] h-[71.6vh] flex justify-evenly bg-secondary contact-shadow px-[2.5vw] py-[3.84vh] rounded-2xl">
          <div className="bg-secondary w-full flex flex-col space-y-[1.92vh]">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-bold text-falured">
                  Get in touch!
                </h2>

                <Image src={logo} alt="logo" />
              </div>

              <p className="text-black text-end text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Let&apos;s talk about everything{" "}
                <span className="font-sans text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-falured font-extrabold">
                  {";)"}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-[2.52vw] justify-around">
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
              <div className="flex space-x-[2.52vw] justify-around ">
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

              <div className="flex space-x-[2.52vw] justify-around ">
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
                    className="placeholder-black appearance-none border border-falured rounded-xl w-full py-0.5 px-3 text-third h-[22vh]"
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

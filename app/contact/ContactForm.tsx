"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import Dropdown from "@/components/Dropdown";

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
    <div className="w-full h-full flex justify-evenly">
      <div className="flex flex-col justify-center items-center w-[1000px]">
        <div className="flex flex-col space-y-4 m-12 ">
          <p className="p-1 bg-falured text-secondary rounded-lg w-24 text-center">
            Let&apos;s talk
          </p>
          <p className="text-third font-bold text-4xl">
            Let&apos;s talk about your projects
          </p>
          <p className="text-third text-lg">
            Fill the form and send in your queries. We&apos;ll respond as soon
            as we can. Alternatively, You can reach out to us at our email
            address.
          </p>
        </div>
      </div>
      <div className="bg-secondary rounded-lg shadow-lg w-full max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 text-third">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-third text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
              <span className="text-falured italic"> required</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-third"
              id="email"
              type="email"
              placeholder="Your Email"
              value={emailValue}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Dropdown/>
          </div>
          <div className="flex space-x-4">
            <div className="mb-4">
              <label
                className="block text-third text-sm font-bold mb-2"
                htmlFor="Last name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-third"
                name="family-name"
                id="name"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-third text-sm font-bold mb-2"
                htmlFor="First name"
              >
                First name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-third"
                id="firstname"
                name="given-name"
                type="text"
                placeholder="First name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-third text-sm font-bold mb-2"
              htmlFor="company"
            >
              Enterprise (if not private)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-third"
              id="company"
              type="text"
              placeholder="Your enterprise"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-third text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-third h-32"
              id="message"
              placeholder="Your message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={!emailValue || loading}
              className="bg-falured hover:bg-opacity-80 disabled:bg-gray-400 disabled:text-gray-100 text-secondary font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

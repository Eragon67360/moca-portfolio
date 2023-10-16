"use client";
import React from "react";
import Link from "next/link";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";

const Plans = () => {
  const planData = [
    {
      title: "Standard",
      subtitle: "Website follow-up. Get any update you want when you need.",
      price: "895€/m",
      description: "Pause or cancel anytime",
      buttonText: "Get started",
      included: "You get a team to work on your website full-time.",
      list1: "One request at a time",
      list2: "Average 3-5 days delivery",
      list3: "Easy credit-card payments",
      list4: "Pause or cancel anytime",
      list: true,
    },
    {
      title: "Pro",
      subtitle: "Website follow-up + Any Graphics you need.",
      price: "1195€/m",
      description: "Pause or cancel anytime",
      buttonText: "Get started",
      included: "Get a website always updated and any graphics* you need",
      list1: "One request at a time",
      list2: "Average 3-5 days delivery",
      list3: "Easy credit-card payments",
      list4: "Pause or cancel anytime",
      list: true,
    },
    {
      title: "Personalized",
      subtitle: "Personalize your plan based on your needs.",
      price: "~€/m",
      description: "Pause or cancel anytime",
      callText: "Book a call to have more informations",
      buttonText: "Get started",
      included:
        "You decide what you need and we do it. This plan can be cheaper or more expensive depending on your demands.",
      list: false,
    },
  ];

  const locale = useLocale();

  return (
    <>
      <div id="pricings" className="pt-24 bg-linen dark:bg-falured">
        <motion.div
          className="flex flex-col items-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="text-5xl text-blackbean dark:text-secondary font-bold text-center">
            Plans
          </div>
          <div className="mt-24 lg:mx-12 xl:mx-36 2xl:mx-96 justify-center grid grid-cols-4 gap-8 text-blackbean dark:text-secondary px-8">
            {planData.map((plan, index) => (
              <div
                key={index}
                className="bg-secondary dark:bg-blackbean flex flex-col p-12 rounded-2xl shadow-2xl dark:shadow-secondary/40"
              >
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl">{plan.title}</h2>
                    <h3 className="mt-6">{plan.subtitle}</h3>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-bold text-2xl mt-8">{plan.price}</h3>
                    <p className="text-base">{plan.description}</p>

                    <div className="flex justify-center mt-8">
                      <button className="w-full p-2 rounded-lg bg-blackbean dark:bg-linen text-secondary dark:text-blackbean hover:bg-linen hover:text-blackbean hover:dark:bg-falured hover:dark:text-secondary">
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <hr className="mt-6 border-1 border-linen" />
                  <div className="flex flex-col mt-4">
                    <p>What&apos;s included:</p>
                    <br />
                    <p>{plan.included}</p>
                    {plan.list && (
                      <ul className="mt-4 ml-4">
                        <li className="list-disc">{plan.list1}</li>
                        <li className="list-disc">{plan.list2}</li>
                        <li className="list-disc">{plan.list3}</li>
                        <li className="list-disc">{plan.list4}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-between space-y-4">
              <div className="p-12 border rounded-2xl shadow-cards">
                <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                  <div className="flex justify-center">
                    <BsCalendarEvent size={50} />
                  </div>

                  <div className=" text-center">Book a call</div>
                </div>

                <div className="flex justify-center mx-auto mt-8">
                  <Link
                    className="px-4 py-2 rounded-lg flex space-x-4 border border-blackbean bg-blackbean hover:bg-linen text-secondary hover:text-blackbean dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean"
                    href={`/${locale}/booking`}
                  >
                    <span className="font-semibold">Book now</span>
                    <MdOutlineOpenInNew size={24} />
                  </Link>
                </div>
              </div>

              <div className="p-12 border rounded-2xl shadow-cards">
                Send us an e-mail
              </div>
              <div className="flex flex-col p-6 border rounded-2xl bg-falured text-secondary">
                <p>*Graphics includes:</p>
                <br />
                <div className="flex ml-4 space-x-4">
                  <ul>
                    <li className="list-disc">Stationary Brochures</li>
                    <li className="list-disc">Social media graphics</li>
                    <li className="list-disc">E-mail graphics</li>
                    <li className="list-disc">Business cards</li>
                  </ul>
                  <ul>
                    <li className="list-disc">Packaging</li>
                    <li className="list-disc">Trade show banners</li>
                    <li className="list-disc">Blog graphics</li>
                    <li className="list-disc">Ads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-24" />
        </motion.div>
      </div>
    </>
  );
};

export default Plans;

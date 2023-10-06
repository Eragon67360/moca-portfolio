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
      price: "€500/m",
      description: "Pause or cancel anytime",
      buttonText: "Get started",
      button: true,
    },
    {
      title: "Pro",
      price: "€800/m",
      description: "Pause or cancel anytime",
      buttonText: "Get started",
      button: true,
    },
    {
      title: "Personalized",
      price: "€~/m",
      description: "Pause or cancel anytime",
      callText: "Book a call to have more informations",
      button: false,
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
          <div className="mt-24 flex flex-wrap gap-8 text-blackbean dark:text-secondary px-8">
            {planData.map((plan, index) => (
              <div
                key={index}
                className="bg-secondary dark:bg-blackbean flex flex-col p-12 rounded-2xl shadow-2xl dark:shadow-secondary/40"
              >
                <h2 className="font-bold text-2xl">{plan.title}</h2>
                <h3 className="font-bold text-5xl mt-8">{plan.price}</h3>
                <p className="text-base">{plan.description}</p>
                {plan.button ? (
                  <div className="flex justify-center mt-8">
                    <button className="w-full p-2 rounded-lg bg-blackbean dark:bg-linen text-secondary dark:text-blackbean hover:bg-linen hover:text-blackbean hover:dark:bg-falured hover:dark:text-secondary">
                      {plan.buttonText}
                    </button>
                  </div>
                ) : (
                  <h3 className="flex justify-center mt-8">{plan.callText}</h3>
                )}
              </div>
            ))}

            <div className="flex flex-col p-12 rounded-2xl shadow-2xl dark:shadow-secondary/40 justify-between">
              <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                <div className="flex justify-center">
                  <BsCalendarEvent size={50} />
                </div>

                <div className=" text-center">Book a call</div>
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  className="w-full px-4 py-2 rounded-lg flex space-x-4 border border-blackbean bg-blackbean hover:bg-linen text-secondary hover:text-blackbean dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean"
                  href={`/${locale}/booking`}
                >
                  <span className="font-semibold">Book now</span>
                  <MdOutlineOpenInNew size={24} />
                </Link>
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

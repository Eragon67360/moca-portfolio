"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/motionVariants";
import Image from "next/image";
import paw from "@/public/home/paw.png";
import { useTranslations } from "next-intl";

import { CheckoutSubscriptionBody } from "@/pages/api/checkout";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

const Plans = () => {
  const t = useTranslations("Home.Subscriptions");
  const locale = useLocale();

  const handleClick = async (_amount: number | undefined) => {
    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    const stripe = await loadStripe(STRIPE_PK);

    const body: CheckoutSubscriptionBody = {
      interval: "month",
      amount: _amount || 0,
      plan: "Standard",
      planDescription: "Subscribe for 895€ per month",
    };

    const result = await fetch("/api/checkout", {
      method: "post",
      body: JSON.stringify(body, null),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = (await result.json()) as Stripe.Checkout.Session;
    const sessionId = data.id!;
    stripe?.redirectToCheckout({ sessionId });
  };

  const planData = [
    {
      title: t("std_title"),
      subtitle: t("std_description"),
      price: "895€/m",
      description: t("pause"),
      buttonText: t("button"),
      book: t("book_call"),
      included: t("included_description1"),
      list1: t("included_content1"),
      list2: t("included_content2"),
      list3: t("included_content3"),
      list4: t("included_content4"),
      list: true,
      amount: 89500,
    },
    {
      title: t("pro_title"),
      subtitle: t("pro_description"),
      price: "1195€/m",
      description: t("pause"),
      buttonText: t("button"),
      book: t("book_call"),
      included: t("included_description2"),
      list1: t("included_content1"),
      list2: t("included_content2"),
      list3: t("included_content3"),
      list4: t("included_content4"),
      list: true,
      amount: 119500,
    },
    {
      title: t("perso_title"),
      subtitle: t("perso_description"),
      price: "~€/m",
      description: t("pause"),
      buttonText: t("button"),
      book: t("book_call"),
      included: t("included_description3"),
      list: false,
      route: `/${locale}/booking`,
    },
  ];

  return (
    <>
      <div
        id="pricings"
        className="pt-28 px-12 lg:px-12 xl:px-36 2xl:px-96 bg-linen dark:bg-falured"
      >
        <motion.div
          className="flex flex-col items-center"
          initial="offscreen"
          whileInView="onscreen"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2 justify-center items-center">
            <div className="text-5xl text-blackbean dark:text-secondary font-bold text-center">
              {t("title")}
            </div>
            <Image
              src={paw}
              alt="paw"
              width={56}
              className="transform rotate-[35deg]"
            />
          </div>
          <div className="mt-24 justify-center grid grid-cols-4 gap-8 text-blackbean dark:text-secondary">
            {planData.map((plan, index) => (
              <div
                key={index}
                className="bg-secondary dark:bg-blackbean flex flex-col p-8 rounded-2xl shadow-cards h-full"
              >
                <div className="flex flex-col justify-between h-[57%]">
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-2xl">{plan.title}</h2>
                    <h3 className="mt-6">{plan.subtitle}</h3>
                  </div>

                  <div className="flex flex-col mt-6">
                    <h3 className="font-bold text-2xl">{plan.price}</h3>
                    <p className="text-xs">{plan.description}</p>

                    <div className="flex mt-4">
                      <button
                        onClick={() => handleClick(plan.amount)}
                        className="uppercase font-bold py-2 px-4 rounded-full bg-cinnabar dark:bg-linen text-secondary dark:text-blackbean hover:bg-linen hover:text-blackbean hover:dark:bg-falured hover:dark:text-secondary"
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                    <Link
                      href={`/${locale}/booking`}
                      className="mt-2 ml-4 text-sm"
                    >
                      {plan.book}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col mt-6 h-[43%]">
                  <hr className=" border-2 border-linen" />
                  <div className="flex flex-col mt-4 text-xs">
                    <p>{t("included")}</p>
                    <br />
                    <p className="mt-2">{plan.included}</p>
                    {plan.list && (
                      <ul className="mt-9 ml-4">
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
              <div className="p-8 border rounded-2xl shadow-cards">
                <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                  <div className="flex justify-center">
                    <BsCalendarEvent size={50} />
                  </div>

                  <div className=" text-center">{t("book_call")}</div>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    className="px-4 py-2 rounded-full flex space-x-2 border border-blackbean bg-blackbean hover:bg-linen text-secondary hover:text-blackbean dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean justify-center items-center"
                    href={`/${locale}/booking`}
                  >
                    <span className="font-semibold md:text-xs lg:text-base">
                      {t("book_now")}
                    </span>
                    <MdOutlineOpenInNew size={20} />
                  </Link>
                </div>
              </div>

              <div className="p-12 border rounded-2xl shadow-cards ">
                <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                  <div className="text-center">
                    Learn more about our subscription plans
                  </div>
                </div>

                <div className="flex justify-center mx-auto mt-8 items-center">
                  <Link
                    className="uppercase font-bold py-2 px-4 rounded-full bg-cinnabar dark:bg-linen text-secondary dark:text-blackbean hover:bg-secondary hover:text-blackbean hover:dark:bg-falured hover:dark:text-secondary"
                    href={`/${locale}/subscriptions`}
                  >
                    <span className="font-semibold text-center md:text-xs lg:text-base">
                      Learn more
                    </span>
                  </Link>
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

"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import paw from "@/public/home/paw.png";

import { CheckoutSubscriptionBody } from "@/pages/api/checkout";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

import ArrowComponent from "@/components/SVG/little_arrow4";
import { useTheme } from "next-themes";

const Plans = () => {
  const t = useTranslations("Home.Subscriptions");
  const locale = useLocale();

  const { resolvedTheme } = useTheme();
  let color;

  switch (resolvedTheme) {
    case "light":
      color = "#231F20";
      break;
    case "dark":
      color = "#fff";
      break;
    default:
      color = "#231F20";
      break;
  }

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
        className="pt-24 bg-linen dark:bg-falured flex flex-col items-center"
      >
        <div className="flex justify-center items-center">
          <p className="text-4xl text-blackbean dark:text-secondary text-center font-bold flex-wrap flex space-x-2">
            <span className="text-center w-full">Subscriptions</span>
            <span className="flex items-center space-x-1 w-full justify-center">
              <span className="text-center">plans</span>
              <Image
                src={paw}
                alt="paw"
                width={33}
                className="transform rotate-[35deg]"
              />
            </span>
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute left-[12%] -top-8 z-10">
            <ArrowComponent color={color} />
          </div>
        </div>
        <div className="mt-8 flex flex-col space-y-4 text-blackbean dark:text-secondary items-center">
          {planData.map((plan, index) => (
            <div
              key={index}
              className="bg-secondary dark:bg-blackbean flex flex-col p-8 rounded-2xl shadow-cards h-full w-[240px]"
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
              <div className="flex flex-col mt-6 h-full">
                <hr className=" border-2 border-linen mt-4" />
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

          <div className="flex flex-col space-y-4 h-full">
            <div className="p-8 border border-cinnabar rounded-2xl shadow-cards w-[240px] h-full">
              <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                <div className=" text-center">{t("book_call")}</div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                  >
                    <path
                      d="M15.4167 12.3335C12.0108 12.3335 9.25 15.1085 9.25 18.5002V61.6668C9.25 65.0585 12.0108 67.8335 15.4167 67.8335H33.9167H40.0833H58.5833C61.9904 67.8335 64.75 65.0585 64.75 61.6668V18.5002C64.75 15.1085 61.9904 12.3335 58.5833 12.3335H40.0833H33.9167H15.4167Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M15.4167 9.25C12.0108 9.25 9.25 12.0108 9.25 15.4167V58.5833C9.25 61.9904 12.0108 64.75 15.4167 64.75H33.9167H40.0833H58.5833C61.9904 64.75 64.75 61.9904 64.75 58.5833V15.4167C64.75 12.0108 61.9904 9.25 58.5833 9.25H40.0833H33.9167H15.4167Z"
                      fill="#ECF0F1"
                    />
                    <path
                      d="M15.4167 9.25C12.0108 9.25 9.25 12.0108 9.25 15.4167V24.6667V27.75H64.75V24.6667V15.4167C64.75 12.0108 61.9904 9.25 58.5833 9.25H40.0833H33.9167H15.4167Z"
                      fill="#E74C3C"
                    />
                    <path
                      d="M23.125 16.9585C23.125 17.5659 23.0054 18.1673 22.7729 18.7284C22.5405 19.2895 22.1998 19.7994 21.7704 20.2289C21.3409 20.6583 20.831 20.999 20.2699 21.2314C19.7088 21.4639 19.1074 21.5835 18.5 21.5835C17.8926 21.5835 17.2912 21.4639 16.7301 21.2314C16.169 20.999 15.6591 20.6583 15.2296 20.2289C14.8002 19.7994 14.4595 19.2895 14.2271 18.7284C13.9946 18.1673 13.875 17.5659 13.875 16.9585C13.875 16.3511 13.9946 15.7497 14.2271 15.1886C14.4595 14.6275 14.8002 14.1176 15.2296 13.6881C15.6591 13.2587 16.169 12.918 16.7301 12.6856C17.2912 12.4531 17.8926 12.3335 18.5 12.3335C19.1074 12.3335 19.7088 12.4531 20.2699 12.6856C20.831 12.918 21.3409 13.2587 21.7704 13.6881C22.1998 14.1176 22.5405 14.6275 22.7729 15.1886C23.0054 15.7497 23.125 16.3511 23.125 16.9585Z"
                      fill="#DF482B"
                    />
                    <path
                      d="M18.5 3.0835C16.797 3.0835 15.4166 4.4639 15.4166 6.16683V15.4168C15.4166 17.1198 16.797 18.5002 18.5 18.5002C20.2029 18.5002 21.5833 17.1198 21.5833 15.4168V6.16683C21.5833 4.4639 20.2029 3.0835 18.5 3.0835Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M60.125 16.9585C60.125 17.5659 60.0054 18.1673 59.7729 18.7284C59.5405 19.2895 59.1998 19.7994 58.7704 20.2289C58.3409 20.6583 57.831 20.999 57.2699 21.2314C56.7088 21.4639 56.1074 21.5835 55.5 21.5835C54.8926 21.5835 54.2912 21.4639 53.7301 21.2314C53.169 20.999 52.6591 20.6583 52.2296 20.2289C51.8002 19.7994 51.4595 19.2895 51.2271 18.7284C50.9946 18.1673 50.875 17.5659 50.875 16.9585C50.875 16.3511 50.9946 15.7497 51.2271 15.1886C51.4595 14.6275 51.8002 14.1176 52.2296 13.6881C52.6591 13.2587 53.169 12.918 53.7301 12.6856C54.2912 12.4531 54.8926 12.3335 55.5 12.3335C56.1074 12.3335 56.7088 12.4531 57.2699 12.6856C57.831 12.918 58.3409 13.2587 58.7704 13.6881C59.1998 14.1176 59.5405 14.6275 59.7729 15.1886C60.0054 15.7497 60.125 16.3511 60.125 16.9585Z"
                      fill="#DF482B"
                    />
                    <path
                      d="M55.5 3.0835C53.798 3.0835 52.4166 4.31683 52.4166 6.16683V15.4168C52.4166 16.9585 53.798 18.5002 55.5 18.5002C57.202 18.5002 58.5833 16.9585 58.5833 15.4168V6.16683C58.5833 4.31683 57.202 3.0835 55.5 3.0835Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M15.4166 33.917V40.0837H21.5833V33.917H15.4166ZM24.6666 33.917V40.0837H30.8333V33.917H24.6666ZM33.9166 33.917V40.0837H40.0833V33.917H33.9166ZM43.1666 33.917V40.0837H49.3333V33.917H43.1666ZM52.4166 33.917V40.0837H58.5833V33.917H52.4166Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M15.4166 43.167V49.3337H21.5833V43.167H15.4166ZM24.6666 43.167V49.3337H30.8333V43.167H24.6666ZM33.9166 43.167V49.3337H40.0833V43.167H33.9166ZM43.1666 43.167V49.3337H49.3333V43.167H43.1666ZM52.4166 43.167V49.3337H58.5833V43.167H52.4166Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M15.4166 52.417V58.5837H21.5833V52.417H15.4166ZM24.6666 52.417V58.5837H30.8333V52.417H24.6666ZM33.9166 52.417V58.5837H40.0833V52.417H33.9166ZM43.1666 52.417V58.5837H49.3333V52.417H43.1666ZM52.4166 52.417V58.5837H58.5833V52.417H52.4166Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M72.3029 57.191C72.3029 61.2384 70.6951 65.1201 67.8331 67.9821C64.9712 70.844 61.0895 72.4518 57.0421 72.4518C52.9947 72.4518 49.113 70.844 46.251 67.9821C43.3891 65.1201 41.7812 61.2384 41.7812 57.191C41.7812 53.1436 43.3891 49.2619 46.251 46.4C49.113 43.538 52.9947 41.9302 57.0421 41.9302C61.0895 41.9302 64.9712 43.538 67.8331 46.4C70.6951 49.2619 72.3029 53.1436 72.3029 57.191Z"
                      fill="#34495E"
                    />
                    <path
                      d="M57.0417 43.167C56.1907 43.167 55.5 43.8577 55.5 44.7087V46.2503V55.5003V57.042C55.5 57.893 56.1907 58.5837 57.0417 58.5837H58.5833H64.75H66.2917C67.1427 58.5837 67.8333 57.893 67.8333 57.042C67.8333 56.191 67.1427 55.5003 66.2917 55.5003H64.75H58.5833V46.2503V44.7087C58.5833 43.8577 57.8927 43.167 57.0417 43.167Z"
                      fill="#BDC3C7"
                    />
                    <path
                      d="M57.0417 40.0835C47.6745 40.0835 40.0834 47.4835 40.0834 57.0418C40.0834 66.2918 47.6745 74.0002 57.0417 74.0002C66.4089 74.0002 74 66.2918 74 57.0418C74 47.4835 66.4089 40.0835 57.0417 40.0835ZM57.0417 43.1668C64.7038 43.1668 70.9167 49.3335 70.9167 57.0418C70.9167 64.4418 64.7038 70.9168 57.0417 70.9168C49.3796 70.9168 43.1667 64.4418 43.1667 57.0418C43.1667 49.3335 49.3796 43.1668 57.0417 43.1668Z"
                      fill="#7F8C8D"
                    />
                    <path
                      d="M58.5833 57.0417C58.5833 57.8927 57.8927 58.5833 57.0417 58.5833C56.1907 58.5833 55.5 57.8927 55.5 57.0417C55.5 56.1907 56.1907 55.5 57.0417 55.5C57.8927 55.5 58.5833 56.1907 58.5833 57.0417Z"
                      fill="#95A5A6"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  className="px-4 py-2 rounded-full space-x-2 border border-cinnabar bg-transparent hover:bg-cinnabar text-third hover:text-secondary dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean justify-center items-center"
                  href={"https://calendly.com/uxmoca/30min?month=2023-11"}
                  target="_blank"
                >
                  <span className="font-bold md:text-xs lg:text-base">
                    {t("book_now")}
                  </span>
                </a>
              </div>
            </div>

            <div className="p-12 border rounded-2xl border-cinnabar shadow-cards w-[240px] h-full">
              <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                <div className="text-center text-xs font-bold">
                  FAQ about our subscription plans
                </div>
              </div>

              <div className="flex justify-center mx-auto mt-8 items-center">
                <Link
                  className="px-4 py-2 rounded-full space-x-2 border border-cinnabar bg-transparent hover:bg-cinnabar text-third hover:text-secondary dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean justify-center items-center"
                  href={`/${locale}/subscriptions`}
                >
                  <span className="font-bold text-center md:text-xs lg:text-base">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24" />
      </div>
    </>
  );
};

export default Plans;

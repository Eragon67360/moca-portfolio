"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useTranslations } from "next-intl";

const Plans = () => {
  const t = useTranslations("Home.Subscriptions");
  const locale = useLocale();

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
      route: `/${locale}/payment?plan=standard&price=895`,
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
      route: `/${locale}/payment?plan=pro&price=1195`,
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
        <div className="text-4xl text-blackbean dark:text-secondary font-bold text-center">
          {t("title")}
        </div>
        <div className="mt-24 grid grid-cols-1 gap-8 text-blackbean dark:text-secondary w-full px-8">
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
                    <Link
                      href={plan.route}
                      target="_blank"
                      className="uppercase font-bold py-2 px-4 rounded-full bg-cinnabar dark:bg-linen text-secondary dark:text-blackbean hover:bg-linen hover:text-blackbean hover:dark:bg-falured hover:dark:text-secondary"
                    >
                      {plan.buttonText}
                    </Link>
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

          <div className="flex flex-col justify-between space-y-4">
            <div className="p-12 border rounded-2xl shadow-cards">
              <div className="flex flex-col space-y-4 text-blackbean dark:text-secondary">
                <div className="flex justify-center">
                  <BsCalendarEvent size={50} />
                </div>

                <div className=" text-center">{t("book_call")}</div>
              </div>

              <div className="flex justify-center mx-auto mt-8">
                <Link
                  className="px-4 py-2 rounded-full flex space-x-4 border border-blackbean bg-blackbean hover:bg-linen text-secondary hover:text-blackbean dark:text-blackbean dark:bg-linen hover:dark:text-secondary hover:dark:bg-blackbean"
                  href={`/${locale}/booking`}
                >
                  <span className="font-semibold">{t("book_now")}</span>
                  <MdOutlineOpenInNew size={24} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col p-6 border rounded-2xl bg-falured text-secondary text-base">
              <p>{t("graphics_title")}</p>
              <br />
              <div className="flex ml-4 space-x-6">
                <ul>
                  <li className="list-disc">{t("graphics_content1")}</li>
                  <li className="list-disc">{t("graphics_content2")}</li>
                  <li className="list-disc">{t("graphics_content3")}</li>
                  <li className="list-disc">{t("graphics_content4")}</li>
                </ul>
                <ul>
                  <li className="list-disc">{t("graphics_content5")}</li>
                  <li className="list-disc">{t("graphics_content6")}</li>
                  <li className="list-disc">{t("graphics_content7")}</li>
                  <li className="list-disc">{t("graphics_content8")}</li>
                </ul>
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

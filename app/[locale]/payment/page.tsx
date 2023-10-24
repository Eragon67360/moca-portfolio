"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import StandardSubscriptionCard from "@/components/[locale]/desktop/payment/StandardSubscriptionCard";
import ProSubscriptionCard from "@/components/[locale]/desktop/payment/ProSubscriptionCard";
import { useLocale, useTranslations } from "next-intl";

const Payment = () => {
  const params = useSearchParams();
  const plan = params?.get("plan");
  const price = params?.get("price") || "0";

  const t = useTranslations("Payment");
  const locale = useLocale();

  return (
    <>
      <div className="mt-24 h-full flex p-12">
        <main className="flex flex-col min-h-screen items-center justify-between">
          <div>
            <div className="w-full flex items-center justify-center ">
              <div className="w-1/3">
                <h1 className="text-center text-4xl font-bold my-10">
                  {locale === "en" && `Pricing for ${plan} plan`}
                  {locale === "de" && `Pricing for ${plan} plan`}
                  {locale === "fr" && `Pricing for ${plan} plan`}
                  {locale === "es" && `Pricing for ${plan} plan`}
                </h1>

                {plan === "standard" && (
                  <StandardSubscriptionCard price={price} />
                )}
                {plan === "pro" && <ProSubscriptionCard price={price} />}
              </div>
            </div>

            {plan === "standard" && (
              <div className="mt-10 w-full">
                <h2 className="text-center text-2xl font-bold my-5">
                  What&apos;s Included:
                </h2>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <strong>
                      You get a team to work on your website full-time.
                    </strong>
                    <p>
                      Instead of relying on a single freelancer or trying to do
                      everything yourself, our subscription provides you with a
                      dedicated team. This means you have a pool of expertise at
                      your disposal, ensuring that each aspect of your
                      website—from design to development—is in expert hands.
                    </p>
                  </div>

                  <div>
                    <strong>One request at a time.</strong>
                    <p>
                      To maintain the quality of our services and provide
                      focused attention to each task, we handle one request at a
                      time. This ensures that every request gets the full
                      attention it deserves, leading to better outcomes and
                      fewer mistakes.
                    </p>
                  </div>

                  <div>
                    <strong>Average 3-5 days delivery.</strong>
                    <p>
                      We understand the importance of timely deliveries.
                      That&apos;s why, on average, we promise a turnaround time
                      of 3-5 days. This means you can plan your campaigns and
                      updates with the confidence that your requests will be
                      completed on time.
                    </p>
                  </div>

                  <div>
                    <strong>Easy credit-card payments.</strong>
                    <p>
                      Payment is straightforward and hassle-free. We accept all
                      major credit cards, ensuring a seamless transaction
                      process. Our secure payment gateway also ensures that your
                      financial information is safe and protected.
                    </p>
                  </div>

                  <div>
                    <strong>Pause or cancel anytime.</strong>
                    <p>
                      We believe in flexibility and value your trust. If, for
                      any reason, you need to pause your subscription or wish to
                      cancel, we&apos;ve made the process straightforward. There
                      are no hidden fees or long-term contracts, giving you
                      complete control over your subscription.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {plan === "pro" && (
              <div className="mt-10 w-full">
                <h2 className="text-center text-2xl font-bold my-5">
                  {t("title")}
                </h2>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <strong>{t("sec1")}</strong>
                    <p>{t("exp1")}</p>
                  </div>

                  <div>
                    <strong>{t("sec2")}</strong>
                    <p>{t("exp2")}</p>
                  </div>

                  <div>
                    <strong>{t("sec3")}</strong>
                    <p>{t("exp3")}</p>
                  </div>

                  <div>
                    <strong>{t("sec4")}</strong>
                    <p>{t("exp4")}</p>
                  </div>

                  <div>
                    <strong>{t("sec5")}</strong>
                    <p>{t("exp5")}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-center text-2xl font-bold my-5">
                    {t("graph_title")}
                  </h3>
                  <ul>
                    <li>
                      <strong>{t("graph1")}</strong> {t("graph_exp1")}
                    </li>
                    <li>
                      <strong>{t("graph2")}</strong> {t("graph_exp2")}
                    </li>
                    <li>
                      <strong>{t("graph3")}</strong> {t("graph_exp3")}
                    </li>
                    <li>
                      <strong>{t("graph4")}</strong> {t("graph_exp4")}
                    </li>
                    <li>
                      <strong>{t("graph5")}</strong> {t("graph_exp5")}
                    </li>
                    <li>
                      <strong>{t("graph6")}</strong> {t("graph_exp6")}
                    </li>
                    <li>
                      <strong>{t("graph7")}</strong> {t("graph_exp7")}
                    </li>
                    <li>
                      <strong>{t("graph8")}</strong> {t("graph_exp8")}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Payment;

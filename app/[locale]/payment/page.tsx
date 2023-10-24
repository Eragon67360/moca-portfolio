"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import StandardSubscriptionCard from "@/components/[locale]/desktop/payment/StandardSubscriptionCard";
import ProSubscriptionCard from "@/components/[locale]/desktop/payment/ProSubscriptionCard";
import { useLocale } from "next-intl";

import Dropdown from "./Dropdown";

const Payment = () => {
  const params = useSearchParams();
  const plan = params?.get("plan");
  const price = params?.get("price") || "0";

  const locale = useLocale();

  return (
    <>
      <div className="mt-24 h-full flex w-screen items-center justify-center overflow-y-visible">
        <main className="flex flex-col min-h-full w-full">
          <div>
            <div className="flex flex-col items-center justify-center">
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
              <div className="mt-12">
                <Dropdown plan={plan} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Payment;

"use client";
import React from "react";
import StandardSubscriptionCard from "@/components/[locale]/desktop/payment/StandardSubscriptionCard";
import ProSubscriptionCard from "@/components/[locale]/desktop/payment/ProSubscriptionCard";
import { useLocale } from "next-intl";
import Dropdown from "../../../components/[locale]/desktop/payment/Dropdown";

interface DropdownProps {
  plan?: string | null;
  price?: string | null;
}

function TabletPayment({ plan, price }: DropdownProps) {
  const locale = useLocale();
  return (
    <>
      <div className="mt-24 h-full flex w-screen items-center justify-center overflow-y-visible">
        <main className="flex flex-col min-h-screen w-full">
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
}

export default TabletPayment;

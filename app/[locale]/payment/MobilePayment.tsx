import React from "react";

import StandardSubscriptionCard from "@/components/[locale]/mobile/payment/StandardSubscriptionCard";
import ProSubscriptionCard from "@/components/[locale]/mobile/payment/ProSubscriptionCard";
import { useLocale } from "next-intl";
import Dropdown from "@/components/[locale]/mobile/payment/Dropdown";

interface DropdownProps {
  plan?: string | null;
  price?: string | null;
}

function MobilePayment({ plan, price }: DropdownProps) {
  const locale = useLocale();
  return (
    <>
      <div className="mt-24 h-full flex w-screen items-center justify-center">
        <main className="flex flex-col min-h-screen w-full">
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[90%]">
                <h1 className="text-center text-2xl font-bold my-10">
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

export default MobilePayment;

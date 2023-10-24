"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import StandardSubscriptionCard from "@/components/[locale]/desktop/payment/StandardSubscriptionCard";
import ProSubscriptionCard from "@/components/[locale]/desktop/payment/ProSubscriptionCard";

const Payment = () => {
  const params = useSearchParams();
  const plan = params?.get("plan");
  const price = params?.get("price") || "0";

  return (
    <>
      <div className="mt-24 mx-auto h-full flex w-1/3">
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <h1 className="text-center text-4xl font-bold my-10">
              Pricing for {plan} plan
            </h1>

            {plan === "standard" && <StandardSubscriptionCard price={price} />}
            {plan === "pro" && <ProSubscriptionCard price={price}  />}
          </div>
        </main>
      </div>
    </>
  );
};

export default Payment;

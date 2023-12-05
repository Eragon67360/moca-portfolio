"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";
import Dropdown from "@/components/[locale]/desktop/payment/Dropdown";

function Subscriptions() {
  const router = useRouter();
  return (
    <>
      <div className="bg-linen dark:bg-blackbean px-40 h-full">
        <div className="my-32 p-8 w-full flex flex-col justify-center bg-secondary dark:bg-falured rounded-2xl shadow-lg">
          <button type="button" onClick={() => router.back()}>
            <TiArrowBack size={32} />
          </button>
          <h1 className="text-5xl font-bold text-center mt-4">
            Subscription plans
          </h1>
          <div className="mt-4 text-2xl">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscriptions;

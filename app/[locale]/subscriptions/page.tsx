import React from "react";
import { TiArrowBack } from "react-icons/ti";
import Dropdown from "@/components/[locale]/desktop/payment/Dropdown";

function Subscriptions() {
  return (
    <>
      <div className="bg-linen dark:bg-blackbean px-40">
        <div className="my-32 p-8 w-full flex flex-col justify-center bg-secondary dark:bg-falured rounded-2xl">
          <div className="">
            <TiArrowBack size={32} />
          </div>
          <h1 className="text-5xl font-bold text-center mt-4">
            Subscription plans
          </h1>
          <div className="mt-4 text-2xl">
            <Dropdown/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscriptions;

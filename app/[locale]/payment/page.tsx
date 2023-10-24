'use client'

import React from "react";
import getSearchParams from "./getSearchParams";

import MobilePayment from "./MobilePayment";
import TabletPayment from "./TabletPayment";
import DesktopPayment from "./DesktopPayment";



const Payment = () => {
  const [plan, price] = getSearchParams();

  return (
    <>
      <div className="mobile">
        <MobilePayment plan={plan} price={price} />
      </div>
      <div className="phablet">
        <TabletPayment plan={plan} price={price} />
      </div>
      <div className="tablet">
        <TabletPayment plan={plan} price={price} />
      </div>
      <div className="desktop">
        <DesktopPayment plan={plan} price={price} />
      </div>
    </>
  );
};

export default Payment;

"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const isProduction = process.env.NODE_ENV === "production";
  const baseUrl = isProduction
    ? "https://www.uxmoca.com"
    : "http://localhost:3000";
  const returnUrl = `${baseUrl}/payment-success`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <>
      <div className="h-full w-full justify-center items-center text-center ">
        <form onSubmit={handleSubmit}>
          <PaymentElement
            options={{
              layout: {
                type: "tabs",
                defaultCollapsed: false,
                radios: true,
                spacedAccordionItems: false,
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="bg-[#0570de] mt-4 rounded-lg px-4 py-2 text-dark_ink w-full hover:bg-[#0570de]/40"
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
}

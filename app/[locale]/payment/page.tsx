"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Appearance } from "@stripe/stripe-js";
import PaymentForm from "@/components/[locale]/desktop/home/PaymentForm";
import axios from "axios";

const Payment = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    async function fetchClientSecret() {
      const { data } = await axios.post("/api/checkout", {
        data: { amount: 1 },
      });
      setClientSecret(data.client_secret);
    }

    fetchClientSecret();
  }, []);

  const theme:"stripe" | "night" | "flat" | undefined = "stripe"

  const appearance = {
    theme: theme,
  };

  return (
    <>
      <div className="mt-24 mx-auto h-full flex w-1/4">
        {clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret, appearance }}
          >
            <PaymentForm />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Payment;

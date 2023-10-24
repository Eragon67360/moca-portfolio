// components/MonthlySubscriptionCard.tsx
"use client";

import { CheckoutSubscriptionBody } from "@/pages/api/checkout";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
interface SubscriptionCardProps {
  price: string;
}

const StandardSubscriptionCard = ({ price }: SubscriptionCardProps) => {
  const handleClick = async () => {
    // step 1: load stripe
    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    const stripe = await loadStripe(STRIPE_PK);

    // step 2: define the data for monthly subscription
    const body: CheckoutSubscriptionBody = {
      interval: "month",
      amount: 119500,
      plan: "Pro",
      planDescription: "Subscribe for 1195€ per month",
    };

    // step 3: make a post fetch api call to /checkout-session handler
    const result = await fetch("/api/checkout", {
      method: "post",
      body: JSON.stringify(body, null),
      headers: {
        "content-type": "application/json",
      },
    });

    // step 4: get the data and redirect to checkout using the sessionId
    const data = (await result.json()) as Stripe.Checkout.Session;
    const sessionId = data.id!;
    stripe?.redirectToCheckout({ sessionId });
  };
  // render a simple card
  return (
    <>
      <div className="border border-gray-200 rounded-md p-8 flex flex-col gap-2 items-start">
        <h2 className="text-xl font-bold text-gray-700">
          Monthly Subscription
        </h2>
        <p className="text-gray-400">{price}€ per month</p>
        <button
          onClick={() => handleClick()}
          className="border border-cinnabar text-cinnabar rounded-md px-4 py-2 w-full hover:bg-cinnabar hover:text-secondary transition-colors"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};
export default StandardSubscriptionCard;

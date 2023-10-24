// components/MonthlySubscriptionCard.tsx
"use client";

import { CheckoutSubscriptionBody } from "@/pages/api/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslations } from "next-intl";
import Stripe from "stripe";

interface SubscriptionCardProps {
  price?: string | null;
}

const StandardSubscriptionCard = ({ price }: SubscriptionCardProps) => {
  const handleClick = async () => {
    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    const stripe = await loadStripe(STRIPE_PK);

    const body: CheckoutSubscriptionBody = {
      interval: "month",
      amount: 89500,
      plan: "Standard",
      planDescription: "Subscribe for 895€ per month",
    };

    const result = await fetch("/api/checkout", {
      method: "post",
      body: JSON.stringify(body, null),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = (await result.json()) as Stripe.Checkout.Session;
    const sessionId = data.id!;
    stripe?.redirectToCheckout({ sessionId });
  };

  const t = useTranslations("PaymentCard");

  return (
    <>
      <div className="border border-gray-200 rounded-md p-8 flex flex-col gap-2 items-start">
        <h2 className="text-xl font-bold text-gray-700">
          {t('title')}
        </h2>
        <p className="text-gray-400">{price}€ {t('month')}</p>
        <button
          onClick={() => handleClick()}
          className="border border-cinnabar text-cinnabar rounded-md px-4 py-2 w-full hover:bg-cinnabar hover:text-secondary transition-colors"
        >
          {t('subscribe')}
        </button>
      </div>
    </>
  );
};
export default StandardSubscriptionCard;

import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export interface CheckoutSubscriptionBody {
  plan: string;
  planDescription: string;
  amount: number;
  interval: "month" | "year";
  customerId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const body: CheckoutSubscriptionBody = req.body;
  const origin = req.headers["origin"] || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.
  const success_url = !body.customerId
    ? `${origin}/signup?session_id={CHECKOUT_SESSION_ID}`
    : `${origin}/thankyou?session_id={CHECKOUT_SESSION_ID}`;

  try {
    const session = await stripe?.checkout.sessions.create({
      customer: body.customerId,
      mode: "subscription", // mode should be subscription
      line_items: [
        {
          price_data: {
            currency: "eur",
            recurring: {
              interval: body.interval,
            },
            unit_amount: body.amount,
            product_data: {
              name: body.plan,
              description: body.planDescription,
            },
          },
          quantity: 1,
        },
      ],
      success_url: success_url,
      cancel_url: `${origin}/cancel?session_id={CHECKOUT_SESSION_ID}`,
    });
    return res.status(200).json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return res.status(error.statusCode || 500).json({ message });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

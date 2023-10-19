// pages/api/checkout.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-10-16",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const amount = "10";
  const id_configuration = process.env.ID_CONFIGURATION;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method_configuration: id_configuration,
    });

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=21600"
    );

    return res.status(200).json({
      client_secret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error("Error in ga API route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

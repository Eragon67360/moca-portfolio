import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.GA_PROPERTY_ID;
const DAYS = 7;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  },
});

function formatDate(inputDate: string | null | undefined): string {
  // Extract year, month, and day from the input string
  const year = inputDate?.substring(0, 4);
  const month = inputDate?.substring(4, 6);
  const day = inputDate?.substring(6, 8);

  // Convert to desired format (DD/MM)
  return `${day}/${month}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const range = (req.query.range || "week") as string;

    let startDate = new Date().toISOString().split("T")[0];
    let endDate = new Date().toISOString().split("T")[0];

    switch (range) {
      case "today":
        break;
      case "week":
        startDate = new Date(new Date().setDate(new Date().getDate() - 7))
          .toISOString()
          .split("T")[0];
        break;
      case "month":
        startDate = new Date(new Date().setMonth(new Date().getMonth() - 1))
          .toISOString()
          .split("T")[0];
        break;
      case "year":
        startDate = new Date(
          new Date().setFullYear(new Date().getFullYear() - 1)
        )
          .toISOString()
          .split("T")[0];
        break;
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      dimensions: [{ name: "date" }], // this specifies that we want data broken down by day
      metrics: [{ name: "activeUsers" }], // the metric you're interested in
    });

    const [realresponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: startDate,
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "year",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
      ],
    });

    let totalVisitors = 0;
    response.rows?.forEach((row: any) => {
      totalVisitors += parseInt(row.metricValues[0].value);
    });

    let totalPageViews = 0;
    realresponse.rows?.forEach((row: any) => {
      totalPageViews += parseInt(row.metricValues[0].value);
    });

    const formattedResults = response.rows?.map((row) => {
      const date = formatDate(row.dimensionValues?.[0].value);
      const activeUsers = row.metricValues?.[0].value;
      return { date, activeUsers };
    });

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=21600"
    );

    return res.status(200).json({
      formattedResults,
      totalVisitors,
      totalPageViews,
    });
  } catch (error) {
    console.error("Error in ga API route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

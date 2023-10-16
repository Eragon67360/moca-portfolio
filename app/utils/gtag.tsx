'use client'
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalyticsComponent = () => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  );
};

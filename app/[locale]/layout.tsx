import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/[locale]/navigation/navbar";
import ProgressBar from "@/components/[locale]/ProgressBar";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOCA Portfolio",
  description: "Portfolio for MOCA",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col h-screen overflow-y-hidden">
            <ProgressBar />
            <Navbar />
            <div className="flex flex-col flex-grow overflow-y-scroll">
              {children}
              <Analytics />
              <ToastContainer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

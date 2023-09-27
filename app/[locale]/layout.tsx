import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DesktopNavbar from "@/components/[locale]/desktop/navigation/navbar";
import TabletNavbar from "@/components/[locale]/tablet/navigation/navbar";
import MobileNavbar from "@/components/[locale]/mobile/navigation/navbar";
import ProgressBar from "@/components/[locale]/ProgressBar";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import SEO from "@/components/SEO";
import Resizer from "@/components/Resizer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "UXMOCA | %s ",
    default: "UXMOCA - UX Development",
  },
  description: "Our official UX MOCA website",
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
    <html lang={locale} suppressHydrationWarning>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col h-screen overflow-y-hidden bg-white dark:bg-blackbean">
            <ProgressBar />
            <Resizer
              MobileComponent={<MobileNavbar />}
              DesktopComponent={<DesktopNavbar />}
              TabletComponent={<TabletNavbar />}
            />
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

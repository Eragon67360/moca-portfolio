import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DesktopNavbar from "@/components/[locale]/desktop/navigation/navbar";
import TabletNavbar from "@/components/[locale]/tablet/navigation/navbar";
import MobileNavbar from "@/components/[locale]/mobile/navigation/navbar";
import ProgressBar from "@/components/[locale]/ProgressBar";
import DesktopFooter from "@/components/[locale]/desktop/footer";
import TabletFooter from "@/components/[locale]/tablet/footer";
import MobileFooter from "@/components/[locale]/mobile/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalyticsComponent } from "../utils/gtag";

import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable}`}
    >
      <GoogleAnalyticsComponent />
      <link rel="icon" href="/app/favicon.ico"></link>
      <body>
        <ClerkProvider>
          <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NextIntlClientProvider locale={locale} messages={messages}>
                <div className="flex flex-col h-screen bg-white dark:bg-blackbean font-sans">
                  <ProgressBar />
                  <div className="flex flex-col flex-grow font-sans">
                    <>
                      <div className="mobile">
                        <MobileNavbar />
                      </div>
                      <div className="desktop">
                        <DesktopNavbar />
                      </div>
                      <div className="tablet">
                        <TabletNavbar />
                      </div>
                      <div className="phablet">
                        <TabletNavbar />
                      </div>
                    </>
                    {children}

                    <>
                      <div className="mobile">
                        <MobileFooter />
                      </div>
                      <div className="desktop">
                        <DesktopFooter />
                      </div>
                      <div className="tablet">
                        <TabletFooter />
                      </div>
                      <div className="phablet"></div>
                    </>
                    <Analytics />
                    <ToastContainer />
                  </div>
                </div>
              </NextIntlClientProvider>
            </ThemeProvider>
          </PrimeReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

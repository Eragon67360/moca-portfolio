import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DesktopNavbar from "@/components/[locale]/desktop/navigation/navbar";
import TabletNavbar from "@/components/[locale]/tablet/navigation/navbar";
import MobileNavbar from "@/components/[locale]/mobile/navigation/navbar";
import ProgressBar from "@/components/[locale]/ProgressBar";
import DesktopFooter from "@/components/[locale]/desktop/footer";
import MobileFooter from "@/components/[locale]/mobile/footer";
import { usePathname } from "next/navigation";

import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang={locale} suppressHydrationWarning className={poppins.className}>
      <link rel="icon" href="/app/favicon.ico"></link>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col h-screen overflow-y-hidden bg-white dark:bg-blackbean">
            <ProgressBar />
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

            <div className="flex flex-col flex-grow overflow-y-scroll">
              {children}
              <div className="mobile">
                <MobileFooter />
              </div>
              <div className="desktop">
                <DesktopFooter />
              </div>
              <div className="tablet"></div>
              <div className="phablet"></div>
              <Analytics />
              <ToastContainer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

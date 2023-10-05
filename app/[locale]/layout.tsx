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

import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { notFound } from "next/navigation";
import Resizer from "@/components/Resizer";

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

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

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
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col h-screen overflow-y-hidden bg-white dark:bg-blackbean">
            <ProgressBar />
            <Resizer
              MobileComponent={<MobileNavbar />}
              DesktopComponent={<DesktopNavbar />}
              TabletComponent={<TabletNavbar />}
              PhabletComponent={<TabletNavbar />}
            />
            <div className="flex flex-col flex-grow overflow-y-scroll">
              {children}
              <Resizer
                MobileComponent={<MobileFooter />}
                DesktopComponent={<DesktopFooter />}
                TabletComponent={<></>}
                PhabletComponent={<></>}
              />
              <Analytics />
              <ToastContainer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

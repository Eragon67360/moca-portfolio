import "./globals.css";
import "./styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/[locale]/navigation/navbar";
import ProgressBar from "@/components/ProgressBar";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOCA Portfolio",
  description: "Portfolio for MOCA",
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <ProgressBar />
          <Navbar />
          <div className="flex flex-col flex-grow overflow-hidden">
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}

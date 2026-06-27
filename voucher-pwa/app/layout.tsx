// Page edited by REGGIE VAUDIN

// Do not touch this page

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voucher PWA",
  description: "Voucher PWA Team Project",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="
          min-h-screen
          bg-zinc-100 text-zinc-900
          dark:bg-slate-900 dark:text-slate-50
        "
      >
        {/* Added Navbar to the layout of the pages */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="min-h-screen pb-20 md:pb-0">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

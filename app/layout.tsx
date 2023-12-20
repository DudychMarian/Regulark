import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchProvider } from "@/context/search";

import "./globals.scss";
import "react-tippy/dist/tippy.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regulark - Regular Expression Patterns",
  description:
    "Regulark is a open-source project that provides a set of pre-built regular expressions for common use cases, such as validating emails, URLs, and phone numbers.",
  keywords:
    "regular expressions, regex patterns, email validation, URL parsing, phone number validation, open-source project, programming tools, developer resources",
  authors: { name: "Dudych M.", url: "https://github.com/DudychMarian" },
  publisher: "Dudych M.",
  creator: "Dudych M.",
  applicationName: "Regulark",
  alternates: {
    canonical: "https://regulark.dudych.im",
  },
  openGraph: {
    title: "Regulark - Regular Expression Patterns",
    description:
      "Regulark is a open-source project that provides a set of pre-built regular expressions for common use cases, such as validating emails, URLs, and phone numbers.",
    url: "https://regulark.dudych.im",
    siteName: "Regulark",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/image/cover.jpeg",
        width: 1280,
        height: 670,
        alt: "Regulark | Cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulark - Regular Expression Patterns",
    description:
      "Regulark is a open-source project that provides a set of pre-built regular expressions for common use cases, such as validating emails, URLs, and phone numbers.",
    creator: "@MarianDudych",
    site: "https://regulark.dudych.im",
    images: [
      {
        url: "/image/cover.jpeg",
        width: 1280,
        height: 670,
        alt: "Regulark | Cover image",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body className={inter.className}>
    <SearchProvider>
          <main className="layout_container">
            <Header />
            {children}
            <Analytics />
            <Footer />
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}

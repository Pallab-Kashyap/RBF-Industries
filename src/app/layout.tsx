import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react'
import Head from "next/head";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rbfindustries.in'),
  keywords: ["ravi bio fuel industries", "ravi", "rbf industries", "rbf", "Biofuel Hyderabad", "biomass briquettes", "industrial fuel", "eco-friendly biofuel", "biomass fuel for factories"],
  title: "Ravi Bio Fuel Industries",
  description: "Based in Hyderabad, we provide sustainable biomass briquettes for industrial fuel needs. Our eco-friendly biofuel solutions offer efficient, cleaner-burning energy for factories, helping reduce carbon footprints. Choose us for high-quality biomass briquettes and support a sustainable future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>Leading Biofuel Company in Hyderabad | Biomass Briquettes for Industrial Fuel</title>
        <meta
          name="description"
          content="Based in Hyderabad, we provide sustainable biomass briquettes for industrial fuel needs. Our eco-friendly biofuel solutions offer efficient, cleaner-burning energy for factories, helping reduce carbon footprints. Choose us for high-quality biomass briquettes and support a sustainable future."
        />
        <meta
          name="keywords"
          content="Biofuel Hyderabad, biomass briquettes, industrial fuel, eco-friendly biofuel, renewable energy, sustainable fuel, biomass fuel for factories"
        />
       
        {/* Add the favicon link */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

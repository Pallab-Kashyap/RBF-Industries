import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rbf-industries-53j5-1p8kz5i99-pallab-kashyaps-projects.vercel.app/" />
        {/* Add the favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const ivyPresto = localFont({
  src: "../../fonts/Ivy-Presto-Headline-Light.otf",
  variable: "--font-ivy-presto",
});

const caslon = localFont({
  src: "../../fonts/Caslon/F37Caslon-SemiBoldDisplay.otf",
  variable: "--font-caslon",
});

const areaExtended = localFont({
  src: "../../fonts/Area_Extended_SemiBold.otf",
  variable: "--font-area-extended",
});

const areaNormal = localFont({
  src: "../../fonts/Area_Normal_Regular.otf",
  variable: "--font-area-normal",
});

const gotham = localFont({
  src: "../../fonts/Gotham-Light.ttf",
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "Coaching Template",
  description: "Coaching Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ivyPresto.variable} ${caslon.variable} ${areaExtended.variable} ${areaNormal.variable} ${gotham.variable} ${inter.className} antialiased custom`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

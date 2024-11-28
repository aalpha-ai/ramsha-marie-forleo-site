import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const montserratBold = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat-bold",
});

const caslon = localFont({
  src: "../fonts/Caslon/F37Caslon-ExtraBoldDisplay.otf",
  variable: "--font-caslon",
  display: 'swap',
  preload: true,
});

const seasons = localFont({
  src: "../fonts/Seasons/Fontspring-DEMO-theseasons-reg.otf",
  variable: "--font-seasons",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Glowing Femme",
  description: "Glowing Femme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Seasons/Fontspring-DEMO-theseasons-reg.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${montserratBold.variable} ${caslon.variable} ${seasons.variable} antialiased custom`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

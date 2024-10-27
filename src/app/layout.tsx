import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/src/styles/main.scss";

const avenirNextBold = localFont({
  src: "../fonts/AvenirNext-Bold.woff",
  variable: "--font-avenir-bold",
  weight: "700",
});

const avenirNextRegular = localFont({
  src: "../fonts/AvenirNextLTPro-Regular.woff",
  variable: "--font-avenir-regular",
  weight: "500",
});

const avenirNextLight = localFont({
  src: "../fonts/AvenirNextLight.woff",
  variable: "--font-avenir-light",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lendsqr",
    default: "Lendsqr",
  },
  description:
    "Start and scale your loan business with Lendsqr loan management system.",
  authors: { name: "Favour Oghenekowho", url: "https://newtonfav.xyz" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenirNextBold.variable} ${avenirNextRegular.variable} ${avenirNextLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeOut: The travel app made for the spontaneous.",
  description: "Light up the map when you're ready to meet and make real-world connections instantly. No endless planning, just real people looking to explore IRL!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} antialiased`}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
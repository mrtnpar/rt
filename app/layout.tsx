import "./globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retool Exercise",
  description: "Retool Exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-full bg-pill-bg ${inter.className}`}>{children}</body>
    </html>
  );
}

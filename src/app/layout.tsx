import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/config";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "A virtual store of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

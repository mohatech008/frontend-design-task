// app/layout.tsx

import type { Metadata } from "next";
// 1. Import Montserrat from next/font/google
import { Montserrat } from "next/font/google";
import "./globals.css";

// 2. Configure the font with desired weights and subsets
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Added weights from the design
});

export const metadata: Metadata = {
  title: "EduNova Platform",
  description: "Transformative learning experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font's class to the body tag */}
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
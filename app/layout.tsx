// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Poppins,Roboto,Lato } from "next/font/google"; // 1. Import Poppins
import "./globals.css";

// 2. Configure Montserrat as the default
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-montserrat', // Set as a variable
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // We only need regular weight
  variable: '--font-lato', // Set as a variable
});
// 3. Configure Poppins as an optional font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // We need regular and semibold
  variable: '--font-poppins', // Set as a variable
});
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400"], 
  variable: '--font-roboto',
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
      {/* 4. Apply all font variables to the body */}
      <body className={`${montserrat.variable} ${poppins.variable}${roboto.variable} ${lato.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
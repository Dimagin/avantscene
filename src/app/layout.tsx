import type { Metadata } from "next";
import "./globals.css";
import {Cormorant_Garamond, Montserrat} from 'next/font/google'
import React from "react";

// Title
const cormorant = Cormorant_Garamond({
    weight: ['500','700'],
    subsets: ['latin'],
    style: ['normal','italic'],
    variable: '--font-cormorant',
});

// Body
const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "L'avant-Scène",
  description: "Espace de création, Promotion et Préparation de Spectacles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

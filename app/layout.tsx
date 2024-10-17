import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import "./globals.css";
import StickyContactButton from "@/components/StickyButtons";


export const metadata: Metadata = {
  title: "Hotel Agrawal Pride",
  description: "Experience unparalleled luxury and comfort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StickyContactButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}

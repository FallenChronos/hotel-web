import type { Metadata } from "next";
import Header from '@/components/Header';
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}

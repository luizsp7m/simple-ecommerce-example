import "./globals.css";

import Navbar from "../components/layout-components/Navbar";
import Footer from "../components/layout-components/Footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "../components/provider-components/CartProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <section className="min-h-svh flex flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </section>
        </CartProvider>
      </body>
    </html>
  );
}

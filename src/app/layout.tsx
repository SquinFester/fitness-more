import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Fitness More",
  description: "Achieve your dream body shape",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {authModal}
        <Providers>
          <div className="container h-full flex-1 relative">{children}</div>
        </Providers>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { usePathname } from "next/navigation";

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
      <body className="min-h-screen">
        <Navbar />
        {authModal}
        <div className="container h-full">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import LayoutRoot from "@/components/layout/LayoutRoot";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestion location d'Engin",
  description: "Developed by Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutRoot>{children}</LayoutRoot>
        </body>
    </html>
  );
}

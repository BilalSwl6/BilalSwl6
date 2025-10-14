import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HeaderComponent from "@/components/header";
import { Github, Facebook } from "lucide-react";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilal | Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background ${jost.className}`}
      >
        <HeaderComponent />

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="border-t border-primary mt-12">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 text-sm">
            <div>
              <h3 className="text-lg font-semibold">Bilal</h3>
              <p>Building modern web experiences</p>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link
                href="https://fb.com/Bilal.swl6"
                className="text-gray-500 hover:text-blue-600"
                target="_blank"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/BilalSwl6"
                className="text-gray-500 hover:text-blue-600"
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

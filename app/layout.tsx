import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavLink from "@/components/nav-links";

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

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background ${jost.className}`}>
        <header className="border-b card-foreground">
          <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-semibold">
              Bilal
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              {NavLinks.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="border-t mt-12">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 text-sm">
            <div>
              <h3 className="text-lg font-semibold">Bilal</h3>
              <p>Building modern web experiences</p>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

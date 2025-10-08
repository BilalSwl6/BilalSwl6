"use client";

import Link from "next/link";
import NavLink from "./nav-links";
import { useState } from "react";
import { Menu } from "lucide-react"; 


const NavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/timeline", label: "Timeline" }
  ];

export default function HeaderComponent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <>
        <header className="border-b card-foreground">
          <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-semibold">
              Bilal
            </Link>
             {/* Desktop links */}
             <div className="hidden md:flex gap-6 text-sm font-medium">
              {NavLinks.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
           {/* Mobile menu dropdown */}
           {mobileOpen && (
            <div className="flex flex-col gap-4 p-4 md:hidden border-t transition-transform duration-200 ease-in-out">
              {NavLinks.map(({ href, label }) => (
                <NavLink 
                key={href} 
                href={href} 
                label={label}
                onClick={() => setMobileOpen(false)} 
                 />
              ))}
            </div>
          )}
        </header>
        </>
    )
}
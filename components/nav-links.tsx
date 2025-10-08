"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  className,
  onClick,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick} 
      className={cn(
        pathname === href
          ? "text-primary font-semibold"
          : "hover:text-primary transition-colors",
        "px-3 py-2 rounded-md text-sm md:text-base", // mobile-friendly padding & touch area
        className
      )}
      {...props}
    >
      {label}
    </Link>
  );
}

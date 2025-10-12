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

  // Check if the current path starts with href
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        isActive
          ? "text-primary font-semibold"
          : "hover:text-primary transition-colors",
        "px-3 py-2 rounded-md text-sm md:text-base",
        className
      )}
      {...props}
    >
      {label}
    </Link>
  );
}

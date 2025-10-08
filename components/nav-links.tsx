"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

export default function NavLink({
  href,
  label,
  className,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  return (
    <div key={href}>
      <Link
        href={href}
        className={cn(
          pathname === href
            ? "text-primary font-semibold"
            : "hover:text-primary transition-colors",
          className
        )}
        {...props}
      >
        {label}
      </Link>
    </div>
  );
}

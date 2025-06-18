// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { MenuItem } from "../../types/MenuItem";

interface NavbarProps {
  menu: MenuItem[];
}

export default function Navbar({ menu }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-primary-dark bg-opacity-95 backdrop-blur-sm text-neutral-white border-b border-primary-dark/50">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-between px-8 py-4 space-y-4 md:space-y-0">
        {/* Logo on the left */}
        <Link href="/" aria-label="Home" className="flex items-center space-x-4 px-4">
          {/* Explicit 64×64px dimensions via width/height */}
          <Image
            src="/images/menu/hiv-logo.jpg"
            alt="HIV Fellowship Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
          {/* If you'd like text next to the logo, uncomment below */}
          <span className="text-xl font-semibold tracking-wide hover:text-primary-light">
            HIV Fellowship
          </span>
        </Link>

        {/* Desktop/Menu Items */}
        <ul className="flex flex-col items-center space-y-1 gap-3 md:flex-row md:space-y-0 px-4 text-base">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-sm transition-colors hover:bg-primary-dark/20 px-2 py-1 rounded",
                    isActive
                      ? "text-accent font-medium border-b-2 border-accent"
                      : "hover:text-primary-light"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
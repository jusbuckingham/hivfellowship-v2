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
    <nav className="bg-primary-dark text-neutral-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Explicit 32×32px dimensions via width/height */}
          <Image
            src="/images/home/hiv-logo.jpg"
            alt="HIV Fellowship Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          {/* If you'd like text next to the logo, uncomment below */}
          {/* <span className="text-2xl font-semibold hover:text-primary-light">
            HIV Fellowship
          </span> */}
        </Link>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex space-x-6">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "transition-colors",
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
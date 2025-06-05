"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuItem } from "../../types/MenuItem";
import clsx from "clsx";

interface NavbarProps {
  menu: MenuItem[];
}

export default function Navbar({ menu }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-primary-dark text-neutral-white">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-semibold hover:text-primary-light"
        >
          HIV Fellowship
        </Link>
        <ul className="flex space-x-6">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-neutral-white hover:text-primary-light transition-colors duration-200",
                    isActive && "border-b-2 border-accent font-medium"
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
// app/components/Footer.tsx
"use client";

import Link from "next/link";
import type { FooterData } from "../../types/FooterData";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-secondary text-neutral-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Address & Contact */}
        <div className="space-y-1">
          {data.addressLines.map((line, idx) => (
            <p key={idx} className="text-base">
              {line}
            </p>
          ))}
          <p className="mt-2 text-base">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href={`tel:${data.contact.phone}`}
              className="text-accent hover:underline"
            >
              {data.contact.phone}
            </a>
          </p>
          <p className="text-base">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${data.contact.email}`}
              className="text-accent hover:underline"
            >
              {data.contact.email}
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <ul className="flex space-x-4">
            {data.social.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white hover:text-accent transition-colors"
                >
                  {s.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy" className="text-neutral-white hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-neutral-white hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-gray text-center py-4 text-sm text-neutral-grayDark">
        © {new Date().getFullYear()} HIV Fellowship. All rights reserved.
      </div>
    </footer>
  );
}
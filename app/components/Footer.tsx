// app/components/Footer.tsx
"use client";

import Link from "next/link";
import type { FooterData } from "../../types/FooterData";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-secondary-dark text-neutral-white">
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Address & Contact */}
        <div>
          {data.addressLines.map((line, idx) => (
            <p key={idx} className="text-base">
              {line}
            </p>
          ))}
          <p className="mt-2 text-base">
            Phone:{" "}
            <a
              href={`tel:${data.contact.phone}`}
              className="text-accent hover:underline"
            >
              {data.contact.phone}
            </a>
          </p>
          <p className="text-base">
            Email:{" "}
            <a
              href={`mailto:${data.contact.email}`}
              className="text-accent hover:underline"
            >
              {data.contact.email}
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-6">
            {data.social.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  {s.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links (Privacy, Terms). Adjust or remove these as needed. */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy"
                className="hover:text-primary-light transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-primary-light transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="text-center text-small py-4 bg-secondary text-neutral-white">
        © {new Date().getFullYear()} HIV Fellowship. All rights reserved.
      </div>
    </footer>
  );
}
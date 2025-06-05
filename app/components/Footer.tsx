// app/components/Footer.tsx
import footerData from "../../data/footer.json";

export default function Footer() {
  return (
    <footer className="footer-bg text-neutral-white">
      <div className="container grid gap-8 border-b border-neutral-gray p-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1: Address */}
        <div>
          {footerData.addressLines.map((line, idx) => (
            <p key={idx} className="mb-1 text-base">
              {line}
            </p>
          ))}
          <p className="mt-2 text-base">
            Phone:{" "}
            <a
              href={`tel:${footerData.contact.phone}`}
              className="text-accent hover:underline"
            >
              {footerData.contact.phone}
            </a>
          </p>
          <p className="text-base">
            Email:{" "}
            <a
              href={`mailto:${footerData.contact.email}`}
              className="text-accent hover:underline"
            >
              {footerData.contact.email}
            </a>
          </p>
        </div>

        {/* Column 2: Social */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-6">
            {footerData.social.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary-light transition-colors"
                >
                  {s.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: (Optional) Additional Links or Copyright */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy"
                className="hover:text-primary-light transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-primary-light transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm py-6">
        © {new Date().getFullYear()} Houston Methodist HIV Fellowship. All
        rights reserved.
      </div>
    </footer>
  );
}
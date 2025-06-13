// app/layout.tsx
import "../styles/globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import JSON for Navbar and Footer
import menuData from "../data/menu.json";
import footerData from "../data/footer.json";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>HIV Clinical Leadership Fellowship</title>
        <meta name="description" content="An academic and clinical HIV fellowship program for future leaders in care and research." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link
          rel="icon"
          href="/images/menu/hiv-logo.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-neutral-grayLight">
        <header>
          <Navbar menu={menuData} />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer>
          <Footer data={footerData} />
        </footer>
      </body>
    </html>
  );
}
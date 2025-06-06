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
        {/* Favicon */}
        <link
          rel="icon"
          href="/images/home/hiv-logo.jpg"
          type="image/jpeg"
        />
        {/* Alternatively, if you convert your logo to a .png or .ico, you can adjust the type accordingly */}
      </head>
      <body className="flex flex-col min-h-screen bg-neutral-grayLight">
        <Navbar menu={menuData} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
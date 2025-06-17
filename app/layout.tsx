// app/layout.tsx
import "../styles/globals.css";
import type { ReactNode } from "react";
export const metadata = {
  title: "HIV Clinical Leadership Fellowship",
  description: "An academic and clinical HIV fellowship program for future leaders in care and research.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/menu/hiv-logo.jpg",
  },
};
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
      <body className="flex flex-col min-h-screen bg-neutral-grayLight">
        <header>
          <Navbar menu={menuData} />
        </header>
        <main className="flex-grow px-4 md:px-12 lg:px-24 py-8">
          {children}
        </main>
        <footer className="mt-8 border-t border-neutral-300 pt-6">
          <Footer data={footerData} />
        </footer>
      </body>
    </html>
  );
}
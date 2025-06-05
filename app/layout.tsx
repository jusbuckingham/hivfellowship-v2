// app/layout.tsx
import "../styles/globals.css"
import type { ReactNode } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Because this is a Server Component, you can import JSON at build time:
import menuData from "../data/menu.json"
import footerData from "../data/footer.json"

type Props = { children: ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        {/* Add any <meta>, <link> tags, etc. */}
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Pass menuData into Navbar as a prop */}
        <Navbar menu={menuData} />
        <main className="flex-grow">{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  )
}
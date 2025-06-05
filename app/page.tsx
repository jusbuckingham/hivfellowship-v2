// app/page.tsx
import Hero from "./components/Hero"
import About from "./components/About"
import Partners from "./components/Partners"
import Resources from "./components/Resources"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <Resources />
    </div>
  )
}
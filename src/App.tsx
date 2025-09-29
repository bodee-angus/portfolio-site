import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { About } from "./components/About"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  )
}

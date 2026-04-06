import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  )
}

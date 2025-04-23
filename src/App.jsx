import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './Component/About';




function App() {
  return (
    <ParallaxProvider>
      <Hero />
      <Navbar />
      <About />
    </ParallaxProvider>

  )
}

export default App

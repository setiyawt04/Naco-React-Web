import Hero from './content/Hero'
import Navbar from './content/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './content/About';
import Footer from './content/Footer';



function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </ParallaxProvider>

  )
}

export default App

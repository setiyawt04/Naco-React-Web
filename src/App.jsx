import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './Component/About';
import Footer from './Component/Footer';



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

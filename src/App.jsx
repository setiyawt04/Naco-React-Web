import Hero from './content/Hero'
import Navbar from './content/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './content/About';
import Footer from './content/Footer';
import Products from './content/Products';
import Faq from './content/Faq';


function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Faq />
      <Footer />
    </ParallaxProvider>

  )
}

export default App

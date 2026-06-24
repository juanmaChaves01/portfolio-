import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contacto from "./Components/Contacto";
import About from "./Components/About";
import fondo from "./assets/opcion10.webp";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${fondo})` }}
      >
      <Navbar />
      <Hero />
      <About />
      <Contacto />
      <Footer />
      </div>
    </>
  );
}

export default App;
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Trustless from "./components/Trustless";
import About from "./components/About"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Platform />
      <Trustless/>
      <Footer/>
    </>
  );
}
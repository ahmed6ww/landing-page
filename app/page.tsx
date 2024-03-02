import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Trustless from "./components/Trustless";
import Roadmap from "./components/Roadmap";
import Faqs from "./components/Faqs";
import About from "./components/About";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Platform />
      <Trustless />
      <Roadmap />
      <Faqs />
    </>
  );
}
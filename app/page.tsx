
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Form from "./components/Form";
import Security from "./components/Security";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Platform />
      <Team />
      <Security />
      <Roadmap />
      <Partners />
      <Faqs />
      <Form />
      <Footer />
   
    </>
  );
}

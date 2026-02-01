import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Study } from "./components/Study";
import { LetsWorkTogether } from "./components/LetsWorkTogether";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Study />
      <LetsWorkTogether />
      <Footer />
    </>
  );
}

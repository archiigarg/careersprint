import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <Header />
      <section id="about-us">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <Footer />
    </div>
  );
}

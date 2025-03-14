import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Features />
      <Footer />
    </div>
  );
}

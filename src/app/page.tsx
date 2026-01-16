import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="scroll-smooth">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt">
          <About />
        </section>

        <section id="program" className="scroll-mt py-24 bg-gray-50">
          <Program />
        </section>

        <section id="activities" className="scroll-mt py-24">
          <Activities />
        </section>

        <section id="contact" className="scroll-mt py-24 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

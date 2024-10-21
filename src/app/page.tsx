import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs/Blogs";
import Production from "./components/Production/Production";
import Benifits from "./components/Benifits/Benifits";
import FooterContainer from "./components/Footer/FooterContainer";

export default function Home() {
  return (
    <main className="">
      <section className="hero flex flex-col h-screen">
        <Navbar />
        <Hero />
      </section>

      <section
        id="about"
        className="about-us min-h-screen max-w-[1280px] m-auto"
      >
        <About />
      </section>

      <section
        id="production"
        className="production min-h-screen max-w-[1280px] m-auto"
      >
        <Production />
      </section>

      <section id="blogs" className="blogs min-h-screen max-w-[1280px] m-auto">
        <Blogs />
      </section>

      <section
        id="benifits"
        className="benifits min-h-screen max-w-[1280px] m-auto"
      >
        <Benifits />
      </section>

      <section id="footer" className="footer">
        <FooterContainer />
      </section>
    </main>
  );
}

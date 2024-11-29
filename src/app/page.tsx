import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs/Blogs";
import Production from "./components/Production/Production";
import Benifits from "./components/Benefits/Benefits";
import Figures from "./components/Number/Figures";

import { Poppins } from 'next/font/google';
import Clients from "./components/Footer/Clients";

const poppins = Poppins({
  weight: ['400', '600', '700'], 
  subsets: ['latin'],           
  display: 'swap',              
})

export default function Home() {
  return (
    <main className={poppins.className}>
      <section className="hero flex flex-col sm:min-h-screen">
        <Navbar />
        <Hero />
        <Figures />
      </section>

      <section
        id="about"
        className="about-us min-h-screen "
      >
        <About />
      </section>

      <section
        id="production"
        className="production min-h-screen bg-[#1B4449]"
      >
        <Production />
      </section>

      <section id="blogs" className="blogs min-h-screen">
        <Blogs />
      </section>

      <section
        id="benefits"
        className="benefits min-h-screen "
      >
        <Benifits />
      </section>

      <section id="footer" className="footer">
              <Clients /> 
      <div className="h-[2px] w-[50%] bg-gray-500/20 m-auto" ></div>
        {/* <FooterContainer /> */}
      </section>
    </main>
  );
}

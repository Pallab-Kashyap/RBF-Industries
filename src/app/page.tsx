import "@/app/Home.module.css"
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs/Blogs";
import Production from "./components/Production";

export default function Home() {
  return (
    <main className="">

      <section className="hero flex flex-col h-screen">
        <Navbar />
        <Hero />
      </section>

      <section id="about" className="about-us min-h-screen">
        <About />
      </section>

      {/* <section className="benefits">
        <div className="benefit-heading">
          <p>Benefits of Biomass Briquettes</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="icon icon-home"></i>
            <h3>360° asset management</h3>
            <p>Centralized management of physical assets and buildings.</p>
          </div>
          <div className="benefit-item">
            <i className="icon icon-iot"></i>
            <h3>IoT - Internet of Things</h3>
            <p>Sensorization of assets, buildings and meters.</p>
          </div>
          <div className="benefit-item">
            <i className="icon icon-ai"></i>
            <h3>AI - Artificial Intelligence</h3>
            <p>Intelligent Assistant.</p>
          </div>
          <div className="benefit-item">
            <i className="icon icon-carbon"></i>
            <h3>Carbon Footprint</h3>
            <p>Calculating and Reducing the Carbon Footprint.</p>
          </div>
          <div className="benefit-item">
            <i className="icon icon-energy"></i>
            <h3>Energy and Water</h3>
            <p>Monitoring and Reducing Consumption.</p>
          </div>
          <div className="benefit-item">
            <i className="icon icon-analytics"></i>
            <h3>Analytics</h3>
            <p>With real-time, auditable data. Customizable reports.</p>
          </div>
        </div>
      </section> */}

      <section id="blogs" className="blogs min-h-screen ">
        <Blogs />
      </section>

      <section id="production" className="production min-h-screen">
        <Production />
      </section>

      
    </main>
  );
}

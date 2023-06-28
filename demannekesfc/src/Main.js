import "./Main.css";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Pricing from "./components/pricing/Pricing.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

export default function Main() {
  return (
    <div className="main">
      <div id="main">
        <Nav />
        <About />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

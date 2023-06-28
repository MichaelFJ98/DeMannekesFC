import "./Main.css";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer";

export default function Main() {
  return (
    <div className="main">
      <div id="main">
        <Nav />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

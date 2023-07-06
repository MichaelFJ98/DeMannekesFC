import "./Main.css";
import Nav from './components/nav/Nav.js';
import About from './components/about/About.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact.js';
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs.js"

export default function Main() {
  return(
  <div className="main" id="main">
    <Nav/>
    <About/>
    <AboutUs/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
  </div>
  );
}

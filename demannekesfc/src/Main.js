import "./Main.css";
import Nav from './components/nav/Nav.js';
import About from './components/about/About.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Services from "./components/services/Services";
import Contact from './components/contact/Contact.js';
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs.js"

export default function Main() {
  return(
  <div className="main">
    <Nav/>
    <About/>
    <AboutUs/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>
  </div>
  );
}
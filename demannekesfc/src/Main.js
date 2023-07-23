import "./Main.css";
import Nav from './components/nav/Nav.js';
import Home from './components/home/Home.js';
import About from "./components/about/About.js"
import Projects from './components/projects/Projects.js';
import Services from "./components/services/Services.js";
import Contact from './components/contact/Contact.js';
import Footer from "./components/footer/Footer.js";


export default function Main() {
  return(
  <div className="main" id="main">
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Services/>
    <Contact/>
    <Footer/>
  </div>
  );
}

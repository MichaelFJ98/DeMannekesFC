import "./Main.css";
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import About from "./components/About/About.js"
import Projects from './components/Projects/Projects.js';
import Skills from "./components/Skills/Skills";
import Contact from './components/Contact/Contact.js';
import Footer from "./components/Footer/Footer";


export default function Main() {
  return(
  <div className="main" id="main">
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </div>
  );
}

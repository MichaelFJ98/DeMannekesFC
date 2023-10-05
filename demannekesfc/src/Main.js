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
  <div className="main bg-gray-800" id="main">
    <Nav/>
    <Home/>
    {/* <Projects/> */}
    <Services/>
    {/* <About/>
    <Contact/>
    <Footer/> */}
  </div>
  );
}

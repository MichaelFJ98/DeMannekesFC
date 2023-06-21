import "./Main.css";
import Nav from './components/nav/Nav.js';
import About from './components/about/About.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Contact from './components/contact/Contact.js';

export default function Main() {
  return(
  <div className="main">
    <Nav/>
    <About/>
    <Portfolio/>
    <Contact/>
  </div>
  );
}
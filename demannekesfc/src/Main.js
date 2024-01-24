import "./Main.css";
import Nav from './components/nav/Nav.js';
import Home from './components/home/Home.js';
import Footer from "./components/footer/Footer.js";
import SellingPoints from "./components/selling_points/SellingPoints.js";
import Tier1 from "./components/tiers/Tier1.js";
import Tier2 from "./components/tiers/Tier2.js"
import Tier3 from "./components/tiers/Tier3.js";


export default function Main() {
  return(
  <div className="main" id="main">
    <Nav/>
    <Home/>
    <SellingPoints/>
    <Tier1/>
    <Tier2/>
    <Tier3/>
    <Footer/>
  </div>
  );
}

import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div id="titles">
        <p>Dreams To Reality</p>
        <h1>Hi, We are Bryan And Michael</h1>
        <h1>Full Stack Developers</h1>
        <h1>Based in Belgium.</h1>
      </div>
      <div id="pictures">
        <div id="bryan-wrapper">
          <img src="/assets/images/Bryan.png" alt="Bryan" width="250px"></img>
        </div>
        <div id="michael-wrapper">
          <img
            src="/assets/images/Michel.png"
            alt="Michael"
            width="250px"
          ></img>
        </div>
      </div>
      <div id="buttons">
        <button>Hire us</button>
        <button>Learn more</button>
      </div>
    </div>
  );
}

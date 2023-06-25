import "./Contact.css";

export default function Contact() {

  const handleEmailClick = () => {
    const emailAddress = "info@mannekes.be";
    navigator.clipboard.writeText(emailAddress);
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/bryan_langhendries");
  };

  return (
    <div id="contact">
      <div id="text">
        <h2>Let's build</h2>
        <h2>something</h2>
        <h1>great together.</h1>
      </div>
      <div id="form">
        <input id="name" type="text" placeholder="Name"></input>
        <input id="email" type="email" placeholder="Email"></input>
        <input id="company-name" type="text" placeholder="Company Name"></input>
        <input id="phone" type="tel" placeholder="Phone Number"></input>
        <button>SEND IN</button>
      </div>

      <div id="info">
        <small>EMAIL</small>
        <p onClick={handleEmailClick}>Info@mannekes.be</p>
        <small>INSTAGRAM</small>
        <p onClick={handleInstagramClick}>@Mannekes</p>
      </div>
      <div id="logo">
        <img src="/assets/images/Logo.png"></img>
      </div>
    </div>
  );
}

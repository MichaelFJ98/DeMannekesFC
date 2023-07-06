import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className="flex flex-row justify-between items-center bg-blue-950 text-white px-4"
    >
      <div>
        <h1 className="font-bold text-lg">DuoDev</h1>
        <p className="font-thin text-xs">
          © {currentYear} Mannekes. All rights reserved.
        </p>
      </div>
      <div className="">
        <h1 className="font-bold text-lg">Contact</h1>
        <p className="font-thin text-xs ">Zaventemsestraat 23</p>
        <p className="font-thin text-xs ">Vlaams-Brabant, 1930 Zaventem</p>
        <p className="font-thin text-xs ">+32472839432</p>
        <p className="font-thin text-xs ">DuoDev@gmail.com</p>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-2">Follow Us On Social Media</h1>
        <div className="flex justify-between text-4xl">
          <FaLinkedin className="hover:text-blue-300 cursor-pointer" onClick={() => window.open("https://www.linkedin.com", "_blank")} />
          <FaFacebookF className="hover:text-blue-300 cursor-pointer" onClick={() => window.open("https://www.facebook.com", "_blank")} />
          <FaInstagram className="hover:text-blue-300 cursor-pointer" onClick={() => window.open("https://www.instagram.com", "_blank")} />
        </div>
      </div>
    </div>
  );
}

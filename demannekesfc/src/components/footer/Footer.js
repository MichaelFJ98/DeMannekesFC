import React from "react";
import "./Footer.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="flex flex-row justify-around bg-blue-950 text-blue-50 p-4">
      <div>
        <h1 className="font-bold text-lg">DuoDev</h1>
        <p className="font-thin text-xs ">© {currentYear} Mannekes. All rights reserved.</p>
      </div>
      
      <div className="">
        <h1 className="font-bold text-lg">Contact</h1>
        <p className="font-thin text-xs " >Zaventemsestraat 23</p>
        <p className="font-thin text-xs " >Vlaams-Brabant, 1930 Zaventem</p>
        <p className="font-thin text-xs " >+32472839432</p>
        <p className="font-thin text-xs " >DuoDev@gmail.com</p>
      </div>

      <div className="">
        <h1 className="font-bold text-lg">DuoDev</h1>
        <ol>
          <li><a href="#" className="hover:text-blue-300 font-thin text-xs">Home</a></li>
          <li><a href="#" className="hover:text-blue-300 font-thin text-xs">About</a></li>
          <li><a href="#" className="hover:text-blue-300 font-thin text-xs">Projects</a></li>
          <li><a href="#" className="hover:text-blue-300 font-thin text-xs">Skillset</a></li>
          <li><a href="#" className="hover:text-blue-300 font-thin text-xs">Contact</a></li>
        </ol>
      </div>

      <div>
        <h1 className="font-bold text-lg">Follow Us On Social Media</h1>
        <div className="LinktreeFooter py-8 flex flex-row space-x-4">

          <a className="text-blue-50 hover:text-blue-300" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
                        <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                        </svg>
                    </a>

          <a className="text-blue-50 hover:text-blue-300" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
              <path fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
              </path>
              </svg>
          </a>

          <a className="text-blue-50 hover:text-blue-300" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
              <path fill="currentColor"
                  d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
              </path>
              </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

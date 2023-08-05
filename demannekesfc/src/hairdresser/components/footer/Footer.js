import React from "react";

function Footer() {
  return (
    <footer className="bg-temp-background text-temp-text">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-sm">
            © 2023 Hairdresser Website. All rights reserved. Created by{" "}
            <a
              href="https://insiter.be"
              className="text-temp-primary underline"
            >
              Insiter
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

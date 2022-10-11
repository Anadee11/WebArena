import React from "react";

const Header = () => {
  return (
    <nav className="md:flex md:flex-row sm:flex sm:flex-col">
      <a href="/" className="hidden md:block md:w-24 md:h-16">
        <img src="./images/logo1.png" alt="Ct"></img>
      </a>
      <ul className="flex flex-row flex-auto justify-center items-center md:justify-end md:space-x-10 md:text-xl  sm:space-x-6 font-thin">
        <li>
          <a
            href="#projects"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="./chetan_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

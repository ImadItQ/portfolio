import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="text-indigo-400 ml-3 text-xl">
            Mohammed Imaduddin
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-green-300 hover:text-white">
            My work
          </a>
          <a href="#skills" className="mr-5 text-green-300 hover:text-white">
            Skills
          </a>
        </nav>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/mohammed-imaduddin-itquan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/ImadItQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-gray-300">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/kira_incarnate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-green-300 hover:text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">
            Let's get in touch
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}

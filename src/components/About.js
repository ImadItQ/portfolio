import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Imad.
            <br className="hidden lg:inline-block" />I'm a software developer, I love writing code and building stuff.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm graduated my with a Bachelor's degree in Computer Science and Engineering in 2019. I have 3+ years of Experience under my belt.
            I love learning and discovering new tech and ideas and make those ideas come to life by coding them.  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Lets get in touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:text-white rounded text-lg">
              My work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-full object-cover object-center h-80 w-80"
            alt="hero"
            src="./self.svg"
          />
        </div>
      </div>
    </section>
  );
}
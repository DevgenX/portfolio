import Image from "next/image";
import AboutImage from "@/public/about.png";
import { frontend, backend, development } from "@/utils/languages";

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center mb-6 font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded md:hidden" />
        </h1>
        <p className="text-xl leading-7 mb-4 text-black dark:text-white">
          My name is{" "}
          <span className="font-semibold justify-center text-teal-400">
            Seb Gonzales
          </span>
          . I graduated from Flatiron School of Software Engineering and have
          been working on web2 and web3 related projects as a freelancer. I love
          writing blogs about what I learned, mainly in Coding and DevOps. I am
          passionate in Web and Blockchain development. Aside from coding, I do
          daytrading with the goal of turning into a quantitative trader.
          <br />
        </p>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Frontend
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {frontend.map((items, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:scale-125"
                  >
                    {items.skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Backend
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start ">
              {backend.map((items, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200  px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:scale-125"
                  >
                    {items.skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Development</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {development.map((items, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:scale-125"
                  >
                    {items.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

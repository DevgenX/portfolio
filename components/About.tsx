import { frontend, backend, development } from "@/utils/languages";

const About = () => {
  return (
    <section id="about">
      <div className="my-5 pb-12 md:pt-10 md:pb-48">
        <h1 className="text-center mb-6 font-bold text-4xl">
          About Me
          <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded " />
        </h1>
        <p className="text-xl leading-7 text-center mb-4 text-black dark:text-white">
          My name is{" "}
          <span className="font-semibold justify-center text-teal-400">
            Seb Gonzales
          </span>
          {""}, {""}I have a diverse range of experiences in the tech industry.
          Over the years, I&apos;ve had the privilege of contributing to several
          innovative startups, including:
          <ul className="list-disc list-inside">
            <br />
            <li>
              An AI-powered travel mobile application, where I played a pivotal
              role in building the user-interface.
            </li>
            <br />
            <li>
              An AI-driven social media application that leverages cutting-edge
              technology to enhance user experience.
            </li>
            <br />
            <li>
              A Web3 AI NFT startup, where I delved into the fascinating
              intersection of blockchain, artificial intelligence, and
              generative art.
            </li>
            <br />
            <li>
              A Web3 gaming startup, where I built a blockchain-integrated
              marketplace allowing users to buy/sell in-game items.
            </li>
            <br />
            <span>
              Currently, I&apos;m channeling my expertise as a React Native
              developer for an AI-integrated social media startup. In addition,
              I&apos;m passionately volunteering as a full-stack engineer for a
              non-profit organization, where I&apos;m dedicated to making a
              positive impact through technology.
            </span>
          </ul>
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

"use client";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/variants";

const Banner = () => {
  return (
    <div
      className="home min-h-screen lg:min-h-screen flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] text-white font-bold leading-[0.8] lg:text-[80px]"
            >
              SEB
              <br />
              <span>GONZALES</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary 
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am</span>
              <TypeAnimation
                sequence={[
                  "a Software Engineer and an avid Gamer",
                  2000,
                  "a daytrader and market nerd",
                  2000,
                  "a sunset and food enthusiast",
                  2000,
                ]}
                speed={50}
                className="text-white"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] text-white gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <Link href="https://github.com/DevgenX">
                <FaGithub size={25} />
              </Link>
              <Link href="https://www.linkedin.com/in/sebgonzales/">
                <FaLinkedin size={25} />
              </Link>
              <Link href="https://medium.com/@seb_5882">
                <FaMedium size={25} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/variants";
import Link from "next/link";

import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
} from "react-icons/ai";

const Contact = () => {
  return (
    <footer className="py-16 lg:section" id="contact">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-600 border-0" />
      <div className="container mx-auto">
        <div className="flex flex-col mt-12 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <h2 className="text-[30px] lg:text-[60px] leading-none mb-12">
              Let&apos;s work <br /> together!
            </h2>
            <div className="flex flex-row items-center justify-center space-x-2 mx-auto">
              <Link
                href="https://github.com/DevgenX"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sebgonzales/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </Link>
              <Link
                href="https://medium.com/@seb_5882"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineMedium
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </Link>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border text-black dark:text-white rounded-2xl flex flex-col gap-y-6 pb-15 p-6 items-start "
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg text-white dark:text-black dark:bg-white bg-black ">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

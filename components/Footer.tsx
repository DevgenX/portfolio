import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/variants";
import Link from "next/link";
import { useForm } from "@formspree/react";
import ValidationError from "@/helpers/ValidationError";

import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
} from "react-icons/ai";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkjjevp");

  if (state.succeeded) {
    alert("Thanks for contacting me! I'll be in touch shortly.");
    window.location.reload();
  }

  return (
    <footer className="py-20 lg:section" id="contact">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-600 dark:bg-teal-500 border-0" />
      <div className="px-10 container mx-auto">
        <div className="flex flex-col mt-12 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 block md:flex justify-start items-center text-center sm:block"
          >
            <h2 className="text-[30px] lg:text-[60px] leading-none mb-12">
              Let&apos;s work <br /> together!
            </h2>
            <div className="flex flex-row items-center justify-center space-x-2 mx-auto mb-6">
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
            onSubmit={handleSubmit}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-solid border-black dark:border-white text-black dark:text-white rounded-2xl flex flex-col gap-y-6 pb-15 p-6 items-start "
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black dark:placeholder:text-white text-black dark:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="btn btn-lg text-white dark:text-black dark:bg-white bg-black">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

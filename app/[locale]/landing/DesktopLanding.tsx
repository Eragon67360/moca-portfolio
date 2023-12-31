"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";

function DesktopLanding() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: 1, opacity: 1 });
  }, [controls]);

  return (
    <>
      <section className="h-screen w-full overflow-x-hidden flex select-none">
        <div className="w-full h-full bg-light_surface dark:bg-dark_background flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="text-5xl font-bold p-2 opacity-0 text-center"
          >
            Design, Develop, Deliver
          </motion.h1>

          {/* Image animation */}
          <motion.div
            initial={{ scale: 4, opacity: 0 }}
            animate={controls}
            transition={{ type: "linear", duration: 1.8 }}
          >
            <Image src={logo} alt="logo" width={114} className="mt-2" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-2xl font-extrabold mt-4 text-center"
          >
            Your Digital Journey Starts Here.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
            className="mb-6 font-light text-xl w-full px-16 text-center mt-3"
          >
            <Typewriter
              options={{
                autoStart: true,
                skipAddStyles: true,
                loop: false,
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2900)
                  .typeString(
                    `Expert web design meets innovative development, tailored to showcase your brand's essence.`
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1.2 }}
            className="flex mt-11"
          >
            <Link
              href="/home"
              className="bg-light_primary hover:bg-light_primary/60 items-center justify-center px-5 py-3 mr-3 text-base text-center text-dark_ink rounded-full uppercase font-bold"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default DesktopLanding;

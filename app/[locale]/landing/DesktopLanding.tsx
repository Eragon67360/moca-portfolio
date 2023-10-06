import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

function DesktopLanding() {
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden bg-landing-page bg-no-repeat bg-cover bg-center bg-fixed flex select-none">
        <div className="w-full h-full bg-blackbean/80 flex flex-col">
          <Image
            src={logo}
            alt="logo"
            width={42}
            className="absolute top-0 left-0 mt-4 ml-4"
          />
          <div className="flex flex-col justify-center items-center h-full w-screen text-secondary">
            <div className="bg-transparent border border-secondary/30 hover:border-secondary/50 rounded-full px-2">
              <Link href={"/about"}>
                <span className="text-secondary/70">Announcing our new team.</span> <span className="font-bold">Read more →</span>
              </Link>
            </div>

            <h1 className="box" id="box1">
              Design, Develop, Deliver
            </h1>
            <h2 className="text-2xl font-extrabold dark:text-white">
              Your Digital Journey Starts Here.
            </h2>
            <p className="mb-6 font-light text-xl w-1/3 text-center mt-4">
              Expert web design meets innovative development, tailored to
              showcase your brand&apos;s essence.
            </p>

            <div className="flex space-x-4">
              {" "}
              <Link
                href="/home"
                className="bg-cinnabar hover:bg-cinnabar/60 items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg"
              >
                Get started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base text-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesktopLanding;

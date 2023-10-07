import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

function MobileLanding() {
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden bg-landing-page-mobile bg-no-repeat bg-cover bg-center bg-fixed flex select-none">
        <div className="w-full h-full bg-blackbean/70 flex flex-col items-center">
          <Image src={logo} alt="logo" width={42} className="mt-8" />

          <div className="flex flex-col justify-center items-center h-full w-screen space-y-8 px-4 text-secondary">
            <div className="bg-transparent border border-secondary/30 hover:border-secondary/50 rounded-full text-center px-8">
              <Link href={"/about"}>
                <span className="text-secondary/70">
                  Announcing our new team.
                </span>
                <br /> <span className="font-bold">Read more →</span>
              </Link>
            </div>

            <h1 className="text-3xl font-extrabold text-center">
              Design, Develop, Deliver
            </h1>
            <h2 className="text-lg font-extrabold dark:text-white">
              Your Digital Journey Starts Here.
            </h2>
            <p className="mb-6 font-light text-xl text-center mt-4">
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

export default MobileLanding;

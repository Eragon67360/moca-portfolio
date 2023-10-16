import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo_only.svg";

function DesktopLanding() {
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden flex select-none">
        <div className="w-full h-full bg-linen dark:bg-blackbean flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold p-2">Design, Develop, Deliver</h1>
          <Image src={logo} alt="logo" width={114} className="mt-2"/>
          <h2 className="text-2xl font-extrabold mt-4">
            Your Digital Journey Starts Here.
          </h2>
          <p className="mb-6 font-light text-xl w-1/3 text-center mt-3">
            Expert web design meets innovative development, tailored to showcase
            your brand&apos;s essence.
          </p>

          <div className="flex mt-11">
            {" "}
            <Link
              href="/home"
              className="bg-cinnabar hover:bg-cinnabar/60 items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-full uppercase font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesktopLanding;

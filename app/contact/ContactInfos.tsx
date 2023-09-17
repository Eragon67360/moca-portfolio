import React from "react";
import Image from "next/image";
import Iframe from "react-iframe";

export const ContactInfos = () => {
  return (
    <div className="w-full h-full flex justify-evenly">
      <div className="bg-secondary rounded-lg shadow-lg w-full max-w-2xl p-8">
        <div className="my-auto">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701515.4174856935!2d6.9703307163946135!3d48.60604068535181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e76107e938485%3A0xe34161a3edad166c!2sCurefab%20Technologies%20GmbH!5e0!3m2!1sfr!2sfr!4v1693733577658!5m2!1sfr!2sfr"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[1000px]">
        <div className="flex flex-col space-y-4 m-12 ">
          <p className="p-1 bg-primary text-secondary rounded-lg w-24 text-center">
            Find us
          </p>
          <p className="text-third font-bold text-4xl">Here we are, for you</p>
          <p className="text-third text-lg">
            <ul>
              <li className="ml-2">
                • //
              </li>
              <li className="ml-2">
                • //
              </li>
              <li className="ml-2">• //</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

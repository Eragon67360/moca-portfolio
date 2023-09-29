import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contacts = () => {
  return (
    <>
      <div className="flex flex-col justify-start space-y-4 text-black">
        <div className="pt-4 pl-4 flex justify-start text-xl  ">
          Contact us!
        </div>

        <div className="flex flex-col py-4 text-base space-y-4 ">
          <div className="flex space-x-4 pl-4 ">
            <div className="flex items-center">
              <FiMail style={{ fontSize: 30 }} />
            </div>
            <div className="flex items-center align-middle justify-center">
              <a
                href="mailto:uxmoca@gmail.com"
                className="align-middle justify-center"
              >
                uxmoca@gmail.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <FiPhone style={{ fontSize: 30 }} />
            </div>
            <div className="flex items-center align-middle justify-center">
              <a href="tel:+33647849308">+33 6 47 84 93 08</a>
            </div>
          </div>
          <div className="flex space-x-4 pl-4">
            <div className="flex items-center">
              <IoLocationOutline style={{ fontSize: 30 }} />
            </div>
            <div className="flex items-center align-middle justify-center">
              <a
                href="https://maps.app.goo.gl/66wU2miXSrtcs5mr7"
                target="_blank"
              >
                Strasbourg, France
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

import React from "react";
import ContactForm from "./ContactForm";
import { ContactInfos } from "./ContactInfos";

function Contact(): React.JSX.Element {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full bg-grey p-8">
        <ContactForm />
      </div>

      <div className="w-full my-12 p-8 h-screen">
        <ContactInfos />
      </div>
    </div>
  );
}

export default Contact;

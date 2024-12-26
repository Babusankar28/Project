import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactDetails from "../components/Contact/ContactDetails";

function Contact() {
  return (
    <div className="container py-5 px-20 my-20">
      <h2 className="uppercase font-bold text-2xl">Get in touch</h2>
      <p className="text-base text-gray-600">
        Please enter the details of your requesst. A member of our support staff
        will respond as soon as possible.
      </p>
      <div className="lg:flex my-5 gap-10">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { ContactForm } from "~/components/ContactForm";
import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { NavBar } from "~/components/Navbar";
import { Subheading } from "~/components/Subheading";
import { Map } from "~/components/Map";

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className=" m-20 text-center">
        <Heading>Contact Us</Heading>
        <Subheading>
          If you have any questions or would like to enquire about trying one of
          our classes, fill in the form below and we will get back to you as
          soon as possible.
        </Subheading>
      </div>
      <div className="m-20 flex">
        <div className=" mr-2 h-3/6 w-6/12" id="contact-form">
          <ContactForm />
        </div>
        <div className="ml-2 h-3/6 w-6/12 bg-slate-200">
          <Map />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;

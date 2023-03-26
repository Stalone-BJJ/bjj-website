import React from "react";
import { ContactForm } from "~/components/contact-form";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className=" ml-20 mr-20 mt-20 flex-col">
        <Heading headingText="Heading" />
        <Subheading subheadingText="This is a looooooong Subheading" />
      </div>
      <div className="ml-20 mr-20 mt-20 flex h-screen ">
        <div className=" mr-2 h-3/6 w-6/12" id="contact-form">
          <ContactForm />
        </div>
        <div className="ml-2 h-3/6 w-6/12 bg-slate-200">Map Section</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;

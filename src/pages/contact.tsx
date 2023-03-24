import React from "react";
import { NavBar } from "~/components/navbar";

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="ml-20 mr-20 mt-20 flex-col">
        <div className="flex-col bg-slate-500">
          <h1 className="text-3xl">GET IN TOUCH</h1>
          <h2 className="mt-10 text-2xl">IF YOU HAVE AN ENQUIRY LET US KNOW</h2>
        </div>
        <div className="mt-20 h-20 bg-slate-400"></div>
      </div>
    </React.Fragment>
  );
};

export default Contact;

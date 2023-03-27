import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { Subheading } from "~/components/subheading";

import { NavBar } from "~/components/navbar";

const Gallary = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Heading headingText="Gallery Heading" />
      <Subheading subheadingText="Gallery Subheading" />
      <Footer />
    </React.Fragment>
  );
};

export default Gallary;

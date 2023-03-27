import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Heading headingText="Gallery Heading" />
      <Subheading subheadingText="Gallery Subheading" />
      <Footer />
    </React.Fragment>
  );
};

export default About;

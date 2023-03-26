import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";

const News = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="ml-20 mr-20 mt-20 flex-col">
        <Heading headingText="News" />
        <Subheading subheadingText="Subheading of said news" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default News;

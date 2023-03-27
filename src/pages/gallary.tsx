import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { Subheading } from "~/components/subheading";
import Image from "next/image";
import { NavBar } from "~/components/navbar";
import { SectionHeading } from "~/components/sectionHeading";

const Gallary = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading headingText="Gallary" />
        <Subheading subheadingText="Why not check out some photos of us dismembering oponents" />
      </div>
      <div className="m-20 flex ">
        <div className=" mr-2 h-3/6 w-6/12 text-center">
          <SectionHeading sectionHeadingText="photos" />
          <div className="flex">
            <Image height="200" width="200" src="/bjj1.jpg" alt="alt tag" />
          </div>
        </div>
        <div className="ml-2 h-3/6 w-6/12 text-center">
          <SectionHeading sectionHeadingText="Look at this armbar" />
          <div className="flex">
            <Image height="200" width="200" src="/bjj2.jpg" alt="alt tag" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Gallary;

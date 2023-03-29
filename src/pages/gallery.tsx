import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { Subheading } from "~/components/subheading";
import Image from "next/image";
import { NavBar } from "~/components/navbar";
import { SectionHeading } from "~/components/sectionHeading";

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading headingText="Gallery" />
        <Subheading subheadingText="Why not check out some photos of us dismembering oponents" />
      </div>
      <div className="m-20 flex justify-center">
        <p className="">Insta Intergration?</p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;

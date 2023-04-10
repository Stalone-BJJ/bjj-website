import React from "react";
import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { Subheading } from "~/components/Subheading";
import { NavBar } from "~/components/Navbar";

const Gallery = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading>Gallery</Heading>
        <Subheading>
          Why not check out some photos of us dismembering oponents
        </Subheading>
      </div>
      <div className="m-20 flex justify-center">
        <p className="">Insta Intergration?</p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;

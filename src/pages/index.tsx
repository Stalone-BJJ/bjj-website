import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";
import Image from "next/image";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="relative h-[780px]">
        <Image
          alt="Hero"
          fill
          src="/images/hero-banner.jpg"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 mt-10 w-full text-center text-white">
          <Heading>STALONE BJJ ACADEMY</Heading>
          <Subheading>EST. 2017</Subheading>
        </div>
        <div className="absolute top-0 flex h-full w-full items-center justify-around text-white">
          <div>
            <h2 className="text-5xl font-bold">
              JIU-JITSU
              <br />
              <span className="italic">FOR EVERYONE.</span>
            </h2>
            <p className="text-xl">
              Getting started at Stalone BJJ Academy is easy.
              <br />
              Book your free trial class today.
            </p>
          </div>
          <div>Form within here</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

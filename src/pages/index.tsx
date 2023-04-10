import React from "react";
import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { NavBar } from "~/components/Navbar";
import { Subheading } from "~/components/Subheading";
import Image from "next/image";
import { ContactForm } from "~/components/ContactForm";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="relative h-full lg:h-[960px]">
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
        <div className="relative flex h-full w-full flex-col items-center justify-evenly text-white lg:top-0 lg:flex-row lg:justify-around">
          <div>
            <h2 className="mt-56 w-[448px] text-4xl font-bold lg:mt-0">
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
          <div className="my-12 w-[448px] rounded-lg bg-slate-300 p-4 lg:mt-24">
            <h3 className="text-bold text-center text-3xl font-bold text-black">
              BOOK YOUR FREE CLASS
            </h3>
            <p className="mb-4 text-center text-xl text-black">
              Please fill in your details below
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

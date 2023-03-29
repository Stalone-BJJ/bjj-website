import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { SectionHeading } from "~/components/sectionHeading";
import { Subheading } from "~/components/subheading";
import Image from "next/image";
import { ContentSection } from "~/components/contentSection";
import { Carousel } from "~/components/carousel";

const About = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading headingText="About Us" />
        <Subheading subheadingText="This section is about us." />
      </div>
      <div className="m-20 flex ">
        <ContentSection>
          <SectionHeading sectionHeadingText="Our Instructors" />
          <div className="flex">
            <Carousel></Carousel>
          </div>
        </ContentSection>
        <ContentSection>
          <SectionHeading sectionHeadingText="Look at this armbar" />
          <div className="flex">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </ContentSection>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
